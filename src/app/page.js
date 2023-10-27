import React from 'react';
import Nav from "@/app/nav";
import Tool from "@/app/tool";
import HeroSection from "@/app/heroSection";
import Design from "@/app/design";
import Product from "@/app/product";
import Marketer from "@/app/marketer";
import Need from "@/app/need";

const Page = () => {
    return (
        <div className="flex justify-center w-full">
            <div className="w-full max-w-7xl">
                <Nav/>
                <section id="hero">
                    <HeroSection/>
                </section>
                <section id="tool">
                    <Tool/>
                </section>
                <section id="design">
                    <Design/>
                </section>
                <section id="product">
                    <Product />
                </section>
                <section id="marketer">
                    <Marketer />
                </section>
                <section id="need">
                    <Need />
                </section>
            </div>
        </div>
    );
};

export default Page;