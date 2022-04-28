import { Heading, Stack, Text } from "@chakra-ui/react";

const data = [
  { name: "Blogs", link: `#` },
  { name: "Career", link: `#` },
];
export default function Resources() {
  return (
    <Stack>
      <Heading
        fontSize={"18px"}
        fontWeight="600"
        color="white"
        fontFamily={"DM Sans"}
        pb="4"
      >
        Resources
      </Heading>
      {data.map((data, i) => (
        <Text
          key={i}
          onClick={() => window.open(data.link)}
          cursor="pointer"
          _hover={{ color: "orange" }}
          fontSize={{ base: "12px", md: "14px", lg: "16px" }}
          fontWeight="500"
          color="white"
          fontFamily={"DM Sans"}
          pb="2"
        >
          {data.name}
        </Text>
      ))}
    </Stack>
  );
}
