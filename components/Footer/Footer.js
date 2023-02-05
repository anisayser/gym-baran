import Image from "next/image";
import Link from "next/link";
import React from 'react';
import logo from "../../images/logo.png";


const Footer = () => {
    return (
        <footer className="bg-[#1C3764] py-20 mt-32">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center md:text-left">
                    <Image src={logo} height={100} width={120} className="pb-5 mx-auto md:mx-0" alt="" />

                    <p className="text-gray-300">
                        We take care of your health with regular and fun exercise
                    </p>
                </div>
                <div className="text-center md:text-left">
                    <h5 className="text-white font-bold uppercase mb-6">Program</h5>
                    <div className="flex flex-col space-y-5">
                        <Link href={"/"} className="text-gray-300 text-sm">
                            Workout
                        </Link>
                        <Link href={"/"} className="text-gray-300 text-sm">
                            Gym
                        </Link>
                        <Link href={"/"} className="text-gray-300 text-sm">
                            Cardio
                        </Link>
                        <Link href={"/"} className="text-gray-300 text-sm">
                            Zomba
                        </Link>
                    </div>
                </div>
                <div className="text-center md:text-left">
                    <h5 className="text-white font-bold uppercase mb-6">Blog</h5>
                    <div className="flex flex-col space-y-5">
                        <Link href={"/"} className="text-gray-300 text-sm">
                            Daily Stretch
                        </Link>
                        <Link href={"/"} className="text-gray-300 text-sm">
                            Daily Workout
                        </Link>
                        
                    </div>
                </div>
                <div className="text-center md:text-left">
                    <h5 className="text-white font-bold uppercase mb-6">About Us</h5>
                    <div className="flex flex-col space-y-5">
                        <Link href={"/"} className="text-gray-300 text-sm">
                            Support
                        </Link>
                        <Link href={"/"} className="text-gray-300 text-sm">
                            contact
                        </Link>
                        <Link href={"/"} className="text-gray-300 text-sm">
                            Address
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
