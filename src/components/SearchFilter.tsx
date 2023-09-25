import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import { FC } from "react";

interface SearchFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchCountries: () => void;
  setFilter: (filter: "all" | "region") => void;
  region: string | undefined;
  setRegion: (region: string) => void;
}

export const SearchFilter: FC<SearchFilterProps> = ({
  searchQuery,
  setSearchQuery,
  searchCountries,
  setFilter,
  region,
  setRegion,
}) => {
  return (
    <Flex justify="space-between">
      <InputGroup w="30%" gap={4}>
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input
          name="search"
          placeholder="Search all countries..."
          variant="filled"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchCountries()}
        />
        <Button isDisabled={!searchQuery} onClick={() => searchCountries()}>
          Search
        </Button>
      </InputGroup>
      <Select
        name="filter"
        w="10%"
        onChange={(e) => {
          if (e.target.value === "all") {
            setFilter("all");
            setRegion("");
          } else {
            setFilter("region");
            setRegion(e.target.value);
          }
        }}
        placeholder="Filter by Region"
        value={region ?? "All"}
        variant="filled"
      >
        <option value="all">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </Flex>
  );
};
