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

  rounded: "8px",
  fontWeight: 500,
  fontSize: "16px",
  color: "#032E9B",
  fontFamily: "DM Sans",
  border: "1px solid #032E9B",
};
export default WhiteButton;
