import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const navbar = document.querySelector('.navbar');
            const logo = document.querySelector('.logo');
            const navRight = document.querySelector('.nav-right');
            const menuIcon = document.querySelector('.menuIcon');
            
            if (scrollTop > 100) { // Adjust this value based on when you want the navbar to stick
                gsap.to(navbar, {
                    backgroundColor: "transparent",
                    height: "8vh",
                    duration: 0.3,
                });
                gsap.to(logo, {
                    opacity: 0,
                    duration: 0.3,
                });
                gsap.to(navRight, {
                    opacity: 0,
                    duration: 0.3,
                });
                gsap.to(menuIcon, {
                    right: '1rem',
                    position: 'absolute',
                    duration: 0.3,
                });
            } else {
                gsap.to(navbar, {
                    backgroundColor: "transparent",
                    height: "10vh",
                    duration: 0.3,
                });
                gsap.to(logo, {
                    opacity: 1,
                    duration: 0.3,
                });
                gsap.to(navRight, {
                    opacity: 1,
                    duration: 0.3,
                });
                gsap.to(menuIcon, {
                    right: '1rem',
                    position: 'absolute',
                    duration: 0.3,
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "20% 00%",
                end: "40% 100%",
                scrub: true,
                markers: false,
            },
        });

        if (open) {
            gsap.to(".resNavbar", {
                right: 0,
                ease: "power2.inOut",
            });
            gsap.from(".resLinks", {
                opacity: 0,
                stagger: 0.1,
                duration: 0.7,
                ease: "power2.inOut",
            });
        } else {
            gsap.to(".resNavbar", {
                right: "-100%",
                ease: "power2.inOut",
            });
        }

        return () => {
            t1.clear();
        };
    }, [open]);

    const linkColor = location.pathname === "/getinvolved" ? "text-[#0D3E33]" : "text-[#FFF]";
    const linkColor1 = location.pathname === "/donate" ? "text-[#0D3E33]" : "text-[#FFF]";
    const linkColor2 = location.pathname === "/donationform" ? "text-[#0D3E33]" : "text-[#FFF]";

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            <style>
                {`
                @media (max-width: 768px) {
                    .navbar {
                        width: 100%;
                        padding: 0 1rem;
                        position: fixed;
                        top: 0;
                        left: 0;
                        border-radius:0;
                        // background-color: #fff; /* Ensure full width background */
                    }

                    .nav-left {
                        width: 30%;
                    }

                    .nav-mid {
                        display: none;
                    }

                    .menuIcon {
                        display: block;
                        z-index: 1099;
                        color: black;
                        right: 1rem;
                        position: absolute;
                    }

                    .logo, .nav-right {
                        display: none;
                    }
                }

                .resNavbar {
                    display: flex;
                    justify-content: start;
                    align-items: start;
                    padding: 0 2rem;
                    padding-top:10vh;
                    right: -100%;
                    background-color: white;
                }
                `}
            </style>
            <div className="navbar h-[10vh] w-[75%] bg-[#f5f7f82f] backdrop-blur-[10px] flex justify-center items-center fixed rounded-[100px] top-4 z-[3000]">
                <div className="nav-left h-full w-[10%] flex justify-center items-center">
                    <Link to="/">
                        <img src={logo} className="logo h-[8vh] w-[4vw]" alt="logo" />
                    </Link>
                </div>
                <div className={`nav-mid h-full w-[65%] flex justify-center items-center gap-[100px] text-[1vw] ${linkColor},${linkColor1},${linkColor2}`}>
                    <Link to="/campaigns">Campaigns</Link>
                    <Link to="/getinvolved">Get Involved</Link>
                    <Link to="/aboutus">About</Link>
                </div>
                <div className="nav-right h-full w-[25%] gap-6 flex justify-center items-center">
                    <button onClick={() => navigate('/donate')} className="h-[5vh] w-[7vw] flex justify-center items-center bg-pink-400 rounded-full text-[#191919] text-[1vw] font-regular">Donate</button>
                    <button onClick={() => navigate('/signin')} className="h-[5vh] w-[7vw] flex justify-center items-center bg-white rounded-full text-[#191919] text-[1vw] font-regular">SignIn</button>
                </div>
                <div className="menuIcon sm:hidden" onClick={handleOpen}>
                    {open ? <IoClose size={30} /> : <CgMenuRightAlt size={30} />}
                </div>
            </div>
            <div className="resNavbar fixed top-0 right-[-100%] h-full w-[60%] bg-white z-[2000] flex flex-col items-start justify-center p-8">
                <Link to="/campaigns" className="resLinks text-[30px] mb-4">Campaigns</Link>
                <Link to="/getinvolved" className="resLinks text-[30px] mb-4">Get Involved</Link>
                <Link to="/aboutus" className="resLinks text-[30px] mb-4">About</Link>
                <Link to="/donate" className="resLinks text-[30px] mb-4">Donate</Link>
                <Link to="/signin" className="resLinks text-[30px] mb-4">SignIn</Link>
            </div>
        </>
    );
};

export default Navbar;
