"use client";
import useAuthUser from "@/app/hooks/use-auth-user";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const user = useAuthUser();
  const links = [
    { name: "Home", href: "/dashboard", icon: HomeIcon },
    {
      name: "Invoices",
      href: "/dashboard/invoices",
      icon: DocumentDuplicateIcon,
    },
    { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
  ];


  const pathname = usePathname();

  if (user && user.isAdmin) {
    links.push({
      name: "Admin Area",
      href: "/dashboard/admins",
      icon: BuildingOfficeIcon,
    });
  }
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}


/*
  if (user && user.isAdmin) {
    links.push({
      name: "Admin Area",
      href: "/dashboard/admins",
      icon: BuildingOfficeIcon,
    });
  }
*/ 

//fragment needs property? 
//map does map need? 




/*
for(let x=0; x<links2.length; x++){
  links2[x].addEventListener('click', function(){
    const current = document.getElementsByClassName('active'); 

    if(current.length > 0){ 
      current[0].className = current[0].className.replace(' active', ""); 
    }
    this.className += ' active'; 
    console.log(links2)
  })
}
*/ 






















// "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
/*
{
  "bg-sky-100 text-red-600": 
}
*/ 

//hidden md:block

/*
export default function NavLinks() {
  const user = useAuthUser();
  const links = [
    { name: "Home", href: "/dashboard", icon: HomeIcon },
    {
      name: "Invoices",
      href: "/dashboard/invoices",
      icon: DocumentDuplicateIcon,
    },
    { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
  ];

  const pathname = usePathname();

  if (user && user.isAdmin) {
    links.push({
      name: "Admin Area",
      href: "/dashboard/admins",
      icon: BuildingOfficeIcon,
    });
  }











return (
  <>
    {links.map((link) => {
      const LinkIcon = link.icon;
      return (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",

            {
              "bg-sky-100 text-red-600": pathname === link.href,
            }
          )}
        >
          <LinkIcon className="w-6" />
          <p className="hidden md:block">{link.name}</p>
        </Link>
      );
    })}
  </>
);
}
*/ 
