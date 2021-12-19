import React from "react";
import {Select} from "@chakra-ui/react";
import './Dropdown.css';
interface Props{};
const cityList:string[] = ["Zhengzhou, CN","Auckland, NZ","London, UK","New Delhi, IN","New York, US","Taipei, TW"];//All cities

export const Dropdown:React.FC<Props>=()=>{
    return(
        //dropdown selection
        <Select className="city-select" size='lg' bg='dodgerblue' color='white' width='25rem' margin='1.5rem auto'>
            {cityList.map((c)=>{
                  return  <option key={c} value={c}>{c}</option>
                }
            )}
        </Select>
    );
}