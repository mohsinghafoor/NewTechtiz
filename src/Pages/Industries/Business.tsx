import {
  Grid,
  GridItem,
  HeadingProps,
  TextProps,
  ButtonProps,
  Image,
  Box,
  Stack,
  Flex,
  Center,
} from "@chakra-ui/react";

import bgImg from "../../assets/Businessbg.png";
import businessImg from "../../assets/businessImg.png";
import Button from "../../Components/Button";
import Heading from "../../Components/Heading";
import Text from "../../Components/Text";

export default function IndustriesBusiness() {
  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      gap={0}
      bgImage={bgImg}
      bgSize="cover"
      alignItems={"center"}
      pt="150px"
    >
      <GridItem colSpan={{ base: 12, md: 6 }} pl="15px">
        <Stack alignItems={{ base: "center", md: "flex-end" }} w="full">
          <Box maxW="600px">
            <Heading>Providing Your Business the Competitive Edge</Heading>
            <Text>
              Cutting-edge web and mobile-based digital solutions for every
              industry.
            </Text>
            <Button>Let's Talk</Button>
          </Box>
        </Stack>
      </GridItem>
      <GridItem colSpan={6} display={{ base: "none", md: "block" }}>
        <Flex justifyContent={"center"}>
          <Image src={businessImg} w="full" maxW="550px" />
        </Flex>
      </GridItem>
    </Grid>
  );
}
const headingStyles: HeadingProps = {
  fontFamily: "DM Sans",
  fontWeight: 700,
  fontSize: { base: "32px", md: "40px" },
  lineHeight: { base: "40px", md: "60px" },
  color: "#032E9B",
  mb: "20px",
};
const textStyles: TextProps = {
  fontFamily: "DM Sans",
  fontWeight: 400,
  fontSize: { base: "18px", md: "24px" },
  lineHeight: { base: "30px", md: "36px" },
  color: "#032E9B",
  mb: "30px",
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
