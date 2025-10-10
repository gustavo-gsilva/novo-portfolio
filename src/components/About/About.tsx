function About() {
   return (
      <section className="flex items-center flex-col gap-15 px-10">
         <h1 className="text-[3.3rem] sm:text-[4rem] font-medium text-blue-50">
            Sobre Mim
         </h1>

         <div className="max-w-7xl mb-15">
            <p className="text-[1.8rem] sm:text-[2rem] text-blue-50 mb-15">
               Sou um desenvolvedor frontend movido pela paixão por tecnologia e pelo desejo constante de evoluir. Gosto de me desafiar com novos projetos, trocar experiências com a comunidade de programação e compartilhar o que aprendo ao longo do caminho.
               Busco sempre aprimorar minhas habilidades em HTML, CSS, JavaScript, React, TypeScript e TailWindCSS. Tenho facilidade em me comunicar, sou curioso por natureza e dedicado em tudo o que faço.
               Além do mundo da programação, também sou fã de jogos, filmes, séries e animes, que me inspiram a ser criativo e explorar novas ideias.
            </p>

            <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
               <div className="flex flex-col gap-10">
                  <div className="flex gap-5">
                     <h4 className="text-[#B0B4FF] text-[1.9rem] sm:text-[2rem]">
                        Nome:
                     </h4>

                     <p className="text-blue-50 text-[1.8rem] sm:text-[2rem]">
                        Gustavo Silva
                     </p>
                  </div>

                  <div className="flex gap-5">
                     <h4 className="text-[#B0B4FF] text-[1.9rem] sm:text-[2rem]">
                        Nacionalidade:
                     </h4>

                     <p className="text-blue-50 text-[1.8rem] sm:text-[2rem]">
                        Brasil
                     </p>
                  </div>

                  <div className="flex gap-5">
                     <h4 className="text-[#B0B4FF] text-[1.9rem] sm:text-[2rem]">
                        Freelance:
                     </h4>

                     <p className="text-blue-50 text-[1.8rem] sm:text-[2rem]">
                        Disponível
                     </p>
                  </div>
               </div>

               <div className="flex flex-col gap-10">
                  <div className="flex flex-wrap gap-5">
                     <h4 className="text-[#B0B4FF] text-[1.9rem] sm:text-[2rem]">
                        Telefone:
                     </h4>

                     <p className="text-blue-50 text-[1.8rem] sm:text-[2rem]">
                        +55 (93) 99653-3802
                     </p>
                  </div>

                  <div className="flex flex-wrap gap-5">
                     <h4 className="text-[#B0B4FF] text-[1.9rem] sm:text-[2rem]">
                        Email:
                     </h4>

                     <p className="text-blue-50 text-[1.8rem] sm:text-[2rem]">
                        prazeresdasilvag@gmail.com
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;