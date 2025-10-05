function Education() {
   return (
      <section
         className="
         flex items-center flex-col gap-15 px-10 pb-20 md:pb-0 md:px-0"
      >
         <h1
            className="
            text-[3.3rem] sm:text-[4rem] font-medium text-blue-50">
            Educação
         </h1>

         <p
            className="
            max-w-7xl 
            text-[1.8rem] sm:text-[2rem] text-blue-50
            md:px-10 lg:px-0">
            Estou fazendo um curso de Desenvolvimento Web Back-end na DevQuest e já concluí o curso de Desenvolvimento Web Front-end também na instituição.
         </p>

         <div
            className="
            flex flex-col items-center gap-4 
            bg-[#232347] 
            border-2 border-[#B0B4FF] rounded-4xl 
            py-7 px-7 md:px-30
            shadow-[0_0_10px_#60a5fa]">
            <span
               className="
               text-[1.7rem] text-[#B0B4FF]">
               Abr 2024 - Jul 2025
            </span>

            <p
               className="
               md:w-4xl 
               text-[1.7rem] font-medium text-blue-50 text-center">
               Desenvolvimento Web FrontEnd - Curso de Extensão universitária com monitoria e suporte
            </p>

            <span
               className="
               text-[1.7rem] text-blue-50">
               DevQuest - Dev em Dobro
            </span>
         </div>
      </section>
   );
};

export default Education;