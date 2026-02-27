import Links from "../Links";
import Title from "../Title";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import AnimatedSection from '../Anmation/AnimatedSection';

const Contact = () => {
  return (
    <section
      
      className="min-h-screen  py-10 flex flex-col items-center"
    >
      <AnimatedSection direction="right" stagger={0.2} className="flex flex-col items-center gap-6">
        <Title className="text-4xl mb-5">Get in Touch</Title>

        <p className="text-white text-center max-w-xl mb-12">
          I'd love to hear from you! Whether you have a question, a project idea, or
          just want to say hi — feel free to reach out.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Email */}
          <Links
            href="mailto:abdulhalim2002ii@gmail.com"
            className="flex items-center gap-3 px-6 py-3 hover:bg-[#3396D3] border border-gray-600   rounded-lg  transition"
            text="Email Me"
          >
            <FaEnvelope className="text-red-500 text-xl" />
          </Links>

          {/* LinkedIn */}
          <Links
            href="https://www.linkedin.com/in/abdulhalim-dev-98122b21b/"
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 border hover:bg-[#3396D3] border-gray-600  rounded-lg  transition"
            text="LinkedIn"
          >
            <FaLinkedin className="text-blue-600 text-xl" />
          </Links>

          {/* GitHub */}
          <Links
            href="https://github.com/Abdulhalimg2002"
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 border hover:bg-[#3396D3] border-gray-600  rounded-lg  transition"
            text="GitHub"
          >
            <FaGithub className=" text-white text-xl" />
          </Links>

          {/* WhatsApp */}
          <Links
            href="https://wa.me/+905523303703"
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 border hover:bg-[#3396D3] border-gray-600 text-green-500 rounded-lg transition"
            text="WhatsApp"
          >
            <FaWhatsapp className="text-green-600 text-xl" />
          </Links>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Contact;
