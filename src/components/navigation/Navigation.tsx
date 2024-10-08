import {Link} from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
    return (
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/characters"}>Characters</Link>
            <Link to={"/characters/submit"}>Submit A Character</Link>
        </nav>
    )
}

