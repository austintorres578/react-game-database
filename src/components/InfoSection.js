import {React, useEffect} from "react";
import DailyForecast from "./DailyForecast";
import HourlySection from "./HourlySection";
import MobileWeatherCombo from "./MobileWeatherCombo";
import TempertureBlock from "./TempertureBlock";
import TimeOfDay from "./TimeOfDay";
import WeatherStats from "./WeatherStats";

export default function InfoSection(props){

    function dynamicStyle(){
        if(props.currentHour > 6 && props.currentHour < 17){
            document.querySelector(".info-section-container").style.backgroundColor="#58a3c1"
        }else if(props.currentHour >18 && props.currentHour < 21 ){
            console.log("evening")
        }else{
            document.querySelector(".info-section-container").style.backgroundColor="#494363"
        }

    }

    useEffect(() => 
    {
        dynamicStyle();
    }, [""]);

    

    return(
        <section style={{backgroundColor: "#494363"}} className="info-section-container">
            <TempertureBlock 
                dataObject={props.dataObject}
            />
            <TimeOfDay 
                dataObject={props.dataObject}
            />
            <MobileWeatherCombo 
                dataObject={props.dataObject}
            />
            <WeatherStats
                dataObject={props.dataObject}
            />
            <HourlySection 
                dataObject={props.dataObject}
            />
            <DailyForecast 
                dataObject={props.dataObject}
            />
        </section>
    )
}