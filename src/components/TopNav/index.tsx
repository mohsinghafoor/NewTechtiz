import { Text, TextProps, Box, HStack } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import Colors from "../Constants/Colors";
import { FaChevronDown } from "react-icons/fa";
import DropDown from "./DropDown";
const NavItems = [
  { name: "About Us", path: "/aboutus" },
  { name: "Services", path: "/#", icon: <FaChevronDown /> },
  { name: "Industries", path: "/industries" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Careers", path: "/careers" },
  { name: "Blogs", path: "/careers" },
];

const TopNav = (offset: any) => {
  const location = useLocation();
  let currentPage = location.pathname.split("/")[1];
  currentPage = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  const textStyles: TextProps = {
    marginRight: { base: "56px", md: "30px" },
    fontSize: "17px",
    fontWeight: "600",
    _hover: { color: "#f5c145" },
  };

  return (
    <HStack>
      {NavItems.map((item, index) =>
        index !== 1 ? (
          <Link to={item.path} key={index} style={{ width: "130px" }}>
            <Text
              {...textStyles}
              color={
                location.pathname === "/" || offset > 80 ? "white" : "#032E9B"
              }
            >
              {item.name}
            </Text>

            {(currentPage === item.name ||
              (currentPage === "" && item.name === "Home")) && (
              <Box bgColor={Colors.white} w="33%" h="2px"></Box>
            )}
          </Link>
        ) : (
          <DropDown />
        )
      )}
    </HStack>
  );
};

export default TopNav;
