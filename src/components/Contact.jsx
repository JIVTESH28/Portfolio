// Contact.jsx
import React from "react";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
// import { FaSquareXTwitter } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-8 p-8">
      {/* Top Section */}
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col items-start space-y-4">
          <h2 className="text-3xl font-semibold text-white ">
            In need of a developer?
          </h2>

          <div className="flex items-center space-x-2 text-gray-300">
            <motion.span
              className="inline-block h-4 w-4 rounded-full bg-cyan-500"
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0px 0px 0px rgba(0, 153, 255, 0.5)",
                  "0px 0px 10px rgba(0, 153, 255, 1)",
                  "0px 0px 0px rgba(0, 153, 255, 0.5)",
                ],
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            <p className="text-lg ">I’m currently available for work.</p>
          </div>
          <a href="mailto:jivtesh.al22@bitsathy.ac.in">
            <button className="px-5 py-2 bg-sky-500 text-white rounded-3xl hover:bg-cyan-500 transition font-semibold">
              Send a message
            </button>
          </a>
        </div>

        {/* <p className="text-gray-300 text-xl font-semibold">jivtesh.al22@bitsathy.ac.in</p> */}
        <div className="flex items-center space-x-2 justify-end">
          <Mail className="text-gray-300 h-6 w-6" />
          <p className="text-gray-300 text-xl font-semibold">
            jivtesh.al22@bitsathy.ac.in
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-neutral-900"></div>

      {/* Bottom Section */}
      <div className="text-gray-300 text-sm space-y-2">
        <p>Bannari Amman Institute of Technology</p>
        <p>Sathyamangalam</p>
        <p>Erode</p>
        <p>638 401</p>
      </div>

      <p className="text-gray-400 mt-4">@2024 Jivtesh S</p>

      {/* Social Links */}
      <div className="flex space-x-4 mt-4">
        <FaLinkedin className="h-6 w-6 text-gray-300 hover:text-gray-100 transition cursor-pointer" />

          <FaGithub className="h-6 w-6 text-gray-300 hover:text-gray-100 transition cursor-pointer" />

        <BsTwitterX className="h-6 w-6 text-gray-300 hover:text-gray-100 transition cursor-pointer" />
      </div>
    </div>
  );
};

export default Contact;
