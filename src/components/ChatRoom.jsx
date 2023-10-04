import React from "react";
import MessageForm from "./MessageForm";

import { useEffect, useRef } from "react";

export default function ChatRoom(props) {
    const { room, data } = props;

    const bottomRef = useRef();

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [data]);

    return (
        <>
            <h3 className="roomNameH">
                Room name:{" "}
                <span style={{ color: "orange" }}>{room.toUpperCase()}</span>
            </h3>
            <section className="chatMessages">
                {data.map((mess) => {
                    const { id, text, user, photo, createdAt } = mess;
                    return (
                        <div key={id} className="chatMessage">
                            <div className="chatUser">
                                <img
                                    src={photo}
                                    alt="user photo"
                                    width="20"
                                    height="20"
                                    style={{
                                        borderRadius: "50%",
                                    }}
                                />
                                <small>{user}</small>
                            </div>
                            <p className="messageText">{text}</p>
                        </div>
                    );
                })}
                <div ref={bottomRef}></div>
            </section>
            <MessageForm room={room} />
        </>
    );
}
