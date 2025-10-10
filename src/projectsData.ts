import iconHtml from "./assets/icons/icon-html.svg";
import iconCss from "./assets/icons/icon-css.svg";
import iconJavaScript from "./assets/icons/icon-javascript.svg";
import iconReact from "./assets/icons/icon-react-js.svg";
import iconTailWind from "./assets/icons/icon-tailwind-css.svg";
import iconTypeScript from "./assets/icons/icon-typescript.svg";

import imageProject1 from "./assets/images/projeto-buscador-de-usuarios-github.webp";
import imageProject2 from "./assets/images/projeto-resident-evil-4.webp";
import imageProject3 from "./assets/images/projeto-rastreador-de-ip.webp";

export const projects = [
   {
      number: "01",
      title: "Buscador de Usuários GitHub",
      description: "O Buscador de Usuários do GitHub é uma aplicação feita com Fetch API que permite pesquisar perfis na plataforma e visualizar informações como nome, biografia, repositórios e seguidores, oferecendo uma forma prática de consultar dados de desenvolvedores pela interface.",
      techs: [
         { icon: iconHtml, name: "HTML" },
         { icon: iconCss, name: "CSS" },
         { icon: iconJavaScript, name: "JavaScript" }
      ],
      image: imageProject1,
      site: "https://gustavo-gsilva.github.io/GitHub-Com-Fetch-API/",
      repo: "https://github.com/gustavo-gsilva/GitHub-Com-Fetch-API"
   },

   {
      number: "02",
      title: "Resident Evil 4",
      description: "Projeto inspirado no universo do Resident Evil 4 Remake, que funciona como uma galeria interativa, permitindo visualizar informações sobre personagens, locais e artes visuais do jogo.",
      techs: [
         { icon: iconReact, name: "ReactJS" },
         { icon: iconTailWind, name: "TailWindCSS" },
      ],
      image: imageProject2,
      site: "https://resident-evil-4-one.vercel.app",
      repo: "https://github.com/gustavo-gsilva/resident-evil-4"
   },

   {
      number: "03",
      title: "Rastreador de IP",
      description: "Este projeto simula um rastreador de IP que permite consultar informações geográficas a partir de um endereço IP, exibindo dados como cidade, região, provedor de internet e fuso horário.",
      techs: [
         { icon: iconReact, name: "ReactJS" },
         { icon: iconTypeScript, name: "TypeScript"},
         { icon: iconTailWind, name: "TailWindCSS" }
      ],
      image: imageProject3,
      site: "https://rastreador-de-ip-lemon.vercel.app",
      repo: "https://github.com/gustavo-gsilva/rastreador-de-ip"
   },
];