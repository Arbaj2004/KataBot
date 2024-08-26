// src/components/Chatbot.jsx
import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import { useEffect, useState } from "react";
import Imagess from '../assets/images.png';

import axios from "axios";
import { BsChatRight } from "react-icons/bs";


const { theme, style } = buildTheme({
  themeName: "prism",
  themeColor: "#3240a8",
});

// Add your Client ID here ⬇️
const clientId = "c5b1f1d4-3093-4146-96d8-5f4d8c42b985";

const config = {
    composerPlaceholder: "Ask Your Query...",
    botName: "KataBot",
    botAvatar: "https://res.cloudinary.com/dgrbwkoxb/raw/upload/v1724247378/chat-app-file/mszwjlx3afqxmjzseq5z.png",
    botDescription:
      "Welcome to KataBot🤖",
  };

export default function Chatbot() {
  // const navigate = useNavigate();
  const token=localStorage.getItem('token')
  const [isAuth, setIsAuth] = useState(false)
  const fetchAllBlogs = async () => {
    const URL = `${import.meta.env.VITE_APP_BACKEND_URL}/users/islogged`;
    try {
      const response = await axios.get(URL, { headers: { 'authorization': `Bearer ${token}` } })
      console.log("Blogs fetched successfully>>>>", response);
      setIsAuth(true)
    } catch (error) {
      console.error("Error fetching blogs:", error);
      // navigate('/signin');      
      window.location.href = '/signup';
      setIsAuth(false)
      console.log("sklfjdjashdfshdfj🤣🔥",isAuth)
    }
  };  

  
  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };
 
  const handleClick = () => {
    fetchAllBlogs();
  };
  return (
    <div >
    {
      !isAuth && (
        <div
        onClick={handleClick}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
        >
          <div className="bg-slate-400 p-3 rounded-3xl cursor-pointer">
          <BsChatRight size={30} color="grey"/>
          </div>
            
        </div>
      )
    }{
      isAuth && (    
    <div>
      <style>{style}</style>
      <WebchatProvider
        key={JSON.stringify(config)}
        theme={theme}
        //Add the configuration to the Webchat Provider ⬇️
        configuration={config}
        client={client}
        >
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
          }}
          >
          <Fab onClick={toggleWebchat} />
          <div
            style={{
              position: "fixed",
              bottom: "80px", // Position the Webchat above the Fab button
              right: "20px",
              zIndex: 1000,
              width: "300px", // Adjust the width of the Webchat container
              height: "400px", // Adjust the height of the Webchat container
              display: isWebchatOpen ? "block" : "none",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)", // Optional: Add shadow for better visibility
              borderRadius: "8px", // Optional: Rounded corners
              overflow: "hidden", // Ensure content does not overflow the container
            }}
            >
            <Webchat />
          </div>
        </div>
      </WebchatProvider>
    </div>
)}
    </div>
  );
}
