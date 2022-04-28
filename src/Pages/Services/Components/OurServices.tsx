import ServicesCard from "./ServicesCard";
import { Stack } from "@chakra-ui/react";
export default function OurServices({ servicesData }: any) {
  return (
    <Stack align={"center"}>
      <ServicesCard servicesData={servicesData} />
    </Stack>
  );
}
