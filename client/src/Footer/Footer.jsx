import logo from "../assets/logo.png";
import { Link } from "react-router-dom"; 

const Footer = () => {

    const footerArr = [
        {
            id: 1,
            linkName: "Quick Links",
            allLinks: [
                { linkMain: "Why us" },
                { linkMain: "About" },
                { linkMain: "Blogs" },
                { linkMain: "Programs" }
            ]
        },
        {
            id: 2,
            linkName: "Company",
            allLinks: [
                { linkMain: "Privacy Policy" },
                { linkMain: "Terms" },
                { linkMain: "Support" }
            ]
        },
        {
            id: 3,
            linkName: "Resources",
            allLinks: [
                { linkMain: "Media Center" },
                { linkMain: "Terms" },
                { linkMain: "Support" }
            ]
        }
    ];

    return (
        <div className="footer-main h-auto w-full bg-[#0D3E33] flex flex-col justify-center items-center overflow-hidden relative py-8 md:py-12 lg:py-16">
            <div className="top flex flex-col md:flex-row w-full justify-center items-center px-4 md:px-8 lg:px-16">
                <div className="foot-left w-full md:w-1/3 lg:w-[30%] flex flex-col items-center md:items-start mb-8 md:mb-0">
                    <img className="FooterLogo h-auto w-24 md:w-32 lg:w-36 mb-4" src={logo} alt="HopeRise Logo" />
                    <h1 className="text-[#F5F7F8] text-lg md:text-xl lg:text-2xl font-semibold mb-2">HopeRise</h1>
                    <p className="text-[#F5F7F8] w-[80%] md:w-[60%] lg:w-[20vw] text-xs md:text-sm text-center md:text-left">
                        "Small acts, when multiplied by millions of people, can transform the world."
                    </p>
                </div>
                <div className="foot-right w-full md:w-2/3 lg:w-[40%] flex flex-wrap justify-around items-start mb-8 md:mb-0 hidden md:flex">
                    {
                        footerArr.map((foot) => (
                            <div key={foot.id} className="w-[45%] sm:w-[30%] md:w-auto mb-4">
                                <h2 className="text-[#F5F7F8] text-sm md:text-base lg:text-lg font-semibold mb-2">{foot.linkName}</h2>
                                <ul className="space-y-2">
                                    {foot.allLinks.map((link, index) => (
                                        <li key={index} className="text-[#F5F7F8] text-xs md:text-sm">
                                            {link.linkMain}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>
                <div className="w-[80%] md:w-[45%] lg:w-[20vw] h-auto bg-[#F4CE14] text-[#0D3E33] rounded-lg p-4 flex flex-col items-center justify-center">
                    <p className="font-bold text-xs md:text-sm lg:text-[1.1vw] text-center">
                        Got questions or want to make a difference?
                    </p>
                    <p className="text-center text-xs md:text-sm mt-2 mb-4">
                        We're here to help—reach out today!
                    </p>
                    <Link to="/contact" className="bg-white text-[#0D3E33] px-4 py-2 rounded-lg font-semibold text-xs md:text-sm">
                        Contact Us
                    </Link>
                </div>
            </div>
            <div className="bottom w-full mt-10 px-4 md:px-8 lg:px-16">
                <div className="h-[1px] w-full bg-[#29544d]"></div>
                <h1 className="copyRights text-[#F5F7F8] font-extralight text-xs md:text-sm lg:text-[0.8vw] text-center mt-4">
                    © 2024 HopeRise, Inc. All rights reserved
                </h1>
            </div>
        </div>
    );
}

export default Footer;