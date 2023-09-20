import { PageHeader } from "@/components/PageHeader";
import { theme } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <PageHeader />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
