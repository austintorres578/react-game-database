import React from "react";
import Footer from "./Footer";
import HourlyInfoSection from "./HourlyInfoSection";
import MobileFooter from "./MobileFooter";
import NavBar from "./NavBar";

export default function HourlyInfoPage(props){
    console.log(props)

    let dt = new Date();


    return(
        <section>
            <NavBar
                dataObject={props.recievedData}
                currentZip={props.defaultZip}
                changeZip={props.setDefaultZip}
                searchZip={props.getData}
                currentHour={dt.getHours()}
            />
            <HourlyInfoSection
                dataObject={props.recievedData}
                currentZip={props.defaultZip}
                changeZip={props.setDefaultZip}
                searchZip={props.getData}
                currentHour={dt.getHours()}
            />
            <Footer />
            <MobileFooter />
        </section>
    )
}