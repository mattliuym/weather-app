import React,{useState,useEffect} from 'react';
import './Content.css';
import {Dropdown} from "../dropdown/Dropdown";
import {Temperature} from "../temperature/Temperature";
import {Sunrise} from "../sunrise/Sunrise";
import {Humidity} from "../humidity/Humidity";
import {Wind} from "../wind/Wind";
import {Weather} from "../weather/Weather";
import {formatTemp, formatTime} from "../../public";
const apiKey:string = "a419ffe31b03cd447b73339397fa8b95";
interface Props{}

export const Content:React.FC<Props>=()=>{
    const [location,setLocation] = useState("Zhengzhou, CN");
    const [refresh,setRefresh]=useState(false);
    // let sec = 0;
    // setInterval('sec = 0;sec++',6000);
    // interface Weather{
    //     temp:string,
    //     sunrise:string,
    //     wind:string,
    //     tzone:string,
    //     humid:string
    // }
    //get weather infor by call API
    const getWeather =async ()=>{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
        return await response.json();
    }
    //auto refresh by 1 minutes
    const timeout =()=> setTimeout(() => {
        setRefresh(!refresh);
    }, 60000);
    const [wdata,setWdata]=useState(
        {
            temp:'',
            sunrise:'',
            wind:'',
            tzone:'',
            humid:'',
            isLoading:true
        }
    );


    useEffect( ()=>{
        setWdata({humid: "", sunrise: "", temp: "", tzone: "", wind: "", isLoading: true});
       //get weather info from openweather API
        getWeather().then((res)=>{
                setWdata({
                    temp:res.main.temp,
                    sunrise:res.sys.sunrise,
                    wind:res.wind.speed,
                    tzone:res.timezone,
                    humid:res.main.humidity,
                    isLoading: false
                });
            }
        );
        //Auto refresh
        timeout();
        return () => clearTimeout(timeout());
        // setInterval( 'getWeather().then((res)=>{setWdata({temp:res.main.temp, sunrise:res.sys.sunrise, wind:res.wind.speed, tzone:res.timezone, humid:res.main.humidity, isLoading: false});})',6000);

    },[location,refresh]);

    if(wdata.isLoading){
        return(
            <div className={"app-box"}>
                <Dropdown setCity={setLocation} city={location}/>
                <Temperature value={"1"} isLoading={wdata.isLoading}/>
                <div className={"lower-box"}>
                    <Sunrise value={"1"} isLoading={wdata.isLoading}/>
                    <Wind value={"1"} isLoading={wdata.isLoading}/>
                    <Humidity value={"1"} isLoading={wdata.isLoading}/>
                </div>
            </div>
        )
    }else{
        return(
            <div className={"app-box"}>
                <Dropdown setCity={setLocation} city={location}/>
                <Temperature value={formatTemp(wdata.temp)} isLoading={wdata.isLoading}/>
                <div className={"lower-box"}>
                    {/*<Sunrise value={formatTime(wdata.sunrise,wdata.tzone)} isLoading={wdata.isLoading}/>*/}
                    {/*<Wind value={wdata.wind} isLoading={wdata.isLoading}/>*/}
                    {/*<Humidity value={wdata.humid} isLoading={wdata.isLoading}/>*/}
                    <Weather value={formatTime(wdata.sunrise,wdata.tzone)} isLoading={wdata.isLoading} type={"Sunrise"}/>
                    <Weather value={wdata.wind} isLoading={wdata.isLoading} type={"Wind"}/>
                    <Weather value={wdata.humid} isLoading={wdata.isLoading} type={"Humidity"}/>
                </div>
            </div>
        );
    }

}



