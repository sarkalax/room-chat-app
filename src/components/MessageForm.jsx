import React from "react";
import { useState } from "react";
import { auth, db } from "../firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function MessageForm(props) {
    const { room } = props;
    // const { newMessage, setNewMessage } = props;
    const [newMessage, setNewMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        if (!newMessage) return;

        try {
            await addDoc(collection(db, "messages"), {
                text: newMessage,
                createdAt: serverTimestamp(),
                user: auth.currentUser.displayName,
                photo: auth.currentUser.photoURL,
                room,
            });
        } catch (err) {
            console.log("The message was not sent.");
        }
        setNewMessage("");
    }

    return (
        <form className="newMessageForm" onSubmit={handleSubmit}>
            <textarea
                type="text"
                className="newMessageInput"
                placeholder="Type your message... "
                onChange={(e) => setNewMessage(e.target.value)}
                value={newMessage}
            />
            <button type="submit" className="sendButton">
                Send
            </button>
        </form>
    );
}
