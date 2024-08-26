import { Link } from "react-router-dom"; 

const CampCard = ({cardImage}) => {
    return ( 
        <>
            <div className="campCard h-[50vh] w-[30vw] bg-green-600 flex flex-col justify-center rounded-[1.5vw] items-center">
                <img className="h-[65%] w-full object-cover rounded-t-[1.5vw]" src={cardImage} alt="" />
                <div className="descCard h-[35%] w-full bg-[#0D3E33] rounded-b-[1.5vw] flex">
                    <div className="cardText text-white h-full w-[70%] bg--500 flex flex-col justify-center items-start px-[1vw]">
                        <h1 className="text-[1.5vw] font-bold">Campaign one</h1>
                        <p className="text-[0.8vw]">Learn how your donations can directly support our cause.</p>
                    </div>
                    <div className="button h-full w-[30%] bg--600 flex justify-center items-center">
                        <Link to="/campaigninfo" className="bg-[#F4CE14] flex justify-center items-center h-[5vh] w-[6vw] rounded-full">Explore</Link>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default CampCard;