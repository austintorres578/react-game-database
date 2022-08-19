import React from "react";
import HourlyInfoBlock from "../HourlyInfoBlock";


export default function HourlyWeather(props){

    console.log(props.dataObject.current.last_updated)
    
    console.log(props.dataObject.current.last_updated.slice(11,props.dataObject.current.last_updated.length-3))

    function timeChecker (num,x){
        let combinedHour = num + x;
        if(combinedHour===24){
            combinedHour="12:00 AM"
        }
        else if(combinedHour>23){
            combinedHour=`${combinedHour-24}:00 AM`
            
        }
        else if(combinedHour>12){
            combinedHour=`${combinedHour-12}:00 PM`
        }else if(combinedHour===12){
            combinedHour=`${combinedHour}:00 PM`
        }else if(combinedHour===0){
            combinedHour="12:00 AM"
        }else{
            combinedHour=`${combinedHour}:00 AM`
        }
        
        return combinedHour
    }

    return(
        <section className="hourly-weather-container">
            <div className="hourly-weather-header">
                <div>
                    <p>Hourly Weather</p>
                    <p className="hourly-location">{props.dataObject.location.name}, {props.dataObject.location.region}</p>
                </div>
                <p className="hourly-local-time">As of {timeChecker(Number(props.dataObject.current.last_updated.slice(11,props.dataObject.current.last_updated.length-3)),0)} Local Time</p>
            </div>
            <HourlyInfoBlock 
                dataObject={props.dataObject}
            />
        </section>
    )
}