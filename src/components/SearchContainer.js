import React, { useState } from 'react';
import Select from 'react-select';

export default function SearchContainer(props){

    const consoles = [
        { value: "49", label: 'NES' },
        { value: "79", label: 'SNES' },
        { value: "83", label: 'N64' },
        { value: "105", label: 'GameCube' },
        { value: "11", label: 'Wii' },
        { value: "7", label: 'Switch' },
        { value: "26", label: 'Gameboy' },
        { value: "43", label: 'Gameboy Color' },
        { value: "24", label: 'Gameboy Advance' },
        { value: "9", label: 'DS' },
        { value: "8", label: '3DS' },
        { value: "74", label: 'Sega MS' },
        { value: "167", label: 'Genesis' },
        { value: "107", label: 'Saturn' },
        { value: "106", label: 'Dreamcast' },
        { value: "27", label: 'PS1' },
        { value: "15", label: 'PS2' },
        { value: "16", label: 'PS3' },
        { value: "18", label: 'PS4' },
        { value: "187", label: 'PS5' },
        { value: "17", label: 'PSP' },
        { value: "19", label: 'PS Vita' },
        { value: "80", label: 'Xbox' },
        { value: "14", label: 'Xbox 360' },
        { value: "1", label: 'Xbox One' },
        { value: "186", label: 'Xbox X/S' }
        
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
            consoleLink='&platforms='+selectedConsole.value
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
                            defaultValue={selectedConsole}
                            onChange={setSelectedConsole}
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
                    <button onClick={getLinks}>Search</button>
                </div>
            </div>
        </div>
    )
}