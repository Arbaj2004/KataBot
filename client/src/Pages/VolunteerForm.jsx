import vol from "../assets/volunteer.jpg";

const VolunteerForm = () => {
  const interests = ["Health", "Education", "Environment", "Community"];

  

  return (
    <>
      <div className="mainContainer h-[130vh] w-full bg--400">
        <div className="Top h-[40%] w-full bg-blue-400">
          <img
            src={vol}
            className="w-full h-full object-cover"
            alt="Volunteer"
          />
        </div>
        <div className="Bottom h-[60%] w-full bg--600 flex justify-center items-center">
          <div className="left h-full w-[45%] bg--400 flex justify-end items-center">
            <div className="innerLeft h-[90%] w-[90%] rounded-[2vw] text-white bg-[#0D3E33] flex flex-col text-center justify-center items-start px-[3vw]  gap-4">
              <h1 className="h-[15%] text-[1.7vw] font-bold">
                Some of our key volunteer activities
              </h1>
              <p>School Kit Assembly</p>
              <p>Paper Bag, Red Dot Bag and Paper pen making</p>
              <p>Promote sustainability and reduce single use plastic</p>
              <p>Beach Cleanup Drive</p>
              <p>Promote cleanliness and waste management at the shores</p>
              <p>Promote cleanliness and waste management at the shores</p>
              <p>Promote cleanliness and waste management at the shores</p>
              <p>Promote cleanliness and waste management at the shores</p>

            </div>
          </div>
          <div className="right h-full w-[55%] bg--900 flex justify-center items-center">
            <div className="Form w-[90%] h-[90%] flex bg--700 flex-col justify-center">
              <div className="Form2 w-full h-[15%] bg--600 flex flex-row justify-center items-center gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="h-[6vh] w-[22vw] rounded-md text-black p-2"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="h-[6vh] w-[22vw] rounded-md text-black p-2"
                />
              </div>
              <div className="Form3 w-full h-[15%] flex flex-row bg--300 justify-center items-center gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="h-[6vh] w-[22vw] rounded-md text-black p-2"
                />
                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="h-[6vh] w-[22vw] rounded-md text-black p-2"
                />
              </div>
              <div className="Form4 w-full h-[70%] flex flex-row justify-center gap-4">
                <div className="interest h-full w-full bg--500 gap-[2vh] flex flex-col justify-center items-start px-[2.5vw]">
                  <h1 className="h-auto bg--500 text-[1.3vw]">
                    Area of Interest
                  </h1>
                  <div className="radioBtn bg--500 w-full flex justify-between items-center">
                    {interests.map((interest, index) => (
                      <div
                        key={index}
                        className="flex justify-center items-center gap-[1vw]"
                      >
                        <input type="checkbox" id={`interest-${index}`} />
                        <label htmlFor={`interest-${index}`}>{interest}</label>
                      </div>
                    ))}
                  </div>
                  <textarea
                    name=""
                    id=""
                    className="bg--300 h-[62%] w-full p-[1vw] "
                    placeholder="Your Message"
                  ></textarea>
                  <button className="h-[6vh] w-[8vw] flex justify-center items-center bg-[#F4CE14] rounded-full text-[#191919] text-[1vw] font-regular">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VolunteerForm;
