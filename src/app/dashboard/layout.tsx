
//import Nav from "@/ui/dashboard/sidenav";import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from '../../uis/dashboard/nav'



export default function Layout({ children }: { children: React.ReactNode }) {
  return (

       <div>
        <Nav />
        </div>
  );
}