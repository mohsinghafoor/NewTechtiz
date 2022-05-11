import { Heading, Text, VStack, HStack, Image, Flex } from "@chakra-ui/react";
import { useState, SetStateAction } from "react";
import Colors from "../../../Components/Constants/Colors";
import { Technology, TechStacks } from "./PageData";
import "../home.css";
import TechnologiesMbl from "./TechnologiesMbl";

const Technologies = () => {
  const [active, setActive] = useState(0);

  const handleTechStack = (e: SetStateAction<number>) => {
    setActive(e);
  };

  return (
    <>
      <TechnologiesMbl />
      <VStack
        w={"full"}
        mb="30px"
        className="technologies"
        display={{ base: "none", sm: "flex" }}
      >
        <Heading
          color="#032e9b"
          fontWeight={700}
          fontSize="40px"
          lineHeight="64px"
          marginTop="50px"
        >
          Technologies
        </Heading>
        <Text
          textAlign="center"
          margin="32px 0 60px !important"
          fontSize={"20px"}
          color="#2e2e2e"
        >
          We are a multi-platform app development company with <br /> modern
          technologies in our arsenal
        </Text>
        <Flex w="full" justifyContent="center">
          <VStack padding="0 80px" alignItems="center" maxW={"1440px"} flex="1">
            <HStack w="100%" justifyContent="space-around" mb="60px">
              {Technology.map((item, index) => (
                <Text
                  key={index}
                  color={
                    index === active ? Colors.blueSecondary : Colors.disabled
                  }
                  onClick={() => handleTechStack(index)}
                  cursor="pointer"
                  fontWeight={index === active ? 700 : 400}
                  fontSize="24px"
                  lineHeight="32px"
                >
                  {item}
                </Text>
              ))}
            </HStack>
            {TechStacks.map((item, index) => (
              <HStack key={index} width="100%" alignItems="center">
                {index === active &&
                  Object.values(item)[0].map((tech: any) => (
                    <VStack p="0" w="25%">
                      <Image
                        src={tech.imageUrl}
                        alt="icon"
                        width="90px"
                        height="100px"
                        marginBottom="34px"
                      />
                      <Text
                        fontSize="24px"
                        lineHeight="32px"
                        color={Colors.subHeading}
                        fontWeight={500}
                      >
                        {tech.text}
                      </Text>
                    </VStack>
                  ))}
              </HStack>
            ))}
          </VStack>
        </Flex>
      </VStack>
    </>
  );
};

export default Technologies;
