import { useEffect, useState } from "react";
import GitHubUser from "./user";

export default function ProfileFinder() {
    // State for storing usernames provided by User Input
    const [userName, setUserName] = useState("ShhRey");
    // State for storing user's data from API
    const [userData, setUserData] = useState(null);
    // State for handling loading data via API
    const [loading, setLoading] = useState(false);

    // Function to Fetch User from GitHub using available API
    async function fetchGithubUsers() {
        setLoading(true);
        const resp = await fetch(`https://api.github.com/users/${userName}`);
        const result = await resp.json();

        // Check if Data is fetched or not, If fetched store in our State
        // If data is fetched, change loading state and reset input box for new search
        if (result) {
            setUserData(result);
            setLoading(false);
            setUserName("");
        }
        console.log(result);
    }

    function handleSubmit() {
        fetchGithubUsers();
    }

    useEffect(() => {
        fetchGithubUsers();
    }, []);
    
    // Display Loading Message while searching for Data
    if (loading) {
        return <div>Loading Data! Please Wait...</div>
    }

    return (
        <div className="pfContainer">
            <h2>GitHub Profile Finder</h2>
            <div className="inputContainer">
                <input type="text" name="searchUser" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter GitHub Username" />
                <button onClick={handleSubmit}>Search</button>
            </div>
            { userData !== null ? <GitHubUser user={userData} /> : null }
        </div>    
    )
}