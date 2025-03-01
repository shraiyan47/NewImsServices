import React, { useState } from "react";
import EligibilityModal from "../Forms/EligibilityModal";

export default function TopBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div style={{ backgroundColor: "#1a1a1a" }} className="w-full py-2 fixed top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="tel:+8801781913380" className="text-white hover:text-gray-300 flex items-center mr-4">
                <i className="fas fa-phone text-purple-400 text-xs mr-2"></i>
                <span className="text-sm">+880 1781913380</span>
              </a>
              <a href="mailto:info@imsservicesbd.com" className="text-white hover:text-gray-300 flex items-center">
                <i className="fas fa-envelope text-purple-400 text-xs mr-2"></i>
                <span className="text-sm">info@imsservicesbd.com</span>
              </a>
            </div>
            
            {/* Mobile View */}
            <div className="flex md:hidden w-full justify-start space-x-6">
              <a href="tel:+8801781913380" className="text-white mr-4">
                <i className="fas fa-phone text-lg"></i>
              </a>
              <a href="mailto:info@imsservicesbd.com" className="text-white">
                <i className="fas fa-envelope text-lg"></i>
              </a>
            </div>

            <button 
              onClick={() => setIsModalOpen(true)}
              style={{ 
                background: "linear-gradient(to right, #B08CCF, #320061)",
                boxShadow: "0 4px 15px rgb(202, 146, 255)"
              }}
              className=" md:block text-white font-bold py-1.5 px-6 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Start Now
            </button>
          </div>
        </div>
      </div>

      <EligibilityModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
