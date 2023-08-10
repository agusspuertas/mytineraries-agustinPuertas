import React, { useState, useEffect } from 'react';
import data from '../data/data.json';

const Carousel = ({ currentSlide, setCurrentSlide }) => {
    const imagesPerSlide = 4;
    const totalSlides = Math.ceil(data.length / imagesPerSlide);

    // Cabio de slider
    const autoChangeSlide = () => {
        setCurrentSlide((currentSlideIndex) => (currentSlideIndex < totalSlides - 1 ? currentSlideIndex + 1 : 0));
    };

    useEffect(() => {
        const interval = setInterval(autoChangeSlide, 4000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    // Img Carrusel
    return (
        <div className="relative">
            <div className="h-fit justify-center align-middle grid sm:grid-cols-2 gap-2 md:gap-4">
                {data.slice(currentSlide * imagesPerSlide, (currentSlide + 1) * imagesPerSlide).map((item, index) => {
                    return (
                        <div key={index} className="relative">
                            <img
                                src={item.scr}
                                alt={`Slide${currentSlide + 1}-Image${item.id}`}
                                className="w-full h-32 md:h-56 lg:h-64 rounded-md object-cover"/>
                    
                            <div className="absolute bottom-0 bg-gray-200 opacity-60 w-full left-0 p-2 text-black  overflow-hidden">
                                <h3 className="text-sm text-border md:text-2xl 0 font-semibold">{item.title}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

function PopularMyTineraries() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = Math.ceil(data.length / 4);

    const prevSlide = () => {
        setCurrentSlide((currentSlideIndex) => (currentSlideIndex > 0 ? currentSlideIndex - 1 : totalSlides - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((currentSlideIndex) => (currentSlideIndex < totalSlides - 1 ? currentSlideIndex + 1 : 0));
    };

    return (
        <section className='flex justify-center flex-col py-5'>
            <div className='mx-5 md:mx-20'>

                <div className='w-full card bg-gray-300 shadow-lg'>

                        <h2 className='mx-3 font-bold font-amatica md:text-4xl'>Popular MyTineraries</h2>
                    <div>
                        <div className=' flex justify-end items-center  m-2'>
                            <button className="btn btn-sm  btn-circle" onClick={prevSlide}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.071 5L7.70708 11.364C7.31656 11.7545 7.31656 12.3877 7.70708 12.7782L14.071 19.1421" stroke="#000000" strokeLinecap="round"></path> </g></svg>
                            </button>
                            <Carousel currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
                            <button className="btn btn-sm  btn-circle" onClick={nextSlide}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.92896 4.85785L16.2929 11.2218C16.6834 11.6123 16.6834 12.2455 16.2929 12.636L9.92896 19" stroke="#000000" strokeLinecap="round"></path> </g></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PopularMyTineraries;

