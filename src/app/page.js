import React from 'react';
import Nav from "@/app/component/nav";
import Tool from "@/app/component/tool";
import HeroSection from "@/app/component/heroSection";
import Design from "@/app/component/design";
import Product from "@/app/component/product";
import Marketer from "@/app/component/marketer";
import Need from "@/app/component/need";
import Footer from "@/app/component/footer";
import Carousel from "@/app/component/carousel";

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
                <Carousel />
                <Footer />
            </div>
        </div>
    );
};

export default Page;