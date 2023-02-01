import {React,useEffect} from "react";
import { Link } from 'react-router-dom';

import metacriticIcon from "./images/metacriticIcon.png"

export default function Games(props){

    const gameBackgroundObj = props.background

    function gameRanking(){
        if((props.pageNumber===1)&&(document.querySelector(".games-list").children.length>=3)){
            document.querySelector(".games-list").children[0].children[0].style.border="solid 3px gold"
            document.querySelector(".games-list").children[1].children[0].style.border="solid 3px silver"
            document.querySelector(".games-list").children[2].children[0].style.border="solid 3px #cd8032"
        }
    }

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

    useEffect(() => {
        gameRanking()
    }, [""]);

    
    
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