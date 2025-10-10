import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface SlideBarProps {
   handleMenu: boolean;
   setHandleMenu: (value: boolean) => void;
   onLinkClick: (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
      to: string
   ) => void;
};

function SlideBar({ handleMenu, setHandleMenu, onLinkClick }: SlideBarProps) {
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
      <div className="lg:hidden">
         <AnimatePresence>
            {handleMenu && (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="w-screen h-screen fixed inset-0 bg-black z-20">
               </motion.div>
            )}
         </AnimatePresence>

         <header>
            <AnimatePresence>
               {handleMenu && (
                  <motion.nav initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.2 }} className="sm:w-[50dvw] w-[70dvw] h-screen bg-[#061121] absolute right-0 top-0 z-60">

                     <FontAwesomeIcon onClick={() => setHandleMenu(false)} className="text-[3rem] text-sky-700 cursor-pointer absolute right-6 top-12" icon={faXmark} />

                     <ul className="flex flex-col items-center gap-12 pt-50">
                        <li className="text-[1.8rem] text-blue-50 font-medium cursor-pointer">
                           <NavLink to="/" onClick={(e) => onLinkClick(e, "/")}
                              className={({ isActive }) =>
                                 isActive ? "text-sky-600 border-b-2 border-sky-600"
                                    : "text-blue-50 hover:text-sky-600 duration-300"}>
                              Home
                           </NavLink>
                        </li>

                        <li className="text-[1.8rem] text-blue-50 font-medium cursor-pointer">
                           <NavLink to="/info" onClick={(e) => onLinkClick(e, "/info")}
                              className={({ isActive }) =>
                                 isActive ? "text-sky-600 border-b-2 border-sky-600"
                                    : "text-blue-50 hover:text-sky-600 duration-300"}>
                              Currículo
                           </NavLink>
                        </li>

                        <li className="text-[1.8rem] text-blue-50 font-medium hover:text-sky-600 duration-300 cursor-pointer">
                           <NavLink to="/projects" onClick={(e) => onLinkClick(e, "/projects")}
                              className={({ isActive }) =>
                                 isActive ? "text-sky-600 border-b-2 border-sky-600"
                                    : "text-blue-50 hover:text-sky-600 duration-300"}>
                              Projetos
                           </NavLink>
                        </li>

                        <li className="text-[1.8rem] text-blue-50 font-medium hover:text-sky-600 duration-300 cursor-pointer">
                           <NavLink to="/contact" onClick={(e) => onLinkClick(e, "/contact")}
                              className={({ isActive }) =>
                                 isActive ? "text-sky-600 border-b-2 border-sky-600"
                                    : "text-blue-50 hover:text-sky-600 duration-300"}>
                              Contato
                           </NavLink>
                        </li>
                     </ul>
                  </motion.nav>
               )}
            </AnimatePresence>
         </header>
      </div>
   );
};

export default SlideBar;