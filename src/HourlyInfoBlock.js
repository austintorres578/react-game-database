import React from "react";
import rainIcon from "./images/rain-icon.png"
import windIcon from "./images/wind-icon.png"
import feelsLikeIcon from "./images/high-low-icon.png"
import humidity from "./images/humidity-icon.png"
import uv from "./images/uv-index.png"
import cloudIcon from "./images/cloud-icon.webp"
import arrowIcon from "./images/arrow-icon.png"

export default function HourlyInfoBlock(props){

    console.log(props)

    let hideSub = {
        display:"none"
    }
    let revealSub = {
        display:"block"
    }

    let hour = Number(props.dataObject.current.last_updated.slice(11,props.dataObject.current.last_updated.length-3))

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

        function toggleSub(event){
            if(event.target.nextElementSibling.style.display==="none"){
                event.target.nextElementSibling.style.display="block"
                event.target.style.borderBottom="none"
                event.target.children[5].children[0].style.transform="scaleY(-1)"
            }
            else if(event.target.nextElementSibling.style.display==="block"){
                event.target.nextElementSibling.style.display="none"
                event.target.style.borderBottom="solid 1px lightgray"
                event.target.children[5].children[0].style.transform="scaleY(1)"
            }

            
        }

        function createBlocks(num){

            let result = []

            for (let index = num; index < props.dataObject.forecast.forecastday[0].hour.length; index++) {
                result.push(
                <div className="hourly-weather-info-buttons">
                    <div style={{borderBottom:"solid 1px lightgray"}} onClick={toggleSub} className="top-hourly-block">
                        <div>
                            <p>{timeChecker(Number(props.dataObject.forecast.forecastday[0].hour[index].time.slice(11,props.dataObject.forecast.forecastday[0].hour[hour].time.length-3)),0)}</p>
                        </div>
                        <div>
                            <p className="hourly-block-temp">{props.dataObject.forecast.forecastday[0].hour[index].temp_f}°</p>
                        </div>
                        <div>
                            <img className="weather-icon" src={props.dataObject.forecast.forecastday[0].hour[index].condition.icon}></img>
                            <p className="weather-text">{props.dataObject.forecast.forecastday[0].hour[index].condition.text}</p>
                        </div>
                        <div className="hourly-rain">
                            <img className="rain-icon" src={rainIcon}></img>
                            <p>{props.dataObject.forecast.forecastday[0].hour[index].chance_of_rain}%</p>
                        </div>
                        <div className="hourly-wind">
                            <img className="wind-icon" src={windIcon}></img>
                            <p className="wind-text">{props.dataObject.forecast.forecastday[0].hour[index].wind_dir} {props.dataObject.forecast.forecastday[0].hour[hour].gust_mph} mph</p>
                        </div>
                        <div>
                            <img className="hourly-block-drop-arrow" src={arrowIcon}></img>
                        </div>
                    </div>
                    <div style={hideSub} className="bottom-hourly-block">
                        <div>
                            <div>
                                <div>
                                    <img className="hourly-block-feel-icon" src={feelsLikeIcon}></img>
                                    <p>Feels Like</p>
                                </div>
                                <div className="hourly-block-stat">
                                    <p>{props.dataObject.forecast.forecastday[0].hour[index].feelslike_f}°</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img className="hourly-block-wind-icon" src={windIcon}></img>
                                    <p>Wind</p>
                                </div>
                                <div className="hourly-block-stat">
                                    <p>{props.dataObject.forecast.forecastday[0].hour[index].gust_mph} mph</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img className="hourly-block-humidity-icon" src={humidity}></img>
                                    <p>Humidity</p>
                                </div>
                                <div className="hourly-block-stat">
                                    <p>{props.dataObject.forecast.forecastday[0].hour[index].humidity}%</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img className="hourly-block-uv-icon" src={uv}></img>
                                    <p>UV Index</p>
                                </div>
                                <div className="hourly-block-stat">
                                    <p>{props.dataObject.forecast.forecastday[0].hour[index].uv} of 10</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img className="hourly-block-cloud-icon" src={cloudIcon}></img>
                                    <p>Cloud Cover</p>
                                </div>
                                <div className="hourly-block-stat">
                                    <p>{props.dataObject.forecast.forecastday[0].hour[index].cloud}%</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img className="hourly-block-rain-icon" src={rainIcon}></img>
                                    <p>Rain Amount</p>
                                </div>
                                <div className="hourly-block-stat">
                                    <p>{props.dataObject.forecast.forecastday[0].hour[index].precip_in} in</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
                
                
            }

            return result
        }

        function monthCheck(num){
            if(num===1){
                return "January"
            }
            else if(num===2){
                return "February"
            }
            else if(num===3){
                return "March"
            }
            else if(num===4){
                return "April"
            }
            else if(num===5){
                return "May"
            }
            else if(num===6){
                return "June"
            }
            else if(num===7){
                return "July"
            }
            else if(num===8){
                return "August"
            }
            else if(num===9){
                return "September"
            }
            else if(num===10){
                return "October"
            }
            else if(num===11){
                return "November"
            }
            else if(num===12){
                return "December"
            }
        }

        console.log()

    return(
        <div>
                <div>
                    <p className="hourly-info-block-date">{monthCheck(Number(props.dataObject.forecast.forecastday[0].date.slice(5,props.dataObject.forecast.forecastday[0].date.length-3)))} {Number(props.dataObject.forecast.forecastday[0].date.slice(8,props.dataObject.forecast.forecastday[0].date.length))}</p>
                </div>
                {createBlocks(hour)}
                <div>
                <p className="hourly-info-block-date">{monthCheck(Number(props.dataObject.forecast.forecastday[0].date.slice(5,props.dataObject.forecast.forecastday[0].date.length-3)))} {Number(props.dataObject.forecast.forecastday[1].date.slice(8,props.dataObject.forecast.forecastday[1].date.length))}</p>
                </div>
                {createBlocks(0)}
                <div>
                <p className="hourly-info-block-date">{monthCheck(Number(props.dataObject.forecast.forecastday[0].date.slice(5,props.dataObject.forecast.forecastday[0].date.length-3)))} {Number(props.dataObject.forecast.forecastday[2].date.slice(8,props.dataObject.forecast.forecastday[2].date.length))}</p>
                </div>
                {createBlocks(0)}
        </div>
    )
}