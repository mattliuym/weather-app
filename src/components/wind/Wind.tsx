import React from "react";
import {BsWind} from "react-icons/bs";
import './Wind.css'
import {Skeleton} from "@chakra-ui/react";
interface props{
    value:string
    isLoading:boolean
}
export const Wind:React.FC<props>=(value)=>{
    return(
        <Skeleton className={'win-box'} isLoaded={!value.isLoading}>
            <div className={'win-box'}>
                <BsWind className={'win-icon'}/>
                <p>Wind</p>
                <p>{Number(value.value).toFixed(1)}m/s</p>
            </div>
        </Skeleton>

    );
}