import type { PageComponent, PagePropsWithData } from "~/helpers/inertia";
import { Loader, Text } from "@mantine/core";
import FsLightbox from "fslightbox-react";

import { BookPageSnapsQueryDocument } from "~/helpers/graphql";
import type { BookPageQuery } from "~/helpers/graphql";

import BookEditButton from "~/components/BookEditButton";
import SnapCreateButton from "~/components/SnapCreateButton";
import SnapCard from "~/components/SnapCard";

export type BookPageProps = PagePropsWithData<BookPageQuery>;

const BookPage: PageComponent<BookPageProps> = ({ data: { book } }) => {
  invariant(book, "Missing book");
  const { id: bookId, title, authorName, tags } = book;

  // == Routing
  const router = useRouter();

  // == Tags
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // == Query
  const onSnapsLoadError = useApolloAlertCallback("Failed to load snaps");
  const { data: snapsData, previousData: snapsPreviousData } = useQuery(
    BookPageSnapsQueryDocument,
    {
      variables: {
        bookId,
        tags: selectedTags,
      },
      onError: onSnapsLoadError,
    },
  );
  const { snaps } = (snapsData ?? snapsPreviousData)?.book ?? {};

  // == Lightbox
  const lightboxSources = useMemo(() => {
    if (snaps) {
      return snaps.map(snap => snap.photo.url);
    }
    return [];
  }, [snaps]);
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  const openLightbox = (slide: number) =>
    setLightboxController(({ toggler }) => ({
      toggler: !toggler,
      slide,
    }));

  return (
    <>
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
        <Stack spacing="md">
          <Stack spacing={8}>
            <Title order={2} lh={1.2}>
              my snaps
            </Title>
            {!isEmpty(tags) && (
              <Chip.Group
                multiple
                value={selectedTags}
                onChange={value => {
                  if (Array.isArray(value)) {
                    setSelectedTags(value);
                  }
                }}
              >
                <Group spacing={4}>
                  {tags.map(tag => (
                    <Chip
                      key={tag}
                      size="xs"
                      variant="outline"
                      color="brand"
                      value={tag}
                    >
                      {tag}
                    </Chip>
                  ))}
                </Group>
              </Chip.Group>
            )}
          </Stack>
          {snaps ? (
            !isEmpty(snaps) ? (
              <Group spacing={8}>
                {snaps.map((snap, index) => (
                  <SnapCard
                    key={snap.id}
                    sx={{
                      cursor: "pointer",
                    }}
                    onImageClick={() => {
                      openLightbox(index + 1);
                    }}
                    onDelete={() => {
                      router.reload({ preserveScroll: true });
                    }}
                    {...{ snap }}
                  />
                ))}
              </Group>
            ) : (
              <EmptyCard itemLabel="snaps" />
            )
          ) : (
            <Card withBorder>
              <Stack align="center" spacing="sm" py="xl" px="sm">
                <Text size="sm" color="dimmed">
                  loading snaps...
                </Text>
                <Loader size="sm" />
              </Stack>
            </Card>
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
      <FsLightbox
        toggler={lightboxController.toggler}
        slide={lightboxController.slide}
        sources={lightboxSources}
      />
    </>
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
        containerSize="md"
        withGutter
        {...{ viewer }}
      >
        {page}
      </AppLayout>
    );
  },
);

export default BookPage;
