import React from "react";
import NightBackground from "../images/night-background.webp"
import MorningBackground from "../images/morning-background.webp"
import AfternoonBackground from "../images/afternoon-sky.jpg"
import EveningBackground from "../images/evening-sky.jpg"


export default function TempertureBlock(props){

    let background

    function backgroundAssigner(num){
        if(num>6 && num <12){
            background=MorningBackground
        }else if(num>12 && num < 17){
            background=AfternoonBackground
        }else if(num>17&&num<23){
            background=EveningBackground
        }else{
            background=NightBackground
        }
        return background
    }



    let hour
    let hourNum

    if(props.dataObject.current.last_updated.slice(11,props.dataObject.current.last_updated.length).length===5){
        hour = Number(props.dataObject.current.last_updated.slice(11,13))
        hourNum = Number(props.dataObject.current.last_updated.slice(11,13))

    }
    if(hour===0){
        hour="12:00 AM"
    }
    else if(hour===12){
        hour="12:00 PM"
    }
    else if(hour>12){
        hour=`${hour-12}:00 PM`
    }else{
        hour=`${hour}:00 AM`
    }


    return(
        <section style={{backgroundImage:`url(${backgroundAssigner(hourNum)})`}} className="temperture-block-container">
            <div className="temperture-location">
                <p><strong>{`${props.dataObject.location.name}`}, {`${props.dataObject.location.region}`}</strong> As of {hour}</p>
            </div>
            <div className="temperture">
                <div>
                    <p className="big-weather">{`${props.dataObject.current.temp_f}`}°</p>
                    <p className="weather-type">{`${props.dataObject.current.condition.text}`}</p>
                    <p className="day-night">Day: {`${props.dataObject.forecast.forecastday[0].day.maxtemp_f}`}° / Night: {`${props.dataObject.forecast.forecastday[0].day.mintemp_f}`}°</p>
                </div>
                <div className="weather-image">
                    <img src={`${props.dataObject.current.condition.icon}`}></img>
                </div>
            </div>
        </section>
    )
}