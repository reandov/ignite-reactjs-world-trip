import { Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function Header() {
  const router = useRouter();

  return (
    <Flex maxW="1680" m="auto" display="flex" align="center" p="6">
      {router.query.slug && (
        <Image src="/assets/back.svg" position="absolute" />
      )}

      <Image src="/assets/logo.svg" margin="auto" />
    </Flex>
  );
}
