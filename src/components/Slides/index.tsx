import { Flex, Heading, Text } from "@chakra-ui/react";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import db from "../../services/db.json";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export function Slides() {
  return (
    <Flex w="100%" h={["250", "450"]} maxW="1810" mx="auto" mb={["3", "10"]}>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 99999999,
        }}
      >
        {db.continents.map((continent, index) => (
          <SwiperSlide key={index}>
            <Flex
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage={`url(${continent.image_path})`}
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
            >
              <Heading
                fontSize={["2xl", "5xl"]}
                color="gray.800"
                fontWeight="700"
                backgroundColor="rgba(255, 255, 255, 0.4)"
                padding="2"
              >
                {continent.continent_name}
              </Heading>
              <Text
                fontWeight="bold"
                color="gray.800"
                fontSize={["sm", "2xl"]}
                mt={["12px", "4"]}
                backgroundColor="rgba(255, 255, 255, 0.4)"
                padding="2"
              >
                {continent.description}
              </Text>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
