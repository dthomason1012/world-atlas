import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, Heading, Switch, useColorMode } from "@chakra-ui/react";
import "@fontsource/nunito-sans";
import { useRouter } from "next/router";

export const PageHeader = () => {
  const { push } = useRouter();
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex
      pl={16}
      pr={16}
      pt={8}
      pb={8}
      bg={colorMode === "dark" ? "blue.100" : "white"}
      justify="space-between"
      boxShadow="md"
    >
      <Heading
        fontFamily="Nunito Sans"
        fontWeight="bold"
        size="lg"
        onClick={() => push("/")}
        _hover={{ cursor: "pointer" }}
      >
        Where in the World?
      </Heading>
      <Flex align="center" gap={4}>
        <MoonIcon />
        <Switch size="md" onChange={() => toggleColorMode()} />
        <SunIcon />
      </Flex>
    </Flex>
  );
};
