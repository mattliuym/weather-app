import React from "react";
import {BsSunrise} from "react-icons/bs";
import './Sunrise.css';
interface props{};
export const Sunrise:React.FC<props>=()=>{
    return(
        <div className={"sun-box"}>
            <BsSunrise className={"sun-icon"}/>
            <p>Sunrise</p>
            <p>05:30</p>
        </div>
    );
}