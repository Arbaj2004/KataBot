import image1 from "../assets/education.png";
import CampCard from "../components/CampCard";

const Campaigns = () => {
    const campArray = [
        {
            id:1,
            cardImage: image1,
            cardName:"Campaign One",
            cardDesc:"Learn how your donations can directly support our cause."
        },
        {
            id:2,
            cardImage: image1,
            cardName:"Campaign One",
            cardDesc:"Learn how your donations can directly support our cause."
        },
        {
            id:2,
            cardImage: image1,
            cardName:"Campaign One",
            cardDesc:"Learn how your donations can directly support our cause."
        },
        {
            id:2,
            cardImage: image1,
            cardName:"Campaign One",
            cardDesc:"Learn how your donations can directly support our cause."
        },
        
    ]
    return ( 
        <>
            <div className="campContainer min-h-[150vh] w-full bg--600 flex flex-col justify-center items-center ">
                <div className="top h-[88vh] w-full flex flex-col justify-end items-center ">
                <div className="Camptitle h-[10vh] w-full flex justify-start items-center text-[#0D3E33] px-[4vw]  bg--700">
                    <h1 className="text-5xl font-bold">Ongoing Campaigns</h1>
                </div>
                <div className="scrollcamp h-[60vh] w-[100vw] overflow-x-scroll">
                <div className="cardScroll h-[60vh] min-w-[150vw] bg--500 flex justify-around items-center">
                    {
                        campArray.map((cards) => {
                            return(
                                <>
                                    <CampCard cardImage={cards.cardImage}/>
                                </>
                            );
                        })
                    }
                </div>
                </div>
                </div>
                <div className="bottom h-[80vh] w-full flex flex-col justify-center items-center">
                <div className="Camptitle h-[10vh] w-full flex justify-start items-center text-[#0D3E33] px-[4vw]  bg--700">
                    <h1 className="text-5xl font-bold">Previous Campaigns</h1>
                </div>
                <div className="scrollcamp h-[60vh] w-[100vw] overflow-x-scroll">
                <div className="cardScroll h-[60vh] min-w-[150vw] bg--500 flex justify-around items-center">
                    {
                        campArray.map((cards) => {
                            return(
                                <>
                                    <CampCard cardImage={cards.cardImage}/>
                                </>
                            );
                        })
                    }
                </div>
                </div>
                </div>
                
                
            </div>
        </>
     );
}
 
export default Campaigns;