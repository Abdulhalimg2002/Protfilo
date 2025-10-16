import type { ReactNode } from "react";

interface IPropes{
className?:String;
children:ReactNode;
}
const index=({className,children}:IPropes)=>{
    return(
        <p className={`text-lg font-bold text-white text-center    ${className}` }>{children}</p>
    )
}
export default index;