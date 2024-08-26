import vol from "../assets/campinfo.jpg";

const CampaignInfo = () => {
  return (
    <>
      <div className="mainContainer h-[130vh] w-full bg--400">
        <div className="Top h-[40%] w-full bg--400">
          <img
            src={vol}
            className="w-full h-full object-cover"
            alt="Volunteer"
          />
        </div>
        <div className="Bottom h-[60%] w-full bg--600 flex justify-center items-center">
          <div className="left h-[95%] w-[30%] bg-[#0D3E33] flex justify-center items-center">
            <div className="left h-[90%] w-[90%] bg--400 flex justify-center items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.971407597239!2d73.9080591152971!3d18.539050687398904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1dd4f5b4b57%3A0x8e5c0fb0f6f029c4!2sMastercard%20Technology%20Hub!5e0!3m2!1sen!2sin!4v1692705239268!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pune Mastercard Kalyani Nagar Office"
            ></iframe>
            </div>           
          </div>
          <div className="right h-full w-[70%] bg--900 flex flex-col justify-start items-center p-4">
            <h1 className="text-5xl font-bold text-center mb-12 bg--800 flex justify-center items-center text-[#0D3E33] sm:text-left">
              Campaign One
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              iure adipisci labore velit ad dolore cum explicabo veritatis
              incidunt, omnis voluptate quod autem corrupti dolores! Eligendi
              veniam quaerat dolorem voluptas.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignInfo;
