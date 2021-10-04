import { Flex, Heading, Text } from "@chakra-ui/react";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export function Slides() {
  return (
    <Flex w="100%" h={["250", "450"]} maxW="1810" mx="auto" mb={["5", "10"]}>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: "100%", flex: "1" }}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="md"
            align="center"
            justify="center"
            direction="column"
            bgImage="url('/images/asia-slide.jpg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          >
            <Heading fontSize={["2xl", "5xl"]} color="white" fontWeight="700">
              Asian continent
            </Heading>
            <Text
              fontWeight="bold"
              color="gray.100"
              fontSize={["sm", "2xl"]}
              mt={["12px", "4"]}
            >
              Lorem ipsum
            </Text>
          </Flex>
        </SwiperSlide>

        <SwiperSlide></SwiperSlide>

        <SwiperSlide></SwiperSlide>

        <SwiperSlide></SwiperSlide>

        <SwiperSlide></SwiperSlide>

        <SwiperSlide></SwiperSlide>
      </Swiper>
    </Flex>
  );
}
