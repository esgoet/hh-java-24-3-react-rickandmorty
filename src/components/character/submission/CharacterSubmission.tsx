import {ChangeEvent, FormEvent, useState} from "react";
import {Character} from "../../../types/RickAndMortyCharacter.ts";
import "./CharacterSubmission.css";
import {useNavigate} from "react-router-dom";


type CharacterSubmissionProps = {
    characters: Character[],
    setCharacters: (characters: Character[]) => void;
}

export default function CharacterSubmission({characters, setCharacters} : CharacterSubmissionProps) {
    const [character, setCharacter] = useState<Character>({id: 0,name: "", species: "", image: "", episode: [], gender: "", status: "", created: "", location: {name: "", url: ""}, origin: {name: "", url: ""} , type: "", url: ""});
    const navigate = useNavigate();

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCharacter({...character, [event.target.name]: event.target.value});
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!characters.includes(character)) {
            character.id = characters.length + 1;
            setCharacters([character, ...characters]);
            alert("Character Submitted.");
            navigate("/characters");
        } else {
            alert("Character already in database.")
        }
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input name={"name"} value={character.name} onChange={onChange} placeholder={"Name"}/>
                <input name={"gender"} value={character.gender} onChange={onChange} placeholder={"Gender"}/>
                <input name={"species"} value={character.species} onChange={onChange} placeholder={"Species"}/>
                <fieldset>
                    <legend>Status</legend>
                    <input type={"radio"} id={"alive"} name={"status"} value={"Alive"} onChange={onChange}
                           placeholder={"Status"} checked={character.status === "Alive"}/>
                    <label htmlFor={"alive"}>Alive</label>
                    <input type={"radio"} id={"dead"} name={"status"} value={"Dead"} onChange={onChange}
                           placeholder={"Status"} checked={character.status === "Dead"}/>
                    <label htmlFor={"dead"}>Dead</label>
                    <input type={"radio"} id={"unknown"} name={"status"} value={"Unknown"} onChange={onChange}
                           placeholder={"Status"} checked={character.status === "Unknown"}/>
                    <label htmlFor={"unknown"}>Unknown</label>
                </fieldset>


                <input name={"image"} value={character.image} onChange={onChange} placeholder={"Image URL"}/>
                <button type={"submit"}>Submit</button>
                <button type={"reset"} onClick={() => setCharacter({id: 0,name: "", species: "", image: "", episode: [], gender: "", status: "", created: "", location: {name: "", url: ""}, origin: {name: "", url: ""} , type: "", url: ""})}>Reset</button>
            </form>
        </>
    )
}