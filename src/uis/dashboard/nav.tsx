"use client";
import Link from "next/link";
import Image from 'next/image';
import Eugenia from '../../app/ui/Eugenia_School';
import './header.css'

//import clsx from "clsx";
//import { usePathname } from "next/navigation";

export default function SideNav() {
 // const pathname = usePathname();
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