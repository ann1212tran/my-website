"use client";
import React, { useState } from "react";
import "./RandomQuote.css";
import { IoReloadCircle } from "react-icons/io5";
import Image from "next/image";
// import refreshicon from "../../..public/refreshicon.png";

export default function RandomQuotes() {
    let quotes = [];
    async function loadQuotes() {

    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
    }
    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }
    const [quote, setQuote] = useState({
        text: "Difficulties increase the nearer we get to the goal",
        author: "Johann Wolfgang von Goethe",
    });

    return (
        <div className="container">
            <div className="quote">{quote.text}</div>

            <div className="line"></div>
            <div className="bottom"></div>
            <div className="author">{quote.author}</div>
            <div className="icon">
            {/* <IoReloadCircle size="35px" gap="60px" onClick={() => {random()}} /> */}
            {/* <Image
            src="" 
            alt=""
            width="5"
            height="5"/> */}
            </div>
          
        </div>
    )
}