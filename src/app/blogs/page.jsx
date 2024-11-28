import LoginForm from ' ~/components/LoginForm';
import Quotes from ' ~/components/quotes';
import Image from 'next/image';
import wpeace from "../../../public/wpeace.jpg"
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
    <Quotes />
        </main>
    )
}