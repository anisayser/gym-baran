import Image from "next/image";
import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import EventOneImage from "./EventOneImage";

const EventOne = () => {
    return (
        <>
            <div className="py-10">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* EVENT ONE IMAGE */}
                        <div>
                            <EventOneImage />
                        </div>

                        {/* EVENT ONE DETAILS */}
                        <div className="my-auto">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-sport md:leading-tight pb-8">Best full body workout to lose fat</h1>
                            <div className="lg:w-2/3">
                                <p className="text-info">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                            </div>
                            <div className="my-7">
                                <button className="w-52 btn-anim-2 group">
                                    <span className="absolute bottom-0 left-0 w-0 h-full transition-all duration-150 ease-in-out bg-white group-hover:w-full rounded-lg"></span>
                                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                        <BsArrowRight className="text-2xl" />
                                    </span>
                                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                        <BsArrowRight className="text-2xl text-white group-hover:text-secondary" />
                                    </span>
                                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-secondary">Get Started</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventOne;