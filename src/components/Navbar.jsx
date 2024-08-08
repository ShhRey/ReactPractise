import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/side-projects">SIDE PROJECTS</Link>
        </div>
    )
}