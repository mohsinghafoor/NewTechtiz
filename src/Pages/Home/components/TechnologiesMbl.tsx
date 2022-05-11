import {
  Box,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import android from "../../../assets/android.svg";
import flutter from "../../../assets/flutter.svg";
import apple from "../../../assets/apple.svg";
import react from "../../../assets/react.jpg";
import dart from "../../../assets/dart.png";
import css from "../../../assets/css.svg";
import html from "../../../assets/html.png";
import bootstrap from "../../../assets/bootstrap.png";
import reactNative from "../../../assets/reactNative.png";
import node from "../../../assets/node.png";
const appData = [
  {
    icon: android,
    text: "android",
  },
  {
    text: "flutter",
    icon: flutter,
  },
  {
    text: "IOS",
    icon: apple,
  },
  {
    text: "React Native",
    icon: react,
  },
];
const webData = [
  {
    text: "html",
    icon: html,
  },
  {
    text: "CSS",
    icon: css,
  },
  {
    text: "Bootstrap",
    icon: bootstrap,
  },
  {
    text: "React JS",
    icon: react,
  },
];
const backendData = [
  {
    text: "Dart",
    icon: dart,
  },
  {
    text: "Node",
    icon: node,
  },
];
export default function TechnologiesMbl() {
  return (
    <Stack display={{ base: "flex", sm: "none" }} mx="5">
      <Heading
        color="#032e9b"
        fontWeight={700}
        fontSize="40px"
        lineHeight="64px"
        marginTop="50px"
        textAlign={"center"}
      >
        Technologies
      </Heading>
      <Text
        textAlign="center"
        margin="32px 0 60px !important"
        fontSize={"20px"}
        color="#2e2e2e"
      >
        We are a multi-platform app development company with <br /> modern
        technologies in our arsenal
      </Text>
      <Stack>
        <Heading
          color="#032e9b"
          fontWeight={700}
          fontSize="24px"
          lineHeight="64px"
          marginTop="50px"
          textAlign={"left"}
        >
          Mobile App
        </Heading>
        <Box h="1px" bg="#032e9b" w="full" mb="5" />

        <HStack spacing={6} w="full" justify={"center"} h="140px" px="4">
          {appData.map((data, i) => (
            <VStack>
              <Image src={data.icon} w="50px" h="50px" />
              <Text fontSize={"13px"} color="#2e2e2e" py="3">
                {data.text}
              </Text>
            </VStack>
          ))}
        </HStack>
      </Stack>
      <Stack>
        <Heading
          color="#032e9b"
          fontWeight={700}
          fontSize="24px"
          lineHeight="64px"
          marginTop="50px"
          textAlign={"left"}
        >
          Frontend Development
        </Heading>
        <Box h="1px" bg="#032e9b" w="full" mb="5" />

        <HStack spacing={6} w="full" px="4" h="120px">
          {webData.map((data, i) => (
            <VStack>
              <Image src={data.icon} w="50px" h="50px" />
              <Text fontSize={"13px"} color="#2e2e2e">
                {data.text}
              </Text>
            </VStack>
          ))}
        </HStack>
      </Stack>{" "}
      <Stack>
        <Heading
          color="#032e9b"
          fontWeight={700}
          fontSize="24px"
          lineHeight="64px"
          marginTop="50px"
          textAlign={"left"}
        >
          Backend Development
        </Heading>
        <Box h="1px" bg="#032e9b" w="full" mb="5" />

        <HStack spacing={6} w="full" h="120px" px="4">
          {backendData.map((data, i) => (
            <VStack>
              <Image src={data.icon} w="50px" h="50px" />
              <Text fontSize={"13px"} color="#2e2e2e">
                {data.text}
              </Text>
            </VStack>
          ))}
        </HStack>
      </Stack>
    </Stack>
  );
}
