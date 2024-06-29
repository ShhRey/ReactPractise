import React, { useState } from 'react'
import './styles.css'

// Function for Creating CounterApp
export default function CounterApp() {
    // Setting useState for counter
    const [count, setCount] = useState(0);

    // Function to increase Counter Value
    const increaseVal = () => {
        setCount(count + 1);
    }

    // Function to decrease Counter Value
    const decreaseVal = () => {
        setCount(count - 1);
    }

    // Function to reset Counter Value
    const resetVal = () => {
        setCount(0);
    }

    return (
        <div className="container">
            <h1 className="counterHeader">Counter Implementation</h1>
            <div className="button-container">
                {/* Adding onClicks to Buttons for calling specific functions */}
                <button className="counter-button" onClick={increaseVal}>Increase</button>
                <button className="counter-button" onClick={decreaseVal}>Decrease</button>
                <button className="counter-button" onClick={resetVal}>Reset</button>
            </div>
            <div className="count-display">
                {count}
            </div>
        </div>
    );
}