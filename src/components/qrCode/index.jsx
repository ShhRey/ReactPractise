import { useState } from "react";
import QRCode from "react-qr-code";
import './styles.css';


export default function QRCodeGenerator() {
    const [qrCode, setQRCode] = useState("");

    const [input, setInput] = useState("");

    function genQRCode() {
        setQRCode(input);
        setInput("");
        console.log(input);
    }
    
    return (
        <div className="qrContainer">
            <h1>Create Custom QR Code</h1>
            <div className="inputFields">
                <input onChange={(e) => setInput(e.target.value)} type="text" name="qrValue" value={input} placeholder="Enter Any Value Here" />
                <button disabled={input && input.trim !== '' ? false : true} onClick={genQRCode}>Generate QR</button>
            </div>
            <div className="qrImg">
                <QRCode id="qrGen" value={qrCode} size={400} bgColor="#fff" />
            </div>
        </div>
    )
}