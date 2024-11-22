'use client'
import Link from "next/link";
import { FormEvent } from 'react';
import { useRouter } from 'next/compat/router';

export default function LoginForm() {
   const router = useRouter()
  return (
    <div className="grid place-items-center h-screen">
    <div className="p-5 rounded-lg border">
      <h1 className="text-xl font-bold my-3">Login</h1>
      <form className="flex flex-col gap-4">
        <input
          className="text-black py-2 px-6 bg-zinc-100 w-[400px] border "
          type="text"
          placeholder="Email"
        />
        <input
          className="text-black py-2 px-6 bg-zinc-100 w-[400px] border "
          type="password"
          placeholder="Password"
        />
        <button className="bg-slate-100 text-black font-bold cursor-pointer px-6 py-2">
          Login
        </button>

        <Link className="text-sm mt-3 text-right" href="/login/register">
          Don't have an account? <span className="underline">Register</span>
        </Link>
      </form>
    </div>
  </div>
  )
}

 