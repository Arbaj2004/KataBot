import { Link } from "react-router-dom"; 

const Joincompo = () => {
    return ( 
        <>
            <div className="statusContainer leading-3 bg--500 h-full text-white w-full flex flex-col justify-evenly items-center">
                <p>Lets start with the first step</p>
                <h1 className="text-[2vw] font-bold tracking-wider	">Welcome to<span className="text-[#F4CE14]"> humanity </span>Charity</h1>
                <h1 className="text-[2vw] font-bold tracking-wider ">Not-for-profit aid-focused organization</h1>
                <Link to="/volunteerform" className="h-[6vh] w-[9vw] flex justify-center items-center bg-[#F4CE14] rounded-full text-[#191919] text-[1vw] font-regular">
                    Join to Volunteer
                  </Link>
            </div>
        </>
     );
}
 
export default Joincompo;