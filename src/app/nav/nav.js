'use client'
import React, {useState} from 'react';
import Image from "next/image";
import logo from '../../../public/Logo.png'
import hamburger from '../../../public/hamburger.svg'
import closeIcon from '../../../public/close.svg'

const Nav = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <div className="flex justify-center w-full">
            <div className="w-full max-w-7xl fixed">
                <div className="flex justify-between bg-white">
                    <div className="sm:mt-8 sm:ml-4 mt-4 ml-2 mb-4">
                        <a href="#hero">
                        <Image src={logo} alt=""/>
                        </a>
                    </div>
                    <div className="sm:flex sm:mt-4 sm:ml-4 hidden">
                        <div className="sm:mr-4 sm:mt-4 cursor-pointer hover:text-orange-300">
                            <a href="#tool">
                                Product
                            </a>
                        </div>
                        <div className="sm:mr-4 sm:mt-4 cursor-pointer hover:text-orange-300">
                            <a href="#design">
                                Customers
                            </a>
                        </div>
                        <div className="sm:mr-4 sm:mt-4 cursor-pointer hover:text-orange-300">
                            <a href="#product">
                                Pricing
                            </a>
                        </div>
                        <div className="sm:mr-4 sm:mt-4 cursor-pointer hover:text-orange-300">
                            <a href="#marketer">
                                Resource
                            </a>
                        </div>
                        <div className="sm:mr-2 sm:mt-3">
                            <button className="border border-indigo-300 px-2 py-1 rounded-sm hover:border-orange-300 hover:text-orange-400">
                                Sign in
                            </button>
                        </div>
                        <div className="sm:mr-4 sm:mt-3">
                            <button className="bg-orange-400 px-2 py-1 text-white rounded-sm">
                                Sign Up
                            </button>
                        </div>
                    </div>
                    <div className="mr-6 mt-5 sm:hidden">
                        <Image src={isMobileMenuOpen ? closeIcon : hamburger} alt="" onClick={toggleMobileMenu}/>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="bg-white p-4">
                        <div className="flex flex-col items-center">
                            <a href="#tool" className="mb-4" onClick={closeMobileMenu}>Product</a>
                            <a href="#design" className="mb-4" onClick={closeMobileMenu}>Customers</a>
                            <a href="#product" className="mb-4" onClick={closeMobileMenu}>Pricing</a>
                            <a href="#marketer" className="mb-4" onClick={closeMobileMenu}>Resource</a>
                            <button className="border border-indigo-300 px-2 py-1 rounded-sm hover:border-orange-300 mb-4">
                                Sign In
                            </button>
                            <button className="bg-orange-400 px-2 py-1 text-white rounded-sm">
                                Sign Up
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Nav;