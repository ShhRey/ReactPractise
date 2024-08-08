import axios from 'axios';
import React, { useEffect, useState } from 'react'

// Function for fetching data from API
export default function ApiFetch() {
    const [catFact, setCatFact] = useState("");

    // Function to Fetch Data from API on button click
    const fetchData = () => {
        axios.get("https://catfact.ninja/fact").then((res) => {
            // console.log(res.data.fact);
               setCatFact(res.data.fact);
        });
    }

    // Method to Fetch Data from API on Page Rendering
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="">
            {/* Using function to Change State when button is pressed */}
            <button onClick={fetchData}>Random Cat Fact</button>
            <p>{catFact}</p>
        </div>
    )
}
