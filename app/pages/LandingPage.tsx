import type { PageComponent, PagePropsWithData } from "~/helpers/inertia";
import { Footer, Text } from "@mantine/core";

import type { LandingPageQuery } from "~/helpers/graphql";

import ContactMeLink from "~/components/ContactMeLink";

export type LandingPageProps = PagePropsWithData<LandingPageQuery>;

const LandingPage: PageComponent<LandingPageProps> = ({ data: { viewer } }) => {
  return (
    <Stack align="center" spacing="xl">
      <Space h="xs" />
      <Text color="dark" align="center" lh={1.4}>
        hi! this is{" "}
        <Text span color="brand" weight={600}>
          soramark
        </Text>
        ,<br />a lil tool to help our friend Colleen
        <br />
        keep track of her readings.
      </Text>
      <Button
        component={Link}
        href={viewer ? "/home" : "/login"}
        size="lg"
        radius="xl"
      >
        {viewer
          ? "take me to my books & snaps"
          : "sign in with Google to get started"}
      </Button>
    </Stack>
  );
};

LandingPage.layout = buildLayout<LandingPageProps>(
  (page, { data: { viewer } }) => (
    <AppLayout
      withContainer
      containerSize="xs"
      withGutter
      footer={
        <Footer height={28}>
          <Center h="100%">
            <ContactMeLink size="xs" subject="hey!">
              got questions? shoot us an email :)
            </ContactMeLink>
          </Center>
        </Footer>
      }
      {...{ viewer }}
    >
      {page}
    </AppLayout>
  ),
);

export default LandingPage;
