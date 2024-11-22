import React from 'react';
import Link from 'next/link';
import styles from './home.module.css';
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div>
           <footer className="footer">
           <FaGithub size="40px" />
           <Link href="https://github.com">GitHub</Link>
        </footer> 
        </div>
    )    
}