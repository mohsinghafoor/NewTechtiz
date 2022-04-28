import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import logo from "../../assets/logowhite.png";
import linkedin from "../../assets/linkedin.svg";
import fb from "../../assets/facebook.svg";
import twitter from "../../assets/twiter.svg";
import clutch from "../../assets/clutch.png";
import instagram from "../../assets/instagram.png";
const data = [];
export default function SocialMedia() {
  return (
    <VStack align={"flex-start"} w="full" px="1">
      <Image src={logo} pb="35px" pt="20px" />
      <Text
        fontSize={{ base: "16px", lg: "16px" }}
        color="white"
        fontFamily={"DM Sans"}
        pb="30px"
      >
        Advancing beyond traditional software development practices and
        empowering your business with innovative digital solutions.
      </Text>
      <Box display={{ base: "none", sm: "block" }}>
        <Heading
          fontWeight={"600"}
          fontSize={{ base: "16px", lg: "18px" }}
          color="white"
          fontFamily={"DM Sans"}
          pb="10px"
        >
          Social Media
        </Heading>
        <HStack spacing={3}>
          <Image src={linkedin} />
          <Image src={twitter} />
          <Image src={fb} />
          <Image src={instagram} />
          <Image src={clutch} />
        </HStack>
      </Box>
    </VStack>
  );
}
