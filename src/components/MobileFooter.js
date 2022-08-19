import {Link} from "react-router-dom"
import React from "react";
import TodayButton from "../images/today-button.png"
import HourlyButton from "../images/hourly-button.png"
import DayButton from "../images/ten-day-button.png"
import RadarButton from "../images/radar-button.png"
import VideoButton from "../images/video-button.png"

export default function MobileFooter(){
    return(
        <footer className="mobile-footer">
            <div>
                <Link to="/"><button><img src={TodayButton}></img></button></Link>
                <Link to="/details"><button><img src={HourlyButton}></img></button></Link>
                <button><img src={DayButton}></img></button>
                <button><img src={RadarButton}></img></button>
                <button><img src={VideoButton}></img></button>
            </div>
        </footer>
    )
}