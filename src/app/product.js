import React from 'react';
import product from '../../public/productImage.png'
import tick from '../../public/tick.png'
import Image from "next/image";

const Product = () => {
    return (
        <div className="flex justify-center w-full h-screen">
            <div className="w-full max-w-7xl">
                <div className="sm:flex">
                    <div className="mt-96 sm:mt-0">
                        <div className="sm:w-1/2 sm:mt-20 sm:ml-44 ml-4 mr-4 sm:mr-4">
                            <Image src={product} alt="" className="pt-24 sm:pt-32"/>
                        </div>
                    </div>
                    <div className="sm:w-1/2 sm:mt-44 mt-16">
                        <div>
                            Easier decision making for
                        </div>
                        <div className="font-bold sm:mt-3 sm:text-4xl">
                            Product Managers
                        </div>
                        <div className="sm:mt-6 sm:mr-32">
                            The Myspace page defines the individual, his or her characteristics, traits, personal
                            choices and the overall personality of the person.
                        </div>
                        <div className="flex sm:mt-6">
                            <div className="bg-orange-500 rounded-lg px-3.5 py-1 items-center flex justify-center">
                                <Image src={tick} alt=""/>
                            </div>
                            <div className="sm:ml-4 sm:mr-64 text-sm">
                                Never worry about overpaying for your energy again.
                            </div>
                        </div>
                        <div className="flex sm:mt-6">
                            <div className="bg-orange-500 rounded-lg px-3.5 py-1 items-center flex justify-center">
                                <Image src={tick} alt=""/>
                            </div>
                            <div className="sm:ml-4 sm:mr-56 text-sm">
                                We will only switch you to energy companies that we trust and will treat you right
                            </div>
                        </div>
                        <div className="flex sm:mt-6">
                            <div className="bg-orange-500 rounded-lg px-3.5 py-1 items-center flex justify-center">
                                <Image src={tick} alt=""/>
                            </div>
                            <div className="sm:ml-4 sm:mr-64 text-sm">
                                We track the markets daily and know where the savings are.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;