import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
        </div>
    )
}