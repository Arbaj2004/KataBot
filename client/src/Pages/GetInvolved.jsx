import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/get1.png";
import img2 from "../assets/get2.png";
import img3 from "../assets/get3.png";
import img4 from "../assets/get4.png";
import img5 from "../assets/get5.png";

export default function GetInvolved() {

  const [id, setId] = useState(null);
  const [currLink, setCurrLink] = useState(null);


  const navigate = useNavigate();

  const cardClick = (link) => {
    navigate(link);
    console.log("CLICKED");
  }



  const cards = [
    {
      id:1,
      img: img1,
      title: "Volunteer Opportunities",
      text: "Discover various ways to contribute your time and skills. Whether it's helping at events, tutoring, or participating in community outreach, your involvement makes a difference.",
      link: "/volunteerform",
    },
    {
      id:2,
      img: img2,
      title: "Donation Impact",
      text: "Learn how your donations can directly support our cause. See the tangible outcomes of your generosity and how it benefits the community.",
      link: "/donate",
    },
    {
      id:3,
      img: img3,
      title: "Fundraising Events",
      text: "Join our exciting fundraising events and initiatives. Participate in fun activities and campaigns to help raise awareness and funds for our programs.",
      link: "/",
    },
    {
      id:4,
      img: img4,
      title: "Spread the Word",
      text: "Help us reach more people by sharing our mission with your friends and family. Use social media and word-of-mouth to amplify our impact.",
      link: "/about",
    },
    {
      id:5,
      img: img5,
      title: "Partnerships and Sponsorships",
      text: "Explore opportunities for businesses and organizations to partner with us. Your support can drive larger initiatives and create greater change in the community.",
      link: "/",
    },
  ];

  return (
    <>
      <div className="cont flex flex-col bg-[#F5F7F8] w-full h-auto gap-8 py-8">
        <div className="w-full h-[10vh]">
          {/* Optional spacing or header */}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12">
          {cards.map((card, index) => (
            <div
            onClick={() => cardClick(card.link)}
            key={index}
              className="w-[24vw] h-[45vh] bg-[#f2f2f2]  rounded-[1vw] overflow-hidden  flex flex-col items-center p-4"
            >
              <div className="w-full h-40 mb-4 overflow-hidden flex items-center justify-center">
                <img
                  src={card.img}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2 text-[#0D3E33]">
                  {card.title}
                </h3>
                <p className="text-sm text-[#0D3E33]">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
