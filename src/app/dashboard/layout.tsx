
//import Nav from "@/ui/dashboard/sidenav";import type { Metadata } from "next";
import localFont from "next/font/local";
import Nav from '../../uis/dashboard/nav'
import '../shared/header.css'


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
    <div>
    <Nav />
    </div>
    <div>{children}</div>
    </div>
  );
}






