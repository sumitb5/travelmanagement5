import React from "react";
import background from "../img/1386029.jpg";

export default function Home() {
    return (
        <div style= {{backgroundImage: `url(${background})`, backgroundSize:'contain',height:1010,width:1345}}>
            <h1>Welcome to Travelgram.com</h1>
        </div>
    );
}