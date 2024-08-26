// const Landing = () => {
//     return (  
//         <>
        // <div className="h-[100vh] w-full bg-purple-200">

        // </div>
//         </>
//     );
// }

// export default Landing;

import { useState, useEffect } from 'react';
import Image1 from '../assets/childLand.jpg';
import Image2 from '../assets/oldLand.jpg';
import Image3 from '../assets/disasterLand.jpg';
import BlogNews from './BlogNews';
import AboutUs from './AboutUs';
import OurWorks from './OurWorks';
import Status from '../components/Status';
import Joincompo from '../components/Joincompo'
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    image: Image1,
    title: "Children’s Hope Fund",
    description: "$123,456 raised",
    donations: "1.8K donations",
    progress: "80%", // Progress bar width
  },
  {
    image: Image2,
    title: "Disaster Relief Fund",
    description: "$98,765 raised",
    donations: "2K donations",
    progress: "70%", // Progress bar width
  },
  {
    image: Image3,
    title: "Senior Care Fund",
    description: "$45,000 raised",
    donations: "900 donations",
    progress: "50%", // Progress bar width
  }
];

function Landing() {
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(handleNextClick, 4000); // Change slide every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);


  return (
    <>
        <div className="h-[100vh] w-full top-1/4 bg-purple-200">
        {/* Add padding to avoid content being hidden behind the header */}

        <div className="relative h-[70vh] md:h-[80vh] lg:h-[100vh] w-full flex flex-col lg:flex-row items-center justify-between px-8 bg-cover bg-center" style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
          {/* Left Side: Text Content */}
          <div className="relative z-10 text-white flex flex-col justify-end items-start max-w-lg  h-[90%] text-center bg-400 lg:text-left">
            <div className="heading w-[100%] h-[40vh] bg--600 flex justify-center items-end">
              <h1 className="text-[3vw] font-bold leading-[8vh]">
                Unity transforms challenges into triumphs.
              </h1>
            </div>
            <p className="my-4  text-[1vw] ">
              We are all different, which is great because we are all unique. Without diversity, life would be very boring.
            </p>
            <button className="bg-pink-500 text-black w-[10vw] h-[6vh] rounded-full text-[1vw] font-semibold">
              EXPLORE
            </button>
          </div>

          {/* Right Side: Dynamic Donation Card */}
          <div className="right-section h-[82%] w-[24%] bg--500 flex flex-col justify-end item-end">
            <div className="relative h-[30vh] w-[30vw] flex flex-col justify-center items-start z-10 bg-white p-6 rounded-xl shadow-lg max-w-xs text-black mt-8 lg:mt-0">
              <h2 className="text-xl font-bold mb-4">{slides[currentSlide].title}</h2>
              <p className="text-lg mb-2">{slides[currentSlide].description}</p>
              <p className="text-sm text-gray-600 mb-4">{slides[currentSlide].donations}</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div className="bg-[#0D3E33] h-2 rounded-full" style={{ width: slides[currentSlide].progress }}></div>
              </div>
              <button className="text-pink-500 font-bold">→</button>
            </div>
          </div>
          
          

          {/* Left Arrow */}
          {/* <button onClick={handlePrevClick} className="absolute left-4 lg:left-8 z-20 text-white bg-gray-800 bg-opacity-50 p-3 rounded-full focus:outline-none">
            &#8592;
          </button> */}

          {/* Right Arrow */}
          {/* <button onClick={handleNextClick} className="absolute right-4 lg:right-8 z-20 text-white bg-gray-800 bg-opacity-50 p-3 rounded-full focus:outline-none">
            &#8594;
          </button> */}
        </div>
</div>
<div className="status h-[35vh] w-full bg-[#0D3E33] flex justify-center items-center">
    <Status/>
</div>
<div >
    <OurWorks/>
</div>
{/* <div className="status h-[35vh] w-full bg-[#0D3E33] flex justify-center items-center">
    <Joincompo/>
</div> */}
{/* <div className='h-[115vh] w-full bg-    -200'>
    <BlogNews/>
</div> */}
{/* <div className='h-[160vh] w-full bg-    -200'>
    <AboutUs/>
</div> */}
    </>
  );
}

export default Landing;