import {
  useBreakpointValue,
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Divider,
} from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <Box>
      <Box
        bgImage='url("/assets/background.png")'
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        height={isWideVersion ? "335" : "163"}
      >
        <Flex
          maxW="1810"
          h="100%"
          mx="auto"
          px={["4", "10"]}
          direction="column"
          align="flex-start"
          justify="center"
          pos="relative"
        >
          <Heading
            as="h1"
            fontWeight="500"
            fontSize={["xl", "2xl", "4xl"]}
            color="gray.50"
            mb={["2", "3", "5"]}
          >
            5 Continentes, <Divider as="br" /> infinitas possibilidades.
          </Heading>
          <Text maxW="524" fontSize={["sm", "md", "xl"]} color="gray.100">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>

          <Image
            pos="absolute"
            right="36"
            bottom="-35"
            src="/assets/airplane.svg"
            alt="Avião"
            display={isWideVersion ? "" : "none"}
          />
        </Flex>
      </Box>
    </Box>
  );
}
