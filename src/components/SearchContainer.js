import React, { useState, useEffect } from 'react';
import Select from 'react-select';

export default function SearchContainer(props){

    const consoles = [
        { value: "", label: 'All Consoles', placement:"0"},
        { value: "&platforms=83", label: 'N64', placement:"1" },
        { value: "&platforms=105", label: 'GameCube', placement:"2" },
        { value: "&platforms=11", label: 'Wii', placement:"3" },
        { value: "&platforms=10", label: "Wii U", placement:"4"},
        { value: "&platforms=7", label: 'Switch', placement:"5" },
        { value: "&platforms=24", label: 'Gameboy Advance', placement:"6" },
        { value: "&platforms=9", label: 'DS', placement:"7" },
        { value: "&platforms=8", label: '3DS', placement:"8" },
        { value: "&platforms=106", label: 'Dreamcast', placement:"9" },
        { value: "&platforms=27", label: 'PS1', placement:"10" },
        { value: "&platforms=15", label: 'PS2', placement:"11" },
        { value: "&platforms=16", label: 'PS3', placement:"12" },
        { value: "&platforms=18", label: 'PS4', placement:"13" },
        { value: "&platforms=187", label: 'PS5', placement:"14" },
        { value: "&platforms=17", label: 'PSP', placement:"15" },
        { value: "&platforms=19", label: 'PS Vita', placement:"16" },
        { value: "&platforms=80", label: 'Xbox', placement:"17" },
        { value: "&platforms=14", label: 'Xbox 360', placement:"18" },
        { value: "&platforms=1", label: 'Xbox One', placement:"19" },
        { value: "&platforms=186", label: 'Xbox X/S',placement:"20" }
        
    ]

    const genres = [
        { value: "", label: "All Genres", placement:"0"},
        { value: "genres=4", label: 'Action', placement:"1" },
        { value: "genres=3", label: 'Adventure', placement:"2" },
        { value: "genres=11", label: 'Arcade', placement:"3" },
        { value: "genres=17", label: 'Card', placement:"4" },
        { value: "genres=40", label: 'Casual', placement:"5" },
        { value: "genres=19", label: 'Family', placement:"6" },
        { value: "genres=6", label: 'Fighting', placement:"7" },
        { value: "genres=51", label: 'Indie', placement:"8" },
        { value: "genres=59", label: 'Multiplayer', placement:"9" },
        { value: "genres=83", label: 'Platformer', placement:"10" },
        { value: "genres=7", label: 'Puzzle', placement:"11" },
        { value: "genres=1", label: 'Racing', placement:"12" },
        { value: "genres=5", label: 'RPG', placement:"13" },
        { value: "genres=2", label: 'Shooter', placement:"14" },
        { value: "genres=14", label: 'Simulation', placement:"15" },
        { value: "genres=15", label: 'Sports', placement:"16" },
        { value: "genres=10", label: 'Strategy', placement:"17" }
    ];

    const [selectedGenre, setSelectedGenre] = useState(null);

    const [selectedConsole, setSelectedConsole] = useState(null);
    


    let search = props.handleSearch

    let loadChecker = props.loading

    let consoleLink = ""

    let genreLink = ""


    let page = 1

    let pageLink = `&page=${page}`


    let fetchLink = props.link

    let consoleDefault = () =>{
        if(JSON.parse(localStorage.getItem("selectedConsole"))!=null){
            return consoles[JSON.parse(localStorage.getItem("selectedConsole")).placement]
        }else{
            return consoles[0]
        }
    }

    let genresDefault = () =>{
        if(JSON.parse(localStorage.getItem("selectedGenre"))!=null){
            return genres[JSON.parse(localStorage.getItem("selectedGenre")).placement]
        }else{
            return genres[0]
        }
    }

    

    function getLinks(){
        if(selectedGenre!=null){
            localStorage.setItem("selectedGenre",JSON.stringify(selectedGenre))
            genreLink=selectedGenre.value
            }else{
                genreLink=""
            }
        if(selectedConsole!=null){
            localStorage.setItem("selectedConsole",JSON.stringify(selectedConsole))
            consoleLink=selectedConsole.value
        }else{
            consoleLink=""
        }


        search(fetchLink+genreLink+consoleLink+pageLink)

        consoleLink=""

        genreLink=""    
        
    }

    function onLoad(){
        if(localStorage.getItem("currentLink")!==null){
            setSelectedConsole(JSON.parse(localStorage.getItem("selectedConsole")))
            setSelectedGenre(JSON.parse(localStorage.getItem("selectedGenre")))
            console.log(selectedConsole)
            console.log(selectedGenre)
        }
    }

    useEffect(() => {
        console.log("executed only once!");
        onLoad();
    }, [""]);

    return(
        <div className="search-container"> 
            <div className="search-parameters-con">
                <div className='search-parameters'>
                    <div className='console-input'>
                        <Select
                            onChange={setSelectedConsole}
                            defaultValue={consoleDefault}
                            placeholder={"All Consoles"}
                            options={consoles}
                            link={consoleLink}
                        />
                    </div>
                    <div className='genre-input'>
                        <Select
                            placeholder={"All Genres"}
                            defaultValue={genresDefault}
                            onChange={setSelectedGenre}
                            options={genres}
                            link={genreLink}
                        />
                    </div>
                </div>
                <div className='search-button-container'>
                    {loadChecker ? <></> : <button onClick={getLinks}>Search</button>}
                </div>
            </div>
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
        </div>
    )
}