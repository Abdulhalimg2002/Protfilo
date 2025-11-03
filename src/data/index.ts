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
        id:"Task Manger",
        img:"data:image/jpeg;base64,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",
        projectT:"Task Manger",
        Tool:["HTML","CSS","JavaScript","PHP","MySQL"],
des:"TaskManager helps teams organize, track, and prioritize tasks for better productivity and collaboration.",
href:["http://taskmanger3.wuaze.com","https://github.com/Abdulhalimg2002/TAsk_Manger"],
Text:["Live Demo","Github"],


},
   {
        id:"Product Builder",
        img:"https://cdn-icons-png.flaticon.com/512/17352/17352586.png",
        projectT:"Product Builder",
        Tool:["Reat js","TypeScript","TalwindCss"],
des:"A lightweight Product Builder application that enables users to create, view, update, and delete products efficiently. Built with clean and simple design principles.",
href:["https://products-builder1.netlify.app/","https://github.com/Abdulhalimg2002/products-builder"],
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
