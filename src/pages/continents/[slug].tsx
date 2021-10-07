import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  useBreakpointValue,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import db from "../../services/db.json";

interface Continent {
  short_name: string;
  continent_name: string;
  description: string;
  about: string;
  amount_countries: number;
  amount_languages: number;
  amount_cities: number;
  image_path: string;
}

export default function Continent() {
  const router = useRouter();
  const [continent, setContinent] = useState<Continent>({} as Continent);
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  const { slug } = router.query;
  const { continents } = db;

  useEffect(() => {
    if (slug) {
      const index = continents.findIndex(
        (continent) => continent.short_name === slug
      );
      setContinent(continents[index]);
    }
  }, [slug]);

  return (
    <Box>
      <Flex
        bgImage={`url(${continent.image_path})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        height={isWideVersion ? "500" : "163"}
      >
        <Heading
          ml="24"
          mb="12"
          color="white"
          fontWeight="semibold"
          fontSize="xxx-large"
          alignSelf="flex-end"
        >
          {continent.continent_name}
        </Heading>
      </Flex>

      <HStack spacing="14" maxW="1280" my="20" mx="auto">
        <Text flex="0.5" textAlign="justify" fontSize="2xl" color="gray.700">
          {continent.about}
        </Text>
        <HStack flex="0.5" spacing="24" justify="center" align="center">
          <VStack align="center">
            <Text fontSize="6xl" fontWeight="medium" color="orange.300">
              {continent.amount_countries}
            </Text>
            <Text fontSize="xl" fontWeight="medium" color="gray.600">
              países
            </Text>
          </VStack>
          <VStack align="center">
            <Text fontSize="6xl" fontWeight="medium" color="orange.300">
              {continent.amount_languages}
            </Text>
            <Text fontSize="xl" fontWeight="medium" color="gray.600">
              línguas
            </Text>
          </VStack>
          <VStack align="center">
            <Text fontSize="6xl" fontWeight="medium" color="orange.300">
              100
            </Text>
            <Text fontSize="xl" fontWeight="medium" color="gray.600">
              cidades +{continent.amount_cities - 100}
            </Text>
          </VStack>
        </HStack>
      </HStack>
    </Box>
  );
}
