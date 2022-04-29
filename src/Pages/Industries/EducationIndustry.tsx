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
import educationImg from "../../assets/educationImg.png";

export default function EducationIndustry() {
  return (
    <VStack pt="150px" pb="100px">
      <Heading {...headingStyles}>Education Sector</Heading>
      <Text {...textStyles}>
        With digital learning becoming the new normal, TechTiz considers the
        needs of both teachers and students to create intuitive educational
        applications.
      </Text>
      <Grid templateColumns="repeat(12, 1fr)" gap={0} pt="100px">
        <GridItem colSpan={{ base: 12, md: 6 }} px="2">
          <Flex justifyContent={"center"}>
            <Stack
              bg="#D1DEFF"
              py="50px"
              px={{ base: "10px", md: "50px" }}
              alignItems="center"
              maxW="600px"
              borderRadius={"19px"}
            >
              <VStack alignItems="flex-start" mb="30px">
                <Text {...spanStyles}>What we Offer</Text>
                <Heading {...pointerHeadingStyles}>
                  Design, development, and implementation of educational
                  applications
                </Heading>
                <HStack alignItems={"flex-start"} h="40px">
                  <Image src={vector} mt="7px" />
                  <Text {...pointerStyles} my="0">
                    Interactive applications for toddlers
                  </Text>
                </HStack>
                <HStack alignItems={"flex-start"} h="40px">
                  <Image src={vector} mt="7px" />
                  <Text {...pointerStyles} my="0">
                    Custom-built applications
                  </Text>
                </HStack>
                <HStack alignItems={"flex-start"} h="40px">
                  <Image src={vector} mt="7px" />
                  <Text {...pointerStyles} my="0">
                    Applications for the distribution of educational content
                  </Text>
                </HStack>
                <HStack alignItems={"flex-start"} h="40px">
                  <Image src={vector} mt="7px" />
                  <Text {...pointerStyles} my="0">
                    Learning Management Software
                  </Text>
                </HStack>
              </VStack>
              <Button {...btnStyles}>Let’s Discuss a Project</Button>
            </Stack>
          </Flex>
        </GridItem>
        <GridItem colSpan={6} h="full" display={{ base: "none", md: "block" }}>
          <Stack
            // justifyContent={"flex-end"}
            alignItems="center"
            justifyContent={"center"}
            w="full"
            h="100%"
          >
            <Image src={educationImg} maxW={{ md: "350px", lg: "500px" }} />
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
  lineHeight: "72px",
  color: "#00164D",
};
const textStyles: TextProps = {
  fontFamily: "DM Sans",
  fontWeight: 500,
  fontSize: { base: "16px", md: "20px" },
  lineHeight: { base: "28px", md: "36px" },
  color: "#2e2e2e",
  textAlign: "center",
  maxW: "692px",
};
const pointerStyles: TextProps = {
  fontFamily: "DM Sans",
  fontWeight: 400,
  fontSize: { base: "16px", md: "18px" },

  // lineHeight: "40px",
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
  fontSize: { base: "20px", md: "24px" },
  lineHeight: { base: "28px", md: "36px" },

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
