import React from "react";
import HourlyWeather from "./HourlyWeather";

export default function HourlyInfoSection(props){

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