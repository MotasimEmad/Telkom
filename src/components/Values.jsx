import customer from '../images/values/customer.png';
import responsibility from '../images/values/social-responsibility.png';
import gesture from '../images/values/gesture.png';
import handshake from '../images/values/handshake.png';


const Values = () => {
  return (
    <section>
      <div class="mb-4 flex items-center justify-center mt-12 md:mt-20">
        <div class="flex flex-col justify-center">
          <h2 class="text-2xl md:text-4xl font-bold text-slate-700 lg:text-3xl text-start font-ubuntu">Core Values</h2>
          <div className="text-center md:text-start">
            <span class="inline-block w-12 md:w-36 h-1 bg-primary rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-primary rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-primary rounded-full"></span>
          </div>
        </div>
      </div>
      <section className="font-ubuntu grid grid-cols-1 xl:grid-cols-4 gap-2 px-8 md:px-16 mt-12">
        <div className="bg-white shadow-lg flex flex-col justify-start text-start rounded-md p-6 gap-4 h-auto">
          <img src={customer} className="w-12 h-12" />
          <h1 className="font-semibold text-xl">Customer Centric</h1>
          <p className="text-sm md:text-md text-gray-500 font-thin">
          Customer is top of mind. We anticipate their wants, needs and communication preferences, create meaningful experiences, and build lasting relationships.
          </p>
        </div>

        <div className="bg-white shadow-lg flex flex-col justify-start text-start rounded-md p-6 gap-4 h-auto">
          <img src={handshake} className="w-12 h-12" />
          <h1 className="font-semibold text-xl">Respect</h1>
          <p className="text-sm md:text-md text-gray-500 font-thin">
          We are empathetic and respectful with everyone. Listen, understand and validate irrespective of their position or role. Additionally don’t hesitate to apologize.
          </p>
        </div>

        <div className="bg-white shadow-lg flex flex-col justify-start text-start rounded-md p-6 gap-4 h-auto">
          <img src={gesture} className="w-12 h-12" />
          <h1 className="font-semibold text-xl">Honesty</h1>
          <p className="text-sm md:text-md text-gray-500 font-thin">
          Staff Connect is honest with clients and co-employees well. We provide clear and transparent services to our clients.
          </p>
        </div>

        <div className="bg-white shadow-lg flex flex-col justify-start text-start rounded-md p-6 gap-4 h-auto">
          <img src={responsibility} className="w-12 h-12" />
          <h1 className="font-semibold text-xl">Responsibility</h1>
          <p className="text-sm md:text-md text-gray-500 font-thin">
          We take 100 % responsibility for our decisions, behaviors and results. We prefer clear communications with clients.
          </p>
        </div>
        
      </section>
    </section>
  );
};

export default Values;
