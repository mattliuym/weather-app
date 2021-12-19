import React from "react";
import {BsWind} from "react-icons/bs";
import './Wind.css'
interface props{};
export const Wind:React.FC<props>=()=>{
    return(
        <div className={'win-box'}>
            <BsWind className={'win-icon'}/>
            <p>Wind</p>
            <p>1.5m/s</p>
        </div>
    );
}