"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { CiGlobe } from "react-icons/ci";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: '/blogs',
      })
      .then((response) => {
        if (response.ok) {
          redirectblogs();
        } else { 
          setError("Email or password you entered is incorrect!");
  
        }
      })
      .catch (() => {
        setError("Email or password you enteres is incorrected!")
      })
      // if (res.error) {
      //   setError("Invalid credentials");
      //   return;
      // }

      router.replace("blogs");
    // } catch (error) {
  //     console.log(error);
  //   }
  // };
    }
  return (
    <div className="grid place-items-center h-screen">
      <div className="p-5 rounded-lg border">
        <h1 className="text-xl font-bold my-3"><CiGlobe className="inline-block"/>Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="text-black py-2 px-6 bg-zinc-100 w-[400px] border "
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="text-black py-2 px-6 bg-zinc-100 w-[400px] border "
            type="password"
            placeholder="Password"
          />
          <button className="bg-green-500 text-black font-bold cursor-pointer px-6 py-2">
            Login
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/register"}>
            Don't have an account? <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
}