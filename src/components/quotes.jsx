"use client";
// import { signOut } from "next-auth/react";


export default function Quotes() {
    return (
    <div className="grid place-items-center">
        <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <div className='text-lg'>
            Quote of the day: <span className="font-bold">"You are enough just you are"</span>
        </div>
        {/* <button onClick={() => signOut()}
        className="bg-red-500 ttext-white font-bold px-6 py-2 mt-3 w-fit rounded-lg  ">Log Out</button> */}
    </div>
    </div>
    )
}