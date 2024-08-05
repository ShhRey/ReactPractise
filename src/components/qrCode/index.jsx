import { useState } from "react";
import QRCode from "react-qr-code";
import './styles.css';

// Create a component for QR Generator
export default function QRCodeGenerator() {
    // Equalizing the value for Input and the QR for the Code to be Generated
    const [qrCode, setQRCode] = useState("");
    // Creating a State for storing the Input for which QR is Requested
    const [input, setInput] = useState("");

    function genQRCode() {
        // Storing Input in state and Resetting it again for Next Input
        setQRCode(input);
        setInput("");
        console.log(input);
    }
    
    return (
        <div className="qrContainer">
            <h1>Create Custom QR Code</h1>
            <div className="inputFields">
                {/* Updating Input as and when user types */}
                <input onChange={(e) => setInput(e.target.value)} type="text" name="qrValue" value={input} placeholder="Enter Any Value Here" />
                {/* Disable generate button if input is Empty and call genQRCode function upon button click*/}
                <button disabled={input && input.trim !== '' ? false : true} onClick={genQRCode}>Generate QR</button>
            </div>
            <div className="qrImg">
                <QRCode id="qrGen" value={qrCode} size={400} bgColor="#fff" />
            </div>
        </div>
    )
}