import type { Nav, ProjectC, ServiceC, Skill } from "../interfaces";

export const Navlink:Nav[]=[
    {
        id:"Home",
        name:"Home",
    },
     {
        id:"About",
        name:"About",
    },
     {
        id:"Skills",
        name:"skills",
    },
       {
        id:"Service",
        name:"Service",
        
    },
     {
        id:"Project",
        name:"Project",

    },
      {
        id:"Contact",
        name:"Contact",
        
    },
   

]
export const ProjectsS:ProjectC[]=[
    {
        id:"Salone",
        img:"/Ma.png",
        projectT:"Masaya Haneen",
        Tool:["Reat js","TypeScript","TalwindCss"],
des:"Masaya Haneen brings the barber experience online — browse services, book appointments, view offers, and meet our expert team in one seamless platform.",
href:["https://massaya-haneen.netlify.app/","https://github.com/Abdulhalimg2002/Massaya-Haneen"],
Text:["Live Demo","Github"],

    },
 
   
  {
        id:"Todo",
        img:"/image.png",
        projectT:"Todo",
        Tool:["Reat js","TypeScript","TalwindCss","Rest API"],
des:"Todo Project is a simple task management application that allows users to add, edit, and delete tasks as they complete them. The project helps users organize their daily activities and improve productivity by keeping track of tasks in an easy and efficient way.",
href:["https://abdulhalimtodo.netlify.app/","https://github.com/Abdulhalimg2002/fullstack-todo-app"],
Text:["Live Demo","Github"],


},
{
        id:"My-e-commers",
        img:"https://www.sipromad.com/wp-content/uploads/2023/02/Logo-MyStore.png",
        projectT:"My-e-commers",
        Tool:["React js","TypeScript","Chakra UI","Redux Toolkit","Rest API"],
des:"E-Commerce Platform A full-stack e-commerce web application built with React, TypeScript, Redux Toolkit, and Strapi CMS. It allows admins to manage products, categories, images, and stock through a modern dashboard, while users can browse and view products by category. The system ensures reliable data relationships and a smooth, responsive user experience.",
href:["https://my-e-commers.netlify.app/","https://github.com/Abdulhalimg2002/E-commers"],
Text:["Live Demo","Github"],

    },



]


export const Services:ServiceC[]=[
    {
        id:"Web Development",
        title:"Web Development",
        description:"create responsive and dynamic websites using modern technologies like React and Tailwind CSS.",
        icon:"🌐",
    },

    {
        id:"Backend Development",
        title:"Backend Development",
        description:"Developing robust server-side applications with laravel  and databases like MongoDB and MySQL.",
        icon:"⚙️",
    },
    {
        id:"UI/UX Design",
        title:"UI/UX Design",
        description:"Designing intuitive user interfaces and experiences using Figma tools.",
        icon:"🎨",
    },
    {
        id:"API Development",
        title:"API Development",
        description:"Creating RESTful  APIs for seamless data integration and communication.",
        icon:"🔗",
    },

]

export const Skills:Skill[]=[
    {
        id:"HTML",
        name:"HTML",
        category:"Frontend",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
        id:"CSS",
        name:"CSS",
       
        category:"Frontend",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
        id:"JavaScript",
        name:"JavaScript",
       
        category:"Frontend",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
        id:"TypeScript",
        name:"TypeScript",

        category:"Frontend",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    {
        id:"React",
        name:"React",
       
        category:"Frontend",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
      {
        id:"Next.js",
        name:"Next.js",
       
        category:"Frontend",
        icon:"https://images.seeklogo.com/logo-png/32/1/next-js-logo-png_seeklogo-321806.png"
    },
    {
        id:"Tailwind CSS",
        name:"Tailwind CSS",
       
        category:"Frontend",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
    },
  
    
    {
        id:"MongoDB",
        name:"MongoDB",
       
        category:"Backend",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {
        id:"Git",
        name:"Git",
       
        category:"Tools",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
      {
        id:"postman",
        name:"postman",
       
        category:"Tools",
        icon:"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png"
    },
       { id:"Github",
        name:"Github",
       
        category:"Tools",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
        id:"Figma",
        name:"Figma",
       
        category:"Design",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    },
    {
        id:"PHP",
        name:"PHP",
       
        category:"Backend",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
    },
    {
        id:"Laravel",
        name:"Laravel",
        
        category:"Backend",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
    },
    {
        id:"MySQL",
        name:"MySQL",
       
        category:"Backend",
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    }
]
