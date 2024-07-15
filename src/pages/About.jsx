import { useContext } from "react";
import { AppContext } from "../App";
import ChangeProfile from "../components/ChangeProfile";

export default function About() {
    const { userName } = useContext(AppContext);

    return (
        <div className="about">
            <h1>Hello Everyone! My name is Shrey Trivedi</h1>
            <div className="change">
                Current Username: {userName}
                <ChangeProfile />
            </div>
        </div>
    );
}