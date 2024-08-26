import { useEffect } from "react";
import gsap from "gsap";
import 'ldrs/ring'
import { jellyTriangle } from 'ldrs'
import { quantum } from 'ldrs';


// Default values shown


const PreLoader = () => {
    quantum.register()

  useEffect(() => {
    let tl = gsap.timeline()
      tl.to("body", {
        duration: 0.1,
        css: { overflowY: "hidden" },
        ease: "power3.inOut",
      })
      .to(".preloader", {
        delay:2,
        duration: 0.8,
        opacity:0,
        ease: "power1.inOut",
      },"pre")
      .to(".preloader", {
        duration: 0.8,
        y: "-100vh",
        ease: "power1.inOut",
      })
      .to("body", {
        duration: 0.1,
        css: { overflowY: "scroll" },
        ease: "power3.inOut",
      });
  }, []);

  return (
    <>
      <div className="preloader fixed bottom-0 left-0 right-0 z-[5555] h-screen w-full bg-[#f4f4f4] flex justify-center items-center">
      <l-quantum
        size="90"
        speed="1.75" 
        color="pink" 
        >
        </l-quantum>
      </div>
    </>
  );
}

export default PreLoader;
