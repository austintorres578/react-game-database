import React from "react";
import rainIcon from "../images/rain-icon.png"


export default function MobileWeatherCombo(props){

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

    let day = new Date();



    function dayChecker(date){

        if(date>=7){
            date=date-7
        }
        if(date===0){
            return "Sun"
        }
        if(date===1){
            return "Mon"
        }
        if(date===2){
            return "Tues"
        }
        if(date===3){
            return "Wed"
        }
        if(date===4){
            return "Thur"
        }
        if(date===5){
            return "Fri"
        }
        if(date===6){
            return "Sat"
        }
        
    }

    function mobileComboButtonsReveal(event){
        for (let index = 0; index < event.target.parentNode.children.length; index++) {
            if(event.target.parentNode.children[index]===event.target){
                event.target.parentNode.children[index].style.backgroundColor="blue"
                event.target.parentNode.children[index].style.color="white"
            }
            else{
                event.target.parentNode.children[index].style.backgroundColor="white"
                event.target.parentNode.children[index].style.color="blue"
            }
            if(event.target===document.querySelector(".mobile-combo-today-button")){
                document.querySelector(".mobile-time-combo").style.display="flex";
                document.querySelector(".mobile-hourly-combo").style.display="none"
                document.querySelector(".mobile-daily-combo").style.display="none"
            }else if(event.target===document.querySelector(".mobile-combo-hourly-button")){
                document.querySelector(".mobile-time-combo").style.display="none";
                document.querySelector(".mobile-hourly-combo").style.display="flex"
                document.querySelector(".mobile-daily-combo").style.display="none"
            }else if(event.target===document.querySelector(".mobile-combo-daily-button")){
                document.querySelector(".mobile-time-combo").style.display="none";
                document.querySelector(".mobile-hourly-combo").style.display="none"
                document.querySelector(".mobile-daily-combo").style.display="flex"
            }
        }
        
    }

    return(
        <section className="mobile-weather-combo-container">
            <div className="mobile-weather-combo-header">
                <p>{`${props.dataObject.location.name}`}, {`${props.dataObject.location.region}`}</p>
            </div>
            <div className="mobile-weather-combo-buttons-container">
                <div>
                    <button onClick={mobileComboButtonsReveal} className="mobile-combo-today-button">Today</button>
                    <button onClick={mobileComboButtonsReveal} className="mobile-combo-hourly-button">Hourly</button>
                    <button onClick={mobileComboButtonsReveal} className="mobile-combo-daily-button">Daily</button>
                </div>
            </div>
            <div style={{display:"flex"}} className="mobile-time-combo">
                <div>
                    <p className="mobile-combo-header">Morning</p>
                    <p id="mobile-combo-temp">{`${props.dataObject.forecast.forecastday[0].hour[7].temp_f}`}°</p>
                    <img src={`${props.dataObject.forecast.forecastday[0].hour[7].condition.icon}`}></img>
                    <div>
                        <img src={rainIcon}></img>
                        <p>{props.dataObject.forecast.forecastday[0].hour[7].chance_of_rain}%</p>
                    </div>
                </div>
                <div style={{borderLeft:"solid 1px lightgray", borderRight:"solid 1px lightgray"}}>
                    <p className="mobile-combo-header">Afternoon</p>
                    <p id="mobile-combo-temp">{`${props.dataObject.forecast.forecastday[0].hour[14].temp_f}`}°</p>
                    <img src={`${props.dataObject.forecast.forecastday[0].hour[14].condition.icon}`}></img>
                    <div>
                        <img src={rainIcon}></img>
                        <p>{props.dataObject.forecast.forecastday[0].hour[14].chance_of_rain}%</p>
                    </div>
                </div>
                <div style={{borderRight:"solid 1px lightgray"}}>
                    <p className="mobile-combo-header">Evening</p>
                    <p id="mobile-combo-temp">{`${props.dataObject.forecast.forecastday[0].hour[18].temp_f}`}°</p>
                    <img src={`${props.dataObject.forecast.forecastday[0].hour[18].condition.icon}`}></img>
                    <div>
                        <img src={rainIcon}></img>
                        <p>{props.dataObject.forecast.forecastday[0].hour[18].chance_of_rain}%</p>
                    </div>
                </div>
                <div>
                    <p className="mobile-combo-header">Overnight</p>
                    <p id="mobile-combo-temp">{`${props.dataObject.forecast.forecastday[0].hour[22].temp_f}`}°</p>
                    <img src={`${props.dataObject.forecast.forecastday[0].hour[22].condition.icon}`}></img>
                    <div>
                        <img src={rainIcon}></img>
                        <p>{props.dataObject.forecast.forecastday[0].hour[22].chance_of_rain}%</p>
                    </div>
                </div>
            </div>
            <div style={{display:"none"}} className="mobile-hourly-combo">
                <div>
                    <p className="mobile-combo-header"><strong>Now</strong></p>
                    <p id="mobile-combo-temp"><strong>{`${props.dataObject.forecast.forecastday[dayChange(hour)].hour[hour].temp_f}`}°</strong></p>
                    <img src={`${props.dataObject.forecast.forecastday[0].hour[hour].condition.icon}`}></img>
                    <div>
                        <img src={rainIcon}></img>
                        <p><strong>{`${props.dataObject.forecast.forecastday[dayChange(hour)].hour[hour].chance_of_rain}`}%</strong></p>
                    </div>
                </div>
                <div style={{borderLeft:"solid 1px lightgray"}}>
                    <p className="mobile-combo-header">{timeChecker(hour,1)}</p>
                    <p id="mobile-combo-temp">{`${props.dataObject.forecast.forecastday[dayChange(hour+1)].hour[numberReset(hour+1)].temp_f}`}°</p>
                    <img src={`${props.dataObject.forecast.forecastday[dayChange(hour+1)].hour[numberReset(hour+1)].condition.icon}`}></img>
                    <div>
                        <img src={rainIcon}></img>
                        <p>{`${props.dataObject.forecast.forecastday[dayChange(hour+1)].hour[numberReset(hour+1)].chance_of_rain}`}%</p>
                    </div>
                </div>
                <div style={{borderLeft:"solid 1px lightgray",borderRight:"solid 1px lightgray"}}>
                    <p className="mobile-combo-header">{timeChecker(hour,2)}</p>
                    <p id="mobile-combo-temp">{`${props.dataObject.forecast.forecastday[dayChange(hour+2)].hour[numberReset(hour+2)].temp_f}`}°</p>
                    <img src={`${props.dataObject.forecast.forecastday[dayChange(hour+2)].hour[numberReset(hour+2)].condition.icon}`}></img>
                    <div>
                        <img src={rainIcon}></img>
                        <p>{`${props.dataObject.forecast.forecastday[dayChange(hour+2)].hour[numberReset(hour+2)].chance_of_rain}`}%</p>
                    </div>
                </div>
                <div style={{borderRight:"solid 1px lightgray"}}>
                    <p className="mobile-combo-header">{timeChecker(hour,3)}</p>
                    <p id="mobile-combo-temp">{`${props.dataObject.forecast.forecastday[dayChange(hour+3)].hour[numberReset(hour+3)].temp_f}`}°</p>
                    <img src={`${props.dataObject.forecast.forecastday[dayChange(hour+3)].hour[numberReset(hour+3)].condition.icon}`}></img>
                    <div>
                        <img src={rainIcon}></img>
                        <p>{`${props.dataObject.forecast.forecastday[dayChange(hour+3)].hour[numberReset(hour+3)].chance_of_rain}`}%</p>
                    </div>
                </div>
                <div>
                    <p className="mobile-combo-header">{timeChecker(hour,4)}</p>
                    <p id="mobile-combo-temp">{`${props.dataObject.forecast.forecastday[dayChange(hour+4)].hour[numberReset(hour+4)].temp_f}`}°</p>
                    <img src={`${props.dataObject.forecast.forecastday[dayChange(hour+4)].hour[numberReset(hour+4)].condition.icon}`}></img>
                    <div>
                        <img src={rainIcon}></img>
                        <p>{`${props.dataObject.forecast.forecastday[dayChange(hour+4)].hour[numberReset(hour+4)].chance_of_rain}`}%</p>
                    </div>
                </div>
            </div>
            <div style={{display:"none"}} className="mobile-daily-combo">
                <div>
                    <p className="mobile-combo-header"><strong>Today</strong></p>
                    <p id="mobile-combo-temp"><strong>{`${props.dataObject.forecast.forecastday[0].day.maxtemp_f}`}°</strong></p>
                    <p className="mobile-combo-temp">{`${props.dataObject.forecast.forecastday[0].day.mintemp_f}`}°</p>
                    <img src={props.dataObject.forecast.forecastday[0].day.condition.icon}></img>
                    <div>
                        <img src={rainIcon}></img>
                        <p><strong>{`${props.dataObject.forecast.forecastday[0].day.daily_chance_of_rain}`}%</strong></p>
                    </div>
                </div>
                <div style={{borderLeft:"solid 1px lightgray",borderRight:"solid 1px lightgray"}}>
                    <p className="mobile-combo-header">{dayChecker(day.getDay()+1)}</p>
                    <p id="mobile-combo-temp">{`${props.dataObject.forecast.forecastday[1].day.maxtemp_f}`}°</p>
                    <p className="mobile-combo-temp">{`${props.dataObject.forecast.forecastday[1].day.mintemp_f}`}°</p>
                    <img src={props.dataObject.forecast.forecastday[1].day.condition.icon}></img>
                    <div>
                        <img src={rainIcon}></img>
                        <p>{`${props.dataObject.forecast.forecastday[1].day.daily_chance_of_rain}`}%</p>
                    </div>
                </div>
                <div>
                    <p className="mobile-combo-header">{dayChecker(day.getDay()+2)}</p>
                    <p id="mobile-combo-temp">{`${props.dataObject.forecast.forecastday[2].day.maxtemp_f}`}°</p>
                    <p className="mobile-combo-temp">{`${props.dataObject.forecast.forecastday[2].day.mintemp_f}`}°</p>
                    <img src={props.dataObject.forecast.forecastday[2].day.condition.icon}></img>
                    <div>
                        <img src={rainIcon}></img>
                        <p>{`${props.dataObject.forecast.forecastday[2].day.daily_chance_of_rain}`}%</p>
                    </div>
                </div>
            </div>
        </section>
    )
}