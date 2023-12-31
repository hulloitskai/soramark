import type { PageComponent, PagePropsWithData } from "~/helpers/inertia";
import { Button, Text, Link } from "@react-email/components";

import EmailLayout from "~/components/EmailLayout";

import type { UserPasswordResetEmailQuery } from "~/helpers/graphql";

export type UserPasswordResetEmailProps =
  PagePropsWithData<UserPasswordResetEmailQuery> & {
    readonly resetUrl: string;
  };

const UserPasswordResetEmail: PageComponent<UserPasswordResetEmailProps> = ({
  data: { user },
  resetUrl,
}) => {
  invariant(user, "Missing user");
  const { firstName } = user;
  return (
    <>
      <Text>Hi, {firstName}!</Text>
      <Text style={{ marginBottom: 10 }}>
        A password change has been requested for your account. If this was you,
        please click the button below to reset your password:
      </Text>
      <Box
        component={Button}
        href={resetUrl}
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
        Reset Password
      </Box>
      <Text style={{ marginBottom: 6 }}>
        Or copy and paste this URL into a new tab of your browser:
      </Text>
      <Link href={resetUrl} target="_blank">
        {resetUrl}
      </Link>
    </>
  );
};

UserPasswordResetEmail.layout = buildLayout<UserPasswordResetEmailProps>(
  page => <EmailLayout header="Reset Password">{page}</EmailLayout>,
);

export default UserPasswordResetEmail;
