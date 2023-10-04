import "./chat.scss";
// import MessageForm from "./MessageForm";
import Loading from "./Loading";
import ChatRoom from "./ChatRoom";

import React, { useEffect, useState, useRef } from "react";

import { db } from "../firebase-config";

import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";

export default function Chat(props) {
    const { room } = props;

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const q = query(collection(db, "messages"), where("room", "==", room), orderBy("createdAt"));
        const unsub = onSnapshot(q, (snapshot) => {
            let messages = [];
            snapshot.forEach((mess) =>
            messages.push({ id: mess.id, ...mess.data() })
            );
            setData(messages);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        });
        return () => unsub();
    }, []);

    return (
        <section className="container">
            <div className="chat">
                {loading ? (
                    <Loading />
                ) : (
                    <ChatRoom room={room} data={data}/>
                )}
            </div>
        </section>
    );
}

