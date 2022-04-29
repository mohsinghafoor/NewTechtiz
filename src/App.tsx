import { Box } from "@chakra-ui/react";
import Header from "./Components/Header";
import Routes from "./routes";

function App() {
  return (
    <Box className="App">
      <Header />
      <Routes />
    </Box>
  );
}

export default App;
