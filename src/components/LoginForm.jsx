"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { CiGlobe } from "react-icons/ci";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { FormInput } from "./FormInput";

export default function LoginForm() {
  const { register, errors } = useForm({
    mode: "onBlur",
    validationSchema: Yup.object({
      email: Yup.string().max(20, "Email must be valid").required("Required"),
      password: Yup.string()
        .min(8, "Password shoud be longer than 8 characters")
        .required("Required"),
    }),
  });

  const onSubmit = ({ email, password }) => {
    alert(`Email: ${email}, password: ${passwod}`);
  };
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
      callbackUrl: "/blogs",
    })
      .then((response) => {
        if (response.ok) {
          redirectblogs();
        } else {
          setError("Email or password you entered is incorrect!");
        }
      })
      .catch(() => {
        setError("Email or password you enteres is incorrected!");
      });
    // if (res.error) {
    //   setError("Invalid credentials");
    //   return;
    // }

    router.replace("blogs");
    // } catch (error) {
    //     console.log(error);
    //   }
    // };
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="p-5 rounded-lg border">
        <h1 className="text-xl font-bold my-3">
          <CiGlobe className="inline-block" />
          Login
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          {/* <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="text-black py-2 px-6 bg-zinc-100 w-[400px] border "
            type="text"
            placeholder="Email"
            id="Email" */}
          {/* />  */}
          <FormInput
            id="password"
            type="password"
            name="password"
            label="Email"
            register={register}
          //   error={errors.password}
          />
          <FormInput
            id="password"
            type="password"
            name="password"
            label="Password"
            register={register}
            // error={errors.password}
          />
          {/* <input
            onChange={(e) => setPassword(e.target.value)}
            className="text-black py-2 px-6 bg-zinc-100 w-[400px] border "
            type="password"
            defaultValue={''}
            placeholder="Password"
            id="Password"
          /> */}
          
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
