import {
  Image,
  HStack,
  Stack,
  Heading,
  Text,
  Box,
  Flex,
  Spacer,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Key } from "react";

export default function ProjectDetails({ data }: any) {
  // const points[]:any=data.functionality
  console.log("Data", data);

  return (
    <Stack>
      <Flex
        bg={data.maincolor}
        maxW="1050px"
        direction={data.left ? "row" : "row-reverse"}
      >
        <Image px="30px" py="20px" src={data.detailImg} />
        <Box
          background={data.detailcolor}
          borderRadius={data.left ? "59px 0px 0px 0px" : " 0px 87px 0px 0px"}
          px="30px"
          py="72px"
          h="100%"
        >
          <HStack
            background={data.logobg}
            borderRadius="12px"
            pos="absolute"
            py="3"
            px="30px"
            alignSelf={"flex-end"}
            mt="-120px"
            ml="10rem"
          >
            <Image src={data.logo} />
          </HStack>
          <Heading color={data.textClr} fontSize="40px" pb="4">
            {data.heading}
          </Heading>
          <Text maxW="500px" color={data.textClr} fontSize={"22px"}>
            {data.text}
          </Text>
        </Box>
      </Flex>
      {/* <HStack pt="100px"> */}
      <Grid templateColumns="repeat(12, 1fr)" gap={0} py="100px">
        <GridItem colSpan={{ base: 12, md: 7 }} px={{ base: "0", lg: "4" }}>
          <Stack h="100%" justify={"center"}>
            <Stack bg={data.maincolor} rounded="19px" px="5" py="30px">
              <Heading fontSize={"32px"} color="#1E2D2C" h="50px">
                Functionalities
              </Heading>
              {data.functionality.map(
                (
                  subdata: {
                    text: string;
                  },
                  index: Key | null | undefined
                ) => (
                  <HStack maxW="500px" align={"flex-start"} key={index}>
                    <Image src={data.pointer} mt="2" />
                    <Text fontSize={"18px"} color="#2e2e2e">
                      {subdata.text}
                    </Text>
                  </HStack>
                )
              )}
            </Stack>
          </Stack>
        </GridItem>
        {/* <Stack bg="red" w=""> */}
        <GridItem colSpan={5} h="100%">
          <Stack w="full" align={"center"}>
            <Image w="220px" src={data.funcImg} />
          </Stack>
        </GridItem>
      </Grid>
    </Stack>
  );
}
