import { PageHeader } from "@/components/PageHeader";
import { theme } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <PageHeader />
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
