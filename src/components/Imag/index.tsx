interface IPropes{
className:string;
src:string;
alt:string;


}
const index=({src,alt,className}:IPropes)=>{
    return(
       <img src={src} alt={alt} className={className} />
    )
}
export default index;