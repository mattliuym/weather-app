import React from "react";
import {BsSunrise} from "react-icons/bs";
import './Sunrise.css';
import {Skeleton} from "@chakra-ui/react";
interface props{
    value:string,
    isLoading:boolean
}
export const Sunrise:React.FC<props>=(value)=>{
    return(
        <Skeleton className={'sun-box'} isLoaded={!value.isLoading}>
            <div className={"sun-box"}>
                <BsSunrise className={"sun-icon"}/>
                <p>Sunrise</p>
                <p>{value.value}</p>
            </div>
        </Skeleton>

    );
}