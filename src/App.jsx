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
    <div className="bg-black">
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
