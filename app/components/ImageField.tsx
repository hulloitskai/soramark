import type { FC } from "react";
import { Dropzone } from "@mantine/dropzone";
import PhotoIcon from "~icons/heroicons/photo-20-solid";

import { Image, Input, Text, getSize } from "@mantine/core";
import type { InputWrapperProps, MantineNumberSize } from "@mantine/core";

import { ImageFieldQueryDocument } from "~/helpers/graphql";
import type { ImageFieldQueryVariables } from "~/helpers/graphql";
import type { Maybe } from "~/helpers/graphql";

export type ImageInput = {
  readonly signedId: string;
};

import { uploadFile } from "~/helpers/activestorage";

const IMAGE_FIELD_IMAGE_SIZE: MantineNumberSize = 200;
const IMAGE_FIELD_RADIUS: MantineNumberSize = "md";

export type ImageFieldProps = Omit<
  InputWrapperProps,
  "inputContainer" | "inputWrapperOrder" | "size" | "children"
> & {
  readonly value?: Maybe<ImageInput>;
  readonly onChange?: (value: Maybe<ImageInput>) => void;
};

const ImageField: FC<ImageFieldProps> = ({
  value,
  onChange,
  variant,
  labelElement,
  label,
  labelProps,
  description,
  descriptionProps,
  error,
  errorProps,
  required,
  withAsterisk,
}) => {
  // == Value
  const previousValue = usePrevious(value);
  const valueChanged = useMemo(
    () => !isEqual(value, previousValue),
    [value, previousValue],
  );

  // == Uploading
  const [uploading, setUploading] = useState(false);

  // == Query
  const onError = useApolloAlertCallback("Failed to load image");
  const variables = useMemo<ImageFieldQueryVariables | undefined>(() => {
    if (value) {
      return value;
    }
  }, [value]);
  const skipQuery = !value;
  const { data, loading: queryLoading } = useQuery(ImageFieldQueryDocument, {
    variables,
    skip: skipQuery,
    onError,
  });

  // == Image
  const [src, setSrc] = useState("");
  useEffect(() => {
    if (value) {
      if (data) {
        const { image } = data ?? {};
        if (image) {
          setSrc(image.url);
        } else {
          console.error("Image not found", formatJSON({ signedId: value }));
          showAlert({
            title: "Image not found",
            message: "Unable to load image preview for image.",
          });
        }
      }
    } else {
      setSrc("");
    }
  }, [value, data]);

  // == Loading
  const loading = uploading || ((!src || valueChanged) && queryLoading);

  return (
    <Input.Wrapper
      {...{
        variant,
        labelElement,
        label,
        labelProps,
        description,
        descriptionProps,
        error,
        errorProps,
        required,
        withAsterisk,
      }}
    >
      <Stack align="center" spacing={8} py="sm">
        <Box pos="relative">
          <Image
            width={IMAGE_FIELD_IMAGE_SIZE}
            height={IMAGE_FIELD_IMAGE_SIZE}
            fit="contain"
            withPlaceholder
            placeholder={
              <Skeleton
                radius={IMAGE_FIELD_RADIUS}
                width="100%"
                height="100%"
              />
            }
            m={4}
            styles={({ radius }) => {
              const borderRadius = getSize({
                sizes: radius,
                size: IMAGE_FIELD_RADIUS,
              });
              return {
                root: {
                  overflow: "hidden",
                  borderRadius,
                },
                figure: {
                  transform: "scale(1.02)",
                },
                placeholder: {
                  borderRadius,
                  overflow: "hidden",
                },
              };
            }}
            {...{ src }}
          />
          <Dropzone
            accept={["image/png", "image/jpeg"]}
            onDrop={files => {
              const file = first(files);
              if (file) {
                setUploading(true);
                uploadFile(file)
                  .then(blob => {
                    if (onChange) {
                      const value: ImageInput = {
                        signedId: blob.signed_id,
                      };
                      onChange(value);
                    }
                  })
                  .catch(({ message }: Error) => {
                    showAlert({
                      title: "Failed to upload file",
                      message,
                    });
                  })
                  .finally(() => {
                    setUploading(false);
                  });
              }
            }}
            radius={IMAGE_FIELD_RADIUS}
            pos="absolute"
            inset={0}
            styles={({ radius, colors, transitionTimingFunction, fn }) => {
              const hoveredBackgroundColor = fn.rgba(colors.dark[5], 0.8);
              return {
                root: {
                  ".mantine-LoadingOverlay-root": {
                    borderRadius: getSize({
                      sizes: radius,
                      size: IMAGE_FIELD_RADIUS,
                    }),
                  },
                  ...(src && {
                    backgroundColor: "transparent",
                    "&[data-loading]": {
                      backgroundColor: "transparent !important",
                    },
                    "&:not([data-loading]):hover": {
                      backgroundColor: hoveredBackgroundColor,
                      ".mantine-Dropzone-inner": {
                        opacity: 1,
                      },
                    },
                  }),
                },
                inner: {
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: `opacity 150ms ${transitionTimingFunction}`,
                  ...(src && {
                    opacity: 0,
                  }),
                },
              };
            }}
            {...{ loading }}
          >
            <Stack align="center" spacing={8}>
              <Box
                component={PhotoIcon}
                sx={({ colors, primaryColor }) => ({
                  color: colors[primaryColor]![4],
                })}
              />
              <Text size="xs" align="center" lh={1.3} color="dark.1">
                drag an image or click to upload
              </Text>
            </Stack>
          </Dropzone>
        </Box>
        {src && (
          <Anchor
            component="button"
            size="xs"
            disabled={loading}
            onClick={() => {
              if (onChange) {
                onChange(null);
              }
            }}
          >
            clear image
          </Anchor>
        )}
      </Stack>
    </Input.Wrapper>
  );
};

export default ImageField;
