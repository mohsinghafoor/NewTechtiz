import introImg from "./assets/WebDev.png";
import frontendImg from "./assets/frontendImg.png";
import backendImg from "./assets/backendImg.png";
import fullstackImg from "./assets/fullstackImg.png";
import supportImg from "./assets/supportImg.png";
import bulb from "./assets/bulb.png";
import shield from "./assets/shield.png";
import customers from "./assets/customers.png";
import tools from "./assets/tools.png";
import Intro from "../Components/Intro";
import OurServices from "../Components/OurServices";
import { Heading, Stack } from "@chakra-ui/react";
import CrossFunctionalApps from "../Components/CrossFunctionalApps";
import Footer from "../../Footer";
const introData = [
  {
    img: introImg,
    heading: "Advance Beyond Traditional Web Design & Development",
    text: "We nurture innovative business ideas by making websites come alive",
  },
];
const servicesData = [
  {
    img: frontendImg,
    heading: `Frontend Development`,
    text: `Delivering a blend of aesthetic user experience and peak performance to keep your business ahead of the competition.  `,
    btntext: `Discuss Project`,
    left: true,
  },
  {
    img: backendImg,
    heading: `Backend Development`,
    text: `Making use of the latest tools and technologies to develop functional websites that perform as per your requirements.`,
    btntext: `Discuss Project`,
    left: false,
  },
  {
    img: fullstackImg,
    heading: `Full Stack Development`,
    text: `Focusing on developing industry-leading software to exceed clients’ expectations while ensuring optimization and security.`,
    btntext: `Discuss Project`,
    left: true,
  },
  {
    img: supportImg,
    heading: `Support and Maintenance`,
    text: `Providing technical support and maintenance services long after your tailor-made software is up and running. `,
    btntext: `Discuss Project`,
    left: false,
  },
];
const crossAppData = [
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
export default function WebDevelopment() {
  return (
    <Stack align={"center"}>
      {introData.map((introData, index) => (
        <Intro key={index} introData={introData} />
      ))}
      <Heading
        color="#00164D"
        fontWeight={"700"}
        fontSize={{ base: "28px", md: "36px" }}
        fontFamily={"DM Sans"}
        pb="50px"
        maxW={"750px"}
      >
        Our Services
      </Heading>
      {servicesData.map((servicesData, index) => (
        <OurServices key={index} servicesData={servicesData} />
      ))}
      <Heading
        color="#00164D"
        fontWeight={"700"}
        fontSize={{ base: "24px", md: "36px" }}
        fontFamily={"DM Sans"}
        py="30px"
        maxW={"750px"}
        textAlign={{ base: "center", md: "left" }}
      >
        Cross-Functional Web App Development to Unlock Infinite Possibilities
      </Heading>
      {crossAppData.map((crossAppData, index) => (
        <CrossFunctionalApps key={index} crossAppData={crossAppData} />
      ))}
      <Footer />
    </Stack>
  );
}
