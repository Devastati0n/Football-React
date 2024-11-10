"use client";


import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";

export default function LoginForm() {
  return (
    <form >
   
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button >
    <p>os</p>
    </button>
  );
}