import React, { useEffect, useState } from "react";

const Notice = () => {
  const [notices] = useState([
    {
      title: "Community Outreach Program",
      description:
        "Join us this weekend for our community outreach program, where we will be providing free health check-ups and educational workshops.",
      date: "August 25, 2024",
    },
    {
      title: "Fundraising Gala",
      description:
        "We are hosting a fundraising gala to support our ongoing projects in rural education. Your contributions can make a huge difference.",
      date: "September 10, 2024",
    },
    {
      title: "Volunteer Recruitment Drive",
      description:
        "Our NGO is looking for dedicated volunteers to help with our environmental conservation projects. Sign up today to make an impact!",
      date: "October 1, 2024",
    },
    
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let interval;
    if (!isHovering) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === notices.length - 1 ? 0 : prevIndex + 1
        );
      }, 2900); 
    }
    return () => clearInterval(interval);
  }, [isHovering, notices.length]);

  return (
    <div
      className="w-full max-w-sm mx-auto p-4 bg-white rounded-lg shadow-md m-4"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <h2 className="text-lg font-semibold text-center text-green-700 mb-4">
        News and Announcements
      </h2>
      <div className="h-48 overflow-hidden relative">
        {notices.map((notice, index) => (
          <div
            key={index}
            className={`absolute w-full top-0 left-0 transition-opacity duration-500 ease-in-out transform ${
              index === currentIndex ? "opacity-100" : "opacity-0 -translate-y-full"
            }`}
          >
            <div className="bg-yellow-400 text-green-700 p-4 rounded-md">
              <strong className="block text-lg mb-1">{notice.title}</strong>
              <p className="mb-2">{notice.description}</p>
              <small>{notice.date}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notice;
