import { Button as ChakraButton, ButtonProps, chakra } from "@chakra-ui/react";
const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <ChakraButton role="group" {...props} {...btnStyles}>
      <chakra.span>{children}</chakra.span>
    </ChakraButton>
  );
};
const btnStyles: ButtonProps = {
  bg: "#032E9B",
  border: "none",
  rounded: "8px",
  fontWeight: 500,
  fontSize: "16px",
  color: "white",
  fontFamily: "DM Sans",
};
export default Button;
