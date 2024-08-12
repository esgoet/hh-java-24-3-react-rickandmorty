import { Character } from "../../../types/RickAndMortyCharacter.ts";
import {useNavigate, useParams} from "react-router-dom";
import "./CharacterDetailCard.css";

type CharacterDetailCardProps = {
    characters: Character[]
}

export default function CharacterDetailCard({ characters} : CharacterDetailCardProps) {
    const params = useParams();
    const character : Character | undefined = characters.find(character => character.id.toString() === params.id);
    const navigate = useNavigate();

    return (
        <>
            {character &&
            <div className="character-details-card">
                <img src={character.image} alt={character.name}/>
                <div className="character-details-card-info">
                    <h3>{character.name}</h3>
                    <p>Species: {character.species}</p>
                    <p>Status: {character.status}</p>
                    <p>Gender: {character.gender}</p>
                    <p>{character.episode.length > 1 ? "Episodes: " : "Episode: "}{character.episode.map(episode => episode.substring(40)).join(", ")}</p>
                </div>
                <button onClick={() => navigate("/characters")}>Back</button>
            </div>

            }
        </>
    )
}