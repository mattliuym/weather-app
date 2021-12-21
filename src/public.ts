//reformat temperature from Kelvin to Celsius
export const formatTemp=(temp:any)=>{
    return (temp-273.15).toFixed(1);
}
export const formatTime=(time:any, timezone:any)=>{
    let local = new Date((time+timezone)*1000);

    let  h = (local.getUTCHours()<10? '0'+local.getUTCHours() : local.getUTCHours());
    let m = (local.getMinutes()<10? '0'+local.getMinutes():local.getMinutes());
   return h+":"+m;
}