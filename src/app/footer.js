import React from 'react';
import Image from "next/image";
import logo from '../../public/Logo.png'

const Footer = () => {
    return (
        <div className="justify-center w-full">
            <div className="w-full max-w-7xl">
                <div className="flex sm:justify-between pt-24 sm:pt-0 sm:flex-row flex-col justify-center items-center sm:items-start">
                    <div className="mt-16">
                        <Image src={logo} alt=""/>
                    </div>
                    <div>
                        <div className="flex sm:mt-32 sm:mb-32 mt-12 ml-10 sm:ml-0">
                            <div className="sm:mr-60 mr-20">
                                <div className="text-gray-500">
                                    About us
                                </div>
                                <div className="mt-2 text-gray-500">
                                    Blog
                                </div>
                                <div className="mt-2 text-gray-500">
                                    Contact
                                </div>
                                <div className="mt-2 text-gray-500">
                                    FAQ
                                </div>
                            </div>
                            <div>
                                <div className="text-gray-500">
                                    Disclaim
                                </div>
                                <div className="mt-2 text-gray-500">
                                    Financing
                                </div>
                                <div className="mt-2 text-gray-500">
                                    Privacy Policy
                                </div>
                                <div className="mt-2 text-gray-500">
                                    Terms of Service
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="sm:mt-36 mt-24 flex flex-col justify-center items-center sm:justify-start sm:items-start">
                            <div>
                                <input type="text" className="border border-indigo-400 py-2 px-3 w-80"/>
                            </div>
                            <div>
                                <button className="bg-orange-400 rounded-sm px-3 py-2 font-bold text-white mt-4">
                                    Sign up Now
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;