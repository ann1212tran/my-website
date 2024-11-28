import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="rounded-lg flex justify-between p-2 items-center gap-10">
      <Link className="text-2xl font-bold font-serif text-white" href={"/"}>
        HOMEPAGE
      </Link>

      <div className="flex space-x-6 m-0 items-center justify-center">
        <Link
          className="text-xl font-mono text-bold text-slate-50"
          href={"/about-me"}
        >
          ABOUT ME
        </Link>
        <Link
          className="text-xl font-mono text-bold text-slate-50"
          href={"/my-website"}
        >
          MY WEBSITE
        </Link>
  
          <div className="flex items-center justify-center">
            <Link href={"/login"} className="text-slate-50 px-4 py-2">
              Login
            </Link>
          </div>
        </div>

    </nav>
  );
}
