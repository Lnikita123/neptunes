
const Intro = () => {
    return (
        <div className="relative flex justify-center w-full pt-20">
            <div className="absolute bg-transparent bottom-0 top-0 max-w-[1600px] w-full">
                <div className="relative w-full h-full">
                    <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
                    <div className="absolute hidden w-full h-full xl:block bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
                    <div className="absolute hidden w-full h-full md:block xl:hidden bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
                    <video className="w-full h-full pointer-events-none" muted loop autoPlay playsInline>
                        <source src="/intro.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="flex justify-center w-full h-full">
                <div className="w-full max-w-[1366px] overflow-hidden px-8 md:px-10">
                    <div className="flex justify-center lg:pt-20">
                        <div className="aspect-[16/13] max-w-[1000px] w-full relative">
                            <div className="w-full h-full my-20">
                                <div className="flex items-center justify-center w-full h-full">
                                    <div className="relative h-fit">
                                        <div className="absolute flex justify-center w-fit h-fit lg:h-36 left-[50%] translate-x-[-50%]">
                                            <h2 className="tracking-wide text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#161616] to-[#494949] relative">
                                                Introducing
                                                <p className="text-[#FA9703] absolute font-semibold text-3xl md:text-4xl lg:text-5xl right-[10%]">
                                                    Triton N1
                                                </p>
                                            </h2>
                                        </div>
                                        <div className="w-full text-[#161616] lg:scale-125 relative">
                                            <div className="absolute inset-0 flex items-center justify-center -z-50">
                                                <div className="aspect-video w-[80%] background-blue-blur-glow rotate-45 translate-x-[10%] translate-y-[-10%]"></div>
                                            </div>
                                            <img
                                                src="main.webp"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Intro
