import { useState } from 'react';
import Title from '../Title';

import AnimatedSection from '../Anmation/AnimatedSection';
import { Skills } from '../../data';

const index = () => {
  // Group skills by category
  const groupedSkills = Skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof Skills>);

  const categories = Object.keys(groupedSkills);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const currentSkills = groupedSkills[selectedCategory] || [];

  return (
   <section  className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-screen-xl">

    {/* Section Title */}
    <div className="text-center mb-10 sm:mb-12">
      <Title className="mb-4 text-2xl sm:text-3xl md:text-4xl">My Skills</Title>
     
    </div>

    {/* Category Tabs */}
    <div className="flex flex-wrap justify-center mb-10 sm:mb-12 gap-2 sm:gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 sm:px-6 py-2 sm:py-3 font-bold rounded-full  transition-all duration-300 ${
            selectedCategory === category
              ? 'bg-[#3396D3] text-white shadow-lg'
              : 'bg-gray-800 text-white  hover:bg-[#3396D3] hover:text-white'
          }`}
        >
          {category}
        </button>
      ))}
    </div>

    {/* Skills Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {currentSkills.map((skill, index) => (
        <AnimatedSection
          key={skill.id}
          direction={index % 2 === 0 ? "left" : "right"}
          stagger={0.1 * index}
        >
          <div className="group bg-gray-800 p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border  dark:border-gray-700">

            {/* Skill Icon */}
            {skill.icon && (
              <div className="flex justify-center mb-4">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            )}

            {/* Skill Name */}
            <Title className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 text-center group-hover:text-[#3396D3] transition-colors duration-300">
              {skill.name}
            </Title>

            {/* Progress Bar */}
           

            {/* Decorative Elements */}
            

          </div>
        </AnimatedSection>
      ))}
    </div>
  </div>
</section>

  );
};

export default index;
