import Imag from '../Imag';
import Title from '../Title';
import Prag from '../Prag';
import AnimatedSection from '../Anmation/AnimatedSection';

const Index = () => {
  return (
    <section id="About" className="bg-white dark:bg-black py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 items-start gap-10 md:gap-16">

        {/* الصورة */}
        <AnimatedSection direction="left" stagger={0.2}>
          <Imag
            src="/d.png.jpg"
            alt="Profile"
            className="w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[700px] object-cover object-center rounded-3xl shadow-lg"
          />
        </AnimatedSection>

        {/* النصوص */}
        <AnimatedSection direction="right" stagger={0.2}>
          <div className="flex flex-col justify-center text-center md:text-left space-y-6 sm:space-y-8">

            {/* About */}
            <div>
              <Title className="mb-3 text-2xl sm:text-3xl md:text-4xl">About Me:</Title>
              <Prag className="text-white  text-sm sm:text-base md:text-lg leading-relaxed">
                I’m a web developer and designer, graduated from Üsküdar University. 
                I love turning ideas into practical and visually appealing websites and applications, 
                focusing on performance and modern design. I’m always seeking new challenges to grow 
                my skills and create innovative solutions.
              </Prag>
            </div>

            {/* Based in */}
            <div className='border font-bold border-gray-700 p-4 rounded-lg'>
              <Title className="mb-2 text-xl sm:text-2xl md:text-3xl">Based in:</Title>
              <Prag className="text-sm sm:text-base md:text-lg md:text-left">Istanbul, Türkiye / Open to Relocate</Prag>
            </div>

            {/* Education */}
            <div className='border border-gray-700 p-4 rounded-lg'>
              <Title className="mb-2 text-xl sm:text-2xl md:text-3xl">Education:</Title>
              <div className="space-y-1 ">
                <Prag className="text-sm sm:text-base md:text-lg md:text-left">Bachelor’s Degree in Software Engineering</Prag>
                <Prag className="text-sm sm:text-base md:text-lg md:text-left">Üsküdar University — Istanbul, Türkiye</Prag>
                <Prag className="text-sm sm:text-base md:text-lg md:text-left">Graduated: 2025 • GPA: 3.27 / 4.00</Prag>
              </div>
            </div>

            {/* Languages */}
            <div className='border border-gray-700 p-4 rounded-lg'>
              <Title className="mb-2 text-xl sm:text-2xl md:text-3xl">Languages:</Title>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
                {['Arabic', 'English'].map(lang => (
                  <span
                    key={lang}
                    className="px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm md:text-sm  font-bold bg-gray-800 text-white hover:bg-[#3396D3] transition-colors"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills */}
           

          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}

export default Index;
