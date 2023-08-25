import type { PageComponent, PagePropsWithData } from "~/helpers/inertia";
import { Image, Text } from "@mantine/core";

import type { BookPageQuery } from "~/helpers/graphql";
import BookEditButton from "~/components/BookEditButton";
import SnapCreateButton from "~/components/SnapCreateButton";
import SnapCard from "~/components/SnapCard";

export type BookPageProps = PagePropsWithData<BookPageQuery>;

const BookPage: PageComponent<BookPageProps> = ({ data: { book } }) => {
  invariant(book, "Missing book");
  const { id: bookId, title, authorName, snaps } = book;

  // == Routing
  const router = useRouter();

  return (
    <Stack spacing="xl">
      <Stack align="start" spacing="xs">
        <Box>
          <Title lh={1.2}>{title}</Title>
          <Text size="sm" color="dimmed" lh={1.2}>
            {authorName}
          </Text>
        </Box>
        <BookEditButton
          compact
          onUpdate={() => {
            router.reload({ preserveScroll: true });
          }}
          {...{ bookId }}
        />
      </Stack>
      <Stack spacing={8}>
        <Title order={2} lh={1.2}>
          my snaps
        </Title>
        {!isEmpty(snaps) ? (
          <Group spacing={8}>
            {snaps.map(snap => (
              <SnapCard
                key={snap.id}
                onDelete={() => {
                  router.reload({ preserveScroll: true });
                }}
                {...{ snap }}
              />
            ))}
          </Group>
        ) : (
          <EmptyCard itemLabel="snaps" />
        )}
        <Box>
          <SnapCreateButton
            {...{ bookId }}
            mt={4}
            onCreate={() => {
              router.reload({ preserveScroll: true });
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

BookPage.layout = buildLayout<BookPageProps>(
  (page, { data: { viewer, book } }) => {
    invariant(book, "Missing book");
    return (
      <AppLayout
        padding={0}
        breadcrumbs={[
          { title: "home", href: "/home" },
          { title: book.title, href: book.url },
        ]}
        withContainer
        withGutter
        {...{ viewer }}
      >
        {page}
      </AppLayout>
    );
  },
);

export default BookPage;
