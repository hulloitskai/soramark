import type { FC } from "react";
import TextIcon from "~icons/heroicons/bars-3-center-left-20-solid";

import { ActionIcon, Image } from "@mantine/core";
import type { CardProps } from "@mantine/core";

import { DeleteSnapMutationDocument } from "~/helpers/graphql";
import type { SnapCardSnapFragment } from "~/helpers/graphql";

import SnapInfo from "./SnapInfo";

export type SnapCardProps = Omit<CardProps, "children"> & {
  readonly snap: SnapCardSnapFragment;
  readonly onDelete: () => void;
};

const SnapCard: FC<SnapCardProps> = ({
  snap: { id: snapId, photo, wasProcessed },
  sx,
  onDelete,
  ...otherProps
}) => {
  // == Delete Mutation
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
          ".actions": {
            opacity: 0,
            transition: `opacity 200ms ${transitionTimingFunction}`,
          },
          "&:hover": {
            ".actions": {
              opacity: 1,
            },
          },
        }),
      ]}
      {...otherProps}
    >
      <Image src={photo.url} width={160} height={240} />
      <Group
        className="actions"
        spacing={8}
        pos="absolute"
        bottom={8}
        right={8}
      >
        {wasProcessed && (
          <ActionIcon
            variant="outline"
            color="brand"
            radius="md"
            sx={({ colors }) => ({
              backgroundColor: colors.brand[0],
              "&:hover": {
                backgroundColor: colors.brand[1],
              },
            })}
            onClick={() => {
              openModal({
                title: "inside this snap",
                size: "lg",
                children: <SnapInfo {...{ snapId }} />,
              });
            }}
          >
            <TextIcon />
          </ActionIcon>
        )}
        <ActionIcon
          variant="outline"
          color="red"
          radius="md"
          loading={deleting}
          sx={({ colors }) => ({
            backgroundColor: colors.red[0],
            "&:hover": {
              backgroundColor: colors.red[1],
            },
          })}
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
      </Group>
    </Card>
  );
};

export default SnapCard;
