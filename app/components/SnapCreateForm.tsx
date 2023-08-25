import type { FC } from "react";
import type { BoxProps } from "@mantine/core";

import { CreateSnapMutationDocument, type Maybe } from "~/helpers/graphql";
import type { ImageInput } from "~/helpers/graphql";
import ImageField from "./ImageField";

export type SnapCreateFormProps = Omit<BoxProps, "children"> & {
  readonly bookId: string;
  readonly onCreate: () => void;
};

type SnapCreateFormValues = {
  readonly photo: Maybe<ImageInput>;
};

export type SnapCreateFormSubmission = {
  readonly photo: ImageInput;
};

export const SnapCreateForm: FC<SnapCreateFormProps> = ({
  bookId,
  onCreate,
  ...otherProps
}) => {
  // == Form
  const { values, setErrors, getInputProps, onSubmit, isDirty } = useForm<
    SnapCreateFormValues,
    (values: SnapCreateFormValues) => SnapCreateFormSubmission
  >({
    initialValues: {
      photo: null,
    },
    transformValues: ({ photo, ...otherValues }) => {
      if (!photo) {
        throw new Error("Missing photo");
      }
      return { photo, ...otherValues };
    },
  });

  // == Mutation
  const onError = useApolloAlertCallback("Failed to create snap");
  const [runMutation, { loading }] = useMutation(CreateSnapMutationDocument, {
    onCompleted: ({ payload: { snap, errors } }) => {
      if (snap) {
        onCreate();
      } else {
        invariant(errors, "Missing input errors");
        const formErrors = parseFormErrors(errors);
        setErrors(formErrors);
        showFormErrorsAlert(formErrors, "Couldn't create snap");
      }
    },
    onError,
  });

  // == Markup
  return (
    <Box
      component="form"
      onSubmit={onSubmit(values => {
        runMutation({
          variables: {
            input: {
              bookId,
              ...values,
            },
          },
        });
      })}
      pos="relative"
      {...otherProps}
    >
      <Stack>
        <ImageField label="photo" {...getInputProps("photo")} />
        <Group position="right" spacing="xs">
          <Button
            type="submit"
            leftIcon={<AddIcon />}
            disabled={!isDirty() || !values.photo}
            {...{ loading }}
          >
            add
          </Button>
        </Group>
      </Stack>
      <LoadingOverlay visible={loading} />
    </Box>
  );
};

export default SnapCreateForm;
