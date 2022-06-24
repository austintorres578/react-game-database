import React, { useState } from 'react';

import SearchContainer from "./SearchContainer"
import Games from './Games';

export default function HomePage(props){

    
    const [gatheredData,setGatheredData] = useState([])
    

    function search(link){
        const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-key': 'c9d7675297msh7c0392e178bd12cp1541a1jsn774cfdd0879c',
              'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
            }
          };

          
          fetch(link, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                return(setGatheredData(response.results))

            })
            .catch(err => console.error(err));


    }

    const games = gatheredData.map(game => {
        return (
            <Games 
                key={game.id}
                id={game.id}
                name={game.name}
                rating={game.metacritic}
            />
        )
    })

    


    
    
    return(
        <div className="home-page-section">
            <div className='app-container'>
                <SearchContainer 
                    handleSearch={search}
                />
                <div className="results-container">
                    <div className='game-catagories'>
                        <div>
                            <p>ID</p>
                        </div>
                        <div>
                            <p>Name</p>
                        </div>
                        <div className='catagories-rating'>
                            <p>Rating</p>
                        </div>
                    </div>
                    {games}
                </div>
            </div>
        </div>
    )
}