import React from 'react';
import Nav from "@/app/nav/nav";
import Tool from "@/app/tool/tool";
import HeroSection from "@/app/heroSection/heroSection";
import Design from "@/app/design/design";
import Product from "@/app/product/product";
import Marketer from "@/app/marketer/marketer";
import Need from "@/app/need/need";
import Footer from "@/app/footer/footer";
import Carousel from "@/app/carousel/carousel";

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