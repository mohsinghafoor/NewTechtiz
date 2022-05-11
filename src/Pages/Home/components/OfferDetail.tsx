import {
  Box,
  Button,
  HStack,
  Heading,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import Colors from "../../../Components/Constants/Colors";

interface Props {
  heading: string;
  text: string;
  imageUrl: string;
}

const OfferDetail = (props: Props) => {
  const { heading, text, imageUrl } = props;

  return (
    <HStack justifyContent={"flex-end"} pl={{ base: "10px", md: "60px" }}>
      <VStack
        p="53px 84px 53px 60px"
        border="1px solid"
        borderColor={Colors.lightPurple}
        // mr={{base:0,md:"-80px"}}
        zIndex="1"
        bg={Colors.white}
        maxWidth="713px"
        borderRadius="8px"
        alignItems="flex-start"
        width={{ base: "90%", md: "62%" }}
        pos={{ base: "absolute", md: "static" }}
        mr={{ base: "40px", md: "-82px" }}
      >
        <Heading textAlign="start">{heading}</Heading>
        <Text textAlign="start" m="20px 0 15px !important">
          {text}
        </Text>
        <Button
          variant="outline"
          bg={Colors.white}
          color={Colors.blueSecondary}
          _hover={{
            bg: Colors.blueSecondary,
            borderColor: "teal.700",
            color: Colors.white,
          }}
        >
          Get Started
        </Button>
      </VStack>
      <Box
        w={{ base: "60%", md: "50%" }}
        // pos={{ base: "absolute", md: "relative" }}
      >
        <Image src={imageUrl} height={"440px"} />
      </Box>
    </HStack>
  );
};

export default OfferDetail;
