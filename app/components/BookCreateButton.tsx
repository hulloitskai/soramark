import type { ComponentPropsWithoutRef, FC } from "react";
import type { ButtonProps, ModalProps } from "@mantine/core";

import BookCreateForm from "./BookCreateForm";
import type { BookCreateFormProps } from "./BookCreateForm";

export type BookCreateButtonProps = Omit<ButtonProps, "onClick"> &
  ComponentPropsWithoutRef<"button"> &
  Pick<BookCreateFormProps, "onCreate"> & {
    readonly modalProps?: Pick<ModalProps, "title">;
  };

const BookCreateButton: FC<BookCreateButtonProps> = ({
  modalProps,
  onCreate,
  children,
  ...otherProps
}) => (
  <Button
    leftIcon={<AddIcon />}
    onClick={() => {
      const { title } = modalProps ?? {};
      openModal({
        title: title ?? "add book",
        children: (
          <BookCreateForm
            onCreate={book => {
              closeAllModals();
              onCreate(book);
            }}
          />
        ),
      });
    }}
    {...otherProps}
  >
    {children ?? "add book"}
  </Button>
);

export default BookCreateButton;
