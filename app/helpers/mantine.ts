import type {
  CSSObject,
  DefaultMantineColor,
  MantineThemeOverride,
} from "@mantine/core";

import type { Tuple } from "@mantine/core";

export type CustomColor = "brand";

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<DefaultMantineColor | CustomColor, Tuple<string, 10>>;
  }
}

// "#cfe0cf",
// "#bcd3bb",
// "#a9c7a8",
// "#96ba94",
// "#83ae81",
// "#70a16e",
// "#60915e",
// "#537e51",
// "#466b45",
// "#395738",

export const APP_THEME: MantineThemeOverride = {
  colors: {
    brand: [
      "#f4f8f4",
      "#deeade",
      "#b3cdb1",
      "#b3cdb1",
      "#9dbf9b",
      "#87b085",
      "#71a26f",
      "#5f905d",
      "#507a4f",
      "#426440",
    ],
  },
  primaryColor: "brand",
  fontFamily:
    "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, " +
    "Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  fontFamilyMonospace:
    "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, " +
    "Liberation Mono, Courier New, monospace",
  headings: {
    fontFamily: "Halant, Garamond, Georgia, Times New Roman, Times, serif",
  },
  focusRingStyles: {
    styles: ({ colors, colorScheme, primaryColor }) => ({
      outlineOffset: 2,
      outlineStyle: "solid",
      outlineWidth: 1,
      outlineColor: colors[primaryColor]![colorScheme === "dark" ? 7 : 5],
    }),
  },
  components: {
    Button: {
      defaultProps: {
        radius: "md",
      },
    },
    Card: {
      defaultProps: {
        radius: "md",
      },
    },
    LoadingOverlay: {
      defaultProps: {
        loaderProps: {
          size: "sm",
        },
      },
    },
    ThemeIcon: {
      defaultProps: {
        variant: "default",
      },
    },
    Input: {
      defaultProps: {
        radius: "md",
      },
    },
    Modal: {
      styles: ({ headings: { sizes, ...style } }) => ({
        title: {
          ...(sizes.h3 as CSSObject),
          ...(style as CSSObject),
        },
      }),
    },
  },
};

export const EMAIL_THEME: MantineThemeOverride = {
  ...APP_THEME,
  colorScheme: "light",
  globalStyles: ({ white }) => ({
    body: {
      margin: 8,
      fontSize: 14,
      backgroundColor: white,
    },
  }),
};
