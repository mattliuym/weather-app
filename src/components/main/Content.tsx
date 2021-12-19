import React,{useState} from 'react';
import './Content.css';
import {Dropdown} from "../dropdown/Dropdown";
import {Temperature} from "../temperature/Temperature";
import {Sunrise} from "../sunrise/Sunrise";
import {Humidity} from "../humidity/Humidity";
import {Wind} from "../wind/Wind";
interface Props{};
export const Content:React.FC<Props>=()=>{
    return(
        <div className={"app-box"}>
            <Dropdown/>
            <Temperature/>
            <div className={"lower-box"}>
                <Sunrise/>
                <Wind/>
                <Humidity/>
            </div>
        </div>
    );
}
