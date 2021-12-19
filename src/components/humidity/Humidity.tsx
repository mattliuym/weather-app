import React from "react";
import {BsDroplet} from "react-icons/bs";
import './Humidity.css';

interface props{};
export const Humidity:React.FC<props>=()=>{
    return(
        <div className={'hum-box'}>
            <BsDroplet className={'hum-icon'}/>
            <p>Humidity</p>
            <p>97.5%</p>
        </div>
    );
}