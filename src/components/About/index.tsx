import Imag from '../Imag';
import Title from '../Title';
import Prag from '../Prag';
import AnimatedSection from '../Anmation/AnimatedSection';

const Index = () => {
  return (
    
    <div
  id="About"
  className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 items-start gap-6 sm:gap-8 md:gap-12 px-4 sm:px-5 lg:px-8 py-8"
>
  {/* الصورة */}
  <AnimatedSection direction="left" stagger={0.2}>
    <div className="flex justify-center items-center w-full">
      <Imag
        src="/d.png.jpg"
        alt="Profile"
        className="
          w-full 
          max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px]
          h-auto 
          max-h-[350px] sm:max-h-[400px] md:max-h-[600px] lg:max-h-[700px] 
          object-cover 
          object-center 
          rounded-3xl 
          shadow-lg
          transition-all duration-300
        "
      />
    </div>
  </AnimatedSection>

  {/* النصوص */}
  <AnimatedSection direction="right" stagger={0.2}>
    <div className="flex flex-col justify-center text-center md:text-left space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">

      {/* About */}
      <div>
        <Title className="mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">About Me:</Title>
        <Prag className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed md:text-left">
          I’m a web developer and designer, graduated from Üsküdar University. 
          I love turning ideas into practical and visually appealing websites and applications, 
          focusing on performance and modern design. I’m always seeking new challenges to grow 
          my skills and create innovative solutions.
        </Prag>
      </div>

      {/* Based in */}
      <div className="border font-bold border-gray-700 p-3 sm:p-4 rounded-lg">
        <Title className="mb-1 text-xl sm:text-2xl md:text-3xl">Based in:</Title>
        <Prag className="text-sm sm:text-base md:text-lg md:text-left">
          Istanbul, Türkiye / Open to Relocate
        </Prag>
      </div>

      {/* Education */}
      <div className="border border-gray-700 p-3 sm:p-4 rounded-lg">
        <Title className="mb-1 text-xl sm:text-2xl md:text-3xl">Education:</Title>
        <div className="space-y-1">
          <Prag className="text-sm sm:text-base md:text-lg md:text-left">Bachelor’s Degree in Software Engineering</Prag>
          <Prag className="text-sm sm:text-base md:text-lg md:text-left">Üsküdar University — Istanbul, Türkiye</Prag>
          <Prag className="text-sm sm:text-base md:text-lg md:text-left">Graduated: 2025 • GPA: 3.27 / 4.00</Prag>
        </div>
      </div>

      {/* Languages */}
      <div className="border border-gray-700 p-3 sm:p-4 rounded-lg">
        <Title className="mb-1 text-xl sm:text-2xl md:text-3xl">Languages:</Title>
        <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
          {['Arabic', 'English'].map(lang => (
            <span
              key={lang}
              className="px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm md:text-sm lg:text-base font-bold bg-gray-800 text-white hover:bg-[#3396D3] transition-colors"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Skills */}
      {/* Add your skills section here if needed */}

    </div>
  </AnimatedSection>
</div>


   
  )
}

export default Index;
