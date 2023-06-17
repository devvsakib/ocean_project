import React, { useState } from 'react'
import Button from '../Common/Button'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Slider = () => {
    const [activeSlider, setActiveSlider] = useState("");
    const sliderData = [
        {
            id: 0,
            title: "People + Planet",
            description: "As a ‘Network Orchestrator’, we will continue to innovate at a fast pace without reinventing the wheel, by crowdsourcing existing solutions through Partnerships.  We will give people the opportunity to participate towards making a difference, while owning a piece of  Oceans & Us, through an ‘Oceans Initiative’ Crowdfunding campaign."
        },
        {
            id: 1,
            title: "People + Planet 2",
            description: "As a ‘Network Orchestrator’, we will continue to innovate at a fast pace without reinventing the wheel, by crowdsourcing existing solutions through Partnerships.  We will give people the opportunity to participate towards making a difference, while owning a piece of  Oceans & Us, through an ‘Oceans Initiative’ Crowdfunding campaign."
        },
        {
            id: 2,
            title: "People + Planet 3",
            description: "As a ‘Network Orchestrator’, we will continue to innovate at a fast pace without reinventing the wheel, by crowdsourcing existing solutions through Partnerships.  We will give people the opportunity to participate towards making a difference, while owning a piece of  Oceans & Us, through an ‘Oceans Initiative’ Crowdfunding campaign."
        },
        {
            id: 3,
            title: "People + Planet 4",
            description: "As a ‘Network Orchestrator’, we will continue to innovate at a fast pace without reinventing the wheel, by crowdsourcing existing solutions through Partnerships.  We will give people the opportunity to participate towards making a difference, while owning a piece of  Oceans & Us, through an ‘Oceans Initiative’ Crowdfunding campaign."
        },
        {
            id: 4,
            title: "People + Planet 5",
            description: "As a ‘Network Orchestrator’, we will continue to innovate at a fast pace without reinventing the wheel, by crowdsourcing existing solutions through Partnerships.  We will give people the opportunity to participate towards making a difference, while owning a piece of  Oceans & Us, through an ‘Oceans Initiative’ Crowdfunding campaign."
        }

    ]
    const handleSliderChange = (swpr) => {
        setActiveSlider(swpr.activeIndex);
        console.log(swpr);
    };

    const handleNextSlider = () => {
        const nextSlider = activeSlider === sliderData.length - 1 ? 0 : activeSlider + 1;
        setActiveSlider(nextSlider);
    };

    const handlePreviousSlider = () => {
        const previousSlider = activeSlider === 0 ? sliderData.length - 1 : activeSlider - 1;
        setActiveSlider(previousSlider);
    };

    return (
        <div className='my-32'>
            <div className='grid lg:grid-cols-2 items-start gap-10 justify-center'>
                <div>
                    <img className='absolute lg:relative right-0 -z-10' src='/images/fish.png' alt='Fish' />
                    {/* <div className='flex items-center justify-center mt-10 gap-6'>
                        {sliderData.map((slider, index) => (
                            <button
                                key={slider.id}
                                className='flex items-center justify-center'
                                onClick={() => handleSliderChange(index)}
                            >
                                <img
                                    className={`${activeSlider === index ? 'absolute' : 'hidden'}`}
                                    src='/images/activeSlider.png'
                                    alt='Active Slider'
                                />
                                <img src='/images/sliderBtn.png' alt='Slider Button' />
                            </button>
                        ))}
                    </div> */}
                </div>
                <div className='grid mt-10'>
                    <div className='order-2 lg:order-1 flex mt-14 lg:-ml-10 justify-center'>
                        <div className='flex items-center gap-5 sliderUpperBTN'>
                            <div className='flex items-center gap-5 sliderUpperBTN relative'>
                                <button className='swiper-button-next after:hidden p-2 mr-2'>
                                    <FaArrowLeft />
                                </button>
                                <button className='swiper-button-prev after:hidden p-2 ml-2'>
                                    <FaArrowRight />
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className='order-1 flex gap-10 mt-20 lg:-ml-32 rounded-3xl slider overflow-hidden'>

                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev'
                            }}
                            modules={[ Navigation]}
                            className="mySwiper"
                            onSlideChange={(swiper) => handleSliderChange(swiper)}
                        >
                            {sliderData.map((slider) => (
                                <SwiperSlide
                                    key={slider.id}
                                    className={`rounded-3xl select-none slider-inner bg-[#01152D] p-10`}
                                >
                                    <h2 className='text-4xl font-semibold mb-5'>{slider.title}</h2>
                                    <p>{slider.description}</p>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider