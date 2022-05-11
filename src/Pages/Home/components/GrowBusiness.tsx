import { MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Progress,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { images } from "../../../assets/images";
import Colors from "../../../Components/Constants/Colors";
import { GrowBusinessData, GrowBusinessImages } from "./PageData";

const GrowBusiness = () => {
  const [selectedImage, setSelectedImage] = useState<any>(0);
  const [expanded, setExpanded] = useState(false);

  return (
    <Flex justify="center">
      <VStack
        w="full"
        alignItems="center"
        justifyContent="center"
        maxWidth="1440px"
      >
        <Heading
          color={Colors.bluePrimary}
          fontWeight={700}
          fontSize={{ base: "32px", sm: "46px" }}
          marginTop="100px"
          textAlign={"center"}
        >
          How TechTiz Helps Your Business Grow
        </Heading>

        <HStack
          w="full"
          padding="20px"
          justifyContent={{ base: "start", md: "center" }}
          mt="50px !important"
        >
          <Box w={{ base: "100%", md: "50%" }}>
            <Accordion
              allowToggle
              w="100%"
              onChange={(e) => {
                if (e >= 0) {
                  setExpanded(true);
                  setSelectedImage(e);
                } else {
                  setExpanded(false);
                }
              }}
            >
              {GrowBusinessData.map((item, index) => (
                <>
                  {expanded && selectedImage === index && (
                    <Progress
                      value={
                        index === 0
                          ? 35
                          : index === 1
                          ? 55
                          : index === 2
                          ? 100
                          : 0
                      }
                      size="xs"
                      colorScheme="blue"
                    />
                  )}
                  <AccordionItem
                    key={index}
                    onClick={() => {
                      setSelectedImage(index);
                    }}
                  >
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <Text
                            color={Colors.blueSecondary}
                            fontSize={{ base: "18px", sm: "24px" }}
                            lineHeight="63.98px"
                          >
                            {item.heading}
                          </Text>
                        </Box>
                        <AccordionIcon
                          color={Colors.blueSecondary}
                          height="24px"
                          width="24px"
                        />
                      </AccordionButton>
                    </h2>
                    {item.list.map((listItem, index) => (
                      <AccordionPanel pb={4} key={index}>
                        <List display="flex" alignItems="flex-start">
                          <Image
                            src={images.listBullet}
                            marginTop="6px"
                            marginRight="20px"
                          />
                          <ListItem>
                            <Text fontSize="16px" lineHeight="30px">
                              {listItem}
                            </Text>
                          </ListItem>
                        </List>
                      </AccordionPanel>
                    ))}
                  </AccordionItem>
                </>
              ))}
            </Accordion>
          </Box>

          <Box paddingLeft="80px" display={{ base: "none", md: "block" }}>
            {GrowBusinessImages.map(
              (image, index) =>
                index === selectedImage && (
                  <Image
                    src={image}
                    alt="image"
                    key={index}
                    height="350px"
                    width="400px"
                  />
                )
            )}
          </Box>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default GrowBusiness;
