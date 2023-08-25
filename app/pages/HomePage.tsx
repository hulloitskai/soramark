import type { PageComponent, PagePropsWithData } from "~/helpers/inertia";
import { Text } from "@mantine/core";

import type { HomePageQuery } from "~/helpers/graphql";

import BookCreateButton from "~/components/BookCreateButton";

export type HomePageProps = PagePropsWithData<HomePageQuery>;

const HomePage: PageComponent<HomePageProps> = ({ data: { viewer } }) => {
  invariant(viewer, "Missing viewer");
  const { books, firstName } = viewer;

  // == Routing
  const router = useRouter();

  return (
    <Stack spacing={8}>
      <Title order={2} lh={1.2}>
        {firstName}&apos;s bookshelf
      </Title>
      {!isEmpty(books) ? (
        books.map(({ id, url, title, authorName }) => (
          <AnchorContainer
            key={id}
            component={Link}
            href={url}
            sx={({ radius }) => ({ borderRadius: radius.md })}
          >
            <Card withBorder>
              <Text weight={500}>{title}</Text>
              <Text size="sm" color="dimmed" lineClamp={2} lh={1.4}>
                {authorName}
              </Text>
            </Card>
          </AnchorContainer>
        ))
      ) : (
        <EmptyCard itemLabel="books" />
      )}
      <Box>
        <BookCreateButton
          onCreate={book => {
            router.visit(book.url);
          }}
        />
      </Box>
    </Stack>
  );
};

HomePage.layout = buildLayout<HomePageProps>((page, { data: { viewer } }) => (
  <AppLayout
    breadcrumbs={[{ title: "home", href: "/home" }]}
    withContainer
    containerSize="xs"
    withGutter
    {...{ viewer }}
  >
    {page}
  </AppLayout>
));

export default HomePage;
