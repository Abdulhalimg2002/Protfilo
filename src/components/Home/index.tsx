
import AnimatedOnScroll from "../Anmation/AnimatedOnScroll";
import Links from "../Links";
import Prag from "../Prag";
import Title from "../Title";




const index = () => {
    return (
        <section
      id="Home"
      className="h-screen flex flex-col justify-center items-center bg-white dark:bg-[#000000] px-4 sm:px-8"
    >
      <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
        <AnimatedOnScroll direction="right">
          <Title className="text-3xl sm:text-4xl md:text-6xl font-bold text-black dark:text-white">
            Hi, I'm <span className="text-blue-500">Abdul Halim Gherra</span>
          </Title>
        </AnimatedOnScroll>

        <AnimatedOnScroll delay={0.3} direction="right">
          <Prag className="mt-4 text-base sm:text-lg md:text-xl text-black dark:text-white">
            I am a software & web developer
          </Prag>
        </AnimatedOnScroll>

        <AnimatedOnScroll delay={0.6} direction="right">
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Links
              href="/AbdulHalimGherraResume.pdf"
              download
              className="px-6 py-3 bg-blue-700 text-white rounded-lg transition-colors duration-300 text-center"
              text="Download My CV"
            />
          </div>
        </AnimatedOnScroll>
      </div>
    </section>

    );
};

export default index;
