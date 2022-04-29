import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";
const data = [
  { icon: <AiOutlineMail />, link: `#`, text: "contact@techtiz.co" },
  { icon: <FiPhone />, link: `#`, text: "+92 321 4641094" },
  { icon: <ImLocation2 />, link: "#", text: "Our location" },
];
export default function ReachUs() {
  return (
    <Stack>
      <Heading fontSize={"18px"} fontWeight="600" color="white" pb="4">
        Reach Us
      </Heading>
      {data.map((data, i) => (
        <HStack align={"flex-start"}>
          <Box
            key={i}
            color="white"
            fontSize={{ base: "16px", md: "20px" }}
            mt={{ base: "2px", md: "6px" }}
          >
            {data.icon}
          </Box>
          <Text
            key={i}
            onClick={() => window.open(data.link)}
            cursor="pointer"
            _hover={{ color: "orange" }}
            fontSize={{ base: "12px", md: "14px", lg: "16px" }}
            fontWeight="500"
            color="white"
            pb="2"
            maxW={{ base: "100px", lg: "140px" }}
          >
            {data.text}
          </Text>
        </HStack>
      ))}
    </Stack>
  );
}
