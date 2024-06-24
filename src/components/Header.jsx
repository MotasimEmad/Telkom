import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from './ParticlesBackground';

const Header = () => {
  return (
    <body>
      <Particles params={particlesConfig} />
      <section className="relative h-screen flex items-center justify-center text-white">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        >
          <source
            src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900 to-gray-900 opacity-70"></div>
        <div className="relative z-10 text-center px-8 md:px-20 lg:px-40">
          <h1 className="text-6xl font-bold mb-4 mt-16">
            Lorem, ipsum dolor sit amet consectetur
          </h1>
          <p className="text-lg mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum totam eveniet amet, nostrum quo at nisi.
          </p>
        </div>
      </section>
    </body>
  );
};

export default Header;
