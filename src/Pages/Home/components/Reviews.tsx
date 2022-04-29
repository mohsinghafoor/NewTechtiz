import {
  Box,
  Circle,
  ColorModeScript,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { images } from "../../../assets/images";
import Colors from "../../../Components/Constants/Colors";

const Reviews = () => {
  return (
    <VStack bg={Colors.blueBg} p="0px 40p 40px">
      <Heading
        color={Colors.bluePrimary}
        fontWeight={700}
        fontSize="40px"
        lineHeight="64px"
        marginTop="50px"
        textAlign="center"
        w="full"
      >
        Feedback from Satisfied Clients
      </Heading>

      <HStack paddingTop="40px" paddingBottom="40px" justifyContent="center">
        <VStack>
          <Box
            bg={Colors.white}
            p="22px"
            border="1px solid"
            borderColor={Colors.lightPurple}
            borderRadius="7px"
            boxShadow="0px 0px 5px rgba(0, 0, 0, 0.2)"
          >
            <HStack>
              <Circle bg={Colors.lightBlue}>
                <Image src={images.person} />
              </Circle>
              <VStack alignItems="flex-start" px="24px">
                <Text fontSize="20px" lineHeight="27px" fontWeight={700}>
                  Norbu Snow-Shiva
                </Text>
                <Text
                  fontSize="14px"
                  lineHeight="27px"
                  color={Colors.greyLight}
                >
                  COO World Tree Consulting
                </Text>
              </VStack>
            </HStack>
          </Box>

          <Box
            bg="transparent"
            p="22px"
            border="1px solid"
            borderColor={Colors.lightPurple}
            borderRadius="7px"
            boxShadow="0px 0px 5px rgba(0, 0, 0, 0.2)"
          >
            <HStack>
              <Circle bg={Colors.imgBg}>
                <Image src={images.person} />
              </Circle>
              <VStack alignItems="flex-start" px="24px">
                <Text fontSize="20px" lineHeight="27px" fontWeight={700}>
                  Norbu Snow-Shiva
                </Text>
                <Text
                  fontSize="14px"
                  lineHeight="27px"
                  color={Colors.greyLight}
                >
                  COO World Tree Consulting
                </Text>
              </VStack>
            </HStack>
          </Box>
        </VStack>
        <Box w="50%" paddingLeft="100px">
          <Image src={images.quotes} height="46px" width="56px" />

          <Text
            fontSize="32px"
            lineHeight="48px"
            fontWeight={500}
            color={Colors.subHeading}
          >
            They have gone above and beyond to make very tight deadlines and
            exceed my expectations.
          </Text>
        </Box>
      </HStack>

      <HStack>
        <Image src={images.clutch} />
        <Text pl="20px">
          Rated 5/5 on Clutch for Web development, mobile <br /> development,
          and design services.
        </Text>
      </HStack>
    </VStack>
  );
};

export default Reviews;
