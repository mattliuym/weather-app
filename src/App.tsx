import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import {Dropdown} from "./components/dropdown/Dropdown";
import {Content} from "./components/main/Content";

interface Props {}

const App:React.FC<Props>=()=> {
  return (
    <ChakraProvider>
       <Content/>
    </ChakraProvider>
  );
}

export default App;
