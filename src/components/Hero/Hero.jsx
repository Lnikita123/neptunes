const Hero = () => {
    return (
        <div>

            <div className="relative py-20 overflow-hidden sm:py-0">
                {/* Vertical Lines with Animated Drops */}
                <div className="absolute z-50 flex justify-center w-full h-full mt-2 bg-transparent">
                    <div className="relative z-10 w-full">
                        <div className="absolute right-0 h-full w-[1px] bg-slate-800/50 z-[990] overflow-hidden">
                            <div className="absolute w-full h-full "></div>
                        </div>
                    </div>
                    <div className="relative w-full max-w-[1366px] shrink-0 z-[-700]"></div>
                    <div className="relative w-full">
                        <div className="absolute left-0 h-full w-[1px] bg-slate-800/50 z-[990] overflow-hidden">
                            <div className="absolute w-full h-full "></div>
                        </div>
                    </div>
                </div>

                {/* Horizontal Lines with Animated Drops */}
                <div className="relative flex justify-center w-full h-full">
                    <div className="w-full max-w-[1366px] overflow-hidden px-8 md:px-10">
                        <div className="relative flex flex-col items-center gap-10 my-10 xl:gap-20 md:my-20">
                            <h1 className="relative font-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] max-w-[900px] xl:max-w-[1200px] text-center z-10">
                                Reimagine Exploring Oceans with Our Tools
                            </h1>
                            <div
                                className="hidden lg:block absolute w-[70rem] h-[40rem] top-[-1rem] left-[1rem]"
                                style={{
                                    borderRadius: "139.4375rem",
                                    background:
                                        "radial-gradient(50% 50% at 50% 50%, #22d3ee 0%, rgba(0, 0, 0, 0) 100%)",
                                    filter: "blur(68.9px)",
                                }}
                            ></div>
                            {/* Adding Vertical Lines beside the text */}
                            <div className="absolute inset-y-0 left-[calc(30%-150px)] w-[1px] bg-slate-800 overflow-hidden z-0 mt-[-5rem]">
                                <div className="absolute top-0 left-0 w-full h-full animate-drop-gradient bg-gradient-to-b from-[#1d4ed8] via-transparent to-[#1d4ed8]"></div>
                            </div>
                            <div className="absolute inset-y-0 right-[calc(30%-150px)] w-[1px] bg-slate-800 overflow-hidden z-0 mt-[-5rem]">
                                <div className="absolute top-0 left-0 w-full h-full animate-drop-gradient bg-gradient-to-b from-[#1d4ed8] via-transparent to-[#1d4ed8]"></div>
                            </div>

                            <div className="relative h-fit w-fit">
                                <div className="absolute z-20 inset-0 bg-[url('/curve.png')] bg-no-repeat bg-bottom bg-contain"></div>
                                <div className="absolute h-[80vw] max-h-[1200px] aspect-square z-[-20] translate-y-[-25%] left-[50%] translate-x-[-50%] background-teal-blur-glow">
                                    <div className="relative w-full h-full">
                                        <div className="absolute bottom-0 w-full h-full"></div>
                                    </div>
                                </div>
                                <div className="max-h-[600px] max-w-[1800px] w-full overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-black from-0% via-transparent to-100% to-black z-20"></div>
                                    <video className="w-full h-full scale-150 -translate-y-1/5" muted loop autoPlay>
                                        <source src="/ocean.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
                @keyframes drop-gradient {
                    0% {
                        transform: translateY(-100%);
                    }
                    100% {
                        transform: translateY(100%);
                    }
                }
                @keyframes drop-gradient-horizontal {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
                .animate-drop-gradient {
                    animation: drop-gradient 3s linear infinite;
                }
                .animate-drop-gradient-horizontal {
                    animation: drop-gradient-horizontal 3s linear infinite;
                }
            `}</style>
            </div>
        </div>
    );
};

export default Hero;
