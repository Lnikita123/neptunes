
const Footer = () => {
    return (
        <div className="flex justify-center w-full h-full">
            <div className="w-full max-w-[1366px] overflow-hidden px-8 md:px-10">
                <div className="mb-5">
                    <div className="hidden md:block">
                        <div className="flex flex-col items-center py-20 gap-7 backdrop-blur-lg">
                            <div className="flex flex-col gap-4 font-semibold text-center text-white lg:gap-8">
                                <h1 className="text-7xl lg:text-8xl tracking-wide leading-[100px] relative">
                                    Early Access
                                    <div className="h-20 aspect-square absolute -top-2 -left-[27%]">
                                        <img src="/greyline.png" className="w-full h-full" />
                                    </div>
                                    <div className="h-20 aspect-square absolute -right-[26%] -bottom-10">
                                        <img src="/greyline.png" className="w-full h-full" />
                                    </div>
                                </h1>
                                <p className="text-white/40">
                                    Welcome to the <span className="text-white">future of Ocean Exploration</span>. Get Early Access.
                                </p>
                            </div>
                            <div className="flex justify-center w-full px-10">
                                <button className="relative flex border border-white/30 bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col gap-10 h-min justify-center overflow-visible rounded-full w-full max-w-[800px] py-1">
                                    <div className="z-10 flex items-center w-full px-4 py-2 space-x-2 text-black rounded-full dark:bg-black dark:text-white">
                                        <div className="flex w-full gap-2 text-sm font-semibold">
                                            <div className="h-10 border rounded-full aspect-square shrink-0 border-white/40">
                                                <img src="/pinkIcon.webp" className="w-full h-full" alt="Icon" />
                                            </div>
                                            <input
                                                className="rounded-full w-[40%] bg-transparent text-[#868686] border border-white/40 px-4 py-2 placeholder:text-[#868686]"
                                                placeholder="Name"
                                            />
                                            <input
                                                className="rounded-full w-[40%] bg-transparent text-[#868686] border border-white/40 px-4 py-2 placeholder:text-[#868686]"
                                                placeholder="Email"
                                            />
                                            <div className="bg-[#262626] text-[#868686] px-4 rounded-full whitespace-nowrap flex justify-center items-center">
                                                Join Now
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 overflow-hidden rounded-full">
                                        <div className="absolute inset-0 border-2 border-transparent rounded-full animate-border-gradient"></div>
                                    </div>
                                    <div className="absolute inset-[2px] rounded-full backdrop-blur-2xl bg-[#111111]/90"></div>
                                    <style>{`
        .animate-border-gradient {
          background: linear-gradient(90deg, #000, #fff, #000, #ffff);
          background-size: 400% 400%;
          animation: gradientAnimation 8s linear infinite;
        }

        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
                                </button>
                            </div>
                            <p
                                className="text-[#FFFFFF66] text-xs text-center">This site is protected by reCAPTCHA and the
                                <span className="font-semibold underline underline-offset-2">Google Privacy Policy</span>
                                and
                                <span className="font-semibold underline underline-offset-2">Terms of Service</span>
                                apply.</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="h-[1px] bg-white/10"></div>
                            <div className="flex justify-between py-4 text-xs text-gray-400">
                                <div className="flex items-center gap-2">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                                    <p>@Neptunesview</p>
                                </div>
                                <div>©2023 Neptunesview Inc. All Rights Reserved.</div>
                            </div>
                            <div className="h-[1px] bg-white/10 bg-gradient-to-r from-white/5 from-40% via-white via-50% to-white/5 to-60%"></div>
                        </div>
                    </div>
                    <div className="block px-5 py-2 mt-[-3rem] md:hidden">
                        <div className="flex flex-col gap-6 py-0">
                            <div className="flex flex-col gap-5 text-center">
                                <h1 className="text-[42px] lg:text-8xl font-semibold">Early Access</h1>
                                <p className="text-white/80 text-[15px] font-semibold">
                                    Welcome to the <span className="font-semibold text-white">future of Ocean Exploration</span>. Get Early Access.
                                </p>
                            </div>
                            <div className="flex flex-col gap-5 w-full max-w-[600px] self-center">
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-2">
                                        <input className="px-4 py-2 text-gray-500 bg-transparent border rounded-lg border-white/40 placeholder:text-gray-500" placeholder="Name" />
                                        <input className="px-4 py-2 text-gray-500 bg-transparent border rounded-lg border-white/40 placeholder:text-gray-500" placeholder="Email" />
                                    </div>
                                    <div className="flex items-center justify-center px-4 py-3 font-semibold bg-gray-800 rounded-lg text-white/80 whitespace-nowrap">Join Now</div>
                                </div>
                                <p className="text-xs text-center text-white/66">
                                    This site is protected by reCAPTCHA and the
                                    <span className="font-semibold underline underline-offset-2">Google Privacy Policy</span>
                                    and
                                    <span className="font-semibold underline underline-offset-2">Terms of Service</span> apply.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 py-10 text-white">
                            <div className="grid self-center grid-cols-4 min-w-52 sm:w-full sm:max-w-80 justify-items-center">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path></svg>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"></path></svg>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"></path></svg>
                            </div>
                            <div className="flex flex-col uppercase text-[8px] font-semibold tracking-wide gap-5">
                                <div className="grid self-center grid-cols-4 gap-2 min-w-fit sm:w-full sm:max-w-80 justify-items-center">
                                    <p>Tokonomics</p>
                                    <p>Roadmap</p>
                                    <p>Rewards</p>
                                    <p>About GRWB</p>
                                </div>
                                <div className="flex flex-col text-center">
                                    <p>©2024 Neptunesview Inc. All Rights Reserved.</p>
                                    <p>Privacy Policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer
