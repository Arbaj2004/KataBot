import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Landing from "../src/Pages/Landing.jsx";
import BlogNews from "./Pages/BlogNews.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Contact from "./Pages/Contact.jsx";
import NotFound from "./Pages/NotFound.jsx";
import AllBlogs from "./Pages/AllBlogs.jsx";
import SpecificBlog from "./Pages/SpecificBlog.jsx";
import SignUp from "./Pages/SignUp.jsx";
import SignIn from "./Pages/SignIn.jsx";
import VerifyOtp from "./Pages/VerifyOtp.jsx";
import PaymentForm from "./components/PaymentForm.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Donation from "./Pages/Donation.jsx";
import GetInvolved from "./Pages/GetInvolved.jsx";
import DonationForm from "./Pages/DonationForm.jsx";
import Notice from "./components/Notice.jsx";
import Campaigns from "./Pages/Campaigns.jsx";
import ForgotPassword from "./Pages/ForgotPassword.jsx";
import ResetPassword from "./Pages/ResetPassword.jsx";
import VolunteerForm from "./Pages/VolunteerForm.jsx";
import CampaignInfo from "./Pages/CampaignInfo.jsx";
import Admin from "./Pages/Admin.jsx";
import Chatbot from "./Pages/ChatBot.jsx"; // Import the Chatbot component
import AdminDashBoard from "./Pages/AdminDashBoard.jsx";
import AdminTickets from "./Pages/AdminTickets.jsx";
import AdminActiveTickets from "./Pages/AdminActiveTickets.jsx";
import AdminTicketByid from "./Pages/AdminTicketByid.jsx";
 


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="/blognews" element={<BlogNews />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/donation" element={<PaymentForm />} />
        <Route path="/getinvolved" element={<GetInvolved />} />
        <Route path="/volunteerform" element={<VolunteerForm />} />
        <Route path="/campaigninfo" element={<CampaignInfo />} />
      </Route>
      <Route path="/donationform" element={<DonationForm />} />

      <Route path="/all-blogs" element={<AllBlogs />} />
      <Route path="/blog/:id" element={<SpecificBlog />} />
      <Route path="/signup" element={<SignUp role={"Volunteer"} />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/verifyOtp" element={<VerifyOtp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:id" element={<ResetPassword />} />


      <Route
        path="/admin"
        element={
          <ProtectedRoute
            element={<Admin />}
            requiredRole="Admin"
          />
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute
            element={<AdminDashBoard />}
            requiredRole="Admin"
          />
        }
      />
      <Route
        path="/admin/tickets"
        element={
          <ProtectedRoute
            element={<AdminTickets />}
            requiredRole="Admin"
          />
        }
      />
      <Route
        path="/admin/tickets/active"
        element={
          <ProtectedRoute
            element={<AdminActiveTickets />}
            requiredRole="Admin"
          />
        }
      />
      <Route
        path="/admin/ticket/:id"
        element={
          <ProtectedRoute
            element={<AdminTicketByid />}
            requiredRole="Admin"
          />
        }
      />

      <Route path="/notice" element={<Notice />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);

function Main() {
  return (
    <>
      <RouterProvider router={router} />
      <Chatbot/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
