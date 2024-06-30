import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../redux/messagesSlice';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
    const dispatch = useDispatch();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const { isLoading, success, error } = useSelector((state) => state.message);

    const handleSubmitClick = () => {
        dispatch(sendMessage({ full_name: fullName, email: email, phone_number: phoneNumber, message: message }))
            .unwrap()
            .then((payload) => {
                toast.success('Message has been send successfully.', {
                    position: "top-right"
                  });

                  setFullName("");
                  setEmail("");
                  setPhoneNumber("");
                  setMessage("");
            })
            .catch((error) => {
                toast.error(error.message, {
                    position: "top-right"
                  });
            })
    };
    return (
        <section id='contact-us' class="text-gray-600 body-font relative text-start">
             <div className="text-start"><ToastContainer /></div>
            <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div
                    class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder="0"
                        title="map"
                        marginHeight="0"
                        marginWidth="0"
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.682844716!2d55.55717296659583!3d25.076280441863283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z2K_YqNmK!5e0!3m2!1sar!2sae!4v1719614040110!5m2!1sar!2sae"
                        style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
                    ></iframe>
                    <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md font-ubuntu">
                        <div class="lg:w-1/2 px-6">
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p class="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                        </div>
                        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a class="text-red-500 leading-relaxed">example@email.com</a>
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <p class="leading-relaxed">123-456-7890</p>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 class="text-gray-900 text-lg mb-1 font-medium title-font capitalize font-ubuntu">Get in touch with us</h2>
                    <p class="leading-relaxed mb-5 text-gray-600">Ask us everything and we would love to hear from you
                    </p>
                    <div class="relative mb-4">
                        <label for="name" class="leading-7 text-sm text-gray-600">Full Name</label>
                        <input required value={fullName} onChange={(e) => { setFullName(e.target.value) }} type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative mb-4">
                        <label for="name" class="leading-7 text-sm text-gray-600">Phone Number</label>
                        <input required value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative mb-4">
                        <label for="email" class="leading-7 text-sm text-gray-600">Email Address</label>
                        <input required value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative mb-4">
                        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                        <textarea required onChange={(e) => { setMessage(e.target.value) }} id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    {isLoading ?
                        <button disabled class="text-white bg-primary border-0 py-1 px-4 focus:outline-none rounded-md text-sm uppercase">Loading ...</button>
                        :
                        <button onClick={handleSubmitClick} class="text-white bg-primary border-0 py-1 px-4 focus:outline-none rounded-md text-sm uppercase">SUBMIT</button>
                    }
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
