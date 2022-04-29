import {
  Heading as ChakraHeading,
  HeadingProps,
  chakra,
} from "@chakra-ui/react";
const Heading = ({ children, ...props }: HeadingProps) => {
  return (
    <ChakraHeading role="group" {...props} {...btnStyles}>
      <chakra.span>{children}</chakra.span>
    </ChakraHeading>
  );
};
const btnStyles: HeadingProps = {
  fontFamily: "DM Sans",
  fontWeight: 700,
  fontSize: { base: "32px", md: "48px" },
  lineHeight: { base: "40px", md: "60px" },
  color: "#032E9B",
  mb: "20px",
};
export default Heading;
