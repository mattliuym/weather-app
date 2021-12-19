import React from "react";
import {RiCelsiusFill} from "react-icons/ri";
import './Temperature.css';
import {Skeleton} from "@chakra-ui/react";
interface props {};

export const Temperature:React.FC<props>=()=>{
    return(
        <Skeleton isLoaded={true}>
            <div className={"temp-box"}>
                <span className={"temp-num"}>34</span><RiCelsiusFill className={"temp-icon"}/>
            </div>
        </Skeleton>
    );
}