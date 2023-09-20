import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import "@fontsource/nunito-sans";

export const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("hsl(0, 0%, 98%)", "hsl(207, 26%, 17%)")(props),
        color: mode("hsl(200, 15%, 8%)", "white")(props),
        fontFamily: "Nunito Sans",
      },
    }),
  },
  colors: {
    blue: {
      100: "hsl(209, 23%, 22%)",
      500: "hsl(207, 26%, 17%)",
    },
    gray: {
      100: "hsl(0, 0%, 98%)",
      500: "hsl(0, 0%, 52%)",
    },
  },
});
