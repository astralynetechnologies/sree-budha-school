import React, { useState } from "react";
import { Phone, Mail, Menu, X, ChevronDown, Facebook, Youtube } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close all mobile dropdowns when menu is closed
    if (isMenuOpen) {
      setActiveMobileDropdown(null);
    }
  };

  const handleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleMobileDropdown = (menu) => {
    setActiveMobileDropdown(activeMobileDropdown === menu ? null : menu);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  return (
    <div className="w-full">
      {/* Top Header Bar - Desktop Only */}
      <div className="hidden lg:block bg-[#0D47A1] text-white py-2 px-4 relative overflow-hidden before:content-[''] before:absolute before:left-0 before:top-0 before:w-[240px] before:h-[100px] before:bg-white before:[clip-path:polygon(0_0,45%_0,100%_100%,0%_100%)]">
        <div className="max-w-7xl ml-auto flex justify-between items-center text-sm relative z-10">
          <span className="truncate">
            Join with us and be a part of the success
          </span>
          <div className="flex items-center space-x-3">
            <Link href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#0D47A1] shadow hover:bg-gray-100">
              <X />
            </Link>
            <Link href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sky-500 shadow hover:bg-gray-100">
              <Facebook />
            </Link>
            <Link href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-600 shadow hover:bg-gray-100">
              <Youtube />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        {/* Top Layer - Logos with accent background */}
        <div className="bg-gray-100 px-4 py-3 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <Link href="/">
              <img
                src="/logo.png"
                alt="School Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <img 
              src="/excellence.png" 
              alt="25th Anniversary" 
              className="h-14 w-auto object-contain" 
            />
          </div>
        </div>

        {/* Bottom Layer - Contact Info and Menu */}
        <div className="bg-[#0D47A1] px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Contact Info - Icons with text */}
            <div className="flex items-center gap-4 text-white text-sm">
              <Link
                href="tel:04792562489"
                className="flex items-center gap-1 hover:underline"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" />
                <span>0479-2562489</span>
              </Link>
              <Link
                href="mailto:sbcskarunagappally@gmail.com"
                className="flex items-center gap-1 hover:underline"
                aria-label="Email us"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </Link>
            </div>

            {/* Hamburger Menu */}
            <button 
              className="text-white p-2" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Main Header */}
      <div className="hidden lg:block bg-gradient-to-r from-white to-[#0D47A1]/5 px-6 shadow-lg relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10 py-1.5">
          {/* Logo Section */}
          <div className="flex items-center relative right-8">
            <Link href="/">
              <img
                src="/logo.png"
                alt="School Logo"
                className="w-72 h-17 object-contain"
              />
            </Link>
            {/* 25th Anniversary Badge */}
            <img src="/excellence.png" alt="25th Anniversary" className="w-30 h-16 object-contain" />
          </div>

          {/* Contact Info (Icon Left, Label Above Value) */}
          <div className="flex items-center gap-10 text-[#0D47A1]">
            {/* Phone */}
            <Link
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
            </Link>

            {/* Email */}
            <Link
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
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Menu - Desktop */}
      <nav className="hidden lg:block bg-[#0D47A1] shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center">
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
                    <Link
                      href="/about-foundation/objectives"
                      className="block px-4 py-2 text-gray-800 hover:text-secondary transition-colors"
                      onClick={closeDropdown}
                    >
                      Objectives
                    </Link>
                    <Link
                      href="/about-foundation/management"
                      className="block px-4 py-2 text-gray-800 hover:text-secondary transition-colors"
                      onClick={closeDropdown}
                    >
                      Management
                    </Link>
                    <Link
                      href="/about-foundation/institutions"
                      className="block px-4 py-2 text-gray-800 hover:text-secondary transition-colors"
                      onClick={closeDropdown}
                    >
                      Institutions
                    </Link>
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
                    <Link
                      href="/about-school/messages"
                      className="block px-4 py-2 text-gray-800 hover:text-secondary"
                      onClick={closeDropdown}
                    >
                      Chairman's and Principal's Messages
                    </Link>
                    <Link
                      href="/about-school/missionandvission"
                      className="block px-4 py-2 text-gray-800 hover:text-secondary"
                      onClick={closeDropdown}
                    >
                      Mission & Vision
                    </Link>
                    <Link
                      href="/about-school/associations"
                      className="block px-4 py-2 text-gray-800 hover:text-secondary"
                      onClick={closeDropdown}
                    >
                      Associations
                    </Link>
                    <Link
                      href="/about-school/disclosure"
                      className="block px-4 py-2 text-gray-800 hover:text-secondary"
                      onClick={closeDropdown}
                    >
                      Mandatory Disclosure
                    </Link>
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
                    <Link
                      href="/carriculum/academics"
                      className="block px-4 py-2 text-gray-800 hover:text-secondary"
                      onClick={closeDropdown}
                    >
                      Academics
                    </Link>
                    <Link
                      href="/carriculum/nonacademics"
                      className="block px-4 py-2 text-gray-800 hover:text-secondary"
                      onClick={closeDropdown}
                    >
                      Non-Academics
                    </Link>
                    <Link
                      href="/carriculum/labs"
                      className="block px-4 py-2 text-gray-800 hover:text-secondary"
                      onClick={closeDropdown}
                    >
                      Labs
                    </Link>
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
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:text-secondary"
                      onClick={closeDropdown}
                    >
                      School Info
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:text-secondary"
                      onClick={closeDropdown}
                    >
                      TC Certificate
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/gallery"
                className="px-4 py-3 text-white hover:bg-[#0D47A1]/80 transition-colors"
              >
                Gallery
              </Link>
            </div>

            {/* Admission Form Button */}
            <div className="ml-auto">
              <Link href="/AdmissionRegistrationForm" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#0D47A1] px-6 py-2 font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105">
                Admission Form
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0D47A1] py-4">
          <div className="space-y-1 flex flex-col items-center">
            {/* About Foundation Mobile Dropdown */}
            <div className="w-full text-center">
              <button
                className="flex items-center justify-center w-full px-4 py-2 text-white hover:text-secondary"
                onClick={() => handleMobileDropdown("foundation")}
              >
                About Foundation
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${
                    activeMobileDropdown === "foundation" ? "rotate-180" : ""
                  }`} 
                />
              </button>
              {activeMobileDropdown === "foundation" && (
                <div className="bg-[#0D47A1]/50 py-1">
                  <Link
                    href="/about-foundation/objectives"
                    className="block px-8 py-2 text-white hover:bg-[#0D47A1]/60 text-center"
                    onClick={closeMobileMenu}
                  >
                    Objectives
                  </Link>
                  <Link
                    href="/about-foundation/management"
                    className="block px-8 py-2 text-white hover:bg-[#0D47A1]/60 text-center"
                    onClick={closeMobileMenu}
                  >
                    Management
                  </Link>
                  <Link
                    href="/about-foundation/institutions"
                    className="block px-8 py-2 text-white hover:bg-[#0D47A1]/60 text-center"
                    onClick={closeMobileMenu}
                  >
                    Institutions
                  </Link>
                </div>
              )}
            </div>

            {/* About School Mobile Dropdown */}
            <div className="w-full text-center">
              <button
                className="flex items-center justify-center w-full px-4 py-2 text-white hover:text-secondary"
                onClick={() => handleMobileDropdown("school")}
              >
                About School
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${
                    activeMobileDropdown === "school" ? "rotate-180" : ""
                  }`} 
                />
              </button>
              {activeMobileDropdown === "school" && (
                <div className="bg-[#0D47A1]/50 py-1">
                  <Link
                    href="/about-school/messages"
                    className="block px-8 py-2 text-white hover:bg-[#0D47A1]/60 text-center"
                    onClick={closeMobileMenu}
                  >
                    Chairman's and Principal's Messages
                  </Link>
                  <Link
                    href="/about-school/missionandvission"
                    className="block px-8 py-2 text-white hover:bg-[#0D47A1]/60 text-center"
                    onClick={closeMobileMenu}
                  >
                    Mission & Vision
                  </Link>
                  <Link
                    href="/about-school/associations"
                    className="block px-8 py-2 text-white hover:bg-[#0D47A1]/60 text-center"
                    onClick={closeMobileMenu}
                  >
                    Associations
                  </Link>
                  <Link
                    href="/about-school/disclosure"
                    className="block px-8 py-2 text-white hover:bg-[#0D47A1]/60 text-center"
                    onClick={closeMobileMenu}
                  >
                    Mandatory Disclosure
                  </Link>
                </div>
              )}
            </div>

            {/* Curriculum Mobile Dropdown */}
            <div className="w-full text-center">
              <button
                className="flex items-center justify-center w-full px-4 py-2 text-white hover:text-secondary"
                onClick={() => handleMobileDropdown("curriculum")}
              >
                Curriculum
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${
                    activeMobileDropdown === "curriculum" ? "rotate-180" : ""
                  }`} 
                />
              </button>
              {activeMobileDropdown === "curriculum" && (
                <div className="bg-[#0D47A1]/50 py-1">
                  <Link
                    href="/carriculum/academics"
                    className="block px-8 py-2 text-white hover:bg-[#0D47A1]/60 text-center"
                    onClick={closeMobileMenu}
                  >
                    Academics
                  </Link>
                  <Link
                    href="/carriculum/nonacademics"
                    className="block px-8 py-2 text-white hover:bg-[#0D47A1]/60 text-center"
                    onClick={closeMobileMenu}
                  >
                    Non-Academics
                  </Link>
                  <Link
                    href="/carriculum/labs"
                    className="block px-8 py-2 text-white hover:bg-[#0D47A1]/60 text-center"
                    onClick={closeMobileMenu}
                  >
                    Labs
                  </Link>
                </div>
              )}
            </div>

            {/* Documents Mobile Dropdown */}
            <div className="w-full text-center">
              <button
                className="flex items-center justify-center w-full px-4 py-2 text-white hover:text-secondary"
                onClick={() => handleMobileDropdown("documents")}
              >
                Documents
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${
                    activeMobileDropdown === "documents" ? "rotate-180" : ""
                  }`} 
                />
              </button>
              {activeMobileDropdown === "documents" && (
                <div className="bg-[#0D47A1]/50 py-1">
                  <Link
                    href="#"
                    className="block px-8 py-2 text-white hover:bg-[#0D47A1]/60 text-center"
                    onClick={closeMobileMenu}
                  >
                    School Info
                  </Link>
                  <Link
                    href="#"
                    className="block px-8 py-2 text-white hover:bg-[#0D47A1]/60 text-center"
                    onClick={closeMobileMenu}
                  >
                    TC Certificate
                  </Link>
                </div>
              )}
            </div>

            {/* Gallery - Simple Link */}
            <Link 
              href="/gallery" 
              className="block w-full text-center px-4 py-2 text-white hover:text-secondary"
              onClick={closeMobileMenu}
            >
              Gallery
            </Link>

            {/* Admission Form Button */}
            <div className="px-4 pt-2 w-full flex justify-center">
              <Link 
                href="/AdmissionRegistrationForm" 
                className="block w-full max-w-xs bg-yellow-400 text-[#0D47A1] px-6 py-2 font-semibold rounded hover:bg-yellow-300 transition-colors text-center"
                onClick={closeMobileMenu}
              >
                Admission Form
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;