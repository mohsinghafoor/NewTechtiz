import { Heading, VStack, HStack } from "@chakra-ui/react";
import Colors from "../../../Components/Constants/Colors";
import { EngagementModels } from "./PageData";
import EngagementCard from "./EngagementCard";

const EngagementModel = () => {
  return (
    <VStack w={"full"} padding="0 40px" marginBottom="70px">
      <Heading
        color={Colors.bluePrimary}
        fontWeight={700}
        fontSize="40px"
        lineHeight="64px"
        marginTop="50px"
      >
        Engagement Models
      </Heading>

      <HStack cursor="pointer" justifyContent="center">
        {EngagementModels.map((item, index) => (
          <EngagementCard
            heading={item.heading}
            text={item.text}
            key={index}
            icon={item.icon}
            index={index}
          />
        ))}
      </HStack>
    </VStack>
  );
};

export default EngagementModel;
