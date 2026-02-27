import { FaTimes, FaBars } from "react-icons/fa";
import type { Nav } from "../../interfaces";
import { useEffect, useState } from "react";
import Links from "../Links";

interface IPropes {
  Navbarlinks: Nav[];
}

const Index = ({ Navbarlinks }: IPropes) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // تحديد الـ active section عند السكروول
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
    <header className="fixed top-0 left-0 w-full bg-[#000000] shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo / Name */}
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
          Abdul Halim Gherra
        </div>

        {/* Desktop Navigation (ظهر من lg فما فوق) */}
        <nav className="hidden lg:flex space-x-6 items-center">
          {Navbarlinks.map((Nav) => (
            <Links
              key={Nav.id}
              href={`#${Nav.id}`}
              className={`px-3 py-2 text-white hover:text-[#3396D3] transition ${
                activeSection === Nav.id ? "text-[#3396D3] font-semibold" : ""
              }`}
              text={Nav.name}
              active={activeSection === Nav.id}
            />
          ))}
        </nav>

        {/* Mobile / iPad Menu Button (ظهر أقل من lg) */}
        <div className="lg:hidden">
          <button
            className="text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile / iPad Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#000000] border-t  border-[#111] transition-all duration-300 ease-in-out">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {Navbarlinks.map((link) => (
              <Links
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileOpen(false)}
                text={link.name}
                className="block w-full text-left px-3 py-2 text-white hover:bg-[#3396D3] rounded transition"
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Index;
