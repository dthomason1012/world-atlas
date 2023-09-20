import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, useColorMode } from "@chakra-ui/react";
import "@fontsource/nunito-sans";

export const PageHeader = () => {
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
      <Heading fontFamily="Nunito Sans" fontWeight="bold" size="lg">
        Where in the World?
      </Heading>
      <Button
        fontSize="md"
        variant="unstyled"
        onClick={() => toggleColorMode()}
      >
        {colorMode === "light" ? (
          <Flex gap={2} align="center">
            <MoonIcon />
            Dark Mode
          </Flex>
        ) : (
          <Flex gap={2} align="center">
            <SunIcon />
            Light Mode
          </Flex>
        )}
      </Button>
    </Flex>
  );
};
