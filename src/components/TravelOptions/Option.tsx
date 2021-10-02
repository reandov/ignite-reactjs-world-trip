import { Flex, Stack, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelOptionProps {
  icon: string;
  label: string;
}

export default function TravelOption({ icon, label }: TravelOptionProps) {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex gridGap="6" align="center" direction={{ sm: "row", lg: "column" }}>
      <Image
        src={isWideVersion ? `/images/${icon}.svg` : "/images/elipse.svg"}
        height={{ sm: 4, lg: 95 }}
      />
      <Text fontWeight="bold" fontSize={{ sm: 28, lg: 24 }}>
        {label}
      </Text>
    </Flex>
  );
}
