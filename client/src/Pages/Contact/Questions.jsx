import React, { useState } from "react";

export default function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "How can I donate?",
      answer: "Donations can be made via our website, bank transfer, check, or through online fundraising platforms. Visit our Donation Page for details.",
    },
    {
      question: "How is my donation used?",
      answer: "Donations fund our programs, community services, and administrative costs. We provide transparency through regular financial updates on our website.",
    },
    {
      question: "Can I volunteer?",
      answer: "Yes, we welcome volunteers! Check our Volunteer Page for current opportunities and application details.",
    },
    {
      question: "How can I start a fundraiser?",
      answer: "You can organize events or set up online campaigns. Visit our Fundraising Page for resources and support.",
    },
    {
      question: "What recent impact have you made?",
      answer: "We’ve achieved [specific success]. For updates on our recent projects and impact, check our website or newsletters.",
    },
  ];

  return (
    <div className="p-4 w-full">
      <div className="text-teal-900 text-[50px] font-semibold md:text-[37px] mt-9 mb-8 text-center">
        Frequently Asked Questions
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col w-full bg--300 justify-center items-start">
        {questions.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleAnswer(index)}
            className="w-full max-w-full bg--400 p-4 px-[6vw]"
          >
            <div className="flex items-center mb-2">
              <div className="text-lg font-bold text-black flex-grow">
                {item.question}
              </div>
              <button
                className="text-gray-700 focus:outline-none ml-4"
              >
                <svg
                  className={`h-6 w-6 transform transition-transform ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <div className="border-t border-gray-300 mt-2 mb-4" />
            {activeIndex === index && (
              <div className="text-sm text-gray-700">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}