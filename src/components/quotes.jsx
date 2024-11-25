import Image from 'next/image';


export default function Quotes() {
    return (
    <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <div>
            Quote of the day: <span className="font-bold">You are enough just you are</span>
        </div>
        </div>
    </div>
    )
}