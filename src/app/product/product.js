import React from 'react';
import product from '../../../public/productImage.png'
import tick from '../../../public/tick.png'
import Image from "next/image";

const Product = () => {
    return (
        <div className="flex justify-center w-full sm:h-screen h-fit">
            <div className="w-full max-w-7xl">
                <div className="pt-96 sm:pt-0">
                    <div className="pt-20 sm:pt-0 sm:flex">
                        <div className="mt-96 sm:mt-0">
                            <div className="sm:w-1/2 sm:mt-20 sm:ml-44 ml-4 mr-4 sm:mr-4">
                                <Image src={product} alt="" className="pt-24 sm:pt-32"/>
                            </div>
                        </div>
                        <div className="sm:w-1/2 sm:mt-44 mt-16 ml-2 mr-2 sm:ml-0 sm:mr-0">
                            <div className="sm:mt-0 mt-6">
                                Easier decision making for
                            </div>
                            <div className="font-bold sm:mt-3 sm:text-4xl mt-4">
                                Product Managers
                            </div>
                            <div className="sm:mt-6 mt-6">
                                The Myspace page defines the individual, his or her characteristics, traits, personal
                                choices and the overall personality of the person.
                            </div>
                            <div className="flex sm:mt-6 mt-6">
                                <div className="bg-orange-500 rounded-lg items-center w-10 h-10 flex justify-center mt-2 sm:mt-0">
                                    <Image src={tick} alt=""/>
                                </div>
                                <div className="sm:ml-4 text-sm mt-2 sm:mt-2 ml-4">
                                    Never worry about overpaying for your energy again.
                                </div>
                            </div>
                            <div className="flex sm:mt-6 mt-6">
                                <div className="bg-orange-500 rounded-lg items-center w-16 h-10 sm:w-10 sm:h-10 flex justify-center mt-2 sm:mt-0">
                                    <Image src={tick} alt=""/>
                                </div>
                                <div className="sm:ml-4 text-sm mt-2 sm:mt-2 ml-3">
                                    We will only switch you to energy companies that we trust and will treat you right
                                </div>
                            </div>
                            <div className="flex sm:mt-6 mt-6">
                                <div className="bg-orange-500 rounded-lg items-center w-12 h-10 sm:w-10 sm:h-10 flex justify-center mt-2 sm:mt-0">
                                    <Image src={tick} alt=""/>
                                </div>
                                <div className="sm:ml-4 text-sm mt-2 sm:mt-2 ml-4">
                                    We track the markets daily and know where the savings are.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;