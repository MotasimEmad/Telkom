const SimpleContactUs = () => {

    const backgroundStyle = {
        backgroundImage: 'url(https://www.staffconnect.ae/wp-content/uploads/2021/10/web-pattern.png)',
        backgroundPosition: 'center',
      };
    return (
        <section className="bg-orange-500" style={backgroundStyle}>
              <section className="flex flex-col md:flex-row gap-2 font-ubuntu px-8 md:px-16 py-12">
            <div className="w-full md:w-1/2 text-start">
                <h1 className="font-semibold text-xl md:text-4xl text-white">Let's Start Something New</h1>
                <p className="font-thin text-gray-100 text-sm md:text-md mt-4">
                    Would you like to speak to one of our tech advisors over the phone?
                </p>
            </div>

            <div className="w-full md:w-1/2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <input id="username" placeholder="Full name" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                    <input id="username" placeholder="Company name" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                    <input id="username" placeholder="Phone number" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                    <input id="username" type="text" placeholder="Email address" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                </div>
                <textarea id="username" type="text" placeholder="Message" rows="2" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"></textarea>
                <button class="mt-4 flex justify-start text-white bg-primary hover:bg-orange-600 border-0 py-2 px-8 focus:outline-none rounded-sm text-sm">Submit</button>
            </div>
        </section>
        </section>
      
    );
};

export default SimpleContactUs;