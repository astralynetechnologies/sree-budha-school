import React, { useState } from "react";
import { Phone, Mail, Menu, X, ChevronDown, Facebook, Youtube,  } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <div className="w-full">
      {/* Top Header Bar */}
      <div className="bg-[#0D47A1] text-white py-2 px-4 relative overflow-hidden">
        {/* Animated background pattern */}
        <div
          className="absolute left-0 top-0 w-[240px] h-[100px] bg-white"
          style={{ clipPath: 'polygon(0 0, 45% 0, 100% 100%, 0% 100%)' }}
        ></div>
        
        <div className="max-w-7xl ml-auto flex justify-between items-center text-sm relative z-10">
          <span className="truncate">
            Join with us and be a part of the success
          </span>

          <div className="flex items-center space-x-3">
      
      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#0D47A1] shadow hover:bg-gray-100">
        <X />
      </button>

      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sky-500 shadow hover:bg-gray-100">
        <Facebook />
      </button>

      {/* YouTube */}
      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-600 shadow hover:bg-gray-100">
        <Youtube />
      </button>
    </div>

        </div>
      </div>

      {/* Main Header */}
      <div className="bg-gradient-to-r from-white to-[#0D47A1]/5 px-6 shadow-lg relative overflow-hidden">
        

          <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10 py-1.5">
           {/* Logo Section */}
           <div className="flex items-center relative right-8">
             
               <img
                 src="logo.png"
                 alt="School Logo"
                 className="w-72 h-17 object-contain"
               />

             {/* 25th Anniversary Badge */}
             <img src="excellence.png" alt="25th Anniversary" className="w-30 h-16 object-contain" />
           </div>

          {/* Contact Info (Icon Left, Label Above Value) */}
          <div className="hidden lg:flex items-center gap-10 text-[#0D47A1]">
            {/* Phone */}
            <a
              href="tel:04792562489"
              aria-label="Call us"
              className="flex items-start gap-3 hover:text-blue-800 transition-colors"
              title="Call: 0479-2562489, 2664989"
            >
              <Phone className="w-8 h-8 my-auto" />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-dark mb-1">Phone</span>
                <span className="text-sm mt-1">0479-2562489, 2664989</span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:sbcskarunagappally@gmail.com"
              aria-label="Email us"
              className="flex items-start gap-3 hover:text-blue-800 transition-colors"
              title="Email: sbcskarunagappally@gmail.com"
            >
              <Mail className="w-8 h-8 my-auto" />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-dark mb-1">Email</span>
                <span className="text-sm mt-1">sbcskarunagappally@gmail.com</span>
              </div>
            </a>
          </div>


          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-[#0D47A1] shadow-lg">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <div className="flex space-x-2">
              {/* About Foundation Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center px-4 py-3 text-white hover:bg-[#0D47A1]/80 transition-colors"
                  onClick={() => handleDropdown("foundation")}
                >
                  About Foundation
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === "foundation" && (
                  <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-3 w-52 z-50 border border-gray-100">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      Foundation History
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      Mission & Vision
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      Leadership
                    </a>
                  </div>
                )}
              </div>

              {/* About School Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center px-4 py-3 text-white hover:bg-[#0D47A1]/80 transition-colors"
                  onClick={() => handleDropdown("school")}
                >
                  About School
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === "school" && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                    >
                      School Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                    >
                      Infrastructure
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                    >
                      Faculty
                    </a>
                  </div>
                )}
              </div>

              {/* Curriculum Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center px-4 py-3 text-white hover:bg-[#0D47A1]/80 transition-colors"
                  onClick={() => handleDropdown("curriculum")}
                >
                  Curriculum
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === "curriculum" && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                    >
                      Academic Programs
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                    >
                      Subjects Offered
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                    >
                      Assessment
                    </a>
                  </div>
                )}
              </div>

              {/* Documents Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center px-4 py-3 text-white hover:bg-[#0D47A1]/80 transition-colors"
                  onClick={() => handleDropdown("documents")}
                >
                  Documents
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {activeDropdown === "documents" && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                    >
                      Admission Forms
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                    >
                      Policies
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                    >
                      Certificates
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#"
                className="px-4 py-3 text-white hover:bg-[#0D47A1]/80 transition-colors"
              >
                Gallery
              </a>
            </div>

            {/* Admission Form Button */}
            <div className="ml-auto">
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#0D47A1] px-6 py-2 font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105">
                Admission Form
              </button>
            </div>
          </div>

                     {/* Mobile Menu */}
           {isMenuOpen && (
             <div className="lg:hidden bg-[#0D47A1] py-4">
               <div className="space-y-1">
                 <button className="block w-full text-left px-4 py-2 text-white hover:bg-[#0D47A1]/80">
                   About Foundation
                 </button>
                 <button className="block w-full text-left px-4 py-2 text-white hover:bg-[#0D47A1]/80">
                   About School
                 </button>
                 <button className="block w-full text-left px-4 py-2 text-white hover:bg-[#0D47A1]/80">
                   Curriculum
                 </button>
                 <button className="block w-full text-left px-4 py-2 text-white hover:bg-[#0D47A1]/80">
                   Documents
                 </button>
                 <button className="block w-full text-left px-4 py-2 text-white hover:bg-[#0D47A1]/80">
                   Gallery
                 </button>

                <div className="px-4 pt-2">
                  <button className="w-full bg-yellow-400 text-[#0D47A1] px-6 py-2 font-semibold rounded hover:bg-yellow-300 transition-colors">
                    Admission Form
                  </button>
                </div>

                {/* Contact Info for Mobile */}
                <div className="px-4 py-4 border-t border-[#0D47A1] mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-white">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">0479-2562489, 2664989</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">
                      sbcskarunagappally@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
