import { Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import WhiteButton from "../../../Components/ButtonWhite";
export default function ServicesCard({ servicesData }: any) {
  return (
    <Flex
      bg=" #032E9B"
      w="90%"
      align={"center"}
      maxW="1000px"
      direction={servicesData.left ? "row" : "row-reverse"}
      p={{ base: "40px", md: "50px" }}
      rounded={"20px"}
      my={"20px"}
      minH="450px"
      mt="100px"
    >
      <Stack w="50%" display={{ base: "none", md: "block" }}>
        <Image
          src={servicesData.img}
          w={{ base: "280px", lg: "400px" }}
          maxW="400px"
        />
      </Stack>
      <VStack align={"flex-start"} w={{ base: "100%", md: "50%" }}>
        <Heading
          color="white"
          fontWeight={"700"}
          fontSize="32px"
          fontFamily={"DM Sans"}
          pb="30px"
        >
          {servicesData.heading}
        </Heading>
        <Text
          color="white"
          fontWeight={"400"}
          fontSize="18px"
          fontFamily={"DM Sans"}
          pb="30px"
          maxW="380px"
        >
          {servicesData.text}
        </Text>
        <WhiteButton>{servicesData.btntext}</WhiteButton>
      </VStack>
    </Flex>
  );
}
