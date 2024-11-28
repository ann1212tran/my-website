"use client";

import Link from "next/link";
import { RegisterFormSchema } from " ~/app/lib/definitions";
import { useActionState } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

// export async function Register() {
//     const [state, formData] = useACtionState(Register)
//   const validatedFields = RegisterFormSchema.safeParse({
//     name: formData.get("name"),
//     email: formData.get("email"),
//     password: formData.get("password"),
//   });
//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: 'Please enter the details'
//     };
//   }
// }

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      setError("All fields are required!");
      return;
    }
    
    try {
      const resUserExists = await fetch('pages/api/userExists', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify ({ email }),
      });
       const { user } = await resUserExists.json();
      
      if (user) {
        setError("User already exists.")
        return
      }
    
      const res = await fetch ('pages/api/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },  
        body: JSON.stringify ({
          name,
          email,
          password,
        }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/blogs"); 
      } else {
        console.log("User registration failed.")
      }
     } catch (error) {
      console.log("Error during registration:", error)
     }
  }
  

  return (
    <div className="grid place-items-center h-screen">
      <div className="p-5 rounded-lg border">
        <h1 className="text-xl font-bold my-3">Register</h1>
        <form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-4">
          <input
            onChange={(e) => setName(e.target.value)}
            className="text-black py-2 px-6 bg-zinc-100 w-[400px] border "
            type="text"
            placeholder="Full Name"
            name="Full Name"
            aria-required="true"
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            className="text-black py-2 px-6 bg-zinc-100 w-[400px] border"
            type="text"
            placeholder="Email"
            email="Email"
            aria-required="true"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            className="text-black py-2 px-6 bg-zinc-100 w-[400px] border "
            type="password"
            placeholder="Password"
            password="Password"
            aria-required="true"
          />

          <button className="bg-slate-50 text-black font-bold cursor-pointer px-6 py-2">
            Submit
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href="/login">
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
