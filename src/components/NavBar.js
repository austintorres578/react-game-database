import {NavLink, Link} from "react-router-dom";
import siteBannerNightDesk from "../images/site-banner-night.png"
import siteBannerNightMobile from "../images/site-banner-night-mobile.png"
import siteBannerDayMobile from "../images/site-banner-day-mobile.png"
import tempIconNight from "../images/temp-icon-night.png"
import premiumNightIcon from "../images/premium-icon-night.png"
import accountIconNight from "../images/account-icon-night.png"
import hamMenuNight from "../images/ham-menu-night.png"
import React, { useState, useEffect } from "react";
import HamSubMenu from "./HamSubMenu";
import siteBannerDayDesk from "../images/site-banner-day.png"
import tempIconDay from "../images/temp-icon-day.png"
import premiumDayIcon from "../images/premium-icon-day.png"
import accountDayIcon from "../images/account-icon-day.png"
import hamMenuDay from "../images/ham-menu-day.png"


export default function NavBar(props){

    const [deskBanner,setDeskBanner] = useState(siteBannerNightDesk)
    const [mobileBanner,setMobileBanner] = useState(siteBannerNightMobile)
    const [tempIcon, setTempIcon] = useState(tempIconNight)
    const [premiumIcon,setPremiumIcon] =useState(premiumNightIcon)
    const [accountIcon,setAccountIcon] =useState(accountIconNight)
    const [hamMenu,setHamMenu] = useState(hamMenuNight)


    const [toggleHam, setToggleHam] = useState(false)


    function search(event){
        event.preventDefault()
        props.searchZip(document.getElementById("zip-search").value)

    }

    function ham(){
        toggleHam ? setToggleHam(false) : setToggleHam(true);
        console.log(toggleHam)
    }

    let navStyle ={
        topNavDay:{
            deskBanner:{siteBannerDayDesk},
            deskTemp:{tempIconDay},
            deskPremium:{premiumDayIcon},
            deskAccount:{accountDayIcon},
            deskHam:{hamMenuDay},
            searchBarColor:"#578fa6",
            backgroundColor:"#005986"
        },
        topNavEvening:{

        },
        topNavNight:{
            deskBanner:{siteBannerNightDesk},
            deskTemp:{tempIconNight},
            deskPremium:{premiumNightIcon},
            deskAccount:{accountIconNight},
            deskHam:{hamMenuNight},
            searchBarColor:"#5a5973",
            backgroundColor:"#313050"
        },
        middleNavDay:{
            backgroundColor:"#337a9e"
        },
        middleNavEvening:{

        },
        middleNavNight:{
            backgroundColor:"#5a5973",
        },
        bottomNavDay:{
            backgroundColor:"#f2f1f2"
        },
        bottomNavEvening:{

        },
        bottomNavNight:{
            backgroundColor:"#1d1d30"
        }
    }

    function dynamicStyle(){
        if(props.currentHour > 6 && props.currentHour < 17){
            document.querySelector(".top-nav").style.backgroundColor="#005986"
            document.querySelector("#zip-search").style.backgroundColor="#337A9E"
            document.querySelector(".middle-nav").style.backgroundColor="#337a9e"
            document.querySelector(".time-div-containers").style.backgroundColor="#003550"
            setDeskBanner(siteBannerDayDesk)
            setMobileBanner(siteBannerDayMobile)
            setTempIcon(tempIconDay)
            setPremiumIcon(premiumDayIcon)
            setAccountIcon(accountDayIcon)
            setHamMenu(hamMenuDay)
        }else if(props.currentHour >18 && props.currentHour < 21 ){
            console.log("evening")
        }else{
            document.querySelector(".top-nav").style.backgroundColor="#313050"
            document.querySelector("#zip-search").style.backgroundColor="#5a5973"
            document.querySelector(".middle-nav").style.backgroundColor="#5a5973"
            document.querySelector(".time-div-containers").style.backgroundColor="#003550"
            setDeskBanner(siteBannerNightDesk)
            setMobileBanner(siteBannerNightMobile)
            setTempIcon(tempIconNight)
            setPremiumIcon(premiumNightIcon)
            setAccountIcon(accountIconNight)
            setHamMenu(hamMenuNight)
        }

    }

    useEffect(() => 
    {
        dynamicStyle();
    }, [""]);

    return(
            <nav id="nav" className="nav-bar-container">
                <div className="page-selector">
                    <p>API Data only support Home and 3 Day pages</p>
                    <div>
                        <ul>
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/details"><li>3 Day</li></Link>
                        </ul>
                    </div>
                </div>
                <div style={{backgroundColor: "#313050"}} className="top-nav">
                    <div className="site-banner">
                        <Link to="/"><img className="desk-site-logo" src={deskBanner}></img></Link>
                        <Link to="/"><img className="mobile-site-logo" src={mobileBanner}></img></Link>
                    </div>
                    <div className="zip-search-container">
                        <form onSubmit={search}>
                            <input style={{backgroundColor: "#5a5973"}} id="zip-search" placeholder="Search Zip Code"></input>
                        </form>
                        <button onClick={search} className="search-button">Search</button>
                    </div>
                    <div className="top-nav-buttons">
                        <img src={tempIcon}></img>
                        <img src={premiumIcon}></img>
                        <img src={accountIcon}></img>
                        <img className="ham-button" onClick={ham} src={hamMenu}></img>
                    </div>
                </div>
                {toggleHam ? <HamSubMenu /> : <div></div>}
                <div style={{backgroundolor: "#5a5973"}} className="middle-nav">
                    <div>
                        <div className="current-location-container">
                            <p>{`${props.dataObject.current.temp_f}`}° {`${props.dataObject.location.name}`}, {`${props.dataObject.location.region}`} </p>
                        </div>
                    </div>
                </div>
                <div className="bottom-nav">
                    <div style={{backgroundColor: "#1d1d30"}} className="time-div-containers">
                            <NavLink to="/" className={({isActive})=>(isActive ? "active-link":"")}>
                                <div>
                                    <p>Today</p>
                                </div>
                            </NavLink>
                            <NavLink to="/details" className={({isActive})=>(isActive ? "active-link":"")}>
                                <div>
                                    <p>Hourly</p>
                                </div>
                            </NavLink>
                            <div>
                                <p>10 Day</p>
                            </div>
                            <div>
                                <p>Weekend</p>
                            </div>
                            <div>
                                <p>Monthly</p>
                            </div>
                            <div>
                                <p>Radar</p>
                            </div>
                            <div>
                                <p>Video</p>
                            </div>
                            <div>
                                <p>More Forecasts</p>
                            </div>
                    </div>
                </div>
            </nav>
    )
}

