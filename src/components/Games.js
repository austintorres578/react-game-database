import React from "react";

export default function Games(props){
    return(
        <div className='game'>
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
        </div>
    )
}