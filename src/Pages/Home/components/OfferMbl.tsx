import { Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { offerData } from "./PageData";

export default function OfferMbl() {
  return (
    <>
      {offerData.map((item, index) => (
        <VStack display={{ base: "flex", sm: "none" }} px="3" py="40px">
          <Image src={item.icon} pb="30px" />
          <Heading fontSize={"24px"} color="#2e2e2e" pb="4">
            {item.icontext}
          </Heading>
          <Text fontSize={"18px"} color="#080330" align={"center"} pb="5">
            {item.text}
          </Text>
          <Button
            color="#032e9b"
            border="1px solid #032e9b"
            w="50%"
            fontSize={"16px"}
            bg="white"
            h="50px"
          >
            Get Started
          </Button>
        </VStack>
      ))}{" "}
    </>
  );
}
