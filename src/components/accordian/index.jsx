import { useState } from "react"
import data from "./data"
import './styles.css'
import ReactSwitch from "react-switch";

// Function for Creating Accordian
export default function Accordian() {
    // single-selection accordian useState
    const [singleSelect, setSingleSelect] = useState(null);
    
    // multiple-selection accordian useState => empty array for storing multiple IDs
    const [multiSelect, setMultiSelect] = useState([]);

    // toggle switch useState
    const [checked, setChecked] = useState(false);

    // Function for Handling Selected Options
    function handleSingleSelection(getCurrentID) {
        // Setting useState value to the one user has selected
        setSingleSelect(getCurrentID === singleSelect ? null : getCurrentID);
    }

    // Function for Handling Selection Options
    function handleMultiSelection(getCurrentID) {
        // Copy state into different variable 
        let cpyMultiple = [...multiSelect]
        const findIndex = cpyMultiple.indexOf(getCurrentID)
        if (findIndex === -1) cpyMultiple.push(getCurrentID)
        else cpyMultiple.splice(findIndex, 1)

        setMultiSelect(cpyMultiple)
    }
    console.log(checked, multiSelect);

    // Creating Container for displaying data
    return (
        <div className="wrapper">
            <div className="multi">
                <h1>Enable Multi-Selection</h1> 
                <div className="toggleBtn">
                    <ReactSwitch checked={checked} onChange={() => setChecked(!checked)}/>
                </div>
            </div>
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
                                    <div onClick={ checked ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">
                                        <h3>{dataItem.question}</h3>
                                        <span>+</span>
                                    </div>
                                    {
                                        (singleSelect === dataItem.id) || (multiSelect.indexOf(dataItem.id) !== -1) ?
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