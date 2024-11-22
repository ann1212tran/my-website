import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function ThisWebsitePage() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold underline">
          How is my website created?
        </h1>
        <br></br>
        <div>
          <h1 className="text-xl font-sans">Learning courses</h1>

          <li>
            <Link
              href="https://www.codecademy.com/enrolled/courses/learn-react-introduction"
              alt="react introduction"
              target="_blank"
              className="text-lg font-serif italic text-purple-300"
            >
              React: Introduction
            </Link>
          </li>
          <li>
            <Link
              href="https://www.codecademy.com/enrolled/courses/learn-react-additional-basics"
              alt="react additional basics"
              target="_blank"
              className="text-lg font-serif italic text-purple-300"
            >
              React: Additional Basics
            </Link>
          </li>
          <li>
            <Link
              href="https://www.codecademy.com/enrolled/courses/learn-react-hooks"
              alt="react hooks"
              target="_blank"
              className="text-lg font-serif italic text-purple-300"
            >
              React: Hooks
            </Link>
          </li>
          <li>
            <Link
              href="https://www.codecademy.com/learn/bwa-intro-to-react/modules/react-101-jsx-u/cheatsheet"
              alt="introduction to react cheatsheet"
              target="_blank"
              className="text-lg font-serif italic text-purple-300"
            >
              Introduction to React Cheatsheet
            </Link>
          </li>
          <li>
            <Link
              href="https://www.codecademy.com/enrolled/courses/intro-to-next-js"
              alt="intro nextjs"
              target="_blank"
              className="text-lg font-serif italic text-purple-300"
            >
              Intro Nextjs
            </Link>
          </li>
        </div>
        <br></br>
        <div>
          <h1 className="font-sans text-xl">Websites I used for my-web:</h1>

          <li>
            <Link
              href="https://tailwindcss.com/docs/installation"
              alt="tailwindcss installation"
              target="_blank"
              className="text-lg font-serif italic text-purple-300"
            >
              Tailwindcss Installation
            </Link>
          </li>

          <li>
            <Link
              href="https://nextjs.org/learn/dashboard-app/getting-started"
              alt="create next app"
              target="-blank"
              className="text-lg font-serif italic text-purple-300"
            >
              Create Next App
            </Link>
          </li>

          <li>
            <Link
              href="https://nextjs.org/docs/pages/building-your-application/optimizing/images"
              alt="nextjs image optimization"
              target="_blank"
              className="text-lg font-serif italic text-purple-300"
            >
              Image Optimization in Next.js
            </Link>
          </li>

          <li>
            <Link
              href="https://nextjs.org/learn/dashboard-app/navigating-between-pages"
              alt="navigation between pages"
              target="_blank"
              className="text-lg font-serif italic text-purple-300"
            >
              Navigating Between Pages in Next.js
            </Link>
          </li>
        </div>
        <br></br>
      </div>
      <div>
        <h1 className="text-xl font-sans">Videos</h1>
        <li>
          <Link
            href="https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI"
            alt="nextjs tutorial"
            target="_blank"
            className="text-lg font-serif italic text-purple-300"
          >
            Nextjs tutorial
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/watch?v=j5P9FHiBVNo"
            alt="react styling and css basic"
            target="_blank"
            className="text-lg font-serif italic text-purple-300"
          >
            ReactJs Tutorial: Styling and CSS basics
          </Link>
        </li>
      </div>
    </>
  );
}
