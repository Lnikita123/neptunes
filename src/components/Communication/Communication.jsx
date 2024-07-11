import { useState, useEffect } from 'react';

const iconData = [
    { id: 1, src: 'i1.webp', text: 'AI inside for your help', Description: "Ai inside for your help Ai inside for your help Ai inside for your help", handImage: 'ai1.webp' },
    { id: 2, src: 'i2.webp', text: 'Explore inside for help', Description: "Explore inside for your help Ai inside for your help Ai inside for your help", handImage: 'Explore.png' },
    { id: 3, src: 'i3.webp', text: 'Sensor inside for help', Description: "Sensor inside for your help Ai inside for your help Ai inside for your help", handImage: 'sensors.png' },
    { id: 4, src: 'i4.webp', text: 'Danger inside for help', Description: "Danger inside for your help Ai inside for your help Ai inside for your help", handImage: 'Safety.png' },
    { id: 5, src: 'i5.webp', text: 'Camera inside for help', Description: "Camera inside for your help Ai inside for your help Ai inside for your help", handImage: 'camera.png' },
    { id: 6, src: 'i6.webp', text: 'Communication inside help', Description: "Communication inside for your help Ai inside for your help Ai inside for your help", handImage: 'Communication.png' }
];

const Communication = () => {
    const [activeIcon, setActiveIcon] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIcon(prev => (prev === 6 ? 1 : prev + 1));
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, []);

    const activeData = iconData.find(icon => icon.id === activeIcon);

    return (
        <div className="bg-[url('/stars.png')] mt-[10rem]">
            <div className="flex flex-col items-center max-w-full py-20 overflow-hidden lg:hidden">
                <div className="relative h-[400px] md:h-[500px] w-full">
                    <div className="absolute flex items-center justify-center w-full h-full duration-500 ease-in-out" style={{ transform: `scale(${activeIcon === 1 ? '1' : '0.5'})`, opacity: activeIcon === 1 ? 1 : 0 }}>
                        <div className="relative">
                            <div className="absolute left-[50%] top-[-7%] md:left-[60%] md:top-[2%] flex flex-col-reverse md:flex-row gap-2 rounded-full items-start md:items-center z-50">
                                <div className="p-1 bg-black border rounded-full h-7 sm:h-10 md:h-12 aspect-square">
                                    <img className="w-full h-full" src={activeData.src} alt={`icon-${activeData.id}`} />
                                </div>
                                <p className="rounded-full text-xs min-[450px]:text-base md:text-lg whitespace-nowrap py-3 px-3 border bg-black">{activeData.text}</p>
                            </div>
                            <div className="absolute left-[10%] bottom-[5%] w-[50%] rounded-2xl text-xs min-[500px]:text-base md:text-lg p-3 border bg-black z-50">{activeData.text}</div>
                            <div className="translate-x-[15%] translate-y-[-10%]">
                                <div className="max-w-[700px] w-full aspect-[39/25] rotate-float-animation">
                                    <img src={activeData.handImage} className="object-contain w-full h-full" alt={`hand-${activeData.id}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {iconData.map((icon) => (
                        <div key={icon.id} className="absolute flex items-center justify-center w-full h-full duration-500 ease-in-out" style={{ transform: `scale(${icon.id === activeIcon ? '1' : '0.5'})`, opacity: icon.id === activeIcon ? 1 : 0 }}>
                            <div className="relative">
                                <div className="absolute left-[50%] top-[-7%] md:left-[60%] md:top-[2%] flex flex-col-reverse md:flex-row gap-2 rounded-full items-start md:items-center z-50">
                                    <div className="p-1 bg-black border rounded-full h-7 sm:h-10 md:h-12 aspect-square">
                                        <img className="w-full h-full" src={icon.src} alt={`icon-${icon.id}`} />
                                    </div>
                                    <p className="rounded-full text-xs min-[450px]:text-base md:text-lg whitespace-nowrap py-3 px-3 border text-white bg-black">{icon.text}</p>
                                </div>
                                <div className="absolute left-[10%] bottom-[5%] w-[50%] rounded-2xl text-xs min-[500px]:text-base md:text-lg p-3 border text-white bg-black z-50">{icon.Description}</div>
                                <div className="translate-x-[15%] translate-y-[-10%]">
                                    <div className="max-w-[700px] w-full aspect-[39/25] rotate-float-animation">
                                        <img src={icon.handImage} className="object-contain w-full h-full" alt={`hand-${icon.id}`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full max-w-[600px] grid grid-cols-3 border-x-2 border-[#1F1F1F] relative">
                    {iconData.map((icon) => (
                        <div key={icon.id} className={`aspect-square w-full border-2 flex items-center justify-center cursor-pointer ${icon.id === activeIcon ? 'border-white' : 'border-[#1F1F1F]'}`} onClick={() => setActiveIcon(icon.id)}>
                            <div className={`aspect-square h-10 ${icon.id === activeIcon ? 'opacity-100' : 'opacity-40'}`}>
                                <img src={icon.src} alt={`icon-${icon.id}`} className="object-contain w-full h-full" />
                            </div>
                        </div>
                    ))}
                    <div className="absolute -top-[2px] right-[50%] translate-x-[50%] z-[-10] w-[100vw] max-w-[800px] h-[4px] bg-[#1F1F1F]"></div>
                    <div className="absolute top-[calc(50%-2px)] right-[50%] translate-x-[50%] z-[-10] w-[100vw] max-w-[800px] h-[4px] bg-[#1F1F1F]"></div>
                    <div className="absolute -bottom-[2px] right-[50%] translate-x-[50%] z-[-10] w-[100vw] max-w-[800px] h-[4px] bg-[#1F1F1F]"></div>
                </div>
            </div>
            <div className="hidden min-[1373px]:block py-20">
                <div className="relative flex justify-center w-full">
                    <div className="max-w-[1366px] w-full flex">
                        <div className="border border-[#1F1F1F] shrink-0 w-[200px] flex flex-col relative">
                            {iconData.slice(0, 3).map((icon) => (
                                <div key={icon.id} className={`w-full border aspect-square flex justify-center items-center cursor-pointer ${icon.id === activeIcon ? 'border-white' : 'border-[#1F1F1F]'}`} onClick={() => setActiveIcon(icon.id)}>
                                    <div className={`aspect-square h-10 ${icon.id === activeIcon ? 'opacity-100' : 'opacity-40'}`}>
                                        <img src={icon.src} alt={`icon-${icon.id}`} className="object-contain w-full h-full" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <div className="relative h-[500px] w-full">
                                {iconData.map((icon) => (
                                    <div key={icon.id} className="absolute flex items-center justify-center w-full h-full duration-500 ease-in-out" style={{ transform: `scale(${icon.id === activeIcon ? '1' : '0.5'})`, opacity: icon.id === activeIcon ? 1 : 0 }}>
                                        <div className="relative">
                                            <div className="absolute left-[50%] top-[-7%] md:left-[60%] md:top-[2%] flex flex-col-reverse md:flex-row gap-2 rounded-full items-start md:items-center z-50">
                                                <div className="p-1 bg-black border rounded-full h-7 sm:h-10 md:h-12 aspect-square">
                                                    <img className="w-full h-full" src={icon.src} alt={`icon-${icon.id}`} />
                                                </div>
                                                <p className="rounded-full text-xs min-[450px]:text-base md:text-lg whitespace-nowrap py-3 px-3 border text-white bg-black">{icon.text}</p>
                                            </div>
                                            <div className="absolute left-[10%] bottom-[-15%] min-[450px]:bottom-[7%] w-[50%] rounded-2xl text-xs min-[450px]:text-base md:text-lg p-3 border text-white bg-black z-50">{icon.Description}</div>
                                            <div className="translate-x-[15%] translate-y-[-10%]">
                                                <div className="max-w-[700px] w-full aspect-[39/25] rotate-float-animation">
                                                    <img src={icon.handImage} className="object-contain w-full h-full" alt={`hand-${icon.id}`} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="border border-[#1F1F1F] shrink-0 w-[200px] flex flex-col relative">
                            {iconData.slice(3).map((icon) => (
                                <div key={icon.id} className={`w-full border aspect-square flex justify-center items-center cursor-pointer ${icon.id === activeIcon ? 'border-white' : 'border-[#1F1F1F]'}`} onClick={() => setActiveIcon(icon.id)}>
                                    <div className={`aspect-square h-10 ${icon.id === activeIcon ? 'opacity-100' : 'opacity-40'}`}>
                                        <img src={icon.src} alt={`icon-${icon.id}`} className="object-contain w-full h-full" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute z-[10] w-full top-0 border border-[#1F1F1F]"></div>
                    <div className="absolute z-[10] w-full bottom-0 border border-[#1F1F1F]"></div>
                </div>
            </div>
        </div>
    );
}

export default Communication;
