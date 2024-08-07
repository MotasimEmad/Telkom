import aboutUS from '../assets/about_us.png';
const AboutUs = () => {
  return (
    <section className="font-ubuntu">
      <div class="flex flex-col py-8 px-4 md:px-14 md:mt-8">
        <h2 class="text-2xl md:text-4xl font-bold tracking-tight text-gray-700">
          About us
        </h2>

        <div class="md:mt-2">
          <span class="inline-block w-12 md:w-40 h-1 bg-primary rounded-full"></span>
          <span class="inline-block w-3 h-1 ml-1 bg-primary rounded-full"></span>
          <span class="inline-block w-1 h-1 ml-1 bg-primary rounded-full"></span>
        </div>

        <p class="block mt-4 text-gray-500 text-start font-thin">
          At <span className="font-bold text-primary">Telkom</span>, we are a pioneering Information and Communications Technology (ICT) provider dedicated to delivering cutting-edge network and communication services. Founded on innovation and quality, we focus on meeting our customers' diverse needs with excellence and reliability. Our team of highly experienced professionals with deep expertise in ICT ensures exceptional service and builds strong relationships with our clients.
        </p>

        <div class="mt-6">
          <button className="text-white rounded-md px-4 py-2 bg-primary font-thin">Know More</button>
        </div>
      </div>

      <header class="bg-white">
        <div class="container px-6 md:py-16 mx-auto text-start">
          <div class="items-center lg:flex gap-2">
            <div class="w-full lg:w-1/2">
              <img class="w-full h-full lg:max-w-3xl rounded-md" src={aboutUS} alt="Catalogue-pana.svg" />
            </div>
            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img class="w-full h-full lg:max-w-3xl rounded-md" src={aboutUS} alt="Catalogue-pana.svg" />
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default AboutUs;
