import Prag from "../components/Prag";

const index=()=>{
    return(
        
       <footer className="bg-white dark:bg-[#000000] text-black dark:text-white  ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* حقوق النشر */}
        <Prag className="text-sm">
          © {new Date().getFullYear()} Abdul Halim Gherra. All rights reserved.
        </Prag>

        {/* روابط داخلية */}
       
      </div>
    </footer>
    )
}
export default index;