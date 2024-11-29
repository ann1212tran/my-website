import Link from "next/link";
import React from "react";
import { Suspense } from "react";
import VideoComponent from " ~/ui/video-component";

export default function Playlists() {
  return (
    <>
      <br></br>
      <div>
        <h1 className="text-xl font-semibold text-pink-300">Playlists</h1>
        <br></br>
        <div>
          <Suspense fallback={<p>Loading Video...</p>}>
            <VideoComponent />
          </Suspense>
        </div>
      </div>
    </>
  );
}
