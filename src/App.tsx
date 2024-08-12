import './App.css';
import {useState} from "react";
import {characters} from "./Characters.ts";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.tsx";
import CharacterPage from "./components/character/page/CharacterPage.tsx";
import Navigation from "./components/navigation/Navigation.tsx";
import CharacterDetailCard from "./components/character/detail/CharacterDetailCard.tsx";
import CharacterSubmission from "./components/character/submission/CharacterSubmission.tsx";
import {Character} from "./types/RickAndMortyCharacter.ts";


export default function App() {
    const [searchText, setSearchText] = useState<string>("");
    const [currentCharacters, setCurrentCharacters ] = useState<Character[]>(characters);

    const filteredCharacters = currentCharacters
        .filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()));


    return (
        <>
            <header>
                <h1>Rick and Morty Gallery</h1>
                <Navigation />
            </header>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/characters"} element={<CharacterPage characters={filteredCharacters} setSearchText={setSearchText} searchText={searchText}/>}/>
                <Route path={"/characters/:id"} element={<CharacterDetailCard characters={currentCharacters} />}/>
                <Route path={"/characters/submit"} element={<CharacterSubmission characters={currentCharacters} setCharacters={setCurrentCharacters}/>}/>
            </Routes>
        </>
    );
}
