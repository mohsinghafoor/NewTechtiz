import { Button as ChakraButton, ButtonProps, chakra } from "@chakra-ui/react";
const WhiteButton = ({ children, ...props }: ButtonProps) => {
  return (
    <ChakraButton role="group" {...props} {...btnStyles}>
      <chakra.span>{children}</chakra.span>
    </ChakraButton>
  );
};
const btnStyles: ButtonProps = {
  bg: "white",
  border: "none",
  rounded: "8px",
  fontWeight: 500,
  fontSize: "16px",
  color: "#032E9B",
  fontFamily: "DM Sans",
};
export default WhiteButton;
