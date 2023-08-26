import type { FC } from "react";

import { Text } from "@mantine/core";
import type { BoxProps } from "@mantine/core";

import { SnapInfoQueryDocument } from "~/helpers/graphql";

export type SnapInfoProps = Omit<BoxProps, "children"> & {
  readonly snapId: string;
};

const SnapInfo: FC<SnapInfoProps> = ({ snapId, ...otherProps }) => {
  // == Query
  const onError = useApolloAlertCallback("Failed to load snap text");
  const { data, loading } = useQuery(SnapInfoQueryDocument, {
    variables: {
      snapId,
    },
    onError,
  });
  const { text, tags } = data?.snap ?? {};

  return (
    <Box pos="relative" mih={100} {...otherProps}>
      <Stack>
        {!!text && (
          <Text size="sm" color="dark.4" sx={{ whiteSpace: "pre-wrap" }}>
            {text}
          </Text>
        )}
        {!!tags && !isEmpty(tags) && (
          <Group spacing={4}>
            {tags.map(tag => (
              <Chip
                key={tag}
                size="xs"
                variant="outline"
                color="brand"
                defaultChecked
                readOnly
              >
                {tag}
              </Chip>
            ))}
          </Group>
        )}
      </Stack>
      <LoadingOverlay visible={loading} />
    </Box>
  );
};

export default SnapInfo;
