import { Heading, Text, VStack, HStack, Image } from "@chakra-ui/react";
import { useState } from "react";
import { IoIosArrowDropright, IoIosArrowDroprightCircle } from "react-icons/io";
import Colors from "../../../Components/Constants/Colors";

type Props = {
  index: number;
  heading: string;
  text: string;
  icon: string;
};

const EngagementCard = (props: Props) => {
  const { heading, index, text, icon } = props;

  const [showIcon, setShowIcon] = useState(false);

  return (
    <VStack
      alignItems="center"
      padding="50px 25px 25px 25px"
      border="1px solid transparent"
      width="35%"
      margin="50px 2%"
      borderBottom="10px solid transparent"
      _hover={{
        border: " 1px solid #B4C9FD",
        boxShadow: " 0px 0px 15px rgba(0, 0, 0, 0.13)",
        borderBottom: "10px solid  #032E9B",
      }}
      onMouseEnter={() => setShowIcon(true)}
      onMouseLeave={() => setShowIcon(false)}
    >
      <Image src={icon} alt="icon" width="206ox" height="160px" />
      <Text>{heading}</Text>

      <Text
        fontSize="20px"
        lineHeight="28px"
        color={Colors.RegularText}
        marginTop="34px"
        textAlign="center"
      >
        {text}
      </Text>
      <HStack paddingTop="20px">
        <Text
          fontWeight={500}
          fontSize="24px"
          lineHeight="64px"
          color={Colors.bluePrimary}
        >
          Get Started
        </Text>

        {showIcon ? (
          <IoIosArrowDroprightCircle fill={Colors.blueSecondary} size="24px" />
        ) : (
          <IoIosArrowDropright fill={Colors.blueSecondary} size="24px" />
        )}
      </HStack>
    </VStack>
  );
};

export default EngagementCard;
