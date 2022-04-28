import { Grid, GridItem, Stack } from "@chakra-ui/react";
import CrossAppCard from "./CrossAppCard";
export default function CrossFunctionalApps({ crossAppData }: any) {
  return (
    <Stack align={"center"} px="3" py="10px" h="100%">
      <CrossAppCard crossAppData={crossAppData} />
    </Stack>
  );
}
