import type { ReactNode } from "react";

interface IPropes{
className?:String;
children:ReactNode;

}
const index=({className,children}:IPropes)=>{
    return(
        <h1 className={`font-bold text-3xl text-white ${className}`}>{children}</h1>
    )
}
export default index;