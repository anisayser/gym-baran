import Image from "next/image";
import React from 'react';
import img from "../../../images/image 78.png";
import vactor from "../../../images/Vector 35.png";
import ui from "../../../images/Group 3840.png";
import elips from "../../../images/Ellipse 136.png";
import ui2 from "../../../images/Group 3868.png";
import ui3 from "../../../images/Group 3867.png";

const EventOneImage = () => {
    return (
        <div className="md:w-[450px] relative">
            <div className="mx-auto md:mx-0 md:ml-16 w-8/12 md:w-96">
                <Image src={img} width={400} height={450} className="w-full relative z-40" alt="" />
                <div className="members flex items-center space-x-3 bg-white shadow-lg py-1 px-3 md:py-2 rounded-lg absolute bottom-3 md:bottom-8 left-2 md:left-0 z-40">
                    <Image src={ui2} height={50} width={50} className="w-10 sm:w-14" alt="" />
                    <div>
                        <h4 className="font-bold text-xs md:text-sm">800 cal</h4>
                        <p className="text-xs md:text-sm">Burn Fat</p>
                    </div>
                </div>
                <div className="uiEffects z-0">
                    <Image src={vactor} width={380} height={400} className="w-8/12 md:w-96 absolute bottom-0 left-10" alt="" />
                    <Image src={ui} width={380} height={550} className="w-6/12 md:w-96 absolute bottom-5 right-10 md:-right-6 z-10" alt="" />
                    <Image src={elips} width={380} height={550} className="w-6/12 md:w-96 absolute top-16 right-10 md:-right-6" alt="" />
                    <Image src={ui2} width={50} height={50} className="absolute top-5 left-24 z-40" alt="" />
                    <Image src={ui3} width={50} height={50} className="absolute top-28 md:top-52 right-2 md:-right-16 z-40" alt="" />
                </div>
            </div>
        </div>
    )
}

export default EventOneImage;