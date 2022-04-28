import React from "react";
import {
  Box,
  Button,
  ButtonProps,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  HeadingProps,
  HStack,
  Image,
  Stack,
  Text,
  TextProps,
  VStack,
} from "@chakra-ui/react";
import vector from "../../assets/vector.png";
import SocialImg from "../../assets/SocialImg.png";

export default function SocialNetwork() {
  return (
    <VStack pt="100px" pb="100px" px="10px">
      <Heading {...headingStyles}>Social Networking</Heading>
      <Text {...textStyles}>
        Helping social platforms expand internationally by creating memorable
        digital experiences through interactive web and mobile applications.
      </Text>
      <Grid
        templateColumns="repeat(12, 1fr)"
        gap={0}
        pt={{ base: "30px", md: "100px" }}
      >
        <GridItem colSpan={{ base: 12, md: 6 }}>
          <Flex justifyContent={"center"}>
            <Stack
              py="50px"
              px={{ base: "10px", md: "50px" }}
              alignItems="center"
              maxW="590px"
              borderRadius={"19px"}
            >
              <VStack alignItems="flex-start" mb="30px">
                <Text {...spanStyles}>What we Offer</Text>
                <Heading {...pointerHeadingStyles}>
                  Design, development, and implementation of educational
                  applications
                </Heading>
                <HStack alignItems={"flex-start"}>
                  <Image src={vector} mt="7px" />
                  <Text {...pointerStyles} my="0">
                    Inventory management systems for food suppliers
                  </Text>
                </HStack>
                <HStack alignItems={"flex-start"}>
                  <Image src={vector} mt="7px" />
                  <Text {...pointerStyles} my="0">
                    Inventory management systems for food suppliers
                  </Text>
                </HStack>
                <HStack alignItems={"flex-start"}>
                  <Image src={vector} mt="7px" />
                  <Text {...pointerStyles} my="0">
                    Inventory management systems for food suppliers
                  </Text>
                </HStack>
                <HStack alignItems={"flex-start"}>
                  <Image src={vector} mt="7px" />
                  <Text {...pointerStyles} my="0">
                    Inventory management systems for food suppliers
                  </Text>
                </HStack>
              </VStack>
              <Button {...btnStyles}>Let’s Discuss a Project</Button>
            </Stack>
          </Flex>
        </GridItem>
        <GridItem colSpan={6} h="full" display={{ base: "none", md: "block" }}>
          <Stack
            alignItems="center"
            justifyContent={"center"}
            w="full"
            h="100%"
          >
            <Image src={SocialImg} maxW={{ md: "350px", lg: "500px" }} />
          </Stack>
        </GridItem>
      </Grid>
    </VStack>
  );
}
const headingStyles: HeadingProps = {
  fontFamily: "DM Sans",
  fontWeight: 700,
  fontSize: { base: "32px", md: "40px" },
  color: "#00164D",
  mb: "10px",
};
const textStyles: TextProps = {
  fontFamily: "DM Sans",
  fontWeight: 400,
  fontSize: { base: "16px", md: "20px" },
  lineHeight: { base: "26px", md: "36px" },
  color: "#2e2e2e",
  textAlign: "center",
  maxW: "692px",
};
const pointerStyles: TextProps = {
  fontFamily: "DM Sans",
  fontWeight: 400,
  fontSize: "18px",
  color: "#2E2E2E",
};
const spanStyles: TextProps = {
  fontFamily: "DM Sans",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "30px",
  color: "#0A4DF6",
};
const pointerHeadingStyles: HeadingProps = {
  fontFamily: "DM Sans",
  fontWeight: 700,
  fontSize: { base: "18px", md: "24px" },
  lineHeight: { base: "26px", md: "36px" },

  color: "#00164D",
  maxW: "500px",
};
const btnStyles: ButtonProps = {
  bg: "#032E9B",
  border: "none",
  rounded: "8px",
  fontWeight: 500,
  fontSize: "16px",
  color: "white",
  fontFamily: "DM Sans",
};
