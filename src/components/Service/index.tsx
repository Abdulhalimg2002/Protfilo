import Title from '../Title';
import Prag from '../Prag';
import AnimatedSection from '../Anmation/AnimatedSection';
import { Services } from '../../data';



const index = () => {
  return (
   <section  className=" py-16 px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-screen-xl">
  {/* Section Title */}
  <div className="text-center mb-12">
    <Title className="mb-4 text-3xl sm:text-4xl">My Services</Title>
    
  </div>

  {/* Services Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {Services.map((service, index) => (
      <AnimatedSection
        key={service.id}
        direction={index % 2 === 0 ? "left" : "right"}
        stagger={0.1 * index}
      >
        <div className="group flex flex-col items-center justify-between bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 h-full min-h-[350px]">
          {/* Icon */}
          <div className="text-6xl mb-6 text-[#3396D3] group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl  text-white mb-3 text-center group-hover:text-[#3396D3] transition-colors duration-300">
            {service.title}
          </h3>

          {/* Description */}
          <Prag className="text-white text-center text-sm sm:text-base leading-relaxed flex-1">
            {service.description}
          </Prag>
        </div>
      </AnimatedSection>
    ))}
  </div>
</div>

</section>

  );
};

export default index;
