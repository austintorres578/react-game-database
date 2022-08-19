import React from "react";
import highLowIcon from "../images/high-low-icon.png"
import humidityIcon from "../images/humidity-icon.png"
import pressureIcon from "../images/pressure-icon.png"
import visibilityIcon from "../images/visibility-icon.png"
import windIcon from "../images/wind-icon.png"
import dewPointIcon from "../images/dew-point-icon.png"
import uvIndex from "../images/uv-index.png"
import moonIcon from "../images/moon-icon.png"

export default function WeatherStats(props){

    let hour


    if(props.dataObject.current.last_updated.slice(11,props.dataObject.current.last_updated.length).length===5){
        hour = props.dataObject.current.last_updated.slice(11,13)
    }


    return(
        <section className="weather-stats-container" >
            <div className="weather-stats-header">
                <p>Weather Today in {`${props.dataObject.location.name}`}, {`${props.dataObject.location.region}`}</p>
            </div>
            <div className="weather-stats-feel-container">
                <div className="weather-stats-feel">
                    <p className="temperture-feel">{`${props.dataObject.current.feelslike_f}`}°</p>
                    <p className="feels-like-text">Feels Like</p>
                </div>
                <div className="weather-stats-image">
                    <img src={`${props.dataObject.current.condition.icon}`}></img>
                </div>
            </div>
            <div className="weather-stats">
                <div>
                    <div className="stat-container">
                        <div className="stat-text">
                            <img src={highLowIcon}></img>
                            <p>High/Low</p>
                        </div>
                        <div>
                            <p>{`${props.dataObject.forecast.forecastday[0].day.maxtemp_f}`}/{`${props.dataObject.forecast.forecastday[0].day.mintemp_f}`}°</p>
                        </div>
                    </div>
                    <div className="stat-container">
                        <div className="stat-text">
                            <img src={humidityIcon}></img>
                            <p>Humidity</p>
                        </div>
                        <div>
                            <p>{`${props.dataObject.current.humidity}`}%</p>
                        </div>
                    </div>
                    <div className="stat-container">
                        <div className="stat-text">
                            <img src={pressureIcon}></img>
                            <p>Pressure</p>
                        </div>
                        <div>
                            <p>{`${props.dataObject.current.pressure_in}`} in</p> 
                        </div>
                    </div>
                    <div className="stat-container">
                        <div className="stat-text">
                            <img src={visibilityIcon}></img>
                            <p>Visibility</p>
                        </div>
                        <div>
                            <p>{`${props.dataObject.current.vis_miles}`} mi</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="stat-container">
                        <div className="stat-text">
                            <img src={windIcon}></img>
                            <p>Wind</p>
                        </div>
                        <div>
                            <p>{`${props.dataObject.current.gust_mph}`} mph</p>
                        </div>
                    </div>
                    <div className="stat-container">
                        <div className="stat-text">
                            <img src={dewPointIcon}></img>
                            <p>Dew Point</p>
                        </div>
                        <div>
                            <p>{`${props.dataObject.forecast.forecastday[0].hour[Number(hour)].dewpoint_f}°`}</p>
                        </div>
                    </div>
                    <div className="stat-container">
                        <div className="stat-text">
                            <img src={uvIndex}></img>
                            <p>UV Index</p>
                        </div>
                        <div>
                            <p>{`${props.dataObject.current.uv}`} of 10</p>
                        </div>
                    </div>
                    <div className="stat-container">
                        <div className="stat-text">
                            <img src={moonIcon}></img>
                            <p>Moon Phase</p>
                        </div>
                        <div>
                           <p>{`${props.dataObject.forecast.forecastday[0].astro.moon_phase}`}</p> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}