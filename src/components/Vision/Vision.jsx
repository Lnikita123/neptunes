
const Vision = () => {
    return (
        <>
            <div className="relative hidden py-20 space-y-24 overflow-hidden lg:block">
                <div className="bg-[url('/seaimage.png')] h-full w-full bg-cover bg-center absolute inset-0 "></div>
                <div className="flex flex-col gap-10 lg:gap-20 relative z-10 mt-[8rem] ">
                    <div className='flex flex-row items-center justify-center gap-10 py-20'>
                        <div className="flex flex-col aspect-[183/143] w-full scale-[1.46] lg:translate-x-0 lg:scale-100 mt-40 min-w-80 max-w-[400px] lg:min-w-[500px] lg:w-[40%] lg:max-w-[600px] lg:mt-0 min-[644px]:translate-x-[23%]">
                            <div className="bg-white/[0.02] h-full w-full rounded-lg border border-white/10 relative">
                                <div className="absolute aspect-square w-[80%]  -top-[10%] left-[50%] translate-x-[-50%] rounded-sm overflow-hidden">
                                    <img src="11.png" alt="Visualization" className="object-contain w-full h-full" />
                                </div>
                            </div>
                            <div className="h-[1px] bg-white/0 bg-gradient-to-r from-white/5 from-30% via-white via-50% to-white/5 to-70% scale-x-[0.96] translate-y-[-1px]"></div>
                        </div>
                        <div className='flex flex-col  gap-2 max-w-[700px] text-white'>
                            <p className='text-[#009CFF] text-xl uppercase font-semibold  font2'>OUR VISION</p>
                            <h2 className="text-6xl xl:text-[5.2rem] leading-[1] font-semibold max-w-[650px]">Charting the Future of Ocean Exploration</h2>

                            <p>To lead the future of underwater exploration by providing cutting-edge technology that empowers researchers, scientists, and enthusiasts to unlock the mysteries of the deep sea. We strive to make oceanic discovery more accessible, efficient, and insightful, driving forward our understanding and stewardship of the world's oceans.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10 lg:gap-20 relative z-10 pt-[8rem]">
                    <div className='flex flex-row-reverse items-center justify-center gap-10 py-20'>
                        <div className="flex flex-col aspect-[183/143] w-full scale-[1.46] lg:translate-x-0 lg:scale-100 mt-40 min-w-80 max-w-[400px] lg:min-w-[500px] lg:w-[40%] lg:max-w-[600px] lg:mt-0 min-[644px]:translate-x-[23%]">
                            <div className="bg-white/[0.02] h-full w-full rounded-lg border border-white/10 relative">
                                <div className="absolute aspect-square w-[80%] -top-[10%] left-[50%] translate-x-[-50%] rounded-sm overflow-hidden">
                                    <img src="21.png" alt="Visualization" className="object-contain w-full h-full" />
                                </div>
                            </div>
                            <div className="h-[1px] bg-white/0 bg-gradient-to-r from-white/5 from-30% via-white via-50% to-white/5 to-70% scale-x-[0.96] translate-y-[-1px]"></div>
                        </div>
                        <div className='flex flex-col  gap-2 max-w-[700px] text-white'>
                            <p className='text-[#009CFF] text-xl uppercase font-semibold  font2'>OUR VISION</p>
                            <h2 className="text-6xl xl:text-[5.2rem] leading-[1] font-semibold max-w-[650px]">Charting the Future of Ocean Exploration</h2>

                            <p>To lead the future of underwater exploration by providing cutting-edge technology that empowers researchers, scientists, and enthusiasts to unlock the mysteries of the deep sea. We strive to make oceanic discovery more accessible, efficient, and insightful, driving forward our understanding and stewardship of the world's oceans.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10 lg:gap-20 relative z-10 pt-[8rem]">
                    <div className='flex flex-row items-center justify-center gap-10 py-20'>
                        <div className="flex flex-col aspect-[183/143] w-full scale-[1.46] lg:translate-x-0 lg:scale-100 mt-40 min-w-80 max-w-[400px] lg:min-w-[500px] lg:w-[40%] lg:max-w-[600px] lg:mt-0 min-[644px]:translate-x-[23%]">
                            <div className="bg-white/[0.02] h-full w-full rounded-lg border border-white/10 relative">
                                <div className="absolute aspect-square w-[80%] -top-[10%] left-[50%] translate-x-[-50%] rounded-sm overflow-hidden">

                                    {/* <img src="01.mp4" alt="Visualization" className="h-full w-full translate-y-[-10%] scale-[2] object-contain" /> */}
                                    <video className="w-full h-full pointer-events-none translate-y-[-10%] scale-[2] object-contain" muted loop autoPlay playsInline>
                                        <source src="/01.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                            <div className="h-[1px] bg-white/0 bg-gradient-to-r from-white/5 from-30% via-white via-50% to-white/5 to-70% scale-x-[0.96] translate-y-[-1px]"></div>
                        </div>
                        <div className='flex flex-col gap-2 max-w-[700px] text-white'>
                            <p className='text-[#009CFF] text-xl uppercase font-semibold font2'>OUR VISION</p>
                            <h2 className="text-6xl xl:text-[5.2rem] leading-[1] font-semibold max-w-[650px]">Charting the Future of Ocean Exploration</h2>
                            <p>To lead the future of underwater exploration by providing cutting-edge technology that empowers researchers, scientists, and enthusiasts to unlock the mysteries of the deep sea. We strive to make oceanic discovery more accessible, efficient, and insightful, driving forward our understanding and stewardship of the world's oceans.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden lg:hidden">
                <div className="bg-[url('/seaimage.png')] h-full w-full bg-cover bg-center absolute inset-0  bg-black"></div>
                <div className="flex flex-col gap-10 lg:gap-20 relative z-10 mt-[4rem] mx-2">
                    <div className='flex flex-col items-center justify-center gap-10 py-20 lg:flex-row'>
                        <div className='flex flex-col gap-2 mx-4 text-white lg:hidden'>
                            <p className='text-[#009CFF] text-xl uppercase font-semibold font2'>OUR VISION</p>
                            <h2 className="mb-6 text-3xl font-semibold lg:mb-0 lg:text-4xl ">Charting the Future of Ocean Exploration</h2>
                        </div>
                        <div className="flex flex-col aspect-[183/143] w-full scale-[1.46] lg:translate-x-0 lg:scale-100 mt-10 lg:mt-40 min-w-80 max-w-[400px] lg:min-w-[500px] lg:w-[40%] lg:max-w-[600px]">
                            <div className="bg-white/[0.02] h-full w-full rounded-lg border border-white/10 relative">
                                <div className="absolute aspect-square w-[80%] -top-[10%] left-[50%] translate-x-[-50%] rounded-sm overflow-hidden">
                                    <img src="11.png" alt="Visualization" className="object-contain w-full h-full" />
                                </div>
                            </div>
                            <div className="h-[1px] bg-white/0 bg-gradient-to-r from-white/5 from-30% via-white via-50% to-white/5 to-70% scale-x-[0.96] translate-y-[-1px]"></div>
                        </div>
                        <div className='flex flex-col gap-2 text-white'>
                            <p className='hidden lg:block text-[#009CFF] text-xl uppercase font-semibold font2'>OUR VISION</p>
                            <h2 className="hidden lg:block text-6xl xl:text-[5.2rem] leading-[1] font-semibold max-w-[650px]">Charting the Future of Ocean Exploration</h2>
                            <p>To lead the future of underwater exploration by providing cutting-edge technology that empowers researchers, scientists, and enthusiasts to unlock the mysteries of the deep sea. We strive to make oceanic discovery more accessible, efficient, and insightful, driving forward our understanding and stewardship of the world's oceans.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-10 lg:gap-20 relative z-10 mt-[-3rem] mx-2">
                    <div className='flex flex-col items-center justify-center gap-10 py-20 lg:flex-row-reverse'>
                        <div className='flex flex-col gap-2 mx-3 text-white lg:hidden'>
                            <p className='text-[#009CFF] text-xl uppercase font-semibold font2'>OUR VISION</p>
                            <h2 className="mb-6 text-3xl font-semibold lg:mb-0 lg:text-4xl ">Charting the Future of Ocean Exploration</h2>
                        </div>
                        <div className="flex flex-col aspect-[183/143] w-full scale-[1.46] lg:translate-x-0 lg:scale-100 mt-10 lg:mt-40 min-w-80 max-w-[400px] lg:min-w-[500px] lg:w-[40%] lg:max-w-[600px]">
                            <div className="bg-white/[0.02] h-full w-full rounded-lg border border-white/10 relative">
                                <div className="absolute aspect-square w-[80%] -top-[10%] left-[50%] translate-x-[-50%] rounded-sm overflow-hidden">
                                    <img src="21.png" alt="Visualization" className="object-contain w-full h-full" />
                                </div>
                            </div>
                            <div className="h-[1px] bg-white/0 bg-gradient-to-r from-white/5 from-30% via-white via-50% to-white/5 to-70% scale-x-[0.96] translate-y-[-1px]"></div>
                        </div>
                        <div className='flex flex-col gap-2 text-white'>
                            <p className='hidden lg:block text-[#009CFF] text-xl uppercase font-semibold font2'>OUR VISION</p>
                            <h2 className="hidden lg:block text-6xl xl:text-[5.2rem] leading-[1] font-semibold max-w-[650px]">Charting the Future of Ocean Exploration</h2>
                            <p>To lead the future of underwater exploration by providing cutting-edge technology that empowers researchers, scientists, and enthusiasts to unlock the mysteries of the deep sea. We strive to make oceanic discovery more accessible, efficient, and insightful, driving forward our understanding and stewardship of the world's oceans.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-10 lg:gap-20 relative z-10 pt-[-4rem]">
                    <div className='flex flex-col items-center justify-center gap-10 py-20 lg:flex-row'>
                        <div className='flex flex-col gap-2 mx-6 text-white lg:hidden'>
                            <p className='text-[#009CFF] text-xl uppercase font-semibold font2'>OUR VISION</p>
                            <h2 className="mb-6 text-3xl font-semibold lg:mb-0 lg:text-4xl max-w-[500px]">Charting the Future of Ocean Exploration</h2>
                        </div>
                        <div className="flex flex-col aspect-[183/143] w-full scale-[1.46] lg:translate-x-0 lg:scale-100 mt-10 lg:mt-40 min-w-80 max-w-[400px] lg:min-w-[500px] lg:w-[40%] lg:max-w-[600px]">
                            <div className="bg-white/[0.02] h-full w-full rounded-lg border border-white/10 relative">
                                <div className="absolute aspect-square w-[80%] -top-[10%] left-[50%] translate-x-[-50%] rounded-sm overflow-hidden">
                                    {/* <img src="01.mp4" alt="Visualization" className="object-contain w-full h-full" /> */}
                                    <video className="w-full h-full pointer-events-none translate-y-[-10%] scale-[2] object-contain" muted loop autoPlay playsInline>
                                        <source src="/01.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                            <div className="h-[1px] bg-white/0 bg-gradient-to-r from-white/5 from-30% via-white via-50% to-white/5 to-70% scale-x-[0.96] translate-y-[-1px]"></div>
                        </div>
                        <div className='flex flex-col gap-2 text-white'>
                            <p className='hidden lg:block text-[#009CFF] text-xl uppercase font-semibold font2'>OUR VISION</p>
                            <h2 className="hidden lg:block text-6xl xl:text-[5.2rem] leading-[1] font-semibold max-w-[650px]">Charting the Future of Ocean Exploration</h2>
                            <p>To lead the future of underwater exploration by providing cutting-edge technology that empowers researchers, scientists, and enthusiasts to unlock the mysteries of the deep sea. We strive to make oceanic discovery more accessible, efficient, and insightful, driving forward our understanding and stewardship of the world's oceans.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Vision;
