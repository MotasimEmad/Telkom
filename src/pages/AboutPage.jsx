import NavBar from "../components/NavBar";
import aboutUS from '../assets/about_us.png';
import Services from "../components/Services";
import SimpleContactUs from "../components/SimpleContactUs";


const AboutPage = () => {
  return (
    <section className="font-ubuntu">
      <NavBar />

      <section
        className="mt-12 md:mt-28 h-28 flex items-center justify-start px-8 bg-orange-500"
      >
        <div className="flex flex-col">
          <div className="text-white text-2xl font-ubuntu font-bold">About</div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-2 py-4 px-8">
        <div className="w-full lg:w-1/2">
          <p class="block mt-4 text-gray-500 text-start font-thin text-md">
            At <span className="font-bold text-primary">Telkom</span>, we are a pioneering Information and Communications Technology (ICT) provider dedicated to delivering cutting-edge network and communication services. Founded on innovation and quality, we focus on meeting our customers' diverse needs with excellence and reliability. Our team of highly experienced professionals with deep expertise in ICT ensures exceptional service and builds strong relationships with our clients.
          </p>

          <p class="block mt-4 text-gray-500 text-start font-thin text-md">
            At <span className="font-bold text-primary">Telkom</span>, we are a pioneering Information and Communications Technology (ICT) provider dedicated to delivering cutting-edge network and communication services. Founded on innovation and quality, we focus on meeting our customers' diverse needs with excellence and reliability. Our team of highly experienced professionals with deep expertise in ICT ensures exceptional service and builds strong relationships with our clients.
          </p>
        </div>

        <div class="w-full lg:w-1/2">
          <img class="w-full h-full lg:max-w-3xl rounded-md" src={aboutUS} alt="Catalogue-pana.svg" />
        </div>
      </section>

      <section className="w-full mt-4 px-8 md:px-0">
        <h1 className="font-semibold text-xl md:text-3xl text-gray-700">Staff Connect: Expert IT Recruitment For A Thriving Dubai Business</h1>

        <p className="mt-4 text-start md:px-16 font-thin text-gray-500">We help employers search, recruit, develop, and hire top talent. We provide solutions that are local, global, strategic, and effective. We are delighted to have as our clients several of the most reputable businesses and decision-makers from the private and public industries in the MENA region.

          Being among the top employment agency in UAE, we understand the importance to have an expertly trained and competent team of employees. Our multi-cultural, dedicated team of highly-experienced recruitment experts are available around all hours to assist with your needs. Our consultants are able to find how to establish, manage and maintain business relationships to ensure that our clients’ businesses grow profitably.

          Our professionals are stable, experienced, and mature placement consultants in Dubai who are passionate about putting the most suitable candidates in the market and deliberately selected recruitment as the career of a lifetime. We truly understand our markets and have the setup connection of contacts required to make sure our partners are in secure hands.

          Our Unique approach to operating a recruitment business gives us the freedom to perform in an ethical way, being the best employment agency in UAE we constantly concentrate on the representing the best clients and candidates in a professional manner to fill the vacancies successfully.

          Our remarkable success is the result of our professionalism and the delivery of professional solutions, focus on detail as well as consideration of staff welfare and a moral work ethic. We provide value and quality by creating high-impact teams that include experts with extraordinary skills that do not just meet the needs of the client’s business but also take into account the culture and social atmosphere of the MENA region.

          Staff Connect is the most reliable IT recruitment agency in UAE that serve businesses across Dubai and all over the country, we make sure we’re fully informed on your requirements, which means we are able to tailor our solutions to your needs. We’ve developed and kept an extensive database of talent that covers all areas and specializations that allows us to accelerate the hiring process and select the most suitable candidates.</p>
      </section>

      <Services />

      <SimpleContactUs />
    </section>
  );
};

export default AboutPage;
