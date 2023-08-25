import type { FC } from "react";
import type { BoxProps } from "@mantine/core";
import type { FormErrors } from "@mantine/form";

import { CreateBookMutationDocument } from "~/helpers/graphql";
import type { BookCreateFormBookFragment } from "~/helpers/graphql";

import { BookForm } from "./BookForm";

export type BookCreateFormProps = Omit<BoxProps, "children"> & {
  readonly onCreate: (book: BookCreateFormBookFragment) => void;
};

const BookCreateForm: FC<BookCreateFormProps> = ({
  onCreate,
  ...otherProps
}) => {
  const [errors, setErrors] = useState<FormErrors>({});

  // == Mutation
  const onError = useApolloAlertCallback("Failed to create book");
  const [runMutation, { loading: submitting }] = useMutation(
    CreateBookMutationDocument,
    {
      onCompleted: ({ payload: { book, errors } }) => {
        if (book) {
          closeAllModals();
          showNotice({ message: "Book created successfully." });
          onCreate(book);
        } else {
          invariant(errors, "Missing input errors");
          const formErrors = parseFormErrors(errors);
          setErrors(formErrors);
          showFormErrorsAlert(formErrors, "Couldn't create book");
        }
      },
      onError,
    },
  );

  // == Markup
  return (
    <BookForm
      onSubmit={submission => {
        runMutation({
          variables: {
            input: {
              ...submission,
            },
          },
        });
      }}
      {...{ submitting, errors }}
      {...otherProps}
    />
  );
};

export default BookCreateForm;
