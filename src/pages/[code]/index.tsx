import { CountryData } from "@/components/CountryData";
import { useCountries } from "@/hooks/useCountries";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, Flex, Grid, Spinner, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function CountryDetail() {
  const { query, push } = useRouter();
  const { useFetchCountryByCode } = useCountries();
  const { data, isLoading } = useFetchCountryByCode(query.code as string);

  if (isLoading) return <Spinner />;

  return (
    <Flex direction="column" align="center">
      <Flex w="100%">
        <Button onClick={() => push("/")} boxShadow="md" mt={16} ml={16}>
          <ArrowBackIcon /> Back
        </Button>
      </Flex>
      <Flex m={16}>
        <CountryData country={data?.[0]!} />
      </Flex>
    </Flex>
  );
}
