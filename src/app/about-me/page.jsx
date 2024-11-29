import Link from "next/link";
import Image from "next/image";
import React from "react";

import shuttershockphoto from "../../../public/shutterstock_787331263-XL.jpg";
import christmaslight from "../../../public/christmaslight.jpg";
import whalemaldives from "../../../public/whalemaldives.jpg";

export default function AboutPage() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello!</h1>
        <br></br>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Image
            src={shuttershockphoto}
            width="500"
            height="300"
            alt="cherry in Japan"
          />
          <img
            src="christmaslight.jpg"
            width="500"
            height="300"
            alt="christmas in New York"
          />
          <img
            src="whalemaldives.jpg"
            width="500"
            height="300"
            alt="whale in Maldives"
          />
        </div>

        <br></br>

        <p>
          Some fun facts about:
          <li>My name is Ann.</li>
          <li>
            My favourite season is winter. Because Christmas is my favourtite
            holiday; I love seeing streets covered with colourfull lights,
            Christmas market with ice-skating, hot chocolate,... and Christmas
            songs that are played everywhere.
          </li>
          My dream vacations:
          <li>Japan to see cherry-blossom trees in season;</li>
          <li>New York to see all the lights at Christmas;</li>
          <li>Maldives to see whales and dive under the ocean</li>
        </p>
        <br></br>
        <Link
          className="text-bold underline italic text-blue-300 text-lg font-bold"
          href="/about-me/playlists"
        >
          Most curently songs listen to
        </Link>
      </div>
    </>
  );
}
