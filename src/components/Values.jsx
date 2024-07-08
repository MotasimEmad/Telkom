import accountability from '../images/values/accountability.png';


const Values = () => {
  return (
    <section>
      <div class="mb-4 flex items-center justify-center mt-12 md:mt-28">
        <div class="flex flex-col justify-center">
          <h2 class="text-2xl md:text-4xl font-bold text-slate-700 lg:text-3xl text-start font-ubuntu">Core Values</h2>
          <div className="text-center md:text-start">
            <span class="inline-block w-12 md:w-36 h-1 bg-primary rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-primary rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-primary rounded-full"></span>
          </div>
        </div>
      </div>
      <section className="font-ubuntu grid grid-cols-2 xl:grid-cols-3 gap-2 px-8 md:px-16 mt-12">
        <div className="bg-white shadow-lg flex flex-col items-center justify-center rounded-md py-6">
          <img src={accountability} className="w-20 h-20" />
          <h1>Accountability</h1>
        </div>

        <div className="bg-white shadow-lg flex flex-col items-center justify-center rounded-md py-6">
          <img src={accountability} className="w-20 h-20" />
          <h1>Accountability</h1>
        </div>

        <div className="bg-white shadow-lg flex flex-col items-center justify-center rounded-md py-6">
          <img src={accountability} className="w-20 h-20" />
          <h1>Accountability</h1>
        </div>

        <div className="bg-white shadow-lg flex flex-col items-center justify-center rounded-md py-6">
          <img src={accountability} className="w-20 h-20" />
          <h1>Accountability</h1>
        </div>

        <div className="bg-white shadow-lg flex flex-col items-center justify-center rounded-md py-6">
          <img src={accountability} className="w-20 h-20" />
          <h1>Accountability</h1>
        </div>

        <div className="bg-white shadow-lg flex flex-col items-center justify-center rounded-md py-6">
          <img src={accountability} className="w-20 h-20" />
          <h1>Accountability</h1>
        </div>
      </section>
    </section>
  );
};

export default Values;
