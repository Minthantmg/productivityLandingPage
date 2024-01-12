    'use client'
    import React, {useState} from 'react';
    import Image from 'next/image';

    const images = [
        '/c1.png',
        '/c2.png',
        '/c3.png',
        '/c2.png',
        '/c1.png',
        '/c3.png',
        '/c1.png',
        '/c3.png',
        '/c2.png',
    ];

    const texts = [
        'Increasing Prosperity With Positive Thinking',
        'Motivation Is The First Step To Success',
        'Success Steps For Your Personal Or Business Life',
        'Motivation Is The First Step To Success',
        'Increasing Prosperity With Positive Thinking',
        'Success Steps For Your Personal Or Business Life',
        'Increasing Prosperity With Positive Thinking',
        'Success Steps For Your Personal Or Business Life',
        'Motivation Is The First Step To Success'
    ]

    const itemsPerPage = 3;
    const itemsPerPageForMV = 1;

    const Carousel = () => {
        const [currentIndex, setCurrentIndex] = useState(0);

        const totalItems = images.length;

        const goToSlide = (slideIndex) => {
            setCurrentIndex(slideIndex);
        };

        return (
            <div className="flex justify-center w-full h-screen">
                <div className="w-full max-w-7xl">
                    <div>
                        <div className="sm:text-4xl font-bold mt-32 ml-4 text-2xl">Marketing Strategies</div>
                        <div className="mt-4 ml-4 sm:text-base text-sm">
                            Join 40,000+ other marketers and get proven strategies on email marketing
                        </div>
                        <div className="carousel-container">
                            <div className="carousel flex">
                                {images.slice(currentIndex, currentIndex + itemsPerPage).map((image, index) => (
                                    <div key={index} className="carousel-slide">
                                        <div className="mt-16 sm:ml-8 w-96 ml-4 hidden sm:block">
                                            <div>
                                                <Image src={image} alt="" width={500} height={200}/>
                                            </div>
                                            <div className="mt-4">
                                                By <span className="font-bold">Abdullah</span> | 03 March 2019
                                            </div>
                                            <div className="mt-4 text-2xl font-bold mr-8 hover:text-orange-400 cursor-pointer">
                                                {texts[currentIndex + index]}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="sm:flex carousel-dots mt-16 justify-center hidden">
                                {Array.from({length: Math.ceil(totalItems / itemsPerPage)}).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index * itemsPerPage)}
                                        className={`carousel-dot px-2 py-2 ${index * itemsPerPage === currentIndex ? 'bg-orange-500' : 'bg-gray-300'} h-2 w-2 rounded-full mx-1`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="carousel-container">
                            <div className="carousel flex">
                                {images.slice(currentIndex, currentIndex + itemsPerPageForMV).map((image, index) => (
                                    <div key={index} className="carousel-slide">
                                        <div className="mt-16 sm:ml-8 w-80 ml-8 mr-8  sm:hidden">
                                            <div>
                                                <Image src={image} alt="" width={500} height={200}/>
                                            </div>
                                            <div className="mt-4">
                                                By <span className="font-bold">Abdullah</span> | 03 March 2019
                                            </div>
                                            <div className="mt-4 text-2xl font-bold mr-8 hover:text-orange-400 cursor-pointer">
                                                {texts[currentIndex + index]}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="sm:hidden flex carousel-dots mt-16 justify-center sm:pb-16">
                                {Array.from({length: Math.ceil(totalItems / itemsPerPageForMV)}).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index * itemsPerPageForMV)}
                                        className={`carousel-dot px-2 py-2 ${index * itemsPerPageForMV === currentIndex ? 'bg-orange-500' : 'bg-gray-300'} h-2 w-2 rounded-full mx-1`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default Carousel;
