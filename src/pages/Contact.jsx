import React, {useState} from "react";
import emailjs from "@emailjs/browser";


export default function Contact() {
  const[status, setStatus] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData, [name] :value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
    
    
    if(!formData.name || !formData.email || !formData.message) {
      setStatus("All fields are required!");
      return;
    }
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target,
     {publicKey:PUBLIC_KEY} )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      })
      .catch((error) => {
          console.log(error)
          setStatus("Something went wrong. Please try again later.");
      })
    
    }

  return (
    <section id="contact" className="bg-gradient-to-tr from-blue-50 to-white py-20">
      <div className="w-full max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Get In Touch
        </h2>
        <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-sm">
          {status && <p className="mb-4">{status}</p>}
          <form className="space-y-4"  onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="flex-1 mt-1 w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="flex-1 mt-1 w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="flex-1 mt-1 w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button type="submit" className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md transition-all duration-200 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
