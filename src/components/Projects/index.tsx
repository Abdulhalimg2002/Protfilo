import { ProjectsS } from "../../data";
import Imag from "../Imag";
import Links from "../Links";
import Prag from "../Prag";
import Title from "../Title";
import AnimatedSection from '../Anmation/AnimatedSection';

const Projects = () => {
  return (
    <section
      id="Project"
      className="min-h-screen  py-16 flex flex-col items-center"
    >
      <Title className="text-4xl font-bold text-white mb-12">
        My Projects
      </Title>

      <AnimatedSection
        direction="right"
        stagger={0.2}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-6 items-stretch"
      >
        {ProjectsS.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 shadow-lg rounded-md overflow-hidden hover:shadow-xl transition flex flex-col h-full"
          >
            {/* الصورة */}
            <Imag
              src={project.img}
              alt={project.projectT}
              className="w-full h-48 object-cover"
            />

            {/* المحتوى */}
            <div className="p-6 flex flex-col flex-grow">
              {/* عنوان المشروع */}
              <Title className="text-xl text-center  mb-2">
                {project.projectT}
              </Title>

              {/* الوصف */}
              <Prag className="  flex-grow text-center">
                {project.des}
              </Prag>

              {/* التكنولوجيات */}
              <div className="flex flex-wrap gap-2 justify-center mt-4">
                {project.Tool.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-white hover:bg-[#3396D3] bg-gray-700 rounded-full text-xs font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* الروابط */}
              <div className="mt-6 flex gap-4 justify-center flex-wrap">
                {project.href.map((href, index) => (
                  <Links
                    key={index}
                    href={href}
                    target="_blank"
                    className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition text-sm"
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
