import { Flex, Center, Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Slides } from "../components/Slides";
import TravelOptions from "../components/TravelOptions";

export default function Home() {
  return (
    <>
      <Banner />
      <Flex mt="8" justify="center">
        <TravelOptions />
      </Flex>
      <Center
        w="90px"
        mt="16"
        mx="auto"
        borderTopWidth="2px"
        borderColor="gray.600"
      />
      <Flex mt="8" direction="column" align="center">
        <Text fontWeight="medium">Vamos nessa?</Text>
        <Text fontWeight="medium">Então escolha seu continente</Text>
        <Slides />
      </Flex>
    </>
  );
}
