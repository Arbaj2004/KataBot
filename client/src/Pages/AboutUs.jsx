import { useState } from 'react';
// import '../../index.css';
import About from '../assets/about.jpg';

function AboutUs() {
  const [openSection, setOpenSection] = useState('mission'); // Default to 'mission'

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className=" min-h-screen w-full bg--400 flex flex-col items-center">
      {/* Main Content */}
      <div className="w-full flex flex-col items-center bg--500 ">
        {/* <h2 className="text-4xl font-bold text-center text-green-800 mb-2">ABOUT US</h2> */}

        {/* Full-width Image */}
        <div className="w-full h-[100vh] flex justify-center">
          <img
            src={About}
            alt="About Us"
            className="w-full h-[100%] object-cover rounded-lg mb-4"  
            style={{ borderRadius: '12px' }}  
          />
        </div>

        <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4">
          {/* Left Side Navigation */}
          <div className="w-full md:w-1/4 p-4">
            <ul className="space-y-4 text-lg font-semibold">
              <li>
                <button 
                  className={`relative text-black w-full h-[5vh] text-left after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-full after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 after:opacity-50 hover:after:w-full ${openSection === 'story' ? 'after:w-full' : ''}`}
                  onClick={() => toggleSection('story')}
                >
                  Our Story
                </button>
              </li>
              <li>
                <button 
                  className={`relative text-black w-full h-[5vh] text-left after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-full after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 after:opacity-50 hover:after:w-full ${openSection === 'vision' ? 'after:w-full' : ''}`}
                  onClick={() => toggleSection('vision')}
                >
                  Vision
                </button>
              </li>
              <li>
                <button 
                  className={`relative text-black w-full h-[5vh] text-left after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-full after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 after:opacity-50 hover:after:w-full ${openSection === 'mission' ? 'after:w-full' : ''}`}
                  onClick={() => toggleSection('mission')}
                >
                  Mission
                </button>
              </li>
              <li>
                <button 
                  className={`relative text-black w-full h-[5vh] text-left after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-full after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 after:opacity-50 hover:after:w-full ${openSection === 'howWeWork' ? 'after:w-full' : ''}`}
                  onClick={() => toggleSection('howWeWork')}
                >
                  How we work?
                </button>
              </li>
              <li>
                <button 
                  className={`relative text-black w-full h-[5vh] text-left after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-full after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 after:opacity-50 hover:after:w-full ${openSection === 'trust' ? 'after:w-full' : ''}`}
                  onClick={() => toggleSection('trust')}
                >
                  Why trust us?
                </button>
              </li>
            </ul>
          </div>

          {/* Right Side Content */}
          <div className="w-full h-[85vh] md:w-3/4 p-4">
            {/* Conditionally Rendered Content */}
            {openSection === 'story' && (
              <div>
                <h3 className="text-4xl font-bold text-green-800 mb-4 text-center">Our Story</h3>
                <p className="text-lg mb-4">
                  Our story began with a simple idea: to make a difference in the lives of those who need it the most. Over the years, we have grown into a global movement, impacting communities worldwide.
                </p>
              </div>
            )}
            {openSection === 'vision' && (
              <div>
                <h3 className="text-4xl font-bold text-green-800 mb-4 text-center">Vision</h3>
                <p className="text-lg mb-4">
                  Our vision is to create a world where every individual has the opportunity to lead a fulfilling life, free from poverty and inequality.
                </p>
              </div>
            )}
            {openSection === 'mission' && (
              <div>
                <h3 className="text-4xl font-bold text-green-800 mb-4 text-center">Mission</h3>
                <p className="text-lg mb-4">
                  At HopeRise, our mission is to empower underprivileged communities by providing access to education, healthcare, and sustainable development opportunities. We believe that every individual deserves the chance to thrive, and we work tirelessly to remove the barriers that prevent so many from reaching their full potential.
                </p>
                <p className="text-lg mb-4">
                  Our approach is holistic, addressing the root causes of poverty and inequality. We collaborate with local leaders, volunteers, and global partners to deliver programs that are impactful and sustainable. From building schools in remote areas to offering healthcare services in underserved regions, we are committed to creating lasting change.
                </p>
                <p className="text-lg mt-4">
                  Through our initiatives, we have seen firsthand the incredible resilience and potential of the communities we serve. We are inspired daily by the stories of transformation and hope, and we are dedicated to expanding our reach to touch even more lives. Together, we can build a world where every person has the opportunity to succeed.
                </p>
              </div>
            )}
            {openSection === 'howWeWork' && (
              <div>
                <h3 className="text-4xl font-bold text-green-800 mb-4 text-center">How We Work?</h3>
                <p className="text-lg mb-4">
                  Our work is guided by the principles of community engagement and sustainability. We collaborate closely with local leaders and partners to ensure that our initiatives are aligned with the needs and aspirations of the communities we serve.
                </p>
              </div>
            )}
            {openSection === 'trust' && (
              <div>
                <h3 className="text-4xl font-bold text-green-800 mb-4 text-center">Why Trust Us?</h3>
                <p className="text-lg mb-4">
                  Trust is the cornerstone of our work. We are committed to transparency, accountability, and ethical practices in all our operations. Our track record of successful projects and satisfied beneficiaries speaks to our credibility and dedication.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;