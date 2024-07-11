import React, { useState, useEffect, useRef } from 'react';

const Banner = () => {
    const [activeDot, setActiveDot] = useState(1);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [openDetails, setOpenDetails] = useState(null);
    const detailsRefs = useRef([]);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        let interval;

        if (openDetails === null) {
            interval = setInterval(() => {
                setActiveDot((prev) => (prev === 4 ? 1 : prev + 1));
            }, 4000); // Automatically change the text every 4 seconds
        }

        return () => clearInterval(interval);
    }, [openDetails]);

    const handleDotClick = (dotIndex) => {
        setActiveDot(dotIndex);
        setOpenDetails((prev) => (prev === dotIndex ? null : dotIndex));
    };

    const calculateTransform = (elementX, elementY) => {
        const deltaX = (mousePosition.x - elementX) / 50;
        const deltaY = (mousePosition.y - elementY) / 50;
        return `translate(${deltaX}px, ${deltaY}px)`;
    };

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className="flex justify-center h-full w-full relative bg-black lg:mt-[10rem]">
                <div className="bg-[url('/gridbg1.png')] bg-cover absolute inset-0 "></div>
                <div className="relative z-10 flex flex-col items-center gap-10 p-8 md:p-10">
                    <h2 className="text-3xl font-semibold text-center text-white z-[100] font1">
                        Reimagine exploring oceans with our tools
                    </h2>
                    <div className="relative w-full max-w-[700px] aspect-[10/6] lg:mt-[10rem] mt-[8rem] mb-[10rem] lg:mb-[10rem]">
                        <img
                            src="/balpen.png"
                            alt="Balpen"
                            className="object-contain w-full h-auto"
                            style={{
                                transform: calculateTransform(window.innerWidth / 2, window.innerHeight / 2),
                                transition: 'transform 0.1s ease-out',
                            }}
                        />

                        <div
                            className="absolute left-[20%] top-[55%] cursor-pointer"
                            style={{ transform: calculateTransform(mousePosition.x, mousePosition.y) }}
                        >
                            <div className="relative">
                                <div
                                    className={`absolute w-5 h-5 lg:w-8 lg:h-8 bg-white rounded-full z-[900] ${activeDot === 1 ? 'ring-4 ring-white' : ''}`}
                                    style={{ outline: '2px solid white', outlineOffset: '1px' }} onClick={() => handleDotClick(1)}
                                ></div>
                                {activeDot === 1 && (
                                    <div className="absolute top-[60%] left-[50%] transform translate-x-[-50%] mt-4 border-2 border-blue-500 p-2 rounded-md whitespace-nowrap glass">
                                        <img src="/1.png" alt="Detail" className="object-contain w-32 h-32" />
                                        <p className='p-2 bg-white border-2 rounded-full border-grey-400 '>AI inside for your help</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div
                            className="absolute left-[36%] top-[25%] cursor-pointer"
                            style={{ transform: calculateTransform(mousePosition.x, mousePosition.y) }}
                        >
                            <div className="relative">
                                <div
                                    className={`absolute w-5 h-5 lg:w-8 lg:h-8 bg-white rounded-full z-[900] ${activeDot === 2 ? 'ring-4 ring-white' : ''}`}
                                    style={{ outline: '2px solid white', outlineOffset: '1px' }} onClick={() => handleDotClick(2)}
                                ></div>
                                {activeDot === 2 && (
                                    <div className="absolute bottom-[150%] left-[50%] transform translate-x-[-50%] mb-4 border-2 border-blue-500 p-2 rounded-md whitespace-nowrap glass">
                                        <img src="/2.png" alt="Detail" className="object-contain w-32 h-32" />
                                        <p className='p-2 bg-white border-2 rounded-full border-grey-400 '>AI inside for your help</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div
                            className="absolute left-[56%] top-[50%] cursor-pointer"
                            style={{ transform: calculateTransform(mousePosition.x, mousePosition.y) }}
                        >
                            <div className="relative">
                                <div
                                    className={`absolute w-5 h-5 lg:w-8 lg:h-8 bg-white rounded-full z-[900] ${activeDot === 3 ? 'ring-4 ring-white' : ''}`}
                                    style={{ outline: '2px solid white', outlineOffset: '1px' }} onClick={() => handleDotClick(3)}
                                ></div>
                                {activeDot === 3 && (
                                    <div className="absolute bottom-[150%] left-[50%] transform translate-x-[-50%] mb-4 border-2 border-blue-500 p-2 rounded-md whitespace-nowrap glass">
                                        <img src="/3.png" alt="Detail" className="object-contain w-32 h-32" />
                                        <p className='p-2 bg-white border-2 rounded-full border-grey-400 '>AI inside for your help</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div
                            className="absolute left-[70%] top-[80%] cursor-pointer"
                            style={{ transform: calculateTransform(mousePosition.x, mousePosition.y) }}
                        >
                            <div className="relative">
                                <div
                                    className={`absolute w-5 h-5 lg:w-8 lg:h-8 bg-white rounded-full z-[900] ${activeDot === 4 ? 'ring-4 ring-white' : ''}`}
                                    style={{ outline: '2px solid white', outlineOffset: '1px' }} onClick={() => handleDotClick(4)}
                                ></div>
                                {activeDot === 4 && (
                                    <div className="absolute top-[-150%] left-[50%] transform translate-x-[-50%] mt-4 border-2 border-blue-500 p-2 rounded-md whitespace-nowrap glass">
                                        <img src="/4.png" alt="Detail" className="object-contain w-32 h-32" />
                                        <p className='p-2 bg-white border-2 rounded-full border-grey-400 '>AI inside for your help</p>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <p className="text-sm text-center text-white md:text-base lg:max-w-[1000px] max-w-[300px] lg:mt-0 mt-20">To lead the future of underwater exploration by providing cutting-edge technology that empowers researchers, scientists, and enthusiasts to unlock the mysteries of the deep sea. We strive to make oceanic discovery more
                accessible, efficient, and insightful, driving forward our understanding and stewardship of the world&#x27;s oceans.</p>
        </div>
    );
};

export default Banner;
