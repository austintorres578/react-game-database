import React from "react";
import { Link } from 'react-router-dom';

import metacriticIcon from "./images/metacriticIcon.png"

export default function Games(props){

    const gameBackgroundObj = props.background

    let backgroundImg

        if(gameBackgroundObj!=undefined){
        backgroundImg = `
        linear-gradient(to right,
            rgba(0, 0, 0, .5), 
            rgba(0, 0, 0, 0.0)),
        url(${gameBackgroundObj.image})`
        }else{
        backgroundImg="url(https://techmedicvt.com/images/about-us/tech%20background%20copy-10.jpg)"
        }

    let style={
        background: backgroundImg,
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat"
    }

     const platforms = props.consoleList.map(console =>{
        

         return(
             <div>
                 <p>{console.platform.name}</p>
             </div>
         )
    })



    
    
    return(
        <Link to={"/game#"+props.id}>
        <div className="game" style={style}>
            <div className="game-name">
                <p>{props.name}</p>
                <div className="console-list">
                    {platforms}
                </div>
            </div>
            <div className="game-rating">
                <div>
                    <img src={metacriticIcon}></img>
                    <p>{props.rating}</p>
                </div>
            </div>
        </div>
        </Link>
    )
}