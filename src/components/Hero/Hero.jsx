
const Hero = () => {
    return (
        <div>
            <div className="h-full w-full absolute z-[-800] bg-transparent flex justify-center">
                <div className="relative z-10 w-full">
                    <div className="absolute right-0 h-full w-[1px] bg-slate-800/50 z-[990]"></div>
                </div>
                <div className="relative w-full max-w-[1366px] shrink-0 z-[-700]"></div>
                <div className="relative w-full">
                    <div className="absolute left-0 h-full w-[1px] bg-slate-800/50 z-[990]"></div>
                </div>
            </div>
            <div className="flex justify-center w-full h-full">
                <div className="w-full max-w-[1366px] overflow-hidden px-8 md:px-10">
                    <div className="flex flex-col items-center gap-10 my-10 xl:gap-20 md:my-20">
                        <h1 style={{ zIndex: 10 }} className="font-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] max-w-[900px] xl:max-w-[1200px] text-center">Reimagine Exploring Oceans with Our Tools</h1>
                        <div className="relative h-fit w-fit">
                            <div className="absolute z-20 inset-0  bg-[url('/curve.png')] bg-no-repeat bg-bottom bg-contain"></div>
                            <div className="absolute h-[80vw] max-h-[1200px] aspect-square z-[-20] translate-y-[-25%] left-[50%] translate-x-[-50%] background-teal-blur-glow">
                                <div className="relative w-full h-full">
                                    <div className="absolute bottom-0 w-full h-full"></div>
                                </div>
                            </div>
                            <div className="max-h-[600px] max-w-[1800px] w-full overflow-hidden relative">
                                <div style={{ zIndex: 20 }} className="absolute inset-0 bg-gradient-to-r from-black from-0% via-transparent to-100% to-black"></div><video className="h-full w-full scale-150 -translate-y-[20%]" muted loop autoPlay>
                                    <source src="/ocean.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default Hero
