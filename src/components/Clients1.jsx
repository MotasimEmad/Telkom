import React from 'react';
import '../App.css'; // Make sure to adjust the path if necessary

const Clients1 = () => {
    return (
        <section className="relative container px-12 md:px-24 py-8 mx-auto lg:py-16 bg-partners-section" id="partners">
            <div className="relative bg-white shadow-lg rounded-lg p-8 lg:flex lg:items-center z-10">
                <div className="lg:w-1/2 text-start">
                    <h3 className="text-2xl text-gray-800 md:text-3xl font-bold font-ubuntu">We Work with the Best Partners</h3>
                    <p className="mt-4 text-gray-600 ">
                        We are confident that we can find the process that will help you meet your goals.
                    </p>
                </div>
                <div className="mt-10 lg:mt-0 lg:w-1/2 lg:px-8">
                    <div className="grid grid-cols-3 gap-4 lg:gap-8">
                        <div className="flex justify-center items-center p-4">
                            <img src="https://asset.brandfetch.io/idWvz5T3V7/idpvCl_Ipb.svg" alt="Fossil" className="h-auto max-w-full" />
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <img src="https://asset.brandfetch.io/idWvz5T3V7/idpvCl_Ipb.svg" alt="Bvlgari" className="h-auto max-w-full" />
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <img src="https://asset.brandfetch.io/idWvz5T3V7/idpvCl_Ipb.svg" alt="Harry Winston" className="h-auto max-w-full" />
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <img src="https://asset.brandfetch.io/idWvz5T3V7/idpvCl_Ipb.svg" alt="Jaeger-LeCoultre" className="h-auto max-w-full" />
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <img src="https://asset.brandfetch.io/idWvz5T3V7/idpvCl_Ipb.svg" alt="Baume & Mercier" className="h-auto max-w-full" />
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <img src="https://asset.brandfetch.io/idWvz5T3V7/idpvCl_Ipb.svg" alt="Cartier" className="h-auto max-w-full" />
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <img src="https://asset.brandfetch.io/idWvz5T3V7/idpvCl_Ipb.svg" alt="Hublot" className="h-auto max-w-full" />
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <img src="https://asset.brandfetch.io/idWvz5T3V7/idpvCl_Ipb.svg" alt="EBEL" className="h-auto max-w-full" />
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <img src="https://asset.brandfetch.io/idWvz5T3V7/idpvCl_Ipb.svg" alt="IWC Schaffhausen" className="h-auto max-w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients1;
