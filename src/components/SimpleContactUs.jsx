import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from '../redux/messagesSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SimpleContactUs = () => {
    const dispatch = useDispatch();
    const [fullName, setFullName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const { isLoading, success, error } = useSelector((state) => state.message);

    const handleSubmitClick = () => {
        dispatch(sendMessage({ full_name: fullName, company_name: companyName, email: email, phone_number: phoneNumber, message: message }))
            .unwrap()
            .then((payload) => {
                toast.success('Message has been send successfully.', {
                    position: "top-right"
                });

                setFullName("");
                setCompanyName("");
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

    const backgroundStyle = {
        backgroundImage: 'url(https://www.staffconnect.ae/wp-content/uploads/2021/10/web-pattern.png)',
        backgroundPosition: 'center',
    };
    return (
        <section className="mt-4 bg-orange-500" style={backgroundStyle}>
            <div className="text-start"><ToastContainer /></div>
            <section className="flex flex-col md:flex-row gap-2 font-ubuntu px-8 md:px-16 py-12">
                <div className="w-full md:w-1/2 text-start">
                    <h1 className="font-semibold text-xl md:text-4xl text-white">Let's Start Something New</h1>
                    <p className="font-thin text-gray-100 text-sm md:text-md mt-4">
                        Would you like to speak to one of our tech advisors over the phone?
                    </p>
                </div>

                <div className="w-full md:w-1/2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <input id="name" name="name" value={fullName} onChange={(e) => { setFullName(e.target.value) }} placeholder="Full name" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                        <input id="company_name" name="company_name" value={companyName} onChange={(e) => { setCompanyName(e.target.value) }} placeholder="Company name" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                        <input id="phone_number" name="phone_number" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} placeholder="Phone number" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                        <input id="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder="Email address" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                    </div>
                    <textarea id="message" name="message" value={message} onChange={(e) => { setMessage(e.target.value) }} type="text" placeholder="Message" rows="2" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"></textarea>
                    {isLoading ? <button disabled class="mt-4 flex justify-start text-white bg-primary hover:bg-orange-600 border-0 py-2 px-8 focus:outline-none rounded-sm text-sm">Loading ...</button>
                     : <button onClick={handleSubmitClick} class="mt-4 flex justify-start text-white bg-primary hover:bg-orange-600 border-0 py-2 px-8 focus:outline-none rounded-sm text-sm">Submit</button>
                    }
                </div>
            </section>
        </section>

    );
};

export default SimpleContactUs;