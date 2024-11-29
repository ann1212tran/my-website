import LoginForm from ' ~/components/LoginForm';
import Quotes from ' ~/components/quotes';
import Image from 'next/image';
import wpeace from "../../../public/wpeace.jpg"
import RandomQuotes from ' ~/components/RandomQuote/RandomQuote';

export default function Blogs() {
    return (
        <main>
            <div className="grid place-items-center">
            <Image
            src={wpeace}
            alt="whale"
            width="500"
            height="500"
             />
        </div>
        <br></br>
        <RandomQuotes />
    <Quotes />
        </main>
    )
}