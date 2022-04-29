import Colors from "../../../Components/Constants/Colors";
import { Text, Box, Image, HStack } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  index: number;
  text: string;
  icon: string;
};

const ExpertiseCard = (props: Props) => {
  const { index, icon, text } = props;
  const [hover, setHover] = useState(false);

  const navigate = useNavigate();
  const handleClick = (e: number) => {
    switch (e) {
      case 0:
        navigate("/webapp");
        break;
      case 1:
        navigate("/mobileapp");
        break;
      case 2:
        navigate("/sqa");
        break;
      case 3:
        navigate("/ui");
        break;
    }
  };
  return (
    <Box
      key={index}
      boxShadow="0px 4px 24px rgba(0, 0, 0, 0.07)"
      borderRadius="12px"
      w="212px"
      h="250px"
      padding="43px 0px 43px 21px"
      margin="30px 39.5px 30px 31.5px"
      border="1px solid transparent"
      _hover={{
        border: "1px solid",
        borderColor: Colors.blueSecondary,
      }}
      pos="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => handleClick(index)}
    >
      <Image
        src={icon}
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
        {text}
      </Text>
      {hover && (
        <HStack pos="absolute" bottom="15px" color={Colors.blueSecondary}>
          <Text>Learn More</Text>
          <ArrowRightIcon fontSize="12px" />
        </HStack>
      )}
    </Box>
  );
};

export default ExpertiseCard;
