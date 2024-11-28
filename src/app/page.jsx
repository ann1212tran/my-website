import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from './background.css';


  export  default function Home() {
    
  
  return (
  
    <main>
    <div 
    className="grid place-items-center h-screen"
    >
      <img
      src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ21yamFlcG9xaWMzYXAyejMzenU5aXl1MHV4amhiMDRmdmp2c3hsbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6vXTpomeZEyxufGU/giphy.webp"
      height='100vh'
      quality={100}
       
      backgroundize="cover"
      backgroundposition='center'
      flexdirection='column'
      alignitems='center'
      layout ={"responsive"}
      unoptimized="true"
    
    
      />
      </div>
      
      </main>
  
     
  )
}
  