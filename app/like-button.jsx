"use client"; // This is to make the component a Client Component so that React can render the component on the client.
import { useState } from "react";

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return <button onClick={handleClick}>Like ({likes})</button>
}