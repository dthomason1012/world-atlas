import { CountryData } from "@/components/CountryData";
import { useCountries } from "@/hooks/useCountries";
import { ArrowBackIcon, Icon } from "@chakra-ui/icons";
import { AiFillHome } from "react-icons/ai";
import { Button, Flex, Grid, Spinner, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function CountryDetail() {
  const { query, back, push } = useRouter();
  const { useFetchCountryByCode } = useCountries();
  const { data, isLoading } = useFetchCountryByCode(query.code as string);

  if (isLoading)
    return (
      <Flex w="100%" h="100vh" align="center" justify="center">
        <Spinner size="xl" />
      </Flex>
    );

  return (
    <Flex direction="column" align="center">
      <Flex w="100%" gap={4}>
        <Button onClick={() => back()} boxShadow="md" mt={16} ml={16}>
          <Flex align="center" gap={2}>
            <ArrowBackIcon />
            <Text>Back</Text>
          </Flex>
        </Button>
        <Button onClick={() => push("/")} boxShadow="md" mt={16}>
          <Flex align="center" gap={2}>
            <Icon as={AiFillHome} />
            <Text>Home</Text>
          </Flex>
        </Button>
      </Flex>
      <Flex m={16}>
        <CountryData country={data?.[0]!} />
      </Flex>
    </Flex>
  );
}
