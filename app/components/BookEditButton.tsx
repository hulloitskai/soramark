import type { ComponentPropsWithoutRef, FC } from "react";
import type { ButtonProps, ModalProps } from "@mantine/core";

import BookEditForm from "./BookEditForm";
import type { BookEditFormProps } from "./BookEditForm";

export type BookEditButtonProps = Omit<ButtonProps, "onClick"> &
  ComponentPropsWithoutRef<"button"> &
  Pick<BookEditFormProps, "bookId" | "onUpdate"> & {
    readonly modalProps?: Pick<ModalProps, "title">;
  };

const BookEditButton: FC<BookEditButtonProps> = ({
  bookId,
  onUpdate,
  modalProps,
  children,
  ...otherProps
}) => (
  <Button
    leftIcon={<EditIcon />}
    onClick={() => {
      const { title } = modalProps ?? {};
      openModal({
        title: title ?? "edit book",
        children: (
          <BookEditForm
            {...{
              bookId,
              onUpdate,
            }}
          />
        ),
      });
    }}
    {...otherProps}
  >
    {children ?? "edit book"}
  </Button>
);

export default BookEditButton;
