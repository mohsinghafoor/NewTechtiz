import {
  Box,
  Circle,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { images } from "../../../assets/images";
import Colors from "../../../Components/Constants/Colors";
import { clientData, clientReviews } from "./PageData";

const Reviews = () => {
  const [activeClient, setActiveClient] = useState(0);
  return (
    <VStack bg={Colors.blueBg} mt="30px" pb="60px">
      <Heading
        color={Colors.bluePrimary}
        fontWeight={700}
        fontSize="40px"
        lineHeight="64px"
        marginTop="80px"
        textAlign="center"
        w="full"
      >
        Feedback from Satisfied Clients
      </Heading>

      <HStack
        paddingTop="40px"
        paddingBottom="40px"
        justifyContent="center"
        marginTop="30px !important"
      >
        <VStack>
          {clientData.map((client, index) => (
            <Box
              key={index}
              bg={activeClient === index ? Colors.white : "transparent"}
              p="22px"
              border="1px solid"
              borderColor={Colors.lightPurple}
              borderRadius="7px"
              boxShadow="0px 0px 5px rgba(0, 0, 0, 0.2)"
              onClick={() => setActiveClient(index)}
              w="100%"
              mb="10px"
              cursor="pointer"
            >
              <HStack>
                <Circle bg={Colors.lightBlue}>
                  <Image src={images.person} />
                </Circle>
                <VStack alignItems="flex-start" px="24px">
                  <Text fontSize="20px" lineHeight="27px" fontWeight={700}>
                    {client.name}
                  </Text>
                  <Text
                    fontSize="14px"
                    lineHeight="27px"
                    color={Colors.greyLight}
                  >
                    {client.company}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          ))}
        </VStack>
        <Box w="50%" paddingLeft="100px">
          <Image src={images.quotes} height="46px" width="56px" />
          {clientReviews.map(
            (review, index) =>
              index === activeClient && (
                <Text
                  key={index}
                  fontSize="32px"
                  lineHeight="48px"
                  fontWeight={500}
                  pl="50px"
                  pt="20px"
                  color={Colors.subHeading}
                >
                  {review}
                </Text>
              )
          )}
        </Box>
      </HStack>

      <HStack mt="30px !important">
        <Image src={images.clutch} height="37px" />
        <Text
          pl="22px"
          fontWeight={500}
          fontSize="20px"
          lineHeight="27px"
          color={Colors.blueSecondary}
        >
          Rated 5/5 on Clutch for Web development, mobile <br /> development,
          and design services.
        </Text>
      </HStack>
    </VStack>
  );
};

export default Reviews;
