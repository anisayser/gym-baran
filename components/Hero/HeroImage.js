import Image from "next/image";
import React from 'react';
import hero from "../../images/image 77.png";
import members from "../../images/Group 3865.png";
import vactor from "../../images/Vector 32.png";
import ui from "../../images/Group 3840.png";
import elips from "../../images/Ellipse 136.png";
import ui2 from "../../images/Group 3868.png";
import ui3 from "../../images/Group 3867.png";
import blob from "../../images/blobanimation.svg";

const HeroImage = () => {
    return (
        <div className="w-full md:w-[450px] mx-auto lg:mx-0 lg:ml-auto relative">
            <Image src={vactor} width={480} height={450} className="w-10/12 md:w-full absolute bottom-0 right-8 sm:right-10 md:right-10 z-10" alt="" />

            <div className="trainer bg-white shadow-lg px-5 py-3 rounded-lg absolute bottom-3 sm:bottom-10 right-2 z-40 text-center">
                <Image src={"https://randomuser.me/api/portraits/men/11.jpg"} height={50} width={50} className="w-10 sm:w-14 rounded-full mx-auto" alt="" />
                <div>
                    <h4 className="font-bold text-xs sm:text-sm">Zaqky Simorang</h4>
                    <p className="text-xs sm:text-sm">Trainer</p>
                </div>
            </div>

            <div className="w-8/12 md:w-96 mx-auto md:mx-0 relative">
                <Image src={hero} height={400} width={300} className="w-full ml-auto mr-16 z-30 relative" alt="" />

                <div className="members flex items-center space-x-1 sm:space-x-3 bg-white shadow-lg px-2 py-1 md:px-5 md:py-2 rounded-lg absolute top-5 md:top-20 -left-10 md:-left-28 z-40">
                    <Image src={members} height={50} width={50} className="w-8 sm:w-12" alt="" />
                    <div>
                        <h4 className="font-bold text-xs sm:text-sm">150 +</h4>
                        <p className="text-xs sm:text-sm">Members</p>
                    </div>
                </div>


                <div className="uiEffects z-0">
                    <Image src={ui} width={280} height={350} className="h-60 sm:72 md:h-96 w-8/12 absolute bottom-10 md:bottom-20 -left-10 md:-left-12 z-10" alt="" />
                    <Image src={elips} width={380} height={550} className="md:h-96 w-full absolute bottom-10 sm:bottom-20 -left-10 sm:-left-14 z-0" alt="" />
                    <Image src={ui2} width={50} height={50} className="absolute bottom-14 -left-10 z-40" alt="" />
                    <Image src={ui3} width={50} height={50} className="absolute top-16 -right-10 z-40" alt="" />
                </div>

            </div>
        </div>
    )
}

export default HeroImage;