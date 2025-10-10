import iconHtml from "../../assets/icons/icon-html.svg";
import iconCss from "../../assets/icons/icon-css.svg";
import iconJavaScript from "../../assets/icons/icon-javascript.svg";
import iconReact from "../../assets/icons/icon-react-js.svg";
import iconTypeScript from "../../assets/icons/icon-typescript.svg";
import iconTailWind from "../../assets/icons/icon-tailwind-css.svg";
import iconGit from "../../assets/icons/icon-git.svg";
import iconGitHub from "../../assets/icons/icon-github.svg";

function Skills() {
   return (
      <section className="flex items-center flex-col gap-16">
         <h1 className="text-[3.3rem] sm:text-[4rem] font-medium text-blue-50">
            Habilidades
         </h1>

         <p className="max-w-7xl text-[1.8rem] sm:text-[2rem] text-blue-50 mx-10 lg:mx-0">
            Experiência em desenvolvimento front-end, dominando HTML, CSS, JavaScript, React.js e TypeScript. Hábil no consumo e integração de APIs RESTful, garantindo aplicações dinâmicas e conectadas a diferentes serviços. Sólido conhecimento na construção de interfaces modernas, interativas e responsivas, com atenção especial à usabilidade e boas práticas de acessibilidade.
         </p>

         <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-10 pb-16">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-[#171717] rounded-4xl py-11 px-10 border-2 border-gray-700 hover:border-orange-400 duration-500 shadow-orange">
               <img className="w-24 sm:w-28" src={iconHtml} alt="Logo HTML" />

               <h3 className="text-[1.8rem] sm:text-[2rem] text-blue-50 font-medium uppercase">
                  Html
               </h3>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-[#171717] rounded-4xl py-11 px-10 border-2 border-gray-700 hover:border-blue-500 duration-500 shadow-blue">
               <img className="w-24 sm:w-28" src={iconCss} alt="Logo CSS" />

               <h3 className="text-[1.8rem] sm:text-[2rem] text-blue-50 font-medium uppercase">
                  Css
               </h3>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-[#171717] rounded-4xl py-11 px-10 border-2 border-gray-700 hover:border-yellow-400 duration-500 shadow-yellow">
               <img className="w-24 sm:w-28" src={iconJavaScript} alt="Logo JavaScript" />

               <h3 className="text-[1.8rem] sm:text-[2rem] text-blue-50 font-medium">
                  JavaScript
               </h3>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-[#171717] rounded-4xl py-11 px-10 border-2 border-gray-700 hover:border-blue-400 duration-500 shadow-aqua">
               <img className="w-24 sm:w-28" src={iconReact} alt="Logo React.JS" />

               <h3 className="text-[1.8rem] sm:text-[2rem] text-blue-50 font-medium">
                  ReactJS
               </h3>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-[#171717] rounded-4xl py-11 px-10 border-2 border-gray-700 hover:border-blue-500 duration-500 shadow-blue">
               <img className="w-24 sm:w-28" src={iconTypeScript} alt="Logo TypeScript" />

               <h3 className="text-[1.8rem] sm:text-[2rem] text-blue-50 font-medium">
                  TypeScript
               </h3>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-[#171717] rounded-4xl py-11 px-10 border-2 border-gray-700 hover:border-blue-400 duration-500 shadow-aqua">
               <img className="w-24 sm:w-28" src={iconTailWind} alt="Logo TailWindCSS" />

               <h3 className="text-[1.8rem] sm:text-[2rem] text-blue-50 font-medium">
                  TailWindCSS
               </h3>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-[#171717] rounded-4xl py-11 px-10 border-2 border-gray-700 hover:border-red-500 duration-500 shadow-red">
               <img className="w-24 sm:w-28" src={iconGit} alt="Logo Git" />

               <h3 className="text-[1.8rem] sm:text-[2rem] text-blue-50 font-medium">
                  Git
               </h3>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-[#171717] rounded-4xl py-11 px-10 border-2 border-gray-700 hover:border-white duration-500 shadow-white">
               <img className="w-24 sm:w-28" src={iconGitHub} alt="Logo GitHub" />

               <h3 className="text-[1.8rem] sm:text-[2rem] text-blue-50 font-medium">
                  GitHub
               </h3>
            </div>
         </div>
      </section>
   );
};

export default Skills;