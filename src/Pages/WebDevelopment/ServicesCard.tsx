import {
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import frontendImg from "../../assets/frontendImg.png";
import WhiteButton from "../../Components/ButtonWhite";
import { useMediaQuery } from "@chakra-ui/react";
export default function ServicesCard({ data }: any) {
  const [iPhone] = useMediaQuery("(min-width: 600px)");
  return (
    <Flex
      bg=" #032E9B"
      w={{ base: "360px", sm: "650px", lg: "961px" }}
      align={"center"}
      direction={data.left ? "row" : "row-reverse"}
      p={{ base: "40px", md: "50px" }}
      rounded={"20px"}
    >
      <Stack w="50%" display={{ base: "none", md: "block" }}>
        <Image src={data.img} maxW="400px" />
      </Stack>
      <VStack align={"flex-start"} w={{ base: "100%", md: "50%" }}>
        <Heading
          color="white"
          fontWeight={"700"}
          fontSize="32px"
          fontFamily={"DM Sans"}
          pb="30px"
        >
          {data.heading}
        </Heading>
        <Text
          color="white"
          fontWeight={"400"}
          fontSize="18px"
          fontFamily={"DM Sans"}
          pb="30px"
          maxW="380px"
        >
          {data.text}
        </Text>
        <WhiteButton>{data.btntext}</WhiteButton>
      </VStack>
    </Flex>
  );
}
