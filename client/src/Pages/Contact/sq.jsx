import React from "react";

export default function YellowSquares() {
  const googleMapsUrl = "https://maps.app.goo.gl/vnL5whQUZbEeakaSA";
  const phoneNumber = "+1234567890";
  return (
    <div className="flex h-[35vh] w-full bg--500 flex-col md:flex-row gap-8 justify-around items-center mb-4  ">
      <div className="w-[18vw] h-[34vh] bg-[#f4ce14] rounded-3xl p-4 flex flex-col items-center cursor-pointer" onClick={() => window.location.href = 'mailto:support@gmail.com'}>
        <div className="text-4xl mt-6 mb-6 text-black flex justify-center">💬</div>
        <div className="text-lg font-bold mb-1 text-center">Chat to Support</div>
        <div className="text-sm mb-2 text-center">We are here to help</div>
        <div className="text-xs mt-4 text-center">support@gmail.com</div>
      </div>
      <div className="w-[18vw] h-[34vh] bg-[#f4ce14] rounded-3xl p-4 flex flex-col items-center cursor-pointer" onClick={()=> window.open(googleMapsUrl, '_blank')}>
        <div className="text-4xl mt-6 mb-6 text-black flex justify-center">📍</div>
        <div className="text-lg font-bold mb-1 text-center">Visit us</div>
        <div className="text-sm mb-2 text-center">We are here to help</div>
        <div className="text-xs mt-4 text-center">Pune, Maharashtra</div>
      </div>
      <div className="w-[18vw] h-[34vh] bg-[#f4ce14] rounded-3xl p-4 flex flex-col items-center cursor-pointer" onClick={() => window.location.href = `tel:${phoneNumber}`}>
        <div className="text-4xl mt-6 mb-6 text-black flex justify-center">📞</div>
        <div className="text-lg font-bold mb-1 text-center">Call us</div>
        <div className="text-sm mb-2 text-center">We are here to help</div>
        <div className="text-xs mt-4 text-center">+91 1234567890</div>
      </div>
    </div>
  );
}
