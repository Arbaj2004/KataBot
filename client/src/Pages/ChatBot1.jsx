import React, { useEffect, useState } from "react";
import { getClient } from "@botpress/webchat";

// Define your client ID
const clientId = "c5b1f1d4-3093-4146-96d8-5f4d8c42b985";

const Chatbot1 = () => {
  const [state, setState] = useState({
    conversationId: undefined,
    latestEvent: undefined,
    messagesOutgoing: [],
    messagesIncoming: [],
  });

  useEffect(() => {
    const rootElement = document.getElementById("root");

    const client = getClient({ clientId });

    client.on("conversation", (conversation) => {
      setState((prevState) => ({
        ...prevState,
        conversationId: conversation,
      }));
    });

    client.on("customEvent", (event) => {
      setState((prevState) => ({
        ...prevState,
        latestEvent: event,
      }));
    });

    client.on("messageSent", (message) => {
      setState((prevState) => ({
        ...prevState,
        messagesOutgoing: [...prevState.messagesOutgoing, message],
      }));
    });

    client.on("message", (message) => {
      setState((prevState) => ({
        ...prevState,
        messagesIncoming: [...prevState.messagesIncoming, message],
      }));
    });

    const connectClient = async () => {
      await client.connect();
      await client.sendMessage("Hello, Botpress!");
    };

    connectClient();

    // Update the root element every second
    const intervalId = setInterval(() => {
      if (rootElement) {
        rootElement.innerText = JSON.stringify(state, null, 2);
      }
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [state]);

  return (
    <div>
      <h2>Botpress Chatbot State</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default Chatbot1;
