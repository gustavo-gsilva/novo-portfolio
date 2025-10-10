import { useState } from "react";
import Education from "../components/Education/Education";
import Skills from "../components/Skills/Skills";
import About from '../components/About/About';

function ProfilePage() {
   const [selected, setSelected] = useState<"education" | "skills" | "about">("education");

   type Opcao = "education" | "skills" | "about";
   const handleSelected = (opcao: Opcao) => {
      setSelected(opcao);
   };

   return (
      <>
         <div className="flex flex-col md:flex-row justify-center items-center gap-15 my-28 lg:my-15 mx-20">
            <button onClick={() => handleSelected("education")} className={`w-[320px] bg-[#232347] text-[1.9rem] text-[#B0B4FF] py-4 px-15 rounded-3xl cursor-pointer
               ${selected === "education" ?
                  "bg-sky-700 text-blue-50" :
                  "bg-[#232347] text-[#B0B4FF]"} `}>
               Educação
            </button>

            <button onClick={() => handleSelected("skills")} className={`w-[320px] bg-[#232347] text-[1.9rem] text-[#B0B4FF py-4 px-15 rounded-3xl cursor-pointer
               ${selected === "skills" ?
                  "bg-sky-700 text-blue-50" :
                  "bg-[#232347] text-[#B0B4FF]"} `}>
               Habilidades
            </button>

            <button onClick={() => handleSelected("about")} className={`w-[320px] bg-[#232347] text-[1.9rem] text-[#B0B4FF py-4 px-15 rounded-3xl cursor-pointer
               ${selected === "about" ?
                  "bg-sky-700 text-blue-50" :
                  "bg-[#232347] text-[#B0B4FF]"} `}>
               Sobre
            </button>
         </div>

         {selected === "education" && <Education />}
         {selected === "skills" && <Skills />}
         {selected === "about" && <About />}
      </>
   );
};

export default ProfilePage;