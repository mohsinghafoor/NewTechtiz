import { Heading, Image, Stack, Text } from "@chakra-ui/react";

export default function CrossAppCard({ data }: any) {
  return (
    <Stack
      border=" 1px solid #B4C9FD"
      boxShadow="0px 0px 24px rgba(0, 0, 0, 0.12)"
      borderRadius="20px"
      maxW="550px"
      p="30px"
      h="100%"
    >
      <Image src={data.logo} maxW="50px" pb="30px" />
      <Heading
        color="#032E9B"
        fontWeight={"700"}
        fontSize={{ base: "24px", md: "30px" }}
        fontFamily={"DM Sans"}
        pb="30px"
      >
        {data.heading}
      </Heading>
      <Text
        color="#2E2E2E"
        fontWeight={"400"}
        fontSize={{ base: "18px", md: "24px" }}
        fontFamily={"DM Sans"}
        pb={{ base: "50px", md: "30px" }}
      >
        {data.text}
      </Text>
    </Stack>
  );
}
