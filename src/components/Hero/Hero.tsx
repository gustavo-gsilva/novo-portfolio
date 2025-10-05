import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Typewriter from 'typewriter-effect';

import profileImage from "../../assets/images/foto de perfil.png";

function Hero() {
   const texts = ["Frontend Developer", "React Developer"];
   const maxLength = Math.max(...texts.map((t) => t.length));

   return (
      <section
         className="
         h-screen
         lg:h-[calc(100vh-9rem)] 
         flex flex-col justify-center items-center
         lg:flex-row lg:items-center lg:justify-around
         mt-10 sm:mt-0">
         <img // Foto de perfil da versão responsiva //
            className="
            w-110 h-110
            sm:w-130 sm:h-130 object-cover 
            rounded-full border-2 border-sky-600
            lg:hidden"
            src={profileImage}
            alt="Foto de Perfil" />

         <div>
            <h1
               className="
               text-blue-50 
               text-[3.8rem]
               sm:text-[5rem]
               text-center
               lg:text-left
               lg:text-[7rem]
               font-bold"
            >Olá, eu sou <br /> Gustavo Silva</h1>

            <h3
               className="
               text-sky-600
               text-[3rem]
               sm:text-[5rem]
               font-medium
               whitespace-nowrap
               text-center
               lg:text-left"
               style={{ width: `${maxLength}ch` }}
            ><Typewriter
                  options={{
                     strings: ["Frontend Developer", "React Developer"],
                     autoStart: true, // começa sozinho
                     loop: true,      // repete infinito
                     delay: 100,       // velocidade de digitação
                     deleteSpeed: 50, // velocidade de apagar
                  }}
               />
            </h3>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-13 mt-15">
               <a
                  download="Gustavo_Silva_CV.pdf"
                  href="/gustavo-silva-curriculo-v2.pdf"
                  className="
                  text-[1.8rem]
               sm:text-[2rem]
               text-blue-50
               font-semibold
               rounded-full
               border-2
               border-sky-800
               py-6
               px-12
               cursor-pointer
               hover:bg-sky-800 duration-300"
               >Download CV
                  <FontAwesomeIcon className="ml-5" icon={faArrowDown} />
               </a>

               <div className="flex gap-13">
                  <a href="https://github.com/gustavo-gsilva"
                     target="_blank"
                     rel="noopener noreferrer">
                     <FontAwesomeIcon
                        className="
                     flex justify-center items-center
                  text-4xl
                  text-sky-600
                  border-2
                  rounded-full
                  px-4
                  py-5
                  cursor-pointer
                  hover:bg-black duration-300
                  hover:text-blue-100"
                        icon={faGithub} />
                  </a>

                  <a href="https://www.linkedin.com/in/gustavo-silva-564b9a316/"
                     target="_blank"
                     rel="noopener noreferrer">
                     <FontAwesomeIcon
                        className="
                     flex justify-center items-center
                     text-4xl
                     text-sky-600
                     border-2
                     rounded-full
                     px-4
                     py-5
                     cursor-pointer
                     hover:bg-sky-800 duration-300
                     hover:text-blue-100"
                        icon={faLinkedinIn} />
                  </a>
               </div>
            </div>
         </div>

         <img // Foto de perfil da versão desktop // 
            className="
            w-170 h-170 object-cover 
            rounded-full border-2 border-sky-600
            hidden lg:block"
            src={profileImage}
            alt="Foto de Perfil" />
      </section>
   );
};

export default Hero;