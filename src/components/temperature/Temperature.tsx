import React from "react";
import {RiCelsiusFill} from "react-icons/ri";
import './Temperature.css';
import {Skeleton} from "@chakra-ui/react";
interface props {
    value:string
    isLoading:boolean
};

export const Temperature:React.FC<props>=(value,isLoading)=>{
    return(
        <Skeleton className={"temp-box"} isLoaded={!value.isLoading}>
            <div className={"temp-box"}>
                <span className={"temp-num"}>{value.value}</span><RiCelsiusFill className={"temp-icon"}/>
            </div>
        </Skeleton>
    );
}