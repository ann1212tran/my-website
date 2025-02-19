import localFont from "next/font/local";
import "./globals.css";
import NavBar from " ~/components/navigation/nav-bar";
import { ReactNode } from "react";
import Header from "../components/header";
import Footer from '../components/Footer';
import { Inter } from "next/font/google";

// import { AuthProvider } from "./Providers";

// Load the Inter font with the 'swap' display strategy
const inter = Inter ({ 
  substs: ["latin"], display: "swap",
  preload: true,
})



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "My Website",
  description: "beginner to profolio"
  }


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <Header/>
        
        <NavBar />
        <div className="flex flex-col min-h-screen">
        <div className={inter.className}>
      {children}
    </div>
        
        
        </div>
        <Footer />
        
      </body>
    </html>
  );
}
