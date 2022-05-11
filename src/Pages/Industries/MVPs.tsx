import {
  ButtonProps,
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
import React from "react";
import vector from "../../assets/Vectorwhite.png";
import mvpImg from "../../assets/mvpImg.png";
import dotImg from "../../assets/mvpdots.png";
import blockImg from "../../assets/blocksImg.png";

import WhiteButton from "../../Components/ButtonWhite";

export default function MVPs() {
  return (
    <Stack align={"center"} px="1" mb="30px">
      <HStack maxW="950px" spacing={{ base: "none", md: "150px" }}>
        <Image src={blockImg} display={{ base: "none", md: "block" }} />
        <VStack alignItems={{ base: "center", md: "flex-start" }}>
          <Heading {...headingStyles}>MVPs for Startups</Heading>
          <Text {...textStyles}>
            Empowering startups with MVPs specifically tailored to redefine
            their digital identity and establish dominance.{" "}
          </Text>
        </VStack>
      </HStack>
      <HStack maxW="1050px" spacing={0}>
        <Grid templateColumns="repeat(12, 1fr)" gap={0}>
          <GridItem
            colSpan={{ base: 12, md: 6 }}
            bg="#032E9B"
            py="50px"
            px="50px"
            alignItems="center"
            maxW="590px"
            borderLeftRadius={"18px"}
            borderRadius={{ base: "18px", md: "0px" }}
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
            </VStack>
            <WhiteButton>Let’s Discuss a Project</WhiteButton>
          </GridItem>
          <GridItem
            display={{ base: "none", md: "block" }}
            borderRightRadius={"18px"}
            bg="#FCFDFF"
            colSpan={{ base: 12, md: 6 }}
            boxShadow="0px 4px 14px rgba(180, 201, 253, 0.7)"
            alignItems={"center"}
          >
            <Stack alignItems={"center"}>
              <Stack w="full" alignItems={"flex-end"}>
                <Image src={dotImg} maxW="150px" />
              </Stack>
              <Image src={mvpImg} maxW={"300px"} />
            </Stack>
          </GridItem>
        </Grid>
      </HStack>
    </Stack>
  );
}
const headingStyles: HeadingProps = {
  fontFamily: "DM Sans",
  fontWeight: 700,
  fontSize: { base: "28px", md: "40px" },
  lineHeight: "72px",
  color: "#00164D",
};
const textStyles: TextProps = {
  fontFamily: "DM Sans",
  fontWeight: 400,
  fontSize: { base: "16px", md: "20px" },
  color: "#2E2E2E",
  textAlign: { base: "center", md: "left" },
  pb: "20px",
};
const pointerStyles: TextProps = {
  fontFamily: "DM Sans",
  fontWeight: 400,
  fontSize: "18px",
  color: "white",
};
const spanStyles: TextProps = {
  fontFamily: "DM Sans",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "30px",
  color: "white",
};
const pointerHeadingStyles: HeadingProps = {
  fontFamily: "DM Sans",
  fontWeight: 700,
  fontSize: "24px",
  lineHeight: "36px",
  color: "white",
  pb: "30px",
  maxW: "500px",
};
const btnStyles: ButtonProps = {
  bg: "white",
  border: "none",

  rounded: "8px",
  fontWeight: 500,
  fontSize: "16px",
  color: "#032E9B",
  fontFamily: "DM Sans",
};
