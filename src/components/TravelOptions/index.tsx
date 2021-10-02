import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import TravelOption from "./Option";

export default function TravelOptions() {
  return (
    <HStack spacing="20" wrap="wrap" justify="center">
      <TravelOption icon="cocktail" label="vida noturna" />
      <TravelOption icon="surf" label="praia" />
      <TravelOption icon="building" label="moderno" />
      <TravelOption icon="museum" label="clássico" />
      <TravelOption icon="earth" label="e mais..." />
    </HStack>
  );
}
