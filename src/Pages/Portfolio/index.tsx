import { Heading, Stack } from "@chakra-ui/react";
import React from "react";
import Business from "./Business";
import ProjectDetails from "./ProjectDetails";
import dashboard from "./assets/dashboard.png";
import reactlogo from "./assets/reactlogo.png";
import dashboard1 from "./assets/dashboard1.png";
import qartt1 from "./assets/qartt1.png";
import qartt2 from "./assets/qartt2.png";
import flutterlogo from "./assets/flutterlogo.png";
import pointer from "./assets/pointer.png";
const data = [
  {
    maincolor: "#DFDBC2",
    detailcolor: "#C4C4C4",
    logobg: "#1E2D2C",
    detailImg: dashboard,
    textClr: "#303030",
    left: true,
    heading: `dashboard.earth`,
    text: "It's an App that connecting people to local activities that address the realities of climate change in your Neighborhood. As pollution is affecting global environment,there is a dire need for providing insights to the community so that they can work together to enhance their surrounding environment. TechTiz systematically design Dashboard.earth app suggests appropriate actions that can assist you to convert your city’s audacious environment Goals into reality.",
    logo: reactlogo,
    funcImg: dashboard1,
    pointer: pointer,
    functionality: [
      {
        text: `Connects people to local activities that address the realities 
      of climate change in your neighborhood.`,
      },
      {
        text: `Suggests actions for securing abundant local water supplies.`,
      },
      {
        text: `Signifies ideas and practices for diverting landfill waste.`,
      },
    ],
  },
  {
    maincolor: "#FDB000",
    detailcolor: "#212239",
    logobg: "#FAFAFB",
    detailImg: qartt1,
    left: false,
    textClr: "white",
    heading: `qartt partner`,
    text: "Qartt is a UK-based delivery company that helps businesses to deliver and keep track of their orders. Due to coronavirus restrictions businesses become digital, there became the gap between interaction, the important package used to get delayed affecting businesses operations. TechTizh developed qatt partner that allows businesses delivering packages to make great money while keeping track of personal schedules. It also allows businesses to focus on their product,making life easier and saving from the hassle and expense of managing your own delivery team. ",
    logo: flutterlogo,
    funcImg: qartt2,
    pointer: pointer,
    functionality: [
      {
        text: `Displays orders with respective postcodes along with the time of order placement, order preparation, and delivery`,
      },
      {
        text: `Displays the driver’s location and ETA in real-time`,
      },
      {
        text: `Notifies the driver when they arrive at the location of delivery`,
      },
      {
        text: `Allows users to search postcodes and fill in user details to place customized orders`,
      },
      {
        text: `Displays orders that are in Queue, In-Progress, Delivered with complete order details`,
      },
    ],
  },
];
export default function index() {
  return (
    <Stack
      background=" linear-gradient(134.89deg, #EBF1FF 14.48%, rgba(244, 247, 255, 0) 87.06%)"
      align={"center"}
    >
      <Business />
      <Heading
        color="#00164D"
        fontWeight={"700"}
        fontSize={{ base: "28px", md: "40px" }}
        fontFamily={"DM Sans"}
        h="200px"
        maxW={"750px"}
      >
        Here’s a Glimpse of What We Do
      </Heading>
      {data.map((data, index) => (
        <ProjectDetails data={data} />
      ))}
    </Stack>
  );
}
