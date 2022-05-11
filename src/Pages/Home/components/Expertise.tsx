import { Heading, Text, VStack, HStack, Flex, Grid } from "@chakra-ui/react";
import Colors from "../../../Components/Constants/Colors";
import ExpertiseCard from "./ExpertiseCard";
import { OurExpertise } from "./PageData";

const Expertise = () => {
  return (
    <Flex justifyContent="center" w={"100%"}>
      <VStack w={"full"} mt="50px" mb="50px" maxW={"1440px"} flex="1">
        <Heading
          color={Colors.bluePrimary}
          fontWeight={700}
          fontSize="40px"
          lineHeight="64px"
          marginTop="50px"
        >
          Our Expertise
        </Heading>
        <Text
          textAlign="center"
          margin="32px 0 20px !important"
          fontSize={"20px"}
          color="#2e2e2e"
          pb="30px"
        >
          We aim to design and develop exceptional digital solutions for
          businesses <br />
          and help them achieve organizational goals
        </Text>

        <Grid templateColumns="repeat(12, 1fr)" gap={10} mx="3">
          {OurExpertise.map((item, index) => (
            <ExpertiseCard
              index={index}
              text={item.text}
              icon={item.icon}
              color={item.clr}
              count={item.count}
              key={index}
            />
          ))}
        </Grid>
      </VStack>
    </Flex>
  );
};

export default Expertise;
