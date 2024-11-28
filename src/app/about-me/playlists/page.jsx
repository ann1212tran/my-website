import Link from "next/link";
import React from "react";

export default function Playlists() {
  return (
    <>
      <br></br>
      <div>
        <h1 className="text-xl font-semibold text-pink-300">Christmas songs</h1>
        <br></br>
        <div>
          <h2 className="text-blue-300 underline italic">
            <Link
              href="https://www.youtube.com/watch?v=Q_yuO8UNGmY"
              alt="christmas song"
              target="_blank"
            >
              MeryChristmas by Ed Sheeran ft Elton John
            </Link>
        
          </h2>
        </div>

        <div>
          <h2 className="text-blue-300 underline italic">
            <Link
              href="https://www.youtube.com/watch?v=wJAIQy5IeCM"
              alt="christmas song cover"
              target="_blank"
            >
              Christmas without you(cover) by Babymonster
            </Link>{" "}
            
          </h2>
        </div>

        <div>
          <h2 className="text-blue-300 underline italic">
            <Link
              href="https://www.youtube.com/watch?v=PPcpd-YBlGw"
              alt="christmas song"
              target="_blank"
            >
              My only wish by Britney Sprears
            </Link>{" "}
          </h2>
        </div>
      </div>
    </>
  );
}
