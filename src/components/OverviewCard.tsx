import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";

interface OverviewProps {
  flags: { png: string; svg: string };
  name: { common: string; official: string };
  population: number;
  region: string;
  capital: string[];
  onClick: () => void;
}

export const OverviewCard: FC<OverviewProps> = ({
  flags,
  name,
  population,
  region,
  capital,
  onClick,
}) => {
  const { colorMode } = useColorMode();

  return (
    <Card
      onClick={onClick}
      bg={colorMode === "dark" ? "blue.100" : "white"}
      _hover={{
        transform: "scale(1.1)",
        cursor: "pointer",
      }}
      transition="transform .2s"
      boxShadow="lg"
    >
      <Image
        objectFit="cover"
        src={flags.svg}
        alt={flags.png}
        borderTopRadius={"inherit"}
        maxH="50%"
      />
      <CardBody>
        <Heading size="md" fontFamily="Nunito Sans" mb={2}>
          {name.common}
        </Heading>
        <Text>
          <Text as="b">Population: </Text>
          {population}
        </Text>
        <Text>
          <Text as="b">Region: </Text>
          {region}
        </Text>
        <Text>
          <Text as="b">{capital && "Capital: "}</Text>
          {capital ?? ""}
        </Text>
      </CardBody>
    </Card>
  );
};
