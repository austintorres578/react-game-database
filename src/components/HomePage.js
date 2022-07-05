import React, { useState } from 'react';
import arrow from '../components/images/arrow.png'

import SearchContainer from "./SearchContainer"
import Games from './Games';

export default function HomePage(props){

    let origin = "https://rawg-video-games-database.p.rapidapi.com/"

    let newSearch = true;

    const [loading, setLoading] = useState(false)
    
    const [gatheredData,setGatheredData] = useState([
        {
        results:[],
        next:"",
        previous:"",
        loaded:false
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

          setLoading(true)
          
          fetch(link, options)
            .then(response => {
                return response.json()})
            .then(response => {
                setLoading(false)
                console.log(response)
                if(newSearch===true){
                    setPageNumber(1)
                }
                return(setGatheredData([
                    {
                    results:response.results,
                    next:response.next,
                    previous:response.previous,
                    loaded:true
                }]))


            })
            .catch(err => console.error(err));

    }

    function nextPage(){
        if(gatheredData[0].loaded===true){
        let length = gatheredData[0].next.length
        setPageNumber(prevState => prevState + 1)
        newSearch=false
        search(origin+gatheredData[0].next.slice(24,length))
        }else{
            console.log("Not loaded")
        }
    }

    function prevPage(){
        if(gatheredData[0].loaded===true){
        let length = gatheredData[0].previous.length
        search(origin+gatheredData[0].previous.slice(24,length))
        newSearch=false
        if(pageNumber>1){
            setPageNumber(prevState => prevState - 1)
        }
        }else{
            console.log("Not loaded")
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
                    loading={loading}
                    nextPageHandler={nextPage}
                    prevPageHandler={prevPage}
                    
                />
                <div className="results-container">
                    <div className='games-list'>
                        {loading ? <p className='loading-text'>Loading...</p> : games}
                    </div>
                </div>
                <div className='game-page-buttons'>
                    <div>
                        {loading ? <></> : <button onClick={prevPage}><img className="left-arrow" src={arrow}></img></button>}
                    </div>
                    <div className='page-number'>
                        <p>{ gatheredData[0].loaded ? "Page " + pageNumber : <></>}</p>
                    </div>
                    <div>
                        {loading ? <></> : <button onClick={nextPage}><img className="right-arrow" src={arrow}></img></button>}
                    </div>
                </div>
            </div>
        </div>
    )
}