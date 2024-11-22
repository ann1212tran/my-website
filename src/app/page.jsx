import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from './background.css';

  export  default function Home() {
  return (
    <>
    <div 
      style={{ display: 'flex'}}
      className="backgroundImage"
    >
      <img
      src='https://img.freepik.com/premium-photo/colorful-smoke-black-background-with-black-background_27109-1453.jpg?w=1380'
      fill='true'
      quality={100}
      size='100vw'
      style={{
        objectFit: 'cover'
      }}
      layout="responsive"
    
      />
      </div>
      
    </>
     
  )
}