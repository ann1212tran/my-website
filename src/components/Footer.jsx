import React from "react";
import Link from "next/link";
import styles from "../app/home.module.css";
import { FaGithub } from "react-icons/fa";
import { RiHomeSmile2Line } from "react-icons/ri";
import { FaRegSmileBeam } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaMusic } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="flex flex-col mt-auto place-items-center space-y-4 ">
        <div className="flex items-center justify-center space-x-4">
          <FaGithub size="40px" />

          <Link href="https://github.com" target="_blank">
            GitHub
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <RiHomeSmile2Line size="40px" />
          <Link href="/" target="_blank">
            Home
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <FaRegSmileBeam size="40px" />
          <Link href="/about-me" target="_blank">
            About Me
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <CgWebsite size="40px" />
          <Link href="/my-website" target="_blank">
            My Website
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <FaMusic size="40px" />
          <Link href="https://spotify.link/AHEabe1rTOb" target="_blank">
            Playlist🎧
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-4">
            <h3 className="font-sans italic text-purple-400">Thank you!</h3>
        </div>
      </footer>
    </div>
  );
}
