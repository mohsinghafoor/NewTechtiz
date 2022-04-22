import { Heading, Stack, Text } from "@chakra-ui/react";

const data = [
  { name: "Mobile App Development", link: `#` },
  { name: "Web Development", link: `#` },
  { name: "UI/UX Design", link: `#` },
  { name: "SQA", link: `#` },
];
export default function Services() {
  return (
    <Stack>
      <Heading
        fontSize={"18px"}
        fontWeight="600"
        color="white"
        fontFamily={"DM Sans"}
        pb={{ base: 1, md: "4" }}
      >
        Services
      </Heading>
      {data.map((data, i) => (
        <Text
          key={i}
          onClick={() => window.open(data.link)}
          cursor="pointer"
          _hover={{ color: "orange" }}
          fontSize={{ base: "12px", md: "14px", lg: "16px" }}
          fontWeight="400"
          color="white"
          fontFamily={"DM Sans"}
          maxW={{ base: "145px", md: "100px", lg: "140px" }}
          pb="2"
        >
          {data.name}
        </Text>
      ))}
    </Stack>
  );
}
