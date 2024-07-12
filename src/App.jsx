import { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Vision from "./components/Vision/Vision";
import Intro from "./components/Intro/Intro";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import Communication from "./components/Communication/Communication";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-black">

      {loading ? (
        <div className="fixed left-0 top-0 right-0 bottom-0 z-[996] opacity-100 block duration-1000 bg-black bg-cover">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 grid place-items-center bg-[url('/seaimage.png')] brightness-200">
              <div className="w-full scale-150 md:scale-125 lg:scale-100 aspect-[4/1]">
                <img src="/Loader.gif" alt="Loader" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <div className="absolute z-50 flex justify-center w-full h-auto mt-8 bg-transparent">
            <div className="relative z-10 w-full">
              <div className="absolute right-0 h-full w-[1px] bg-slate-800/50 z-[990]"></div>
            </div>
            <div className="relative w-full max-w-[1366px] shrink-0 z-[-700]"></div>
            <div className="relative w-full">
              <div className="absolute left-0 h-full w-[1px] bg-slate-800/50 z-[990]"></div>
            </div>
          </div>
          <Hero />
          <Banner />
          <Vision />
          <Intro />
          <Communication />
          <Team />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
