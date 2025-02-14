import LoginForm from ' ~/components/LoginForm';

import Image from 'next/image';
import wpeace from "../../../public/wpeace.jpg"
import Quotes from ' ~/components/RandomQuote/RandomQuote';

export default function Blogs() {
    return (
        <main>
            {/* <div className="grid place-items-center">
            <Image
            src={wpeace}
            alt="whale"
            width="500"
            height="500"
             />
        </div> */}
        <br></br>
        <Quotes/>
        </main>
    )
}