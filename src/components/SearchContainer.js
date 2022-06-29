import React, { useState } from 'react';
import Select from 'react-select';

export default function SearchContainer(props){

    const consoles = [
        { value: "", label: 'All Consoles'},
        { value: "&platforms=49", label: 'NES' },
        { value: "&platforms=79", label: 'SNES' },
        { value: "&platforms=83", label: 'N64' },
        { value: "&platforms=105", label: 'GameCube' },
        { value: "&platforms=11", label: 'Wii' },
        { value: "&platforms=7", label: 'Switch' },
        { value: "&platforms=26", label: 'Gameboy' },
        { value: "&platforms=43", label: 'Gameboy Color' },
        { value: "&platforms=24", label: 'Gameboy Advance' },
        { value: "&platforms=9", label: 'DS' },
        { value: "&platforms=8", label: '3DS' },
        { value: "&platforms=74", label: 'Sega MS' },
        { value: "&platforms=167", label: 'Genesis' },
        { value: "&platforms=107", label: 'Saturn' },
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
        { value: "4", label: 'Action' },
        { value: "3", label: 'Adventure' },
        { value: "11", label: 'Arcade' },
        { value: "17", label: 'Card' },
        { value: "40", label: 'Casual' },
        { value: "19", label: 'Family' },
        { value: "6", label: 'Fighting' },
        { value: "51", label: 'Indie' },
        { value: "59", label: 'Multiplayer' },
        { value: "83", label: 'Platformer' },
        { value: "7", label: 'Puzzle' },
        { value: "1", label: 'Racing' },
        { value: "5", label: 'RPG' },
        { value: "2", label: 'Shooter' },
        { value: "14", label: 'Simulation' },
        { value: "15", label: 'Sports' },
        { value: "10", label: 'Strategy' }
    ];

    const [selectedGenre, setSelectedGenre] = useState([]);

    const [selectedConsole, setSelectedConsole] = useState(null);


    let search = props.handleSearch

    let loadChecker = props.loading

    let genreArray = []

    let consoleLink = ""

    let genreLink = ""


    let page = 1

    let pageLink = `&page=${page}`


    let fetchLink = props.link


    

    function getLinks(){
        if(selectedGenre.length>0){
            for (let i = 0; i < selectedGenre.length; i++) {
            genreArray.push(selectedGenre[i].value);   
            }
            genreLink = '&genres='+ genreArray.join()
            }else{
                genreLink=""
            }
        if(selectedConsole!=null){
            consoleLink=selectedConsole.value
        }else{
            consoleLink=""
        }


        search(fetchLink+genreLink+consoleLink+pageLink)

        genreArray=[]

        consoleLink=""

        genreLink=""

        
        
        
    }


    // console.log(consoles[0].label)

    return(
        <div className="search-container">
            
            <div className="search-parameters-con">
                <div className='search-parameters'>
                    <div className='console-input'>
                        <Select
                            onChange={setSelectedConsole}
                            defaultValue={consoles[0]}
                            placeholder={"Console"}
                            options={consoles}
                            link={consoleLink}
                        />
                    </div>
                    <div className='genre-input'>
                        <Select
                            isMulti
                            defaultValue={selectedGenre}
                            placeholder={"Genre"}
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
        </div>
    )
}