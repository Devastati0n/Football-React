"use client";
import Link from "next/link";
import Image from 'next/image';
import Eugenia from '../../app/ui/Eugenia_School';


//import clsx from "clsx";
//import { usePathname } from "next/navigation";

export default function Nav() {
  return (
    <div>
    <nav className="header-nav">     
 
      <Eugenia />                     
      <a href="/">Sign-In</a>
      <a href="/">Link</a>
      <a href="/">Link2</a>
      <a href="/">Link3</a>
        
   </nav>

  </div>
 
  );
}