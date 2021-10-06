import { Flex, Center, Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Slides } from "../components/Slides";
import TravelOptions from "../components/TravelOptions";

export default function Home() {
  return (
    <>
      <Banner />
      <Flex mt={["8", "16"]} justify="center">
        <TravelOptions />
      </Flex>
      <Center
        w="90px"
        my={["2", "16"]}
        mx="auto"
        borderTopWidth="2px"
        borderColor="gray.600"
      />
      <Flex my="8" direction="column" align="center">
        <Text fontSize={["xl", "4xl"]} fontWeight="medium" color="gray.700">
          Vamos nessa?
        </Text>
        <Text fontSize={["xl", "4xl"]} fontWeight="medium" color="gray.700">
          Então escolha seu continente
        </Text>
      </Flex>
      <Slides />
    </>
  );
}
