import { useContext } from 'react';
import { AppContext } from '../App';
import ChangeProfile from "./ChangeProfile";
import Form from "../components/Form";

export default function Contact() {
    const { userName } = useContext(AppContext);

    return (
        <div className="contact">
            <h1>This is the Contact Page  and my UserName is: {userName}</h1>
            <div className="change">
                Current Username: {userName}
                <ChangeProfile />
                <Form />
            </div>
        </div>
    );
}