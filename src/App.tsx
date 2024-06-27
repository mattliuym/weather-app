import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import { Content } from "./components/main/Content";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <ChakraProvider>
      <Content />
    </ChakraProvider>
  );
};

export default App;
