import React from 'react';
import Image from "next/image";
import imageOne from '../../public/chatone.png'
import imageTwo from '../../public/chattwo.png'
import imageThree from '../../public/chatthree.png'
import imageFour from '../../public/chatfour.png'
import imageFive from '../../public/chatfive.png'

const Need = () => {
    return (
        <div>
            <div className="flex justify-center w-full h-screen">
                <div className="w-full max-w-7xl">
                    <div className="flex justify-between">
                        <div className="mt-24 sm:block hidden">
                            <Image src={imageOne} alt=""/>
                        </div>
                        <div className="mt-12 mr-24 sm:block hidden">
                            <Image src={imageTwo} alt=""/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center sm:-mt-2 mt-40">
                        <div className="font-bold text-3xl">
                            Need a super Hero?
                        </div>
                        <div className="mt-12 text-center sm:pl-96 sm:pr-96 text-gray-500">
                            Do you require some help for your project: Conception workshop,
                            prototyping, marketing strategy, landing page, Ux/UI?
                        </div>
                        <div className="mt-12">
                            <button className="text-white bg-orange-500 px-5 py-2 rounded-sm font-bold">
                                Contact our expert
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="sm:block hidden">
                            <Image src={imageThree} alt=""/>
                        </div>
                        <div className="mt-32 -mr-12 sm:block hidden">
                            <Image src={imageFour} alt=""/>
                        </div>
                        <div className="sm:block hidden">
                            <Image src={imageFive} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Need;