import type { PageComponent, PagePropsWithData } from "~/helpers/inertia";
import { Button, Text, Link } from "@react-email/components";

import EmailLayout from "~/components/EmailLayout";

import type { UserEmailVerificationEmailQuery } from "~/helpers/graphql";

export type UserEmailVerificationEmailProps =
  PagePropsWithData<UserEmailVerificationEmailQuery> & {
    readonly verificationUrl: string;
  };

const UserVerificationEmail: PageComponent<UserEmailVerificationEmailProps> = ({
  data: { user },
  verificationUrl,
}) => {
  invariant(user, "Missing user");
  const { firstName } = user;
  return (
    <>
      <Text>Hi, {firstName}!</Text>
      <Text style={{ marginBottom: 10 }}>
        To verify your email address, please click the button below:
      </Text>
      <Box
        component={Button}
        href={verificationUrl}
        target="_blank"
        pX={20}
        pY={10}
        bg="brand"
        fw={600}
        sx={({ white, radius }) => ({
          color: white,
          borderRadius: radius.sm,
        })}
      >
        Verify Email
      </Box>
      <Text style={{ marginBottom: 6 }}>
        Or copy and paste this URL into a new tab of your browser:
      </Text>
      <Link href={verificationUrl} target="_blank">
        {verificationUrl}
      </Link>
    </>
  );
};

UserVerificationEmail.layout = buildLayout<UserEmailVerificationEmailProps>(
  page => <EmailLayout header="Verify Email">{page}</EmailLayout>,
);

export default UserVerificationEmail;
