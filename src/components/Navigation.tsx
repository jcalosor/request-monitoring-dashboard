import React, {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import { redirect } from 'next/navigation'

const Navigation: React.FC = () => {

    const pathname = usePathname();

    useEffect(() => {

    }, [pathname]);

    // const handleRedirect = (page: string) => {
    // //     redirect(page);
    // }

 return (
     <nav className="space-y-2 flex items-center justify-between my-28">
         <ul className="space-y-4">
             <li>
                 <button
                     onClick={() => redirect("/")}
                     className={`text-blue-600 hover:underline ${
                         pathname === "/" ? "font-bold" : ""
                     }`}
                 >
                     Home
                 </button>
             </li>
             <li>
                 <button
                     onClick={() => redirect("updates")}
                     className={`text-blue-600 hover:underline ${
                         pathname === "/updates" ? "font-bold" : ""
                     }`}
                 >
                     Realtime Updates
                 </button>
             </li>
         </ul>
     </nav>
 );
}

export default Navigation;