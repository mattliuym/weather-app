import React,{useState,useEffect} from 'react';
import './Content.css';
import {Dropdown} from "../dropdown/Dropdown";
import {Temperature} from "../temperature/Temperature";
import {Sunrise} from "../sunrise/Sunrise";
import {Humidity} from "../humidity/Humidity";
import {Wind} from "../wind/Wind";
import {formatTemp, formatTime} from "../../public";
const apiKey:string = "5326d35ebe0b4c9f866c0d20322e987a";
interface Props{};

export const Content:React.FC<Props>=()=>{
    const [location,setLocation] = useState("Zhengzhou, CN");
    // const [wdata,setWdata]=useState({});
    const [temp,setTemp]=useState('');
    const [sunrise,setSunrise]=useState('');
    const [wind,setWind]=useState('');
    const [humid,setHumid]=useState('');
    const [tzone,setTzone]=useState('');
    const[isLoading,setLoading]=useState(true);

    useEffect( ()=>{
        const getWeather =async (city:string)=>{
            // let weatherData:any;
            // await axios .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then((res)=>{
            //     weatherData=res;
            //     }
            // )
            // console.log(weatherData);
            // return weatherData;
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
            const json = await response.json();
            setTemp(json.main.temp);
            setSunrise(json.sys.sunrise);
            setWind(json.wind.speed);
            setTzone(json.timezone);
            setHumid(json.main.humidity);
            setLoading(false);
        }
        getWeather(location);
    })


    if(isLoading===true){
        return(
            <div className={"app-box"}>
                <Dropdown setCity={setLocation} city={location}/>
                <Temperature value={"1"} isLoading={isLoading}/>
                <div className={"lower-box"}>
                    <Sunrise value={"1"} isLoading={isLoading}/>
                    <Wind value={"1"} isLoading={isLoading}/>
                    <Humidity value={"1"} isLoading={isLoading}/>
                </div>
            </div>
        )
    }else{
        return(
            <div className={"app-box"}>
                <Dropdown setCity={setLocation} city={location}/>
                <Temperature value={formatTemp(temp)} isLoading={isLoading}/>
                <div className={"lower-box"}>
                    <Sunrise value={formatTime(sunrise,tzone)} isLoading={isLoading}/>
                    <Wind value={wind} isLoading={isLoading}/>
                    <Humidity value={humid} isLoading={isLoading}/>
                </div>
            </div>
        );
    }

}



