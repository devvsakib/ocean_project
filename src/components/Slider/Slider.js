import React, { useState } from 'react'
import Button from '../Common/Button'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
const Slider = () => {
    const [activeSlider, setActiveSlider] = useState(true)
    const [activeSliderNumber, setActiveSliderNumber] = useState(0)
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

    console.log(activeSliderNumber);
    return (
        <div className='my-32'>
            <div className='grid lg:grid-cols-2 items-start gap-10 justify-center'>
                <div className=''>
                    <img className='absolute lg:relative right-0 -z-10' src="/images/fish.png" />
                    <div className='flex items-center justify-center mt-5 gap-6'>
                        {
                            sliderData.map(slider => (
                                <button className='flex items-center justify-center' onClick={() => setActiveSliderNumber(slider.id)}>
                                    <img className={`${activeSlider && activeSliderNumber === slider.id ? "absolute" : "hidden"}`} src='/images/activeSlider.png' />
                                    <img src='/images/sliderBtn.png' />
                                </button>
                            ))
                        }
                    </div>
                </div>
                <div className='grid mt-10'>
                    <div className='order-2 lg:order-1 flex mt-14 lg:-ml-10 justify-center'>
                        <div className='flex items-center gap-5'>
                            <Button content={<FaArrowLeft />} rounded={true} />
                            <Button content={<FaArrowRight />} rounded={true} />
                        </div>
                    </div>
                    <div className={`order-1 flex gap-10 mt-20 lg:-ml-32  overflow-x-hidden rounded-3xl`}>
                        {
                            sliderData.map(slider => (
                                <div key={slider.id} className={`min-w-[100%] bg-[#01152D] sliderShadow p-10 ${activeSliderNumber === sliderData.id ? "-translate-x-[100%]" : "translate-x-[0%]"}`}>
                                    <h2 className='text-4xl font-semibold mb-5'>{slider.title}</h2>
                                    <p>{slider.description}</p>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider