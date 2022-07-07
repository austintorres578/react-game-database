import React, { useState, useEffect } from 'react';
import Select from 'react-select';

export default function SearchContainer(props){

    const consoles = [
        { value: "", label: 'All Consoles'},
        { value: "&platforms=83", label: 'N64' },
        { value: "&platforms=105", label: 'GameCube' },
        { value: "&platforms=11", label: 'Wii' },
        { value: "&platforms=10", label: "Wii U"},
        { value: "&platforms=7", label: 'Switch' },
        { value: "&platforms=24", label: 'Gameboy Advance' },
        { value: "&platforms=9", label: 'DS' },
        { value: "&platforms=8", label: '3DS' },
        { value: "&platforms=106", label: 'Dreamcast' },
        { value: "&platforms=27", label: 'PS1' },
        { value: "&platforms=15", label: 'PS2' },
        { value: "&platforms=16", label: 'PS3' },
        { value: "&platforms=18", label: 'PS4' },
        { value: "&platforms=187", label: 'PS5' },
        { value: "&platforms=17", label: 'PSP' },
        { value: "&platforms=19", label: 'PS Vita' },
        { value: "&platforms=80", label: 'Xbox' },
        { value: "&platforms=14", label: 'Xbox 360' },
        { value: "&platforms=1", label: 'Xbox One' },
        { value: "&platforms=186", label: 'Xbox X/S' }
        
    ]

    const genres = [
        { value: "", label: "All Genres"},
        { value: "genres=4", label: 'Action' },
        { value: "genres=3", label: 'Adventure' },
        { value: "genres=11", label: 'Arcade' },
        { value: "genres=17", label: 'Card' },
        { value: "genres=40", label: 'Casual' },
        { value: "genres=19", label: 'Family' },
        { value: "genres=6", label: 'Fighting' },
        { value: "genres=51", label: 'Indie' },
        { value: "genres=59", label: 'Multiplayer' },
        { value: "genres=83", label: 'Platformer' },
        { value: "genres=7", label: 'Puzzle' },
        { value: "genres=1", label: 'Racing' },
        { value: "genres=5", label: 'RPG' },
        { value: "genres=2", label: 'Shooter' },
        { value: "genres=14", label: 'Simulation' },
        { value: "genres=15", label: 'Sports' },
        { value: "genres=10", label: 'Strategy' }
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
            setSelectedConsole(JSON.parse(localStorage.getItem("selectedConsole")));
            setSelectedGenre(JSON.parse(localStorage.getItem("selectedGenre")));
            console.log(selectedConsole);
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
                            placeholder={"All Consoles"}
                            options={consoles}
                            link={consoleLink}
                        />
                    </div>
                    <div className='genre-input'>
                        <Select
                            placeholder={"All Genres"}
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