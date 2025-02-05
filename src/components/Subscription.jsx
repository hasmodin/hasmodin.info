import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Subscription() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
    
  
    if (!email) {
      setStatus("Please enter an email address!");
      return;
    }
    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
       {email: email},
        {
          publicKey: PUBLIC_KEY,
        }
      );
    if(result.ok === 200) {
        setStatus("Subscription successful! Thank you.");
        setEmail("")
    }else {
        setStatus("There was an error, Please try again");
    }
    } catch (error) {
        setStatus("Error connecting to the server.");
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
        Newsletter
      </h3>
      <p className="text-gray-600 text-sm">
        Subscribe to my newsletter for updates.
      </p>
      {status && <p>{status}</p>}
      <form className="flex space-x-2" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Subscribe
        </button>
        
      </form>
    </div>
  );
}
