import Image from "next/image";
import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import icon1 from "../../images/Group.png";
import icon2 from "../../images/dancer-balance-posture-on-one-leg.png";
import icon3 from "../../images/dancer-motion.png";

const Services = () => {
    return (
        <>
            {/* Service Area */}
            <div className="py-16">
                <div className="container mx-auto bg-gradient-to-r from-[#6462F0] to-[#9190E9] text-white p-10 rounded-2xl shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div>
                            <div className="flex items-center justify-center space-x-5">

                                <div className="bg-white/30 backdrop-blur-md w-20 h-20 rounded-lg flex items-center justify-center ">
                                    <Image src={icon1} height={50} width={50} className="w-9" alt="" />
                                </div>

                                <div className="w-32">
                                    <h5 className="text-base">Get that 11 line <br /> in 30 days</h5>
                                    <button className="flex items-center space-x-5 text-link hover:text-white text-sm pt-1"><span>Learn More</span> <BsArrowRight /></button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-center space-x-5">

                                <div className="bg-white/30 backdrop-blur-md w-20 h-20 rounded-lg flex items-center justify-center ">
                                    <Image src={icon2} height={50} width={50} className="w-9" alt="" />
                                </div>

                                <div className="w-32">
                                    <h5 className="text-base">14 Days <br /> sherd challenge</h5>
                                    <button className="flex items-center space-x-5 text-link hover:text-white text-sm pt-1"><span>Learn More</span> <BsArrowRight /></button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-center space-x-5">

                                <div className="bg-white/30 backdrop-blur-md w-20 h-20 rounded-lg flex items-center justify-center ">
                                    <Image src={icon3} height={50} width={50} className="w-9" alt="" />
                                </div>

                                <div className="w-32">
                                    <h5 className="text-base">Get flat belly <br /> in 30 days</h5>
                                    <button className="flex items-center space-x-5 text-link hover:text-white text-sm pt-1"><span>Learn More</span> <BsArrowRight /></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;