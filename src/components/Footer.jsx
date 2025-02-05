import React from "react";
import { Link } from "react-router-dom";
import Subscription from "./Subscription";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Github,
  Youtube,
} from "lucide-react";
export default function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adds smooth scrolling
    });
  }
  return (
    <footer className="w-full bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">
                Hasmodin Ansari
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              MERN Stack Developer specializing in building exceptional digital
              experiences.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/hasmodin-ansari-b341b6311/",
                    "_blank"
                  )
                }
                href="#"
                className="text-gray-600 hover:text-blue-700 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                onClick={() =>
                  window.open("https://github.com/hasmodin", "_blank")
                }
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a
                onClick={() =>
                  window.open("https://www.youtube.com/@hassamvlogs", "_blank")
                }
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                aria-label="Github"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/">
                  <a
                  onClick={scrollToTop}
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Projects
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Contact Info
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-600">
                <Mail size={16} />
                <span>hasmodin@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Phone size={16} />
                <span>+974 - 50537411</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <MapPin size={16} />
                <span>Doha, Qatar</span>
              </li>
            </ul>
          </div>
          {/* <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Newsletter
            </h3>
            <p className="text-gray-600 text-sm">
              Subscribe to my newsletter for updates.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Subscribe
              </button>
            </form>
          </div> */}
          <Subscription />
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Hasmodin Ansari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
