import Image from "next/image";
import React from 'react';
import { BsArrowRightCircleFill, BsFillPlayCircleFill } from "react-icons/bs";
import brand from "../../images/Mask Group.png";
import brand1 from "../../images/Mask Group-1.png";
import brand2 from "../../images/Mask Group-2.png";
import brand3 from "../../images/Mask Group-3.png";
import HeroImage from "./HeroImage";

const Hero = () => {
    return (
        <div>
            <div className="xl:container mx-auto py-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* HERO DESCRIPTION */}
                    <div className="my-auto">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-sport pb-8 lg:leading-tight">Healthy in side <span className="text-primary">fresh</span> out side</h1>
                        <div className="lg:w-2/3 ">
                            <p className="text-tertiary text-base">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                        </div>
                        <div className="flex items-center space-x-5 sm:space-x-10 my-7">

                            <button className="md:w-52 btn-anim-2 group">
                                <span className="absolute bottom-0 left-0 w-0 h-full transition-all duration-150 ease-in-out bg-white group-hover:w-full rounded-lg"></span>
                                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                    <BsArrowRightCircleFill className="text-lg" />
                                </span>
                                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                    <BsArrowRightCircleFill className="text-lg text-white group-hover:text-secondary" />
                                </span>
                                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-secondary">Get Started</span>
                            </button>

                            <button className="btn-anim group">
                                <span className="absolute bottom-0 left-0 w-0 h-full transition-all duration-150 ease-in-out bg-secondary group-hover:w-full rounded-lg"></span>
                                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                    <BsFillPlayCircleFill className="text-lg" />
                                </span>
                                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                    <BsFillPlayCircleFill className="text-lg text-white group-hover:text-white" />
                                </span>
                                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Learn More</span>
                            </button>
                        </div>
                        <div className="">
                            <h4>Brands: </h4>
                            <div className="flex items-end flex-wrap space-x-4 sm:space-x-8 pt-3">
                                <Image src={brand} height={50} width={60} alt="" />
                                <Image src={brand1} height={50} width={50} alt="" />
                                <Image src={brand2} height={50} width={65} alt="" />
                                <Image src={brand3} height={50} width={80} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* HERO IMAGE */}
                    <div>
                        <HeroImage />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;