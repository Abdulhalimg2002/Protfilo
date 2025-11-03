import { ProjectsS } from "../../data";
import Imag from "../Imag";
import Links from "../Links";
import Prag from "../Prag";
import Title from "../Title";
import AnimatedSection from "../Anmation/AnimatedSection";

const Projects = () => {
  return (
    <section className="min-h-screen py-16 flex flex-col items-center ">
      {/* Section Title */}
      <Title className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 text-center">
        My Projects
      </Title>

      <AnimatedSection
        direction="right"
        stagger={0.2}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full px-4 sm:px-6 md:px-8 items-stretch"
      >
        {ProjectsS.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all flex flex-col h-full"
          >
            {/* Image */}
            <div className="w-full h-48 sm:h-56 md:h-64 lg:h-60 overflow-hidden">
              <Imag
                src={project.img}
                alt={project.projectT}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Title */}
              <Title className="text-lg sm:text-xl text-center text-white font-semibold mb-2">
                {project.projectT}
              </Title>

              {/* Description */}
              <Prag className="text-gray-300 text-sm sm:text-base flex-grow text-center leading-relaxed">
                {project.des}
              </Prag>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 justify-center mt-4">
                {project.Tool.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 text-white rounded-full text-xs sm:text-sm font-medium hover:bg-[#3396D3] transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex gap-3 sm:gap-4 justify-center flex-wrap">
                {project.href.map((href, index) => (
                  <Links
                    key={index}
                    href={href}
                    target="_blank"
                    className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition text-xs sm:text-sm"
                    text={project.Text[index]}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </AnimatedSection>
    </section>
  );
};

export default Projects;
