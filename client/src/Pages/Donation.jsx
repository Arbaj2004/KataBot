import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom"; 
import image1 from '../assets/food.jpg'; 
import image2 from '../assets/child.jpeg'; 
import image3 from '../assets/health.jpeg';

const donationItems = [
  { image: image1, title: "Donate Food", description: "Help provide food to those in need." },
  { image: image2, title: "Child Care", description: "Support children with essential care and education." },
  { image: image3, title: "Health Care", description: "Contribute to providing necessary medical care." }
];

const DonationCard = ({ image, title, description }) => {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);
  const yellowSectionRef = useRef(null);
  const navigate = useNavigate(); 

  const handleExpand = () => {
    if (!expanded) {
      gsap.to(yellowSectionRef.current, { height: '100%', duration: 0.1, ease: 'power1.inout' });
      gsap.to(cardRef.current.querySelector('.bg-image'), { opacity: 0, duration: 0.1 });
    } else {
      gsap.to(yellowSectionRef.current, { height: '33%', duration: 0.1, ease: 'power1.inout' });
      gsap.to(cardRef.current.querySelector('.bg-image'), { opacity: 1, duration: 0.1 });
    }
    setExpanded(!expanded);
  };

  const handleDonateClick = () => {
    navigate('/donationform'); 
  };

  return (
    <div ref={cardRef} className="min-w-[320px] max-w-[400px] flex-grow h-[72vh] rounded-3xl overflow-hidden shadow-lg relative m-2 max-sm:h-[60vh]">
      <div
        className="bg-cover bg-center bg-no-repeat h-2/3 transition-opacity duration-500 bg-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div ref={yellowSectionRef} className={`absolute bottom-0 left-0 w-full transition-all duration-500 bg-[#f4ce14] ${expanded ? 'h-full' : 'h-1/3'}`}>
        <div className={`flex flex-col justify-center items-center p-4 h-full ${expanded ? 'text-center' : 'flex justify-between'}`}>
          {!expanded ? (
            <>
              <div className="h-[12vh] w-full bg--500 flex flex-col justify-center items-center " style={{ color: '#0d3e33' }}>
                <h1 className="font-bold text-[2vw]  max-sm:text-[4vh]">{title}</h1>
                <p className="text-[0.9vw] w-[95%] text-center">Contribute to the organisztion to help more people</p>
              </div>
              <button
                className="text-white text-[1vw] max-sm:text-[2vh] font-semibold py-2 px-6 rounded-md"
                style={{ backgroundColor: '#0d3e33' }}
                onClick={handleExpand}
              >
                Read More
              </button>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-lg font-bold" style={{ color: '#0d3e33' }}>
                {title}
              </h2>
              <p className="mt-2">{description}</p>
              <button
                className="mt-4 text-white text-sm font-semibold py-2 px-6 rounded-md"
                style={{ backgroundColor: '#0d3e33' }}
                onClick={handleDonateClick} 
              >
                Donate
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Donation() {
  return (
    <div className="bg--500 w-full h-auto mt-24 px-4">
      <h1 className="text-center text-5xl font-bold mb-8" style={{ color: '#0d3e33' }}>
        Donations
      </h1>
      <div className="flex flex-wrap items-center justify-around mb-4">
        {donationItems.map((item, index) => (
          <DonationCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
