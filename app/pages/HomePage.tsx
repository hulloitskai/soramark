import type { PageComponent, PagePropsWithData } from "~/helpers/inertia";

import type { HomePageQuery } from "~/helpers/graphql";

import { Text } from "@mantine/core";

export type HomePageProps = PagePropsWithData<HomePageQuery>;

const HomePage: PageComponent<HomePageProps> = ({ data: { viewer } }) => {
  invariant(viewer, "Missing viewer");
  return (
    <Stack spacing="xl">
      <Text>it&apos;s sora time</Text>
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
