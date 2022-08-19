import React from "react";
import rainIcon from "../images/rain-icon.png"
import { Link } from "react-router-dom";

export default function HourlySection(props){

    let hour

    if(props.dataObject.current.last_updated.slice(11,props.dataObject.current.last_updated.length).length===5){
        hour = Number(props.dataObject.current.last_updated.slice(11,13))
        if(hour==="00"){
            hour=Number(hour)
        }

    }

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
    function dayChange(num){
        if(num>23){
            return 1
        }else{
            return 0
        }
    }
    function numberReset (num){
        if(num>23){
            num = num-24
            return num
        }else{
            return num
        }
        
    }

    return(
        <section className="hourly-section-container">
            <div className="hourly-section-header">
                <p>Hourly Forecast</p>
            </div>
            <div className="hourly-time-blocks">
                <div>
                    <p className="hourly-header"><strong>Now</strong></p>
                    <p className="hourly-temp"><strong>{`${props.dataObject.forecast.forecastday[dayChange(hour)].hour[hour].temp_f}`}°</strong></p>
                    <img src={`${props.dataObject.forecast.forecastday[0].hour[hour].condition.icon}`}></img>
                    <div className="rain-percent-container">
                        <img src={rainIcon}></img>
                        <p className="rain-percent"><strong>{`${props.dataObject.forecast.forecastday[dayChange(hour)].hour[hour].chance_of_rain}`}%</strong></p>
                    </div>
                </div>
                <div>
                    <p className="hourly-header">{timeChecker(hour,1)}</p>
                    <p className="hourly-temp">{`${props.dataObject.forecast.forecastday[dayChange(hour+1)].hour[numberReset(hour+1)].temp_f}`}°</p>
                    <img src={`${props.dataObject.forecast.forecastday[dayChange(hour+1)].hour[numberReset(hour+1)].condition.icon}`}></img>
                    <div className="rain-percent-container">
                        <img src={rainIcon}></img>
                        <p className="rain-percent">{`${props.dataObject.forecast.forecastday[dayChange(hour+1)].hour[numberReset(hour+1)].chance_of_rain}`}%</p>
                    </div>
                </div>
                <div>
                    <p className="hourly-header">{timeChecker(hour,2)}</p>
                    <p className="hourly-temp">{`${props.dataObject.forecast.forecastday[dayChange(hour+2)].hour[numberReset(hour+2)].temp_f}`}°</p>
                    <img src={`${props.dataObject.forecast.forecastday[dayChange(hour+2)].hour[numberReset(hour+2)].condition.icon}`}></img>
                    <div className="rain-percent-container">
                        <img src={rainIcon}></img>
                        <p className="rain-percent">{`${props.dataObject.forecast.forecastday[dayChange(hour+2)].hour[numberReset(hour+2)].chance_of_rain}`}%</p>
                    </div>
                </div>
                <div>
                    <p className="hourly-header">{timeChecker(hour,3)}</p>
                    <p className="hourly-temp">{`${props.dataObject.forecast.forecastday[dayChange(hour+3)].hour[numberReset(hour+3)].temp_f}`}°</p>
                    <img src={`${props.dataObject.forecast.forecastday[dayChange(hour+3)].hour[numberReset(hour+3)].condition.icon}`}></img>
                    <div className="rain-percent-container">
                        <img src={rainIcon}></img>
                        <p className="rain-percent">{`${props.dataObject.forecast.forecastday[dayChange(hour+3)].hour[numberReset(hour+3)].chance_of_rain}`}%</p>
                    </div>
                </div>
                <div>
                    <p className="hourly-header">{timeChecker(hour,4)}</p>
                    <p className="hourly-temp">{`${props.dataObject.forecast.forecastday[dayChange(hour+4)].hour[numberReset(hour+4)].temp_f}`}°</p>
                    <img src={`${props.dataObject.forecast.forecastday[dayChange(hour+4)].hour[numberReset(hour+4)].condition.icon}`}></img>
                    <div className="rain-percent-container">
                        <img src={rainIcon}></img>
                        <p className="rain-percent">{`${props.dataObject.forecast.forecastday[dayChange(hour+4)].hour[numberReset(hour+4)].chance_of_rain}`}%</p>
                    </div>
                </div>
            </div>
            <div className="hourly-button-container">
                <Link to="/details">
                    <button>Next 48 Hours</button>
                </Link>
            </div>
        </section>
    )
}