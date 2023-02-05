import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import logo from "../../images/logo.png";
import { FaBars } from "react-icons/fa";

const Navigation = () => {

    // State for opening mobile menu
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Navigation */}
            <div className="sticky lg:static top-0 z-50 backdrop-blur-xl shadow lg:shadow-none px-5">
                <div className="xl:container mx-auto">
                    <div className="flex items-center justify-between py-4 lg:py-8">
                        <div>
                            <Image src={logo} height={100} width={120} alt="" />
                        </div>
                        <div className="lg:hidden">
                            <FaBars onClick={() => setMobileMenuOpen(true)} className="text-2xl" />
                        </div>
                        <div className="space-x-8 hidden lg:block">
                            <Link href={"/"}>Home</Link>
                            <Link href={"/"}>Program</Link>
                            <Link href={"/"}>Blog</Link>
                            <Link href={"/"}>About Us</Link>
                            {/* <button className="px-5 py-2 rounded-lg bg-secondary text-white shadow-lg">Log In</button> */}

                            <button className="relative inline-flex items-center justify-start py-2 px-4 overflow-hidden text-white transition-all duration-1000 ease-in-out rounded-lg bg-secondary group hover:bg-white shadow-xl">
                                <span className="absolute bottom-0 left-0 w-0 h-full transition-all duration-150 ease-in-out bg-white group-hover:w-full rounded-lg"></span>
                                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-secondary">Login</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* MOBILE MENU STARTS */}
            <div className={"fixed overflow-hidden bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (mobileMenuOpen
                    ? "transition-opacity opacity-100 duration-300 z-50"
                    : "transition-all delay-300 opacity-0 -z-50")
            }>

                <div className={"w-screen max-w-md right-0 absolute bg-white h-full shadow-xl delay-400 duration-300 ease-in-out transition-all transform  z-50" +
                    (mobileMenuOpen ? " translate-x-0 " : " translate-x-full ")}>

                    <article className="relative w-screen max-w-md flex flex-col space-y-6 overflow-y-auto h-full z-50">
                        <div className="flex h-screen flex-col overflow-y-auto bg-white py-6 shadow-xl z-50">
                            <div className="px-4 sm:px-6 flex items-center justify-between">
                                <div className='text-primary flex items-center space-x-3'>
                                    <Image src={logo} width={50} height={50} className="w-32" alt="Logo" />

                                </div>
                                <button onClick={() => setMobileMenuOpen(false)} className='btn hover:text-white text-sm lowercase border-0 rounded-full btn-sm'>x</button>
                            </div>

                            <div className="relative mt-6 flex flex-col font-bold space-y-4 px-8">
                                <Link href={"/"} onClick={() => setMobileMenuOpen(false)} className="">Home</Link>
                                <Link href={"/"} onClick={() => setMobileMenuOpen(false)}>Program</Link>
                                <Link href={"/"} onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                                <Link href={"/"} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                            </div>
                        </div>
                    </article>
                </div>

                <section className=" w-screen h-full cursor-pointer "
                    onClick={() => {
                        setMobileMenuOpen(false);
                    }}
                ></section>
            </div>
            {/* MOBILE MENU ENDS */}
        </>
    )
}

export default Navigation;