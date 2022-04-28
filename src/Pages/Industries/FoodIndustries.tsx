import {
  Grid,
  GridItem,
  Heading,
  HeadingProps,
  Text,
  TextProps,
  Button,
  ButtonProps,
  Image,
  Box,
  Stack,
  Flex,
  VStack,
  HStack,
} from "@chakra-ui/react";
import foodImg from "../../assets/foodImg.png";
import vector from "../../assets/vector.png";

export default function FoodIndustries() {
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={0} pt="100px">
      <GridItem colSpan={6} display={{ base: "none", md: "block" }}>
        <Flex justifyContent={"flex-start"} h="100%">
          <Stack bg="#D1DEFF" py="50px" px="50px" justifyContent={"center"}>
            <Image src={foodImg} w="full" maxW="700px" />
          </Stack>
        </Flex>
      </GridItem>
      <GridItem colSpan={{ base: 12, md: 6 }} h="full">
        <Stack alignItems="center" px="5" w="full">
          <Box maxW="600px">
            <Heading {...headingStyles}>Food Industry</Heading>
            <Text {...textStyles}>
              TechTiz supports food producers and suppliers with revolutionary
              software engineered by innovative minds.
            </Text>
            <Text {...spanStyles}>What we Offer</Text>
            <Heading {...pointerHeadingStyles}>
              Development of software for management distribution of food
              supplies
            </Heading>
            <VStack alignItems="flex-start" mb="30px">
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
            <Button {...btnStyles}>Let's Talk</Button>
          </Box>
        </Stack>
      </GridItem>
    </Grid>
  );
}
const headingStyles: HeadingProps = {
  fontFamily: "DM Sans",
  fontWeight: 700,
  fontSize: { base: "28px", md: "40px" },
  lineHeight: "72px",
  color: "#032E9B",
};
const textStyles: TextProps = {
  fontFamily: "DM Sans",
  fontWeight: 400,
  fontSize: { base: "18px", md: "20px" },
  lineHeight: { base: "25px", md: "30px" },
  color: "#2E2E2E",
  mb: "30px",
};
const spanStyles: TextProps = {
  fontFamily: "DM Sans",
  fontWeight: 500,
  fontSize: "16px",
  color: "#0A4DF6",
  mb: "10px",
};
const pointerHeadingStyles: HeadingProps = {
  fontFamily: "DM Sans",
  fontWeight: 700,
  fontSize: { base: "20px", md: "24px" },
  lineHeight: { base: "25px", md: "36px" },
  color: "#00164D",
  mb: "20px",
};
const pointerStyles: TextProps = {
  fontFamily: "DM Sans",
  fontWeight: 400,
  fontSize: { base: "14px", md: "18px" },
  color: "#2E2E2E",
};
const btnStyles: ButtonProps = {
  bg: "#032E9B",
  border: "none",
  rounded: "8px",
  fontWeight: 500,
  fontSize: { base: "12px", md: "16px" },
  color: "white",
  fontFamily: "DM Sans",
};
