import React from "react";
import { Link } from 'react-router-dom';

export default function Games(props){
    
    return(
        <div className='game'>

            {/* "#" is used to pass game id to gamePage" */}

            <Link to={"/game#"+props.id}>
                <div className='game-id'>
                    <div>
                        <p>{props.id}</p>
                    </div>
                </div>
                <div className="game-name">
                    <p>{props.name}</p>
                </div>
                <div className='game-rating'>
                    <p>{props.rating}</p>
                </div>
            </Link>
        </div>
    )
}