import './App.css';
import {useState} from "react";
import {characters} from "./Characters.ts";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.tsx";
import Characters from "./components/Characters.tsx";
import Navigation from "./components/Navigation.tsx";

export default function App() {
    const [searchText, setSearchText] = useState("");

    const filteredCharacters = characters
        .filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <>
            <header>
                <h1>Rick and Morty Gallery</h1>
                <Navigation />
            </header>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/characters"} element={<Characters characters={filteredCharacters} setSearchText={setSearchText} searchText={searchText}/>}/>
            </Routes>


        </>
    );
}
