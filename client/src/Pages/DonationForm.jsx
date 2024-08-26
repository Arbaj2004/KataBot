// import { useEffect, useState } from "react";
// import Input from "../components/Input";
// import gsap from "gsap";
// import QrModal from "../components/QrModal";

// const DonationForm = () => {

//     const [activeButton, setActiveButton] = useState(null);

//     const donArray = [
//         { id: 1, name: "Full Name" },
//         { id: 2, name: "Contact No." },
//         { id: 3, name: "Address" },
//         { id: 4, name: "Date of Donation" },
//         { id: 5, name: "Amount Donated" },
//         { id: 6, name: "Donation for Any Specific Cause" },
//     ];

//     const paymentArray = [
//         { id: 1, pay: "UPI" },
//         { id: 2, pay: "RTGS" },
//         { id: 3, pay: "NEFT" },
//     ];

//     useEffect(() => {
//         // Set all buttons to gray initially
//         gsap.to(".payBtn", { backgroundColor: "#b8b8b8", duration: 0.3 });
//         // Set the active button (UPI by default) to green
//         gsap.to(`.${activeButton}`, { backgroundColor: "#0D3E33", duration: 0.3 });

//     }, [activeButton]);

//     const payClick = () => {
//         if(activeButton == "upi"){
//             gsap.to(".qr", {
//                 display:"flex",
//                 ease:"power1.inOut",
//                 duration:0.5,
//                 opacity:1
//             })
//         }
//         else{
//             gsap.to(".qr", {
//                 display:"none"
//             })
//         }
//     }

//     return (
//         <>
//             <div className="DonationForm bg-[#F5F7F8] h-[100vh] w-[100vw] bg--500 flex flex-col justify-center items-center relative">
//             <QrModal/>
//                 <div className="titleDonation h-[25vh] w-full bg--500 flex justify-center items-end">
//                     <h1 className="text-5xl font-bold text-[#0D3E33]">Donation Form</h1>
//                 </div>
//                 <div className="donationForm h-[75vh] w-full bg--500 flex justify-center items-center">
//                     <div className="don-left h-full w-[50%] flex flex-col justify-center items-center gap-[3vh]">
//                         {donArray.slice(0, 4).map((don) => (
//                             <Input key={don.id} name={don.name} />
//                         ))}
//                     </div>
//                     <div className="don-right h-full w-[50%] bg--300 flex flex-col justify-center items-center gap-[3vh]">
//                         {donArray.slice(4, 6).map((don) => (
//                             <Input key={don.id} name={don.name} />
//                         ))}
//                         <div className="payment h-[20vh] w-full bg--500 flex flex-col justify-center items-center ">
//                             <div className="payText h-[5vh] w-[60%] bg--400 flex justify-start items-end">
//                                 <h1>Mode Of Payment</h1>
//                             </div>
//                             <div className="modes h-[12vh] bg--200 w-[100%] flex justify-center items-center gap-[3vw]">
//                                 {paymentArray.map((item) => (
//                                     <button
//                                         key={item.id}
//                                         className={`payBtn ${item.pay.toLowerCase()} h-[6vh] w-[8vw] text-white rounded-[0.8vh]`}
//                                         onClick={() => setActiveButton(item.pay.toLowerCase())}
//                                     >
//                                         {item.pay}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                         <button onClick={payClick} className="w-[30vw] h-[7vh] bg-[#0D3E33] text-white rounded-[0.8vh] hover:bg-[#289b28]">Pay</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default DonationForm;

/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import pay from "../assets/pay.png";

function DonationForm() {
  const [name, setName] = useState(""); // Name input state
  const [amount, setAmount] = useState(""); // Amount input state
  const [cause, setCause] = useState(""); // Cause input state
  const [contactNo, setContactNo] = useState(""); // Contact Number input state
  const [address, setAddress] = useState(""); // Address input state
  const [dateOfDonation, setDateOfDonation] = useState(""); // Date input state
  const [paymentId, setPaymentId] = useState(""); // Response ID state for payment
  const [responseState, setResponseState] = useState([]); // Response state will be in JSON format
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to show success message

  // Razorpay script loader
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Creating Razorpay order via backend
  const createRazorpayOrder = async () => {
    try {
      const response = await axios.post("http://localhost:8001/orders", {
        amount: amount * 100, // Convert to paise
        currency: "INR",
      });
      handleRazorpay(response.data.amount);
    } catch (error) {
      console.error("Error creating Razorpay order:", error);
    }
  };

  // Handling Razorpay UI
  const handleRazorpay = async (orderAmount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    const options = {
      key: "rzp_test_cPR1sxqoj8c79x", // Your test key
      amount: orderAmount,
      currency: "INR",
      name: "Rahul Kamble", // Hardcoded recipient name
      description: `Donation for ${cause}`,
      handler: function (response) {
        setPaymentId(response.razorpay_payment_id);
        savePayment(response.razorpay_payment_id); // Save payment data
        setShowSuccessMessage(true); // Show success message
        clearForm(); // Clear the form fields
      },
      prefill: {
        name,
        email: "user@example.com", // Prefill with some test data
        contact: contactNo,
      },
      theme: {
        color: "#75FDFF",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const savePayment = async (paymentId) => {
    try {
      await axios.post("http://localhost:8001/payments", {
        paymentId,
        name,
        cause,
        contactNo,
        amount,
        address,
        dateOfDonation,
      });
      console.log("Payment saved successfully.");
    } catch (error) {
      console.error("Error saving payment:", error);
    }
  };

  // Clear form fields after successful payment
  const clearForm = () => {
    setName("");
    setAmount("");
    setCause("");
    setContactNo("");
    setAddress("");
    setDateOfDonation("");
  };

  // Hide the success message after 7 seconds
  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000); // Hide after 7 seconds
      return () => clearTimeout(timer);
    }
  }, [showSuccessMessage]);

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount && cause && contactNo && address && dateOfDonation) {
      createRazorpayOrder();
    } else {
      alert("Please fill in all the required fields.");
    }
  };

  return (
    <div
      className="container bg-[#F5F7F8] h-[100vh] w-[100vw] flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${pay})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container bg-[#f5f7f87b] h-[80%] backdrop-blur-lg rounded-3xl w-[60%] flex flex-col justify-center items-center">
        <h1 className="text-center text-[#0D3E33] h-[10%] w-[full] text-4xl font-bold ">
          Donation Form
        </h1>

        {showSuccessMessage && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4 mb-8 flex items-center justify-center"
            role="alert"
          >
            <svg
              className="fill-current w-6 h-6 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11h-2v4h2V7zm0 6h-2v2h2v-2z" />
            </svg>
            <div>
              <strong className="font-bold">Thank You!</strong>
              <span className="block sm:inline">
                Your donation has been successfully processed. You made a
                difference today!
              </span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid text-[#0D3E33] font-semibold grid-cols-2 gap-8">
          <div>
            <label className="block mb-2  ">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 ">Amount Donated</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 ">Contact No.</label>
            <input
              type="text"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              className="w-full p-3 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 ">
              Donation for Any Specific Cause
            </label>
            <input
              type="text"
              value={cause}
              onChange={(e) => setCause(e.target.value)}
              className="w-full p-3 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 ">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2 ">Date of Donation</label>
            <input
              type="date"
              value={dateOfDonation}
              onChange={(e) => setDateOfDonation(e.target.value)}
              className="w-full p-3 border rounded"
              required
            />
          </div>

          <div className="col-span-2 text-center">
            <button
              type="submit"
              className="bg-[#0D3E33] text-white px-6 py-3 rounded-xl w-96"
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DonationForm;
