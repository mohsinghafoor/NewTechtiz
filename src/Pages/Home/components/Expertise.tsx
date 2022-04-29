import { Heading, Text, VStack, HStack } from "@chakra-ui/react";
import Colors from "../../../Components/Constants/Colors";
import ExpertiseCard from "./ExpertiseCard";
import { OurExpertise } from "./PageData";

const Expertise = () => {
  return (
    <VStack w={"full"} mt="50px" mb="50px">
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
          <ExpertiseCard
            index={index}
            text={item.text}
            icon={item.icon}
            key={index}
          />
        ))}
      </HStack>
    </VStack>
  );
};

export default Expertise;
