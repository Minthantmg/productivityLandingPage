import React from 'react';
import Image from "next/image";
import play from "../../public/playIcon.png";
import heroImage from "../../public/heroImage.png"

const HeroSection = () => {
    return (
        <div className="flex justify-center w-full h-screen mt-24">
            <div className="w-full max-w-7xl">
                <div className="sm:flex">
                    <div className="sm:w-1/2 sm:mt-6 sm:order-2 mt-6">
                        <Image src={heroImage} alt=""/>
                    </div>
                    <div className="sm:w-1/2 sm:mt-32 sm:ml-3 mt-12 sm:order-1">
                        <div className="sm:text-5xl font-bold text-3xl text-center sm:text-left">
                            The Design Thinking superpowers
                        </div>
                        <div
                            className="sm:mt-6 text-base sm:mr-64 text-gray-600 text-center sm:text-left mt-6 ml-4 mr-4 sm:ml-0">
                            Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to
                            imagine your next user experience.
                        </div>
                        <div className="flex sm:mt-6 mt-10 justify-center sm:justify-start">
                            <div>
                                <button className="px-6 py-2 bg-orange-400 rounded-sm text-white">
                                    Get Started
                                </button>
                            </div>
                            <div className="flex mt-3 ml-6">
                                <div>
                                    <Image src={play} alt=""/>
                                </div>
                                <div className="sm:ml-2 underline text-orange-400 ml-2 sm:mt-0 -mt-1">
                                    Watch the Video
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;