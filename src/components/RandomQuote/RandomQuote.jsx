'use client';
import React, { useState, useEffect } from "react";
import './RandomQuote.css';
import refresh_icon from '../Assets/refresh_icon.png'

export default function RandomQuote(){
    let quotes = [];
    async function loadQuotes() {
        const response = await fetch ("https://type.fit/api/quotes");
        quotes = await response.json();
    }
    
        const [quote, setQuote] = useState("Genius is one percent insiration and ninety-nine percent perspiration"
        )
        const [author, setAuthor] = useState("Thomas Edison")

        // https://api.quotable.io/random
        // https://type.fit/api/quotes
        loadQuotes()
    return (
        <div className="container">
            <div className="quote">{quote}</div>
            <div className="line"></div>
            <div className="bottom"></div>
            <div className="author">-{author}-</div>
            {/* <div className="icon"> */}
                {/* <img src="https://icons.veryicon.com/png/o/miscellaneous/wasteapp/refresh-348.png" alt="" /> */}
            {/* </div> */}
            <div>
                <button className="btn">Generate New Quote</button>
            </div>
        </div>
    
    )
}
