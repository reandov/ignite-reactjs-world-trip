import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  useBreakpointValue,
  Heading,
  Text,
  Avatar,
  Tooltip,
} from "@chakra-ui/react";
import QuestionOutlineIcon from "@chakra-ui/icon";
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
  countries: {
    city: string;
    country: string;
    city_img_path: string;
    flag_path: string;
  }[];
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

      <Flex
        direction={isWideVersion ? "row" : "column"}
        spacing="14"
        maxW={["350", "1280"]}
        my={["10", "20"]}
        mx="auto"
      >
        <Text
          flex="0.5"
          textAlign="justify"
          fontSize={["md", "2xl"]}
          color="gray.700"
        >
          {continent.about}
        </Text>
        <HStack
          flex="0.5"
          mt={["10", "0"]}
          spacing={["8", "24"]}
          justify="center"
          align="center"
        >
          <VStack align="center">
            <Text
              fontSize={["5xl", "6xl"]}
              fontWeight="medium"
              color="orange.200"
            >
              {continent.amount_countries}
            </Text>
            <Text fontSize={["md", "xl"]} fontWeight="medium" color="gray.600">
              países
            </Text>
          </VStack>
          <VStack align="center">
            <Text
              fontSize={["5xl", "6xl"]}
              fontWeight="medium"
              color="orange.200"
            >
              {continent.amount_languages}
            </Text>
            <Text fontSize={["md", "xl"]} fontWeight="medium" color="gray.600">
              línguas
            </Text>
          </VStack>
          <VStack align="center">
            <Text
              fontSize={["5xl", "6xl"]}
              fontWeight="medium"
              color="orange.200"
            >
              100
            </Text>
            <HStack>
              <Text
                fontSize={["md", "xl"]}
                fontWeight="medium"
                color="gray.600"
              >
                cidades +{continent.amount_cities - 100}
              </Text>
              <Tooltip
                hasArrow
                label="Este continente possui diversas cidades incríveis!"
                bg="gray.300"
                color="black"
              >
                <QuestionOutlineIcon />
              </Tooltip>
            </HStack>
          </VStack>
        </HStack>
      </Flex>

      <Box maxW={["350", "1280"]} mt="10" mx="auto">
        <Text fontSize="4xl" fontWeight="medium" color="gray.700">
          Cidades +{continent.amount_cities - 100}
        </Text>
      </Box>

      <Flex
        maxW={["350", "1280"]}
        justify={isWideVersion ? "" : "center"}
        flexWrap="wrap"
        mx="auto"
        my="10"
        gridGap="12"
      >
        {continent.countries?.map((country, index) => (
          <Box>
            <Box
              borderTopRadius="4"
              bgImage={`url(${country.city_img_path})`}
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              height="3xs"
              width="3xs"
            />
            <Flex
              justify="space-between"
              align="center"
              p="2"
              borderWidth="thin"
              borderColor="orange.200"
            >
              <VStack align="flex-start">
                <Text>{country.city}</Text>
                <Text>{country.country}</Text>
              </VStack>
              <Avatar src={country.flag_path} size="sm" />
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
