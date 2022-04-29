import * as React from "react";
import {
  Button,
  ChakraProvider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";

export default function DropDown() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Menu isOpen={isOpen} onClose={onClose}>
      <MenuButton
        onMouseOver={onOpen}
        as={Button}
        color={location.pathname === "/" ? "white" : "#032E9B"}
        rightIcon={<ChevronDownIcon />}
        _hover={{ color: "#f5c145 ", bg: "transparent" }}
        _focus={{ border: "none" }}
        _active={{ bg: "transparent" }}
        bg="transparent"
        fontSize={"17px"}
        pl="-10px"
      >
        Services
      </MenuButton>
      <MenuList
        bg="white"
        border="white"
        onMouseOver={onOpen}
        onMouseOut={onClose}
      >
        <MenuItem
          fontSize="16px"
          color="#032E9B"
          onClick={() => navigate("/mobileapp")}
        >
          Mobile Development
        </MenuItem>
        <MenuItem
          fontSize="16px"
          color="#032E9B"
          onClick={() => navigate("/webapp")}
        >
          Web Development
        </MenuItem>

        <MenuItem
          fontSize="16px"
          color="#032E9B"
          onClick={() => navigate("/ui")}
        >
          UI/UX
        </MenuItem>
        <MenuItem
          fontSize="16px"
          color="#032E9B"
          onClick={() => navigate("/sqa")}
        >
          SQA
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
