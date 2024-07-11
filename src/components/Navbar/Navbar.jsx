import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="relative z-50 pt-16">
            <div className="fixed top-0 left-0 right-0 flex justify-center bg-black border-b-[0.05px] border-gray-800">
                <div className="flex items-center justify-between w-full max-w-[1366px] px-5 py-3 overflow-hidden md:px-10">
                    <a href="/" className="cursor-pointer">
                        <div className="flex gap-2">
                            <img className="h-10 aspect-square" src="Vector.png" alt="Logo" />
                            <div className="flex flex-col font-semibold text-white leading-1">
                                <p>Neptunes</p>
                                <p>view</p>
                            </div>
                        </div>
                    </a>
                    <div className="flex items-center gap-5 md:gap-10">
                        <div className="items-end hidden gap-3 text-xs font-bold sm:text-sm md:text-base lg:flex sm:gap-5">
                            <a href="#" className="cursor-pointer">
                                <p className="relative font3 cursor-pointer bg-clip-text text-transparent bg-gradient-to-br from-[#135FB7] to-[#F94CFF] from-30%">
                                    Pre-sale
                                </p>
                            </a>
                            <a href="#" className="cursor-pointer">
                                <p className="duration-200 cursor-pointer text-white/90 font3 hover:text-white">White Paper</p>
                            </a>
                        </div>
                        <div
                            className="text-white duration-200 cursor-pointer sm:hover:scale-105"
                            onClick={toggleMenu}
                        >
                            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`fixed z-[997] bg-black left-0 top-0 right-0 -bottom-20 duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-center">
                    <div className="flex flex-col gap-40 w-full max-w-[1366px] overflow-hidden">
                        <div className="flex items-center justify-between w-full h-full px-5 py-3 md:px-10">
                            <div className="flex gap-2">
                                <div className="h-10 aspect-square">
                                    <img className="h-10 aspect-square" src="whitelogo.webp"

                                    />
                                </div>
                                <div className="flex flex-col font-semibold text-white leading-1">
                                    <p>Neptunes</p>
                                    <p className="-mt-1">view</p>
                                </div>
                            </div>
                            <div className="flex justify-end gap-5 md:gap-10">
                                <div
                                    className="text-white duration-200 cursor-pointer sm:hover:scale-105"
                                    onClick={toggleMenu}
                                >
                                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 w-full max-w-[700px] self-center px-20">
                            <a href="/">
                                <button
                                    style={{ "--spread": "90deg", "--shimmer-color": "#ffffff", "--radius": "100px", "--speed": "6s", "--cut": "0", "--bg": "rgba(0, 0, 0, 1)" }}
                                    className="group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black transition-transform duration-300 ease-in-out active:translate-y-[1px] shadow-2xl w-full"
                                >
                                    <div className="-z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]">
                                        <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
                                            <div className="animate-spin-around absolute inset-[-100%] w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]"></div>
                                        </div>
                                    </div>
                                    <span className="py-2 text-lg font-medium leading-none tracking-tight text-center text-white whitespace-pre-wrap dark:from-white dark:to-slate-900/10 lg:text-lg">Home</span>
                                    <div className="absolute inset-0 h-full w-full rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f] transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"></div>
                                    <div className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"></div>
                                </button>
                            </a>
                            <a href="/industries">
                                <button
                                    style={{ "--spread": "90deg", "--shimmer-color": "#ffffff", "--radius": "100px", "--speed": "6s", "--cut": "0", "--bg": "rgba(0, 0, 0, 1)" }}
                                    className="group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black transition-transform duration-300 ease-in-out active:translate-y-[1px] shadow-2xl w-full"
                                >
                                    <div className="-z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]">
                                        <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
                                            <div className="animate-spin-around absolute inset-[-100%] w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]"></div>
                                        </div>
                                    </div>
                                    <span className="py-2 text-lg font-medium leading-none tracking-tight text-center text-white whitespace-pre-wrap dark:from-white dark:to-slate-900/10 lg:text-lg">Industries</span>
                                    <div className="absolute inset-0 h-full w-full rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f] transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"></div>
                                    <div className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"></div>
                                </button>
                            </a>
                            <a href="/">
                                <button
                                    style={{ "--spread": "90deg", "--shimmer-color": "#ffffff", "--radius": "100px", "--speed": "6s", "--cut": "0", "--bg": "rgba(0, 0, 0, 1)" }}
                                    className="group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black transition-transform duration-300 ease-in-out active:translate-y-[1px] shadow-2xl w-full"
                                >
                                    <div className="-z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]">
                                        <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
                                            <div className="animate-spin-around absolute inset-[-100%] w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]"></div>
                                        </div>
                                    </div>
                                    <span className="py-2 text-lg font-medium leading-none tracking-tight text-center text-white whitespace-pre-wrap dark:from-white dark:to-slate-900/10 lg:text-lg">White paper</span>
                                    <div className="absolute inset-0 h-full w-full rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f] transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"></div>
                                    <div className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"></div>
                                </button>
                            </a>
                            <a href="/">
                                <button
                                    style={{ "--spread": "90deg", "--shimmer-color": "#ffffff", "--radius": "100px", "--speed": "6s", "--cut": "0", "--bg": "rgba(0, 0, 0, 1)" }}
                                    className="group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black transition-transform duration-300 ease-in-out active:translate-y-[1px] shadow-2xl w-full"
                                >
                                    <div className="-z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]">
                                        <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
                                            <div className="animate-spin-around absolute inset-[-100%] w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]"></div>
                                        </div>
                                    </div>
                                    <span className="py-2 text-lg font-medium leading-none tracking-tight text-center text-white whitespace-pre-wrap dark:from-white dark:to-slate-900/10 lg:text-lg">Contact us</span>
                                    <div className="absolute inset-0 h-full w-full rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f] transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"></div>
                                    <div className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"></div>
                                </button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
