import { Heading, Stack, Text } from "@chakra-ui/react";

const data = [
  { name: "About Us", link: `#` },
  { name: "Industries", link: `#` },
  { name: "Portfolio", link: `#` },
  { name: "Contact Us", link: `#` },
];
export default function Company() {
  return (
    <Stack>
      <Heading
        fontSize={{ base: "12px", md: "16px", lg: "18px" }}
        fontWeight="600"
        color="white"
        fontFamily={"DM Sans"}
        pb="4"
      >
        Company
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
          pb="2"
        >
          {data.name}
        </Text>
      ))}
    </Stack>
  );
}
