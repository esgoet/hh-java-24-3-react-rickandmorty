import CharacterGallery from "../gallery/CharacterGallery.tsx";
import {Character} from "../../../types/RickAndMortyCharacter.ts";

type CharacterProps = {
    characters: Character[],
    setSearchText: (searchText:string) => void,
    searchText: string
}

export default function CharacterPage({characters, setSearchText, searchText} : CharacterProps) {
    return (
        <>
            <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search for a character" value={searchText}/>
            {
                characters.length > 0
                    ? <CharacterGallery characters={characters}/>
                    : <p>No characters found</p>
            }

        </>

    )

}