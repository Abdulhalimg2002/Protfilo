
import { FaTimes, FaBars, } from "react-icons/fa";
import type { Nav } from "../../interfaces";
import { useEffect, useState } from "react";
import Links from "../Links";


interface IPropes {
  Navbarlinks: Nav[];
}

const index = ({ Navbarlinks }: IPropes) => {
 const [mobileOpen, setMobileOpen] = useState(false);
 const [activeSection, setActiveSection] = useState("Home");
 
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.clientHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height && id) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-[#000000] shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo / Name */}
        <div className="text-xl font-bold text-black dark:text-white">Abdul Halim Gherra</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {Navbarlinks.map((Nav) => (
            <Links
              key={Nav.id}
               href={`#${Nav.id}`}
              className="px-3 py-2 text-black dark:text-white hover:text-[#3396D3] transition"
              text={Nav.name}
              active={activeSection === Nav.id}
            />
          ))}
        
        </nav>

        {/* Mobile Menu Button */}
     {/* Mobile hamburger */}
        <div className="md:hidden ">
          <button className="text-black dark:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-[#000000] border-t border-gray-200 dark:border-[#000000]">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {Navbarlinks.map((link) => (
              <Links
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileOpen(false)}
                text={link.name}
                className="block w-full text-left px-3 py-2 text-black dark:text-white hover:bg-[#3396D3] rounded"
              />


            ))}
            
          </div>
        </div>
      )}
    </header>

    )}
  export default index;