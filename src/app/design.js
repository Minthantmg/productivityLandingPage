import React from 'react';
import Image from "next/image";
import design from "../../public/designImage.png";

const Design = () => {
    return (
        <div className="flex justify-center w-full h-screen">
            <div className="w-full max-w-7xl">
                <div className="sm:flex">
                    <div className="mt-96 sm:mt-0">
                        <div className="sm:w-1/2 sm:mt-20 sm:ml-44 ml-4 mr-4 sm:mr-4 sm:order-lasr">
                            <Image src={design} alt="" className="pt-24 sm:pt-32"/>
                        </div>
                    </div>
                    <div className="sm:w-1/2 sm:mt-28 mt-16 sm:order-first">
                        <div>
                            Effortless Validation for
                        </div>
                        <div className="font-bold sm:mt-3 sm:text-4xl">
                            Design Professionals
                        </div>
                        <div className="sm:mt-6">
                            The Myspace page defines the individual, his or her characteristics, traits, personal
                            choices
                            and the overall personality of the person.
                        </div>
                        <div className="font-bold font-sm sm:mt-6">
                            Accessory makers
                        </div>
                        <div className="sm:mt-4">
                            While most people enjoy casino gambling, sports betting, lottery and bingo playing for the
                            fun
                        </div>
                        <div className="sm:mt-6 font-bold">
                            Alterationists
                        </div>
                        <div className="sm:mt-4">
                            If you are looking for a new way to promote your business that won’t cost you more money,
                        </div>
                        <div className="font-bold sm:mt-6">
                            Custom Design designers
                        </div>
                        <div className="sm:mt-4">
                            If you are looking for a new way to promote your business that won’t cost you more money,
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Design;