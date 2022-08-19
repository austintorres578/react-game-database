import {React, useEffect} from "react";
import HourlyWeather from "./HourlyWeather";

export default function HourlyInfoSection(props){

    function dynamicStyle(){
        if(props.currentHour > 6 && props.currentHour < 17){
            document.querySelector(".hourly-info-section-container").style.backgroundColor="#58a3c1"
        }else if(props.currentHour >18 && props.currentHour < 21 ){
            console.log("evening")
        }else{
            document.querySelector(".hourly-info-section-container").style.backgroundColor="#494363"
        }

    }

    useEffect(() => 
    {
        dynamicStyle();
    }, [""]);

    return(
        <section className="hourly-info-section-container">
            <HourlyWeather 
                dataObject={props.dataObject}
                currentZip={props.currentZip}
                changeZip={props.changeZip}
                searchZip={props.searchZip}
            />
        </section>
    )
}