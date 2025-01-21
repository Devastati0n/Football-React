import SideNav from "@/app/ui/dashboard/sidenav";
//https://github.com/alexrusin/nextjs-cognito-auth/blob/5-reset-password-end/src/app/dashboard/profile/page.tsx
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}





/* 
import SideNav from "@/app/ui/dashboard/sidenav";
//https://github.com/alexrusin/nextjs-cognito-auth/blob/5-reset-password-end/src/app/dashboard/profile/page.tsx
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">

        <a className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"></>

      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}


*/ 







/*
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
*/ 






