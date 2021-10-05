import Pricing from "./components/Pricing/Pricing";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Pricing />
      </div>
    </ChakraProvider>
  );
}

export default App;
