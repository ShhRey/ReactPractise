import { useContext, useState } from "react";
import { AppContext } from "../App";

export default function ChangeProfile() {
    const { setUserName } = useContext(AppContext);
    const [newUsername, setNewUsername] = useState("");
    
    return (
        <div>
            <input type="text" onChange={(event) => {setNewUsername(event.target.value)}} />
            <button onClick={() => {setUserName(newUsername)}}>Change Username</button>
        </div>
    )
}