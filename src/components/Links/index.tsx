import type { ReactNode } from "react";

interface IPropes{
     text: string;
  href: string;
  download?: boolean;
  className?: string;
   onClick?:()=>void;
    active?: boolean;
     target?:string;
    children?:ReactNode;
}
const index=({ text,href,download,className,onClick,active,children}:IPropes)=>{
    const isInternal = href.startsWith('#');
    return(
        <a href={href}  download={download} onClick={onClick}

      target={download ? "_self" : (isInternal ? "_self" : "_blank")}
      
      className={`px-6 py-3  rounded-md transition  ${
        active ? " font-bold" : "text-white   "
      } ${className}` }>{text} {children}</a>

    )
}
export default index;