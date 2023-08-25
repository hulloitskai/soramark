import type { FC } from "react";
import type { BoxProps } from "@mantine/core";
import type { FormErrors } from "@mantine/form";

import { UpdateBookMutationDocument } from "~/helpers/graphql";

import { BookForm } from "./BookForm";

export type BookEditFormProps = Omit<BoxProps, "children"> & {
  readonly bookId: string;
  readonly onUpdate: () => void;
};

const BookEditForm: FC<BookEditFormProps> = ({
  bookId,
  onUpdate,
  ...otherProps
}) => {
  const [errors, setErrors] = useState<FormErrors>({});

  // == Mutation
  const onError = useApolloAlertCallback("Failed to update book");
  const [runMutation, { loading: submitting }] = useMutation(
    UpdateBookMutationDocument,
    {
      onCompleted: ({ payload: { book, errors } }) => {
        if (book) {
          closeAllModals();
          showNotice({ message: "Book updated successfully." });
          onUpdate();
        } else {
          invariant(errors, "Missing input errors");
          const formErrors = parseFormErrors(errors);
          setErrors(formErrors);
          showFormErrorsAlert(formErrors, "Couldn't edit book");
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
              bookId,
              ...submission,
            },
          },
        });
      }}
      {...{ bookId, submitting, errors }}
      {...otherProps}
    />
  );
};

export default BookEditForm;
