import Image from "next/image";
import React from 'react';
import Slider from "react-slick";
import { CgQuote } from "react-icons/cg";

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };
    return (
        <div className="container mx-auto py-10">
            <div className="text-center">
                <h2 className="text-2xl font-bold font-sport">Testimonials</h2>
            </div>

            <div>
                <Slider {...settings}>
                    <div className="">
                        <div className="bg-white p-5 lg:p-10 shadow-xl m-10 rounded-lg">
                            <div className="pb-10 flex items-start ">
                                <CgQuote className="text-8xl text-info w-14 h-8 -mt-2" /><p className="text-info text-sm lg:text-base"> Its great to be able to work out from home and be helped by the gymbaran. My day feels fresher when I regularly participate in this fun sport. Good luck to the coaches.</p>
                            </div>
                            <div className="flex items-center space-x-5">
                                <Image src={"https://randomuser.me/api/portraits/men/85.jpg"} height={50} width={50} className="rounded-full" alt="" />
                                <div>
                                    <h4 className="text-sm lg:text-base font-semibold">Reviewer Name</h4>
                                    <h4 className="text-sm text-info">Designation</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-white p-5 lg:p-10 shadow-xl m-10 rounded-lg">
                            <div className="pb-10 flex items-start ">
                                <CgQuote className="text-8xl text-info w-14 h-8 -mt-2" /><p className="text-info text-sm lg:text-base"> Its great to be able to work out from home and be helped by the gymbaran. My day feels fresher when I regularly participate in this fun sport. Good luck to the coaches.</p>
                            </div>
                            <div className="flex items-center space-x-5">
                                <Image src={"https://randomuser.me/api/portraits/men/85.jpg"} height={50} width={50} className="rounded-full" alt="" />
                                <div>
                                    <h4 className="text-sm lg:text-base font-semibold">Reviewer Name</h4>
                                    <h4 className="text-sm text-info">Designation</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-white p-5 lg:p-10 shadow-xl m-10 rounded-lg">
                            <div className="pb-10 flex items-start ">
                                <CgQuote className="text-8xl text-info w-14 h-8 -mt-2" /><p className="text-info text-sm lg:text-base"> Its great to be able to work out from home and be helped by the gymbaran. My day feels fresher when I regularly participate in this fun sport. Good luck to the coaches.</p>
                            </div>
                            <div className="flex items-center space-x-5">
                                <Image src={"https://randomuser.me/api/portraits/men/85.jpg"} height={50} width={50} className="rounded-full" alt="" />
                                <div>
                                    <h4 className="text-sm lg:text-base font-semibold">Reviewer Name</h4>
                                    <h4 className="text-sm text-info">Designation</h4>
                                </div>
                            </div>
                        </div>
                    </div>


                </Slider>
            </div>

        </div>
    )
}

export default Testimonials;