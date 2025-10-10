import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import iconTelefone from "../../assets/icons/icon-telefone.webp";
import iconCarta from "../../assets/icons/icon-carta.webp";

type FormValues = {
   nome: string;
   sobrenome: string;
   email: string;
   numero: string;
   mensagem: string;
};

function Contact() {
   const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
      mode: "onChange"
   });

   const [success, setSuccess] = useState(false);

   const sendEmail = async (data: FormValues) => {
      try {
         const response = await fetch("https://formspree.io/f/mvgblrzd", {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
         });

         if (response.ok) {
            setSuccess(true);
            reset();
            setInterval(() => {
               setSuccess(false);
            }, 4000);
         } else {
            setSuccess(false);
            console.error("Erro ao enviar formulário");
         }
      } catch (err) {
         console.error("Erro:", err);
         setSuccess(false);
      }
   };

   return (
      <section
         className="xl:h-[calc(100vh-8rem)] flex flex-col xl:flex-row justify-center xl:gap-20 gap-10 items-center mt-25 lg:mt- xl:mt-0">
         {/* Container responsivo */}
         <div
            className="w-[90dvw] lg:w-[780px] xl:hidden block bg-[#232347] py-17 px-15 rounded-3xl">
            <h3 className="text-[#B0B4FF] text-[3.8rem] font-bold">
               Informações de Contato
            </h3>

            <div className="flex gap-7 py-10">
               <img className="h-[37px]" src={iconTelefone} alt="Ícone de Telefone" />

               <div>
                  <p className="text-[1.9rem] text-[#B0B4FF] font-bold">
                     Telefone
                  </p>
                  <p className="text-[1.7rem] text-blue-50 font-medium">
                     +55 (93) 996533802
                  </p>
               </div>
            </div>

            <div className="flex gap-7">
               <img className="h-[37px]" src={iconCarta} alt="Ícone de carta" />

               <div>
                  <p className="text-[1.9rem] text-[#B0B4FF] font-bold">
                     Email
                  </p>
                  <p className="text-[1.7rem] text-blue-50 font-medium [overflow-wrap:anywhere]">
                     prazeresdasilvag@gmail.com
                  </p>
               </div>
            </div>
         </div>

         <form
            onSubmit={handleSubmit(sendEmail)}
            className="w-[90dvw] lg:w-[780px] 2xl:w-[930px] flex flex-col gap-10 h-auto bg-[#232347] px-15 md:px-20 py-12 rounded-3xl mb-10 xl:mb-0">
            <h3 className="text-[#B0B4FF] text-[3.8rem] font-bold">
               Vamos trabalhar juntos
            </h3>

            <p className="max-w-7xl text-blue-50 text-[1.6rem]">
               Está pensando em um projeto ou apenas gostaria de dar um oi? Preencha o formulário e entrarei em contato em breve.
            </p>

            <div className="flex flex-col lg:flex-row gap-12">
               <div className="flex flex-col gap-1">
                  <input
                     className="w-full lg:w-[326px] 2xl:w-[400px] border-[1px] border-[#B0B4FF] py-5 px-6 rounded-[6px] resize-none focus:outline-none focus:border-sky-700 placeholder: text-blue-50 text-[1.5rem] bg-gray-800" type="text" placeholder="Nome"
                     {...register('nome', {
                        required: 'Nome é obrigatório',
                        minLength: {
                           value: 3,
                           message: "Nome deve ter no mínimo 3 caracteres"
                        }
                     })}
                     name="nome"
                  />
                  {errors.nome?.message && typeof errors.nome.message === "string" && (
                     <span className="text-[1.3rem] text-red-500">
                        {errors.nome.message}
                     </span>
                  )}
               </div>

               <div className="flex flex-col gap-1">
                  <input className="w-full lg:w-[326px] 2xl:w-[400px] border-[1px] border-[#B0B4FF] py-5 px-6 rounded-[6px] resize-none focus:outline-none focus:border-sky-700 placeholder: text-blue-50 text-[1.5rem] bg-gray-800" type="text" placeholder="Sobrenome"
                     {...register('sobrenome', {
                        required: 'Sobrenome é obrigatório',
                        minLength: {
                           value: 3,
                           message: "Sobrenome deve ter no mínimo 3 caracteres"
                        }
                     })}
                     name="sobrenome"
                  />
                  {errors.sobrenome?.message && typeof errors.sobrenome.message === "string" && (
                     <span className="text-[1.3rem] text-red-500">
                        {errors.sobrenome?.message}
                     </span>
                  )}
               </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
               <div className="flex flex-col gap-1">
                  <input className="w-full lg:w-[326px] 2xl:w-[400px] border-[1px] border-[#B0B4FF] py-5 px-6 rounded-[6px] resize-none focus:outline-none focus:border-sky-700 placeholder: text-blue-50 text-[1.5rem] bg-gray-800" type="email" placeholder="Endereço de Email"
                     {...register('email', {
                        required: 'Email é obrigatório',
                        pattern: {
                           value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                           message: "Formato de email inválido"
                        }
                     })}
                     name="email"
                  />
                  {errors.email?.message && typeof errors.email.message === "string" && (
                     <span className="text-[1.3rem] text-red-500">
                        {errors.email.message}
                     </span>
                  )}
               </div>

               <div className="flex flex-col gap-1">
                  <input
                     className="w-full lg:w-[326px] 2xl:w-[400px] border-[1px] border-[#B0B4FF] py-5 px-6 rounded-[6px] resize-none focus:outline-none focus:border-sky-700 placeholder: text-blue-50 text-[1.5rem] bg-gray-800" type="text" placeholder="Número de Telefone" maxLength={13}
                     {...register('numero', {
                        required: 'Número de Telefone é obrigatório',
                        minLength: {
                           value: 11,
                           message: "Número de telefone deve ter no mínimo 11 caracteres"
                        }
                     })}
                     name="numero"
                  />
                  {errors.numero?.message && typeof errors.numero.message === "string" && (
                     <span className="text-[1.3rem] text-red-500">
                        {errors.numero.message}
                     </span>
                  )}
               </div>
            </div>

            <div className="flex flex-col gap-1">
               <textarea
                  className="w-full h-56 border-[1px] border-[#B0B4FF] px-6 pt-5 rounded-[6px] resize-none focus:outline-none focus:border-sky-700 placeholder: text-blue-50 text-[1.5rem] bg-gray-800" placeholder="Escreva sua mensagem aqui..."
                  {...register('mensagem', {
                     required: 'Mensagem é obrigatória',
                     minLength: {
                        value: 10,
                        message: "Mensagem deve ter no mínimo 10 caracteres"
                     }
                  })}
                  name="mensagem"
               />
               {errors.mensagem?.message && typeof errors.mensagem.message === "string" && (
                  <span className="text-[1.3rem] text-red-500">
                     {errors.mensagem.message}
                  </span>
               )}
            </div>

            <button type="submit" className="text-[1.7rem] text-blue-50 font-bold bg-sky-700 py-4 mt-auto rounded-[6px] cursor-pointer">
               Enviar Mensagem
            </button>
         </form>

         {/* Container desktop */}
         <div className="hidden xl:block bg-[#232347] py-17 px-15 rounded-3xl">
            <h3 className="text-[#B0B4FF] text-[3.8rem] font-bold">
               Informações de <br /> Contato
            </h3>

            <div className="flex gap-7 py-10">
               <img className="h-[37px]" src={iconTelefone} alt="Ícone de Telefone" />

               <div>
                  <p className="text-[1.9rem] text-[#B0B4FF] font-bold">
                     Telefone
                  </p>
                  <p className="text-[1.7rem] text-blue-50 font-medium">
                     +55 (93) 996533802
                  </p>
               </div>
            </div>

            <div className="flex gap-7">
               <img className="h-[37px]" src={iconCarta} alt="Ícone de carta" />

               <div>
                  <p className="text-[1.9rem] text-[#B0B4FF] font-bold">
                     Email
                  </p>
                  <p className="text-[1.7rem] text-blue-50 font-medium">
                     prazeresdasilvag@gmail.com
                  </p>
               </div>
            </div>
         </div>

         {success &&
            <AnimatePresence>
               <motion.div className="w-screen h-screen bg-black fixed inset-0 flex justify-center items-center z-50" initial={{ opacity: 0, x: -160 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }}>
                  <div className="flex flex-col items-center text-center px-10">
                     <h4 className="text-blue-50 text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] font-bold">
                        Mensagem enviada com sucesso!
                     </h4>

                     <p className="text-[2.2rem] sm:text-[2.7rem] md:text-[3.2rem] lg:text-[3rem] text-blue-50 font-medium">
                        Em breve entrarei em contato
                     </p>
                  </div>
               </motion.div>
            </AnimatePresence>
         }
      </section>
   );
};

export default Contact;