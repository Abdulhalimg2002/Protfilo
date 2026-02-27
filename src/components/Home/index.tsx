
import AnimatedOnScroll from "../Anmation/AnimatedOnScroll";
import Links from "../Links";

import Prag from "../Prag";
import Title from "../Title";




const index = () => {
    return (

      <section
  id="Home"
  className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
>
  <div className="w-full max-w-4xl mx-auto text-center">

    {/* Title */}
    <AnimatedOnScroll direction="right">
      <Title className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
        Hi, I'm{" "}
        <span className="text-blue-500 break-words">
          Abdul Halim Gherra
        </span>
      </Title>
    </AnimatedOnScroll>

    {/* Subtitle */}
    <AnimatedOnScroll delay={0.3} direction="right">
      <Prag className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-2xl mx-auto">
        I am a software & web developer
      </Prag>
    </AnimatedOnScroll>

    {/* Buttons */}
    <AnimatedOnScroll delay={0.6} direction="right">
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Links
          href="/Blue Simple Professional CV Resume (3).pdf"
          download
          className="w-full sm:w-auto px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 text-center"
          text="Download My CV"
        />
      </div>
    </AnimatedOnScroll>

  </div>
</section>


    );
};

export default index;
