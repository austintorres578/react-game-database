import React from "react";
import mobileSubTemp from "../images/mobile-sub-menu-temperture.png"
import dropDown from "../images/drop-down.png"

export default function HamSubMenu(){

    
        
    

    function toggleDrop(event){
        if(event.target.children[1].style.display==="none"){
        event.target.children[1].style.display="block"
        event.target.children[0].children[1].style.transform="scaleY(-1)"
        }else{
            event.target.children[1].style.display="none"
            event.target.children[0].children[1].style.transform="scaleY(1)"
        }

    }

    return(
        <div className="ham-sub-menu">
            <div className="desk-sub-menu">
                <div className="top-sub-catagories">
                    <div>
                        <ul>
                            <h3>Weather</h3>
                            <li><a href="#">Today's Forecast</a></li>
                            <li><a href="#">Hourly Forecast</a></li>
                            <li><a href="#">10 Day Forecast</a></li>
                            <li><a href="#">Weekend Forecast</a></li>
                            <li><a href="#">Monthly Forecast</a></li>
                            <li><a href="#">National Forecast</a></li>
                            <li><a href="#">National News</a></li>
                            <li><a href="#">Almanac</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <h3>Radar</h3>
                            <li><a href="#">Weather in Motion</a></li>
                            <li><a href="#">Radar Maps</a></li>
                            <li><a href="#">Classic Weather Maps</a></li>
                            <li><a href="#">Regional Satellite</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <h3>Severe</h3>
                            <li><a href="#">Severe Alerts</a></li>
                            <li><a href="#">Safety {"&"} Preparedness</a></li>
                            <li><a href="#">Hurricane Central</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <h3>Account</h3>
                            <li><a href="#">Sign Up</a></li>
                            <li><a href="#">Go Premium</a></li>
                            <li><a href="#">Log In</a></li>
                        </ul>
                    </div>
                </div>
                <div className="middle-sub-catagories">
                    <div>
                        <ul>
                            <h3>Videos {"&"} Photos </h3>
                            <li><a href="#">Top Stories</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">Photos</a></li>
                            <li><a href="#">Climate News</a></li>
                            <li><a href="#">Award-Winning Investigations</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <h3>Health {"&"} Activities</h3>
                            <li><a href="#">Allergy Tracker</a></li>
                            <li><a href="#">Cold {"&"} Flu</a></li>
                            <li><a href="#">COVID-19</a></li>
                            <li><a href="#">Water Scarcity</a></li>
                            <li><a href="#">Air Quality Forecast</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <h3>TV {"&"} Weather</h3>
                            <li><a href="#">Alexa Skill</a></li>
                            <li><a href="#">Watch Live</a></li>
                            <li><a href="#">Personalities</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <h3>Weather Products</h3>
                            <li><a href="#">Alexa Skill</a></li>
                            <li><a href="#">Seasonal Deals</a></li>
                            </ul>
                    </div>
                </div>
                <div className="bottom-sub-catagories">
                    <div>
                        <ul>
                            <h3>Privacy</h3>
                            <li><a href="#">Privacy Settings</a></li>
                            <li><a href="#">Data Rights</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mobile-sub-catagories">
                <div className="mobile-sub-header">
                    <h1>Menu</h1>
                    <img src={mobileSubTemp}></img>
                </div>
                <div className="drop-menu">
                    <div>
                        <p>Home</p>
                    </div>
                    <div onClick={toggleDrop} className="drop-menu">
                        <div>
                            <p>Account</p>
                            <img src={dropDown}></img>
                        </div>
                        <div style={{display:"none"}}className="sub-drop">
                            <ul>
                                <li>Sign Up</li>
                                <li>Go Premium</li>
                                <li>Log In</li>
                            </ul>
                        </div>
                    </div>
                    <div onClick={toggleDrop} className="drop-menu">
                        <div>
                            <p>Weather</p>
                            <img src={dropDown}></img>
                        </div>
                        <div style={{display:"none"}} className="sub-drop">
                            <ul>
                                <li>Today's Forecast</li>
                                <li>Hourly Forecast</li>
                                <li>10 Day Forecast</li>
                                <li>Monthly Forecast</li>
                                <li>National Forecast</li>
                                <li>National News</li>
                                <li>Almanac</li>
                                <li>Yesterday's Weather</li>
                                <li>Seasonal Deals</li>
                            </ul>
                        </div>
                    </div>
                    <div onClick={toggleDrop} className="drop-menu">
                        <div>
                            <p>Maps</p>
                            <img src={dropDown}></img>
                        </div>
                        <div style={{display:"none"}} className="sub-drop">
                            <ul>
                                <li>Weather in Motion</li>
                                <li>Radar Maps</li>
                                <li>Classic Weather Maps</li>
                                <li>Regional Satellite</li>
                            </ul>
                        </div>
                    </div>
                    <div onClick={toggleDrop} className="drop-menu">
                        <div>
                            <p>Severe</p>
                            <img src={dropDown}></img>
                        </div>
                        <div style={{display:"none"}} className="sub-drop">
                            <ul>
                                <li>Severe Alerts</li>
                                <li>Safety {"&"} Preparedness</li>
                                <li>Hurricane Central</li>
                            </ul>
                        </div>
                    </div>
                    <div onClick={toggleDrop} className="drop-menu">
                        <div>
                            <p>Video {"&"} Photos</p>
                            <img src={dropDown}></img>
                        </div>
                        <div style={{display:"none"}} className="sub-drop">
                            <ul>
                                <li>Top Stories</li>
                                <li>Video</li>
                                <li>Photos</li>
                            </ul>
                        </div>
                    </div>
                    <div onClick={toggleDrop} className="drop-menu">
                        <div>
                            <p>Health</p>
                            <img src={dropDown}></img>
                        </div>
                        <div style={{display:"none"}} className="sub-drop">
                            <ul>
                                <li>Allergy Tracker</li>
                                <li>Cold {"&"} Flu</li>
                                <li>COVID-19</li>
                                <li>Water Scarcity</li>
                                <li>Air Quality Forecast</li>
                            </ul>
                        </div>
                    </div>
                    <div onClick={toggleDrop} className="drop-menu">
                        <div>
                            <p>TV</p>
                            <img src={dropDown}></img>
                        </div>
                        <div style={{display:"none"}} className="sub-drop">
                            <ul>
                                <li>Watch Live</li>
                                <li>Personalities</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}