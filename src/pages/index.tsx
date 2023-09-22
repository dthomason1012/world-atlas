import { OverviewCard } from "@/components/OverviewCard";
import { useCountries } from "@/hooks/useCountries";
import { Flex, Input, Select, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Home() {
  const { push } = useRouter();
  const { useFetchAllCountries } = useCountries();
  const { data, isLoading } = useFetchAllCountries();

  if (isLoading)
    return (
      <Flex w="100%" h="100vh" align="center" justify="center">
        <Spinner size="xl" />
      </Flex>
    );

  return (
    <Flex m={16} direction="column" gap={16}>
      {/* TODO: create this form, it will update the api call */}
      <Flex justify="space-between">
        <Input w="25%" />
        <Select w="10%" />
      </Flex>
      <SimpleGrid columns={4} spacing={24}>
        {data?.map((item) => {
          return (
            <OverviewCard
              key={item.name.common}
              name={item.name}
              capital={item.capital}
              flags={item.flags}
              population={item.population}
              region={item.region}
              onClick={() => push(`/${item.cca3}`)}
            />
          );
        })}
      </SimpleGrid>
    </Flex>
  );
}
