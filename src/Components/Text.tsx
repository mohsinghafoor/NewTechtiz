import { Text as ChakraText, TextProps, chakra } from "@chakra-ui/react";
const Text = ({ children, ...props }: TextProps) => {
  return (
    <ChakraText role="group" {...props} {...btnStyles}>
      <chakra.span>{children}</chakra.span>
    </ChakraText>
  );
};
const btnStyles: TextProps = {
  fontFamily: "DM Sans",
  fontWeight: 400,
  fontSize: { base: "18px", md: "24px" },
  lineHeight: { base: "30px", md: "36px" },
  color: "#032E9B",
  mb: "30px",
};
export default Text;
