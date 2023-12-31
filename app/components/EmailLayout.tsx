import type { FC, PropsWithChildren } from "react";
import type { CSSObject } from "@mantine/core";

import {
  Body,
  Container,
  Heading,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { PreviewProps } from "@react-email/components";

export type EmailLayoutProps = PropsWithChildren<{
  readonly header?: string;
  readonly preview?: PreviewProps["children"];
}>;

const EmailLayout: FC<EmailLayoutProps> = ({ header, preview, children }) => (
  <>
    {!!preview && <Preview>{preview}</Preview>}
    <Box component={Body}>
      <Box component={Container} mx="auto" px={12} py={16}>
        {!!header && (
          <Box
            component={Heading}
            my={24}
            sx={({ headings: { fontFamily, sizes } }) => ({
              fontFamily,
              ...(sizes.h3 as CSSObject),
            })}
          >
            {header}
          </Box>
        )}
        <Box
          component={Section}
          sx={({ colors }) => ({
            '[data-id="react-email-text"]': {
              color: colors.gray[8],
            },
          })}
        >
          {children}
        </Box>
        <Box component={Section} mt={40}>
          <Img src="/logo.png" width="32" height="32" />
          <Box
            component={Text}
            sx={({ fn }) => ({ color: fn.dimmed() })}
            style={{ margin: `${rem(4)} 0` }}
          >
            sent by{" "}
            <Box
              component={Link}
              href="/"
              target="_blank"
              sx={({ fn }) => ({
                color: fn.primaryColor(),
                fontWeight: 500,
              })}
            >
              Soramark
            </Box>
            . this email loves you.
          </Box>
        </Box>
      </Box>
    </Box>
  </>
);

export default EmailLayout;
