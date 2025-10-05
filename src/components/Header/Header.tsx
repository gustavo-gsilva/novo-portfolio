import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import SlideBar from "../SlideBar/SlideBar";

function Header() {
   const [handleMenu, setHandleMenu] = useState(false);

   useEffect(() => {
      if (handleMenu) {
         document.body.style.overflowY = "hidden";
      } else {
         document.body.style.overflowY = "auto";
      }

      return () => {
         document.body.style.overflowY = "auto";
      };
   }, [handleMenu]);

   return (
      <>
         <FontAwesomeIcon
            onClick={() => setHandleMenu(true)}
            className="
               lg:!hidden
               text-[3rem] text-sky-700
               cursor-pointer
               absolute right-6 top-12"
            icon={faBars} />

         <header>
            <nav className="hidden lg:block">
               <ul
                  className="
               flex items-center justify-around
               pt-10">
                  <li
                     className="
                  text-[2rem]
                  text-blue-50
                  font-medium
                  cursor-pointer"
                  >
                     <NavLink
                        to="/"
                        className={({ isActive }) =>
                           isActive ? "text-sky-600 border-b-2 border-sky-600" : "text-blue-50 hover:text-sky-600 duration-300"
                        }
                     >
                        Home
                     </NavLink>
                  </li>
                  <li
                     className="
                  text-[2rem]
                  text-blue-50
                  font-medium
                  cursor-pointer"
                  >
                     <NavLink
                        to="/info"
                        className={({ isActive }) =>
                           isActive ? "text-sky-600 border-b-2 border-sky-600" : "text-blue-50 hover:text-sky-600 duration-300"
                        }
                     >
                        Currículo
                     </NavLink>
                  </li>
                  <li
                     className="
                  text-[2rem]
                  text-blue-50
                  font-medium
                  hover:text-sky-600 duration-300
                  cursor-pointer"
                  ><NavLink
                     to="/projects"
                     className={({ isActive }) =>
                        isActive ? "text-sky-600 border-b-2 border-sky-600" : "text-blue-50 hover:text-sky-600 duration-300"
                     }
                  >
                        Projetos
                     </NavLink>
                  </li>
                  <li
                     className="
                  text-[2rem]
                  text-blue-50
                  font-medium
                  hover:text-sky-600 duration-300
                  cursor-pointer"
                  ><NavLink
                     to="/contact"
                     className={({ isActive }) =>
                        isActive ? "text-sky-600 border-b-2 border-sky-600" : "text-blue-50 hover:text-sky-600 duration-300"
                     }
                  >
                        Contato
                     </NavLink>
                  </li>
                  <NavLink to="/contact">
                     <li
                        className="
                     hidden
                     lg:block
                  text-[2rem]
                  text-blue-50
                  font-medium
                  rounded-full
                  bg-sky-800
                  py-5
                  px-12
                  hover:bg-transparent duration-300
                  hover:text-sky-600
                  cursor-pointer"
                     >Contrate-me</li>
                  </NavLink>
               </ul>
            </nav>

            <SlideBar handleMenu={handleMenu} setHandleMenu={setHandleMenu} />
         </header>
      </>
   );
};

export default Header;