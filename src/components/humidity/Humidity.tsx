import React from "react";
import {BsDroplet} from "react-icons/bs";
import './Humidity.css';
import {Skeleton} from "@chakra-ui/react";

interface props{
    value:string,
    isLoading:boolean
};
export const Humidity:React.FC<props>=(value,isLoading)=>{
    return(
    <Skeleton className={'hum-box'} isLoaded={!value.isLoading}>
        <div className={'hum-box'}>
            <BsDroplet className={'hum-icon'}/>
            <p>Humidity</p>
            <p>{value.value}%</p>
        </div>
    </Skeleton>
    );
}