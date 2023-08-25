import type { FC } from "react";
import type { BoxProps } from "@mantine/core";
import type { FormErrors } from "@mantine/form";

import { BookFormQueryDocument } from "~/helpers/graphql";
import type { BookFormQueryVariables } from "~/helpers/graphql";

export type BookFormProps = Omit<BoxProps, "children"> & {
  readonly bookId?: string;
  readonly onSubmit: (submission: BookFormSubmission) => void;
  readonly submitting: boolean;
  readonly errors: FormErrors;
};

type BookFormValues = {
  readonly title: string;
  readonly authorName: string;
};

export type BookFormSubmission = BookFormValues;

export const BookForm: FC<BookFormProps> = ({
  bookId,
  onSubmit: handleSubmit,
  submitting,
  errors,
  ...otherProps
}) => {
  const isNewBook = !bookId;

  // == Query
  const onLoadError = useApolloAlertCallback("Failed to load book");
  const queryVariables = useMemo<BookFormQueryVariables | undefined>(
    () => (bookId ? { bookId } : undefined),
    [bookId],
  );
  const skipQuery = !queryVariables;
  const { data, loading } = useQuery(BookFormQueryDocument, {
    variables: queryVariables,
    skip: skipQuery,
    onError: onLoadError,
  });
  const { book } = data ?? {};

  // == Form
  const initialValues = useMemo<BookFormValues>(() => {
    const { title, authorName } = book ?? {};
    return {
      title: title ?? "",
      authorName: authorName ?? "",
    };
  }, [book]);
  const { setValues, setErrors, getInputProps, resetDirty, onSubmit, isDirty } =
    useForm<BookFormValues, (values: BookFormValues) => BookFormSubmission>({
      initialValues,
      initialErrors: errors,
      transformValues: ({ title, authorName, ...otherValues }) => ({
        title: title.trim(),
        authorName: authorName.trim(),
        ...otherValues,
      }),
    });
  useDidUpdate(() => {
    setValues(initialValues);
    resetDirty(initialValues);
  }, [initialValues]);
  useDidUpdate(() => {
    setErrors(errors);
  }, [errors]);

  // == Markup
  return (
    <Box
      component="form"
      onSubmit={onSubmit(handleSubmit)}
      pos="relative"
      {...otherProps}
    >
      <Stack>
        <Stack spacing={8}>
          <TextInput
            label="Title"
            placeholder="Courage to be Disliked"
            required
            {...getInputProps("title")}
          />
          <TextInput
            label="Author Name"
            placeholder="Fumitake Koga and Ichiro Kishim"
            required
            {...getInputProps("authorName")}
          />
        </Stack>
        <Group position="right" spacing="xs">
          <Button
            type="submit"
            leftIcon={isNewBook ? <AddIcon /> : <SaveIcon />}
            loading={submitting}
            disabled={!isDirty()}
          >
            {isNewBook ? "Create" : "Save"}
          </Button>
        </Group>
      </Stack>
      <LoadingOverlay visible={loading} />
    </Box>
  );
};
