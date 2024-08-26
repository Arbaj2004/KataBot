"use client"

import { useEffect, useState } from "react";
// import Image from "next/image";
import qr from "../assets/qrCode.png"
import { IoCloseOutline } from "react-icons/io5";
import gsap from "gsap";


const QrModal = () => {
    const closeClick = () => {
        gsap.to(".qr", {
            display:"none",
            ease:"power1.inOut",
            duration:0.5,
            opacity:1
        })
      
    }
    return (
        <>
            <div className="qr h-[100vh] w-[100vw] bg-[#29292940] absolute hidden opacity-0 justify-center items-center backdrop-blur-[10px]">
                <div className="qrMain h-[70vh] w-[30vw] relative bg-white flex flex-col justify-center items-center">
                    <IoCloseOutline onClick={closeClick} size={30} className="absolute top-[4vh] right-[2vw] cursor-pointer"  />
                    <h1>Scan the QR Code</h1>
                    <img className="image1  h-[40vh] w-[40vh] " src={qr} />
                </div>
            </div>
        </>
     );
}
 
export default QrModal;