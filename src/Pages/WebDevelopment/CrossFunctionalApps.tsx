import React from "react";
import bulb from "../../assets/bulb.png";
import shield from "../../assets/shield.png";
import customers from "../../assets/customers.png";
import tools from "../../assets/tools.png";
import { Grid, GridItem, Heading, Stack } from "@chakra-ui/react";
import CrossAppCard from "./CrossAppCard";
const data = [
  {
    logo: bulb,
    heading: `Convert Ideas into Applications`,
    text: `Developing customized MVP applications to kickstart your business while optimizing all functionalities for the future.`,
  },
  {
    logo: shield,
    heading: `Security-first Approach`,
    text: `Adhering to international coding standards while opening up doors to a streamlined and efficient business journey. `,
  },
  {
    logo: customers,
    heading: `Attracting Loyal Customers`,
    text: `Creating websites using the right technology stack to grab your customers’ attention and make them stay. `,
  },
  {
    logo: tools,
    heading: `Taking Your Business Forward`,
    text: `Incorporating feature updates seamlessly while maintaining the originality of your customized web application..`,
  },
];
export default function CrossFunctionalApps() {
  return (
    <Stack align={"center"} py="100px" px="3">
      <Stack w="73%" align={"flex-start"} pb="70px">
        <Heading
          color="#00164D"
          fontWeight={"700"}
          fontSize={{ base: "28px", md: "36px" }}
          fontFamily={"DM Sans"}
          pb="20px"
          maxW={"750px"}
        >
          Cross-Functional Web App Development to Unlock Infinite Possibilities
        </Heading>
      </Stack>
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
        {data.map((data, index) => (
          <GridItem colSpan={{ base: 12, md: 6 }}>
            <CrossAppCard data={data} />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
}
