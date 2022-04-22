import { Stack, Heading, Text, HStack, Image } from "@chakra-ui/react";
import React from "react";
import Button from "../../Components/Button";
import WhiteButton from "../../Components/ButtonWhite";
import introImg from "../../assets/Intro.png";
export default function Intro() {
  return (
    <Stack align={"center"} pb={"100px"}>
      <Heading
        maxW="750px"
        textAlign="center"
        fontSize={{ base: "32px", md: "48px" }}
        color="#032e9b"
        fontWeight={"700"}
        fontFamily="DM Sans"
      >
        Advance Beyond Traditional Web Design & Development
      </Heading>
      <Text
        maxW="430px"
        textAlign="center"
        fontSize={{ base: "18px", md: "24px" }}
        color="#032e9b"
        fontWeight={"400"}
        fontFamily="DM Sans"
        py="30px"
      >
        We nurture innovative business ideas by making websites come alive
      </Text>

      <Button>Get Started</Button>

      <Image src={introImg} py="40px" display={{ base: "none", md: "block" }} />
    </Stack>
  );
}
