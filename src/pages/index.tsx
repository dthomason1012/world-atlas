import { OverviewCard } from "@/components/OverviewCard";
import { useCountries } from "@/hooks/useCountries";
import {
  Flex,
  Icon,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { GiEarthAmerica } from "react-icons/gi";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { SearchFilter } from "@/components/SearchFilter";

export default function Home() {
  const { push } = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [region, setRegion] = useState<string | undefined>("");
  const [filter, setFilter] = useState<"all" | "region">("all");
  const { useSearchCountries, useFilterCountries } = useCountries();

  const {
    data: searchedCountries,
    isLoading: isSearchLoading,
    refetch: searchCountries,
    error: searchError,
  } = useSearchCountries(searchQuery);

  const { data, isLoading, refetch, error } = useFilterCountries(
    filter,
    region
  );

  useEffect(() => {
    refetch();
  }, [region, filter, refetch]);

  if (isLoading || isSearchLoading) {
    return (
      <Flex w="100%" h="100vh" align="center" justify="center">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <Flex m={16} direction="column" gap={16}>
      <SearchFilter
        region={region}
        searchCountries={searchCountries}
        searchQuery={searchQuery}
        setFilter={setFilter}
        setRegion={setRegion}
        setSearchQuery={setSearchQuery}
      />
      {error || searchError ? (
        <Flex
          w="100%"
          align="center"
          justify="center"
          direction="column"
          gap={8}
        >
          <Icon as={GiEarthAmerica} w={16} h={16} />
          <Text fontSize="xl">Your search did not match any results</Text>
        </Flex>
      ) : (
        <SimpleGrid columns={4} spacing={24}>
          {searchedCountries
            ? searchedCountries?.map((item) => {
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
              })
            : data?.map((item) => {
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
      )}
    </Flex>
  );
}
