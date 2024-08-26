import React, { useEffect } from "react";
import ContactUsSection from "./Contact/ContactUs";
import YellowSquares from "./Contact/sq";
import Questions from "./Contact/Questions";

export default function Contact() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="layout bg--500 min-h-[100vh] w-[100vw] flex flex-col justify-center items-center">
      <ContactUsSection />
      <YellowSquares />
      <Questions />
    </div>
  );
}



