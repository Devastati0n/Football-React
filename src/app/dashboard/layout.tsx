
//import Nav from "@/ui/dashboard/sidenav";import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import nav from '../../uis/dashboard/nav'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <div>
      <nav />
    </div>
 
  
  );
}