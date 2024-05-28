import { useState } from "react"
import data from "./data"
import './styles.css'

// Function for Creating Accordian
export default function Accordian() {
    // single-selection accordian useState
    const [singleSelect, setSingleSelect] = useState(null);

    // Function for Handling Selected Options
    function handleSingleSelection(getCurrentID) {
        // Setting useState value to the one user has selected
        setSingleSelect(getCurrentID === singleSelect ? null : getCurrentID);
    }
    console.log(singleSelect);

    // Creating Container for displaying data
    return (
        <div className="wrapper">
            <div className="accordian">
                <h1>Single Selection Approach</h1>
                {
                    // Check if data returned is empty or not
                    data && data.length > 0 ? (
                        data.map (
                            // Map the Content of the received data into dataItem
                            dataItem => (
                                <div className="dataElement">
                                    {/* Display Questions from all the Fetched Data using dataItem */}
                                    <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                                        <h3>{dataItem.question}</h3>
                                        <span>+</span>
                                    </div>
                                    {
                                        singleSelect === dataItem.id ?
                                        <div className="content">{dataItem.answer}</div>
                                        : null
                                    }
                                </div>
                            )
                        )
                    )
                    : <div>No Data Found</div>
                }
            </div>
        </div>
    );
}