import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { useProjectCarousel } from "../../hooks/useProjectCarousel";

function Projects() {
   const {
      project,
      animating,
      slideDirection,
      handlePrev,
      handleNext,
      isFirst,
      isLast,
   } = useProjectCarousel();

   return (
      <section className="flex flex-col items-center xl:items-stretch xl:flex-row justify-center gap-20 my-5 mx-10 ">
         <div className="xl:hidden">
            <img className={`sm:max-w-[620px] xl:w-auto object-cover mt-20 rounded-3xl transition-all duration-300
               ${animating && slideDirection === "right" ? "translate-x-32 opacity-0" : ""}
               ${animating && slideDirection === "left" ? "-translate-x-32 opacity-0" : ""}
               ${!animating ? "translate-x-0 opacity-100" : ""}`} loading="lazy" src={project.image} alt={project.title} />

            <div className="flex justify-between mt-10">
               <button className="bg-sky-800 rounded-full px-3 py-4 cursor-pointer" onClick={handlePrev} aria-disabled={isFirst}>
                  <FontAwesomeIcon className="text-[2.5rem] text-blue-50" icon={faAngleLeft} />
               </button>

               <button className="bg-sky-800 rounded-full px-3 py-4 cursor-pointer" onClick={handleNext} aria-disabled={isLast}>
                  <FontAwesomeIcon className="text-[2.5rem] text-blue-50" icon={faAngleRight} />
               </button>
            </div>
         </div>

         <div>
            <h4 className="text-blue-50 text-[7.5rem] font-semibold">
               {project.number}
            </h4>

            <h3 className="text-blue-50 text-[4rem] font-medium mt-5">
               {project.title}
            </h3>

            <p className="max-w-5xl text-blue-50 text-[1.8rem] mt-11">
               {project.description}
            </p>

            <div className="flex flex-wrap gap-8 border-b-2 border-blue-50 pb-11 mt-11">
               {project.techs.map((tech) => (
                  <div className="flex flex-col sm:flex-row items-center gap-5" key={tech.name}>
                     <img className="w-28" src={tech.icon} alt={tech.name} />

                     <p className="text-blue-50 text-[1.8rem] font-medium">
                        {tech.name}
                     </p>
                  </div>
               ))}
            </div>

            <div className="flex gap-10 mt-11 mb-15">
               <a href={project.site} target="_blank" rel="noopener noreferrer" title="Ver Site">
                  <FontAwesomeIcon className="text-[3.3rem] text-blue-50 bg-gray-700 rounded-full px-6 py-7 cursor-pointer hover:bg-black duration-500" icon={faArrowUpRightFromSquare} />
               </a>

               <a href={project.repo} target="_blank" rel="noopener noreferrer" title="Ver Repositório">
                  <FontAwesomeIcon className="text-[3.3rem] text-blue-50 bg-gray-700 rounded-full px-6 py-7 cursor-pointer hover:bg-black duration-500" icon={faGithub} />
               </a>
            </div>
         </div>

         <div className="hidden xl:block"> {/* Container versão desktop */}
            <img className={`max-w-[580px] object-cover mt-5 rounded-3xl transition-all duration-300
               ${animating && slideDirection === "right" ? "translate-x-32 opacity-0" : ""}
               ${animating && slideDirection === "left" ? "-translate-x-32 opacity-0" : ""}
               ${!animating ? "translate-x-0 opacity-100" : ""}`} loading="lazy" src={project.image} alt={project.title} />

            <div className="flex justify-between mt-10">
               <button className="bg-sky-800 rounded-full px-3 py-4 cursor-pointer" onClick={handlePrev} aria-disabled={isFirst}>
                  <FontAwesomeIcon className="text-[2.5rem] text-blue-50" icon={faAngleLeft} />
               </button>

               <button className="bg-sky-800 rounded-full px-3 py-4 cursor-pointer" onClick={handleNext} aria-disabled={isLast}>
                  <FontAwesomeIcon className="text-[2.5rem] text-blue-50" icon={faAngleRight} />
               </button>
            </div>
         </div>
      </section>
   );
};

export default Projects;