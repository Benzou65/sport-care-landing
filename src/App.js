import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Testimonials from "./components/Testimonials/Testimonials";
import { ChakraProvider, Image } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Image src="/logo-square.png" alt="" mx="auto" />
        <Hero />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
