import { Flex, Heading } from "@chakra-ui/react";
import Colors from "../../Components/Constants/Colors";
import Footer from "../Footer";
import Banner from "./components/Banner";
import EngagementModel from "./components/EngagementModel";
import Expertise from "./components/Expertise";
import GrowBusiness from "./components/GrowBusiness";
import Offer from "./components/Offer";
import OurProjects from "./components/OurProjects";
import Reviews from "./components/Reviews";
import Technologies from "./components/Technologies";
import "./home.css";

const Home = () => {
  return (
    <>
      <Banner />
      <Flex w="100%" justify={"center"}>
        <Heading
          color={Colors.blueSecondary}
          fontWeight="bold"
          fontSize={{ base: "28px", md: "46pxpx", lg: "40px" }}
          lineHeight={{ base: "36px", md: "56px", lg: "64px" }}
          textAlign="center"
          my="70px"
          px={{ base: 2, sm: 9 }}
          maxWidth="1440px"
        >
          A software development company working with the most reliable
          tech-driven solutions
        </Heading>
      </Flex>
      <Offer />
      <GrowBusiness />
      <Expertise />
      {/* <OurProjects /> */}
      <Technologies />
      <EngagementModel />
      <Reviews />

      <Footer />
    </>
  );
};

export default Home;
