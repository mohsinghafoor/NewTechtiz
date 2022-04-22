import frontendImg from "../../assets/frontendImg.png";
import backendImg from "../../assets/backendImg.png";
import fullstackImg from "../../assets/fullstackImg.png";
import supportImg from "../../assets/supportImg.png";
import ServicesCard from "./ServicesCard";
import { Heading, Stack } from "@chakra-ui/react";

const data = [
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
export default function OurServices() {
  return (
    <Stack align={"center"} px="3">
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
      {data.map((data, index) => (
        <ServicesCard data={data} />
      ))}
    </Stack>
  );
}
