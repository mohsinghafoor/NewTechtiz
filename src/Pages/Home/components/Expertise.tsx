import { Heading, Text, VStack, HStack, Box, Image } from "@chakra-ui/react";
import Colors from "../../../Components/Constants/Colors";
import { OurExpertise } from "./PageData";

const Expertise = () => {
  return (
    <VStack w={"full"} mt="50px">
      <Heading
        color={Colors.bluePrimary}
        fontWeight={700}
        fontSize="40px"
        lineHeight="64px"
        marginTop="50px"
      >
        Our Expertise
      </Heading>
      <Text textAlign="center" margin="32px 0 20px !important">
        We aim to design and develop exceptional digital solutions for
        businesses <br />
        and help them achieve organizational goals
      </Text>
      <HStack
        shouldWrapChildren
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
      >
        {OurExpertise.map((item, index) => (
          <Box
            key={index}
            boxShadow="0px 4px 24px rgba(0, 0, 0, 0.07)"
            borderRadius="12px"
            w="212px"
            h="230px"
            padding="43px 0px 43px 21px"
            margin="30px 39.5px 30px 31.5px"
            border="1px solid transparent"
            _hover={{
              border: "1px solid",
              borderColor: Colors.blueSecondary,
            }}
          >
            <Image
              src={item.icon}
              alt="icon"
              filter={
                index === 0
                  ? "invert(30%) sepia(30%) saturate(6238%) hue-rotate(344deg) brightness(108%) contrast(98%)"
                  : "auto"
              }
            />

            <Text
              fontSize="20px"
              lineHeight="28px"
              color={Colors.RegularText}
              marginTop="54px"
            >
              {item.text}
            </Text>
          </Box>
        ))}
      </HStack>
    </VStack>
  );
};

export default Expertise;
