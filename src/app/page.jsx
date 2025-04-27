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
      {/* <Image
      src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ21yamFlcG9xaWMzYXAyejMzenU5aXl1MHV4amhiMDRmdmp2c3hsbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6vXTpomeZEyxufGU/giphy.webp"
      height='100vh'
      quality={100}
      alt="background"
      backgroundize="cover"
      backgroundposition='center'
      flexdirection='column'
      alignitems='center'
      layout ={"responsive"}
      unoptimized="true"
      /> */}

      <Image
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ21yamFlcG9xaWMzYXAyejMzenU5aXl1MHV4amhiMDRmdmp2c3hsbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6vXTpomeZEyxufGU/giphy.webp"
          width={1920}  // Add appropriate width
          height={1080} // Use actual pixel values
          quality={100}
          alt="background"
          layout="responsive"
          unoptimized={true}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>
      
      </main>
  
     
  )
}
  