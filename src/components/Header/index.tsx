import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex maxW="1680" m="auto" display="flex" align="center" p="6">
      <Image src="/images/back.svg" position="absolute" />
      <Image src="/images/logo.svg" margin="auto" />
    </Flex>
  );
}
