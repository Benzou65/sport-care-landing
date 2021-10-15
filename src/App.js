import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Pricing />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
