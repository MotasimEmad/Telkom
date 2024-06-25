import React from 'react';
import logo from "../logo.png";
import { TypeAnimation } from 'react-type-animation';


const Header = () => {
  const styles = {
    backgroundImage: 'linear-gradient(#f6931d, transparent)',
    backgroundPosition: '0 110%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto .75rem',
    display: 'inline-block',
    paddingBottom: '0.15rem'

  };


  const stylesImage = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
    backgroundPosition: 'top right', // Show top-right portion of the image
  backgroundSize: 'cover', // Cover the entire element
  backgroundRepeat: 'no-repeat', // Prevent repeating the image
  backgroundAttachment: 'fixed' // Fixed background image
  };

  return (
    <body>
      <section class="" style={stylesImage}>
        <nav x-data="{ isOpen: false }" class="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
          <div class="flex items-center justify-between">
            <a href="#">
              <img class="w-auto h-6 sm:h-7" src={logo} alt="logo" />
            </a>
          </div>
        </nav>

        <div class="container px-6 py-40 mx-auto text-center">
          <div class="max-w-lg mx-auto">
            <h1 class="text-5xl font-semibold text-white">
              <span class="inline-block uppercase">Telkom for</span>
              <br />
              <span class="text-3xl">
                <TypeAnimation
                  sequence={[
                    'computer network',
                    1000,
                    'infrastructure installation',
                    1000,
                    'maintenance',
                    1000
                  ]}
                  wrapper="span"
                  speed={20}
                  repeat={Infinity}
                />
              </span>

            </h1>
            <p class="mt-6 text-gray-300 uppercase gretting" >Where Innovation Meets Connectivity</p>

          </div>

          <div class="flex justify-center mt-10">
            {/* <img class="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://images.unsplash.com/photo-1604869515882-4d10fa4b0492?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}
          </div>
        </div>
      </section>

      {/* <svg class="fill-sky-900" viewBox="0 0 1440 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z" />
      </svg> */}
    </body>
  );
};

export default Header;