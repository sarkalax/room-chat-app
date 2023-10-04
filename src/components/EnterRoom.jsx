import React from "react";
import { useRef } from "react";

export default function EnterRoom(props) {
    const { setRoom } = props;

    const inputRoom = useRef();

    return (
        <div className="container">
            <h3>Enter Room Name:</h3>
            <input ref={inputRoom} type="text" autoFocus />
            <button onClick={() => setRoom(inputRoom.current.value)}>
                Enter Chat
            </button>
        </div>
    );
}
