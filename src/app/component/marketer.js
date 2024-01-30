import React from 'react';
import Image from "next/image";
import marketer from "../../../public/marketerImage.png";

const Marketer = () => {
    return (
        <div>
            <div className="flex justify-center w-full sm:h-screen h-fit">
                <div className="w-full max-w-7xl">
                    <div className="sm:flex">
                        <div className="mt-0">
                            <div className="sm:w-1/2 sm:mt-20 sm:ml-44 ml-4 mr-4 sm:mr-4 sm:order-lasr">
                                <Image src={marketer} alt="" className="pt-24 sm:pt-32"/>
                            </div>
                        </div>
                        <div className="sm:w-1/2 sm:mt-28 mt-16 sm:order-first ml-2 mr-2 sm:ml-0 sm:mr-0">
                            <div className="mt-6 sm:mt-0">
                                Optimisation for
                            </div>
                            <div className="font-bold sm:mt-3 sm:text-4xl mt-4">
                                Marketers
                            </div>
                            <div className="sm:mt-6 mt-6">
                                Few would argue that, despite the advancements of feminism over the past three decades,
                                women still face a double standard when it comes to their behavior.
                            </div>
                            <div className="font-bold font-sm sm:mt-6 mt-6">
                                Accessory makers
                            </div>
                            <div className="sm:mt-4 mt-4">
                                While most people enjoy casino gambling, sports betting, lottery and bingo playing for
                                the fun
                            </div>
                            <div className="sm:mt-6 font-bold mt-6">
                                Alterationists
                            </div>
                            <div className="sm:mt-4 mt-4">
                                If you are looking for a new way to promote your business that won’t cost you more
                                money,
                            </div>
                            <div className="font-bold sm:mt-6 mt-6">
                                Custom Design designers
                            </div>
                            <div className="sm:mt-4 mt-4">
                                If you are looking for a new way to promote your business that won’t cost you more
                                money,
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marketer;