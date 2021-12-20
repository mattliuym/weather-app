//reformat temperature from Kelvin to Celsius
export const formatTemp=(temp:any)=>{
    return (temp-273.15).toFixed(1);
}
export const formatTime=(time:any, timezone:any)=>{
    let local = time-timezone;
    let hour = new Date(local).getHours();
    let min = new Date(local).getMinutes();
   return hour+":"+min;
}