import type { FC } from "react";
import { ActionIcon, Image } from "@mantine/core";
import type { CardProps } from "@mantine/core";

import {
  DeleteSnapMutationDocument,
  type SnapCardSnapFragment,
} from "~/helpers/graphql";

export type SnapCardProps = Omit<CardProps, "children"> & {
  readonly snap: SnapCardSnapFragment;
  readonly onDelete: () => void;
};

const SnapCard: FC<SnapCardProps> = ({
  snap: { id: snapId, photo },
  sx,
  onDelete,
  ...otherProps
}) => {
  const onDeleteError = useApolloAlertCallback("Failed to delete snap");
  const [runDeleteMutation, { loading: deleting }] = useMutation(
    DeleteSnapMutationDocument,
    {
      onCompleted: () => {
        showNotice({
          message: "Snap deleted successfully.",
        });
        onDelete();
      },
      onError: onDeleteError,
    },
  );

  return (
    <Card
      withBorder
      p={0}
      pos="relative"
      sx={[
        ...packSx(sx),
        ({ transitionTimingFunction }) => ({
          ".deleteButton": {
            opacity: 0,
            transition: `opacity 200ms ${transitionTimingFunction}`,
          },
          "&:hover .deleteButton": {
            opacity: 1,
          },
        }),
      ]}
      {...otherProps}
    >
      <Image src={photo.url} width={160} height={240} />
      <ActionIcon
        className="deleteButton"
        color="red"
        radius="md"
        loading={deleting}
        pos="absolute"
        bottom={8}
        right={8}
        onClick={() => {
          runDeleteMutation({
            variables: {
              input: {
                snapId,
              },
            },
          });
        }}
      >
        <DeleteIcon />
      </ActionIcon>
    </Card>
  );
};

export default SnapCard;
