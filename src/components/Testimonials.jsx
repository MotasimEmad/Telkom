import React from 'react';

const testimonials = [
    {
        name: "Agustín Rodríguez",
        title: "Co-founder of Tailwind Components",
        testimonial: "Meraki UI helped us to deliver high-quality results in consistent fashion while giving support to mobile layouts and RTL languages.",
        image: "https://via.placeholder.com/50"
    },
    {
        name: "Alexandru Paduraru",
        title: "Co-founder of Creative-Tim",
        testimonial: "Meraki UI is one of the most simple, intuitive, and lightweight collections of Tailwind CSS Components. From Buttons to Cards, to Team sections, you have all the necessary elements to create a fast prototype and validate your ideas.",
        image: "https://via.placeholder.com/50"
    },
    // Add more testimonials as needed
];

const Testimonials = () => {
    return (
        <section className="container px-12 md:px-24 py-8 mx-auto lg:py-16" id="testimonials">
            <div className="grid gap-8 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-800 text-white shadow-lg rounded-lg p-6">
                        <div className="flex items-center mb-4">
                            <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                                <p className="text-sm text-gray-400">{testimonial.title}</p>
                            </div>
                        </div>
                        <p className="text-gray-300">{testimonial.testimonial}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
