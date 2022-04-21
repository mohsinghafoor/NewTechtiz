import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Company from "./Company";
import ReachUs from "./ReachUs";
import Resources from "./Resources";
import Services from "./Services";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <Stack bg="#032E9B" w="full" px={{ base: "10px", xl: "130px" }} py="50px">
      <Grid templateColumns="repeat(12, 1fr)" gap={0}>
        <GridItem colSpan={{ base: 12, md: 4 }} px="4">
          <SocialMedia />
        </GridItem>
        <GridItem colSpan={{ base: 6, md: 2 }} pt="45px">
          <Company />
        </GridItem>
        <GridItem colSpan={{ base: 6, md: 2 }} pt="45px">
          <Services />
        </GridItem>
        <GridItem colSpan={{ base: 6, md: 2 }} pt="45px">
          <Resources />
        </GridItem>
        <GridItem colSpan={{ base: 6, md: 2 }} pt="45px">
          <ReachUs />
        </GridItem>
      </Grid>
      <Box h="2px" bg="white" w="full" mt="3" />
      <Flex justify={"center"} pt="2" w="full">
        <Text color="white">©Techtiz 2022. All right reserved</Text>
      </Flex>
    </Stack>
  );
}
