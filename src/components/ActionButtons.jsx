import React from "react";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function ActionButtons(props) {
    const { setRoom, setIsAuth } = props;

    async function signUserOut() {
        await signOut(auth);
        cookies.remove("user-token");
        setIsAuth(false);
        setRoom(null);
    }

    return (
        <div className="actionButtons">
            <button className="signOut" onClick={signUserOut}>
                Sign out
            </button>
            <button onClick={() => setRoom(null)} className="changeRoom">
                change room
            </button>
        </div>
    );
}
