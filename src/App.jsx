import React, { useState } from "react";

import "./app.scss";

import Auth from "./components/Auth";
import Chat from "./components/Chat";
import EnterRoom from "./components/EnterRoom";
import ActionButtons from "./components/ActionButtons";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function App() {
    const [isAuth, setIsAuth] = useState(cookies.get("user-token"));
    const [room, setRoom] = useState(null);

    if (!isAuth) {
        return (
            <div className="container">
                <Auth setIsAuth={setIsAuth} />
            </div>
        );
    }
    return (
        <main>
            <ActionButtons setRoom={setRoom} setIsAuth={setIsAuth}/>
            {!room ? (
                <EnterRoom setRoom={setRoom} />
            ) : (
                <Chat room={room} />
            )}
        </main>
    );
}
