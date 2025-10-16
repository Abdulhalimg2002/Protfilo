import type { ReactNode } from "react";

interface IPropes{
className?:String;
children:ReactNode;
}
const index=({className,children}:IPropes)=>{
    return(
        <p className={`text-lg text-black dark:text-white text-center   md:text-left ${className}` }>{children}</p>
    )
}
export default index;