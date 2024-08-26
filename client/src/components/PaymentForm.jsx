

import React, { useState } from 'react';
import axios from 'axios';
import productlogo from '../assets/productlogo.png'; // Assuming your logo is here

function PaymentForm() {
  const [name, setName] = useState(''); // Name input state
  const [amount, setAmount] = useState(''); // Amount input state
  const [paymentId, setPaymentId] = useState(''); // Response ID state for payment

  // Razorpay script loader
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Creating Razorpay order via backend
  const createRazorpayOrder = async () => {
    try {
      const response = await axios.post('http://localhost:8001/orders', {
        amount: amount * 100, // Convert to paise
        currency: 'INR',
      });
      handleRazorpay(response.data.amount);
    } catch (error) {
      console.error('Error creating Razorpay order:', error);
    }
  };

  // Handling Razorpay UI
  const handleRazorpay = async (orderAmount) => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
    if (!res) {
      alert('Razorpay SDK failed to load.');
      return;
    }

    const options = {
      key: 'rzp_test_cPR1sxqoj8c79x', // Your test key
      amount: orderAmount,
      currency: 'INR',
      name,
      description: 'Payment for HopeRise Foundation',
      image: productlogo,
      handler: function (response) {
        setPaymentId(response.razorpay_payment_id);
        savePayment(response.razorpay_payment_id); // Save payment data
      },
      prefill: {
        name,
        email: 'user@example.com', // Prefill with some test data
        contact: '1234567890',
      },
      theme: {
        color: '#75FDFF',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const savePayment = async (paymentId) => {
    try {
      await axios.post('http://localhost:8001/payments', {
        paymentId,
        name,
        amount,
      });
      alert('Payment successful and saved.');
    } catch (error) {
      console.error('Error saving payment:', error);
    }
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount) {
      createRazorpayOrder();
    } else {
      alert('Please enter your name and amount.');
    }
  };

  return (
    <div>
      <h1>Make a Payment</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
          required
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount"
          required
        />
        <button type="submit">Pay</button>
      </form>
      {paymentId && <p>Payment ID: {paymentId}</p>}
    </div>
  );
}

export default PaymentForm; 
