import Link from "next/link";


export default function NavBar() {
  return (
    <nav className="border w-full flex justify-between p-2 items-center gap-2">
      <Link className="text-lg font-bold" href={"/"}>Anh</Link>

      <div className="flex gap-2">
        <Link href={"/about-me"}>About me</Link>
        <Link href={"/this-website"}>My Website</Link>
      </div>
    </nav>
  );
}



