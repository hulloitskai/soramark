import type { PageComponent, PagePropsWithData } from "~/helpers/inertia";
import { Text } from "@react-email/components";

import EmailLayout from "~/components/EmailLayout";

import type { UserWelcomeEmailQuery } from "~/helpers/graphql";

export type UserWelcomeEmailProps = PagePropsWithData<UserWelcomeEmailQuery>;

const UserWelcomeEmail: PageComponent<UserWelcomeEmailProps> = ({
  data: { user },
}) => {
  invariant(user, "Missing user");
  const { firstName } = user;
  return (
    <>
      <Text>hi, {firstName}!</Text>
      <Text>
        thanks for making an account on soramark.
        <br />
        we&apos;ll keep you posted when we have updates to share :)
      </Text>
    </>
  );
};

UserWelcomeEmail.layout = buildLayout<UserWelcomeEmailProps>(page => (
  <EmailLayout header="welcome to soramark!">{page}</EmailLayout>
));

export default UserWelcomeEmail;
