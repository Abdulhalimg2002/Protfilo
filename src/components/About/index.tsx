import Imag from '../Imag';
import Title from '../Title';
import Prag from '../Prag';
import AnimatedSection from '../Anmation/AnimatedSection';

const index=()=>{
    return(
       <section id="About" className="bg-white dark:bg-[#000000]">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 sm:py-16 lg:px-6">

        {/* الصورة */}
        <AnimatedSection direction="right" stagger={0.2}>
          <Imag
            src="/d.png.jpg"
            alt="Profile"
            className="w-full max-h-[720px] h-auto object-cover object-[50%_20%] rounded-3xl"
          />
        </AnimatedSection>

        {/* النصوص */}
        <AnimatedSection direction="right" stagger={0.2}>
          {[
            <Title key="about-me" className="mb-3 text-center md:text-left">About Me:</Title>,
            <Prag key="about-prag">
              I’m a web developer and designer, graduated from Üsküdar University. I love turning ideas into practical and visually appealing websites and applications, focusing on performance and modern design. I’m always seeking new challenges to grow my skills and create innovative solutions.
            </Prag>,
            <Title key="based-in" className="mb-3 mt-6 text-center md:text-left">Based in:</Title>,
            <Prag key="based-prag">Istanbul, Türkiye / Open to Relocate</Prag>,
            <Title key="languages-title" className="mb-3 mt-6 text-center md:text-left">Languages:</Title>,
            <div key="languages" className="flex flex-wrap gap-4 justify-center md:justify-start">
              {['Arabic', 'English'].map(lang => (
                <span
                  key={lang}
                  className="px-4 py-2 text-black dark:text-white hover:bg-[#3396D3] bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-medium"
                >
                  {lang}
                </span>
              ))}
            </div>,
            <Title key="skills-title" className="mb-3 mt-6 text-2xl font-semibold text-center md:text-left">Skills:</Title>,
            <div key="skills" className="flex flex-wrap gap-4 justify-center md:justify-start">
              {['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS','PHP','Laravel','MySQL'].map(skill => (
                <span
                  key={skill}
                  className="px-4 py-2 text-black dark:text-white hover:bg-[#3396D3] bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          ]}
        </AnimatedSection>

      </div>
    </section>


    )
}
export default index;
