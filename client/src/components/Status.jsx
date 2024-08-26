
import { LuHeartHandshake } from "react-icons/lu";
import { PiHandHeart } from "react-icons/pi";
import { TfiAnnouncement } from "react-icons/tfi";
import { BsBox2Heart } from "react-icons/bs";
const Status = () => {
    const statusArray = [
        {
            id:1,
            icon:<LuHeartHandshake size={80} color="white" />,
            title:"985+",
            desc:"Donation Recieved"
        },
        {
            id:2,
            icon:<BsBox2Heart  size={80} color="white" />,
            title:"$10 M",
            desc:"Money Donated"
        },
        {
            id:3,
            icon:<TfiAnnouncement  size={80} color="white" />,
            title:"12+",
            desc:"Active Campeign"
        },
        {
            id:4,
            icon:<PiHandHeart  size={80} color="white" />,
            title:"$60 M",
            desc:"Charity in Last Year"
        },
    ];
    return ( 
        <>
            <div className="statusContainer bg--500 h-full w-full flex justify-evenly items-center">
                {
                    statusArray.map((stat) => {
                        return(
                            <>
                                <div className="statusCard h-[80%] w-[22vw] bg--800 flex justify-center items-center">
                                    <div className="iconBox h-full w-[50%] flex justify-center items-center">
                                        {stat.icon}
                                    </div>
                                    <div className="textBox h-full w-[50%] text-white flex flex-col justify-center items-start">
                                        <h1 className="text-[3vw] font-bold">{stat.title}</h1>
                                        <p className="text-[0.9vw]">{stat.desc}</p>
                                    </div>
                                </div>
                            </>
                        );
                    })
                }
            </div>
        </>
     );
}
 
export default Status;