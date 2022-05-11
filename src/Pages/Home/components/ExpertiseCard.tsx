import Colors from "../../../Components/Constants/Colors";
import {
  Text,
  Box,
  Image,
  HStack,
  VStack,
  Heading,
  Stack,
  Center,
  GridItem,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  index: number;
  text: string;
  icon: string;
  color: string;
  count: string;
};

const ExpertiseCard = (props: Props) => {
  const { index, icon, text, color, count } = props;
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
    <GridItem colSpan={{ base: 12, sm: 6, lg: 3 }} mx="3" cursor={"pointer"}>
      <Stack w="full" align={"center"}>
        <Stack
          w={{ base: "300px", sm: "250px" }}
          minH="320px"
          maxH="320px"
          align={"center"}
        >
          <Stack
            bg={color}
            clipPath=" polygon( 50% 0, 100% 0%, 100% 75%, 50% 100%, 0 75%, 0 0% )"
            h="100px"
            w="100px"
            justify={"center"}
            align="center"
            position={"absolute"}
            alignSelf="flex-end"
            // justifyContent={"flex-end"}
            borderTopRightRadius="12px"
          >
            <Text fontSize={"30px"} color="white" fontWeight={"bold"}>
              {count}
            </Text>
          </Stack>
          <VStack
            key={index}
            p="8"
            mt="0 !important"
            w={{ base: "300px", sm: "250px" }}
            minH="320px"
            maxH="320px"
            boxShadow="0px 4px 24px rgba(0, 0, 0, 0.07)"
            borderRadius="12px"
            border="1px solid transparent"
            maxW="340px"
            _hover={{
              border: "1px solid",
              borderColor: Colors.blueSecondary,
            }}
            align="flex-start"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => handleClick(index)}
          >
            <Image
              src={icon}
              alt="icon"
              pb="12"
              filter={
                index === 0
                  ? "invert(30%) sepia(30%) saturate(6238%) hue-rotate(344deg) brightness(108%) contrast(98%)"
                  : "auto"
              }
            />

            <Text
              fontSize="20px"
              lineHeight="28px"
              fontWeight="500"
              color="#535353"
              marginTop="54px"
              maxW="200px"
              h="120px"
            >
              {text}
            </Text>

            <Heading
              fontSize={"15px"}
              fontWeight="600"
              color={color}
              _hover={{ color: "#032E9B" }}
              cursor="pointer"
            >
              Learn More
            </Heading>
          </VStack>
        </Stack>
      </Stack>
    </GridItem>
  );
};

export default ExpertiseCard;
