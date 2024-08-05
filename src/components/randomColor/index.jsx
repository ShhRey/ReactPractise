import { useState } from "react";

export function RandomColor() {
    const [color, setColor] = useState("#000000");

    // Function for Creating a random HEX Color
    function handleHexColor() {
        const hex = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F']
        let hexColor = '#'
        for (let i=0; i<6; i++) {
            hexColor += hex[Math.floor(Math.random() * hex.length)];
        }
        console.log(hexColor);
        setColor(hexColor);
    }

    // Function for Creating a random RGB Color
    function handleRgbColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const rgbColor = `rgb(${r}, ${g}, ${b})`;
        console.log(rgbColor);
        setColor(rgbColor);
    }


    return (
        <div style={{ marginTop: '3%','height':'50vh', 'width': '100vw', 'background': color }} className="container">
            <button onClick={handleHexColor}>Create Random HEX Color</button>
            <button onClick={handleRgbColor}>Create Random RGB Color</button>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", color: "#fff"}}>
                <h1>{color}</h1>
            </div>
        </div>
    )
}