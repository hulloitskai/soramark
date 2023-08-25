import type { ComponentPropsWithoutRef, FC } from "react";
import type { ButtonProps, ModalProps } from "@mantine/core";

import SnapCreateForm from "./SnapCreateForm";
import type { SnapCreateFormProps } from "./SnapCreateForm";

export type SnapCreateButtonProps = Omit<ButtonProps, "onClick"> &
  ComponentPropsWithoutRef<"button"> &
  Pick<SnapCreateFormProps, "bookId" | "onCreate"> & {
    readonly modalProps?: Pick<ModalProps, "title">;
  };

const SnapCreateButton: FC<SnapCreateButtonProps> = ({
  modalProps,
  bookId,
  onCreate,
  children,
  ...otherProps
}) => (
  <Button
    leftIcon={<AddIcon />}
    onClick={() => {
      const { title } = modalProps ?? {};
      openModal({
        title: title ?? "add snap",
        children: (
          <SnapCreateForm
            onCreate={() => {
              closeAllModals();
              onCreate();
            }}
            {...{ bookId }}
          />
        ),
      });
    }}
    {...otherProps}
  >
    {children ?? "add snap"}
  </Button>
);

export default SnapCreateButton;
