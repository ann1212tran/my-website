"use client";

import Link from "next/link";
import { RegisterFormSchema } from " ~/app/lib/definitions";
import { useFormState, useFormStatus } from "react-dom";

export async function register(state, formData) {
  const validatedFields = RegisterFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
}

export default function RegisterForm() {
  const [state, action] = useFormState(register);
  return (
    <div className="grid place-items-center h-screen">
      <div className="p-5 rounded-lg border">
        <h1 className="text-xl font-bold my-3">Register</h1>
        <form className="flex flex-col gap-4">
          <input
            className="text-black py-2 px-6 bg-zinc-100 w-[400px] border "
            type="text"
            placeholder="First Name"
          />
         
          <input
            className="text-black py-2 px-6 bg-zinc-100 w-[400px] border "
            type="text"
            placeholder="Last Name"
          />
          
          <input
            className="text-black py-2 px-6 bg-zinc-100 w-[400px] border"
            type="text"
            placeholder="Email"
          />
          <input
            className="text-black py-2 px-6 bg-zinc-100 w-[400px] border"
            type="text"
            placeholder="Confirm email"
          />

          <input
            className="text-black py-2 px-6 bg-zinc-100 w-[400px] border "
            type="password"
            placeholder="Password"
          />
          <input
            className="text-black py-2 px-6 bg-zinc-100 w-[400px] border "
            type="password"
            placeholder="Confirm password"
          />

          <button className="bg-slate-100 text-black font-bold cursor-pointer px-6 py-2">
            Submit
          </button>

          <Link className="text-sm mt-3 text-right" href="/login">
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
