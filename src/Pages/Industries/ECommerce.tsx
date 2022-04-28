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
import vector from "../../assets/Vectorwhite.png";
import ECommerceImg from "../../assets/ECommerceImg.png";

export default function ECommerce() {
  return (
    <VStack pt="50px" bg="#E7EDFF" pb="100px" px="10px">
      <Heading {...headingStyles}>E-commerce</Heading>
      <Text {...textStyles}>
        Delivering success to E-commerce platforms with interactive web designs
        that never go out of style.
      </Text>
      <HStack bg="#032E9B" px="15px" py="40px" rounded="20px">
        <Stack alignItems="center">
          <Stack ml={{ base: "0px", lg: "50px" }}>
            <Text {...spanStyles}>What we Offer</Text>
            <Heading {...pointerHeadingStyles}>
              Development of secure E-commerce platforms that grow and sell
            </Heading>
          </Stack>
          <Stack pb="40px">
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
          </Stack>
          <Button {...btnStyles}>Let’s Discuss a Project</Button>
        </Stack>
        <Stack display={{ base: "none", md: "block" }}>
          <Image src={ECommerceImg} />
        </Stack>
      </HStack>
    </VStack>
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
  fontSize: { base: "18px", md: "20px" },
  lineHeight: { base: "26px", md: "36px" },
  color: "#2e2e2e",
  textAlign: "center",
  maxW: "638px",
  h: "120px",
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
  h: { base: "130px", md: "100px" },
  maxW: "500px",
};
const btnStyles: ButtonProps = {
  bg: "white",
  border: "none",
  p: "16px 40px",
  rounded: "8px",
  fontWeight: 700,
  fontSize: "16px",
  color: "#032E9B",
  fontFamily: "DM Sans",
};
