import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import SlideBar from "../SlideBar/SlideBar";

function Header() {
   const [handleMenu, setHandleMenu] = useState(false);

   const location = useLocation();

   // Função que controla o clique
   const handleLinkClick = (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
      to: string
   ) => {
      if (location.pathname === to) {
         e.preventDefault(); // impede a navegação e evita qualquer reload
      }
   };

   return (
      <>
         <FontAwesomeIcon onClick={() => setHandleMenu(true)} className="lg:!hidden text-[3rem] text-sky-700 cursor-pointer absolute right-6 top-12" icon={faBars} />

         <header>
            <nav className="hidden lg:block">
               <ul className="flex items-center justify-around pt-10">
                  <li className="text-[2rem] text-blue-50 font-medium cursor-pointer">
                     <NavLink to="/" onClick={(e) => handleLinkClick(e, "/")}
                        className={({ isActive }) =>
                           isActive ? "text-sky-600 border-b-2 border-sky-600"
                              : "text-blue-50 hover:text-sky-600 duration-300"}>
                        Home
                     </NavLink>
                  </li>

                  <li className="text-[2rem] text-blue-50 font-medium cursor-pointer">
                     <NavLink to="/info" onClick={(e) => handleLinkClick(e, "/info")}
                        className={({ isActive }) =>
                           isActive ? "text-sky-600 border-b-2 border-sky-600"
                              : "text-blue-50 hover:text-sky-600 duration-300"}>
                        Currículo
                     </NavLink>
                  </li>

                  <li className="text-[2rem] text-blue-50 font-medium hover:text-sky-600 duration-300 cursor-pointer">
                     <NavLink to="/projects" onClick={(e) => handleLinkClick(e, "/projects")}
                        className={({ isActive }) =>
                           isActive ? "text-sky-600 border-b-2 border-sky-600"
                              : "text-blue-50 hover:text-sky-600 duration-300"}>
                        Projetos
                     </NavLink>
                  </li>

                  <li className="text-[2rem] text-blue-50 font-medium hover:text-sky-600 duration-300 cursor-pointer">
                     <NavLink to="/contact" onClick={(e) => handleLinkClick(e, "/contact")}
                        className={({ isActive }) =>
                           isActive ? "text-sky-600 border-b-2 border-sky-600"
                              : "text-blue-50 hover:text-sky-600 duration-300"}>
                        Contato
                     </NavLink>
                  </li>

                  <li className="hidden lg:block text-[2rem] text-blue-50 font-medium rounded-full bg-sky-800 py-5 px-12 hover:bg-transparent duration-300 hover:text-sky-600 cursor-pointer">
                     <NavLink to="/contact" onClick={(e) => handleLinkClick(e, "/contact")}>
                        Contrate-me
                     </NavLink>
                  </li>
               </ul>
            </nav>

            <SlideBar handleMenu={handleMenu} setHandleMenu={setHandleMenu} onLinkClick={handleLinkClick} />
         </header>
      </>
   );
};

export default Header;