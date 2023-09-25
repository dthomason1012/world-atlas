import { Country } from "@/hooks/useCountries";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

interface CountryDataProps {
  country: Country;
}

export const CountryData: FC<CountryDataProps> = ({ country }) => {
  const { push } = useRouter();
  return (
    <Grid templateColumns="repeat(2, 1fr)" columnGap={32} alignItems="center">
      <GridItem>
        <Image
          w="100%"
          h="auto"
          src={country?.flags.svg}
          alt={country?.flags.png}
        />
      </GridItem>
      <GridItem>
        <Heading fontFamily="Nunito Sans" mb={4}>
          {country?.name.common}
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" columnGap={8}>
          <GridItem>
            <Flex direction="column" gap={2}>
              <Text>
                <Text as="b">Official Name: </Text>
                {country?.name.official}
              </Text>
              <Text>
                <Text as="b">Population: </Text>
                {country?.population.toLocaleString()}
              </Text>
              <Text>
                <Text as="b">Region: </Text>
                {country?.region}
              </Text>
              <Text>
                <Text as="b">Sub Region: </Text>
                {country?.subregion}
              </Text>
              <Text>
                <Text as="b">
                  {`Capital${country?.capital?.length > 1 ? "s: " : ": "}`}
                </Text>
                {country?.capital?.map((item, index) => [
                  index > 0 && ", ",
                  `${item}`,
                ])}
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex direction="column" gap={2}>
              <Text>
                <Text as="b">Top Level Domain: </Text>
                {country?.tld?.map((item, index) => [
                  index > 0 && ", ",
                  `${item}`,
                ])}
              </Text>
              <Text>
                <Text as="b">Currencies: </Text>
                {Object.values(country?.currencies || {})[0]?.name} (
                {Object.values(country?.currencies || {})[0]?.symbol})
              </Text>
              <Text>
                <Text as="b">Languages: </Text>
                {Object.values(country?.languages || {}).map((item, index) => [
                  index > 0 && ", ",
                  `${item}`,
                ])}
              </Text>
            </Flex>
          </GridItem>
        </Grid>
        <Flex mt={20} align="center">
          <Text as="b">Border Countries: </Text>
          <Flex wrap="wrap">
            {country?.borders?.map((code) => {
              return (
                <Button
                  m={2}
                  boxShadow="md"
                  key={code}
                  onClick={() => push(`/${code}`)}
                >
                  {code}
                </Button>
              );
            })}
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
};
