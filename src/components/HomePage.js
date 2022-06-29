import React, { useState } from 'react';

import SearchContainer from "./SearchContainer"
import Games from './Games';

export default function HomePage(props){

    let origin = "https://rawg-video-games-database.p.rapidapi.com/"

    let newSearch = true;

    
    const [gatheredData,setGatheredData] = useState([
        {
        results:[],
        next:"",
        previous:""
        }
    ])

    const [pageNumber, setPageNumber] = useState(1)


    let fetchLink = "https://rawg-video-games-database.p.rapidapi.com/games?key=99cd09f6c33b42b5a24a9b447ee04a81&ordering=-metacritic&page_size=40&"


    
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
                if(newSearch===true){
                    setPageNumber(1)
                }
                return(setGatheredData([
                    {
                    results:response.results,
                    next:response.next,
                    previous:response.previous
                }]))


            })
            .catch(err => console.error(err));

    }

    function nextPage(){
        let length = gatheredData[0].next.length
        setPageNumber(prevState => prevState + 1)
        newSearch=false
        search(origin+gatheredData[0].next.slice(24,length))
    }

    function prevPage(){
        let length = gatheredData[0].previous.length
        search(origin+gatheredData[0].previous.slice(24,length))
        newSearch=false
        if(pageNumber>1){
            setPageNumber(prevState => prevState - 1)
        }
    }



     const games = gatheredData[0].results.map(game => {
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
                    data={gatheredData}
                    handleSearch={search}
                    link={fetchLink}
                    nextPageHandler={nextPage}
                    prevPageHandler={prevPage}
                    
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
                <div className='game-page-buttons'>
                    <div>
                        <button onClick={prevPage}>Prev Page</button>
                    </div>
                    <div className='page-number'>
                        <p>Page {pageNumber}</p>
                    </div>
                    <div>
                        <button onClick={nextPage}>Next Page</button>
                    </div>
                </div>
            </div>
        </div>
    )
}