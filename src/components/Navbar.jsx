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
              alt="Sree Buddha Central School"
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
                className="flex items-center gap-1 hover:underline hover:text-secondary transition-colors"
                aria-label="Call us at 0479-2562489"
                title="Call: 0479-2562489"
              >
                <Phone className="w-4 h-4" />
                <span>0479-2562489</span>
              </Link>
              <Link
                href="mailto:sbcskarunagappally@gmail.com"
                className="flex items-center gap-1 hover:underline hover:text-secondary transition-colors"
                aria-label="Email us at sbcskarunagappally@gmail.com"
                title="Email: sbcskarunagappally@gmail.com"
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
            {/* Anniversary Badge */}
            <img src="/excellence.png" alt="Sree Buddha Central School" className="w-30 h-16 object-contain" />
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
              <div className="relative group">
                <button
                  className="flex items-center px-4 py-3 text-white hover:bg-[#0D47A1]/80 transition-colors"
                  onClick={() => handleDropdown("foundation")}
                >
                  About Foundation
                  <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-3 w-52 z-50 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <Link
                    href="/about-foundation/objectives"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    Objectives
                  </Link>
                  <Link
                    href="/about-foundation/management"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    Management
                  </Link>
                  <Link
                    href="/about-foundation/institutions"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    Institutions
                  </Link>
                </div>
              </div>

              {/* About School Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center px-4 py-3 text-white hover:bg-[#0D47A1]/80 transition-colors"
                  onClick={() => handleDropdown("school")}
                >
                  About School
                  <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-3 w-64 z-50 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <Link
                    href="/about-school/messages"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    Chairman's and Principal's Messages
                  </Link>
                  <Link
                    href="/about-school/missionandvission"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    Mission & Vision
                  </Link>
                  <Link
                    href="/about-school/associations"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    Associations
                  </Link>
                  <Link
                    href="/about-school/departments"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    Departments
                  </Link>
                </div>
              </div>

              {/* Facilities Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center px-4 py-3 text-white hover:bg-[#0D47A1]/80 transition-colors"
                  onClick={() => handleDropdown("Facilities")}
                >
                  Facilities
                  <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-3 w-48 z-50 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  {/* <Link
                    href="/facilities/academics"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    Academics
                  </Link>
                  <Link
                    href="/facilities/nonacademics"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    Non-Academics
                  </Link> */}
                  <Link
                    href="/facilities/smartclass"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    Smart Class
                  </Link>
                  <Link
                    href="/facilities/library"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    Library
                  </Link>
                  <Link
                    href="/facilities/labs"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    Labs
                  </Link>
                  <Link
                    href="/facilities/atl"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    ATL
                  </Link>
                  <Link
                    href="/facilities/auditorium"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    Auditorium
                  </Link>
                  <Link
                    href="/facilities/conferencehall"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    Conference Hall
                  </Link>
                  <Link
                    href="/facilities/playground"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    Playground
                  </Link>
                  <Link
                    href="/facilities/sportsroom"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    Sports Room
                  </Link>
                </div>
              </div>

              {/* academic Dropdown */}
              {/* <div className="relative group">
                <button
                  className="flex items-center px-4 py-3 text-white hover:bg-[#0D47A1]/80 transition-colors"
                  onClick={() => handleDropdown("documents")}
                >
                  Academic
                  <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-3 w-56 z-50 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <Link
                    href="/academics/preprimary"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    Pre-Primary
                  </Link>
                  <Link
                    href="/academics/primary"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    Primary
                  </Link>
                  <Link
                    href="/academics/secondary"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    secondary
                  </Link>
                  <Link
                    href="/academics/seniorSecondary"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    Senior Secondary
                  </Link>
                  <Link
                    href="/academics/yearPlanAndReport"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    Year Plan & Annual Report
                  </Link>
                  <Link
                    href="/academics/result"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    Result
                  </Link>
                </div>
              </div> */}
                {/* Learning Pathways Dropdown (Academic + Non-Academic) */}
                <div className="relative group">
                  <button
                    className="flex items-center px-4 py-3 text-white hover:bg-[#0D47A1]/80 transition-colors"
                    onClick={() => handleDropdown("learning")}
                  >
                     Pathways
                    <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-4 w-96 z-50 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <div className="grid grid-cols-2 gap-4 px-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-600 mb-2">Academic</h4>
                        <Link href="/academics/preprimary" className="block px-3 py-1 text-gray-800 hover:text-secondary hover:bg-gray-50 rounded" onClick={closeDropdown}>Pre-Primary</Link>
                        <Link href="/academics/primary" className="block px-3 py-1 text-gray-800 hover:text-secondary hover:bg-gray-50 rounded" onClick={closeDropdown}>Primary</Link>
                        <Link href="/academics/secondary" className="block px-3 py-1 text-gray-800 hover:text-secondary hover:bg-gray-50 rounded" onClick={closeDropdown}>Secondary</Link>
                        <Link href="/academics/seniorSecondary" className="block px-3 py-1 text-gray-800 hover:text-secondary hover:bg-gray-50 rounded" onClick={closeDropdown}>Senior Secondary</Link>
                        <Link href="/academics/yearPlanAndReport" className="block px-3 py-1 text-gray-800 hover:text-secondary hover:bg-gray-50 rounded" onClick={closeDropdown}>Year Plan & Annual Report</Link>
                        <Link href="/academics/result" className="block px-3 py-1 text-gray-800 hover:text-secondary hover:bg-gray-50 rounded" onClick={closeDropdown}>Result</Link>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-600 mb-2">Non-Academic</h4>
                        <Link href="/non-academics/events" className="block px-3 py-1 text-gray-800 hover:text-secondary hover:bg-gray-50 rounded" onClick={closeDropdown}>Events</Link>
                        <Link href="/non-academics/clubs" className="block px-3 py-1 text-gray-800 hover:text-secondary hover:bg-gray-50 rounded" onClick={closeDropdown}>Clubs</Link>
                        <Link href="/non-academics/houses" className="block px-3 py-1 text-gray-800 hover:text-secondary hover:bg-gray-50 rounded" onClick={closeDropdown}>Houses</Link>
                      </div>
                    </div>
                  </div>
                </div>
              {/* Documents Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center px-4 py-3 text-white hover:bg-[#0D47A1]/80 transition-colors"
                  onClick={() => handleDropdown("documents")}
                >
                  Documents
                  <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-3 w-56 z-50 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <Link
                    href="/documents/tc"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    TC Certificate
                  </Link>
                  <Link
                    href="/documents/disclosure"
                    className="block px-4 py-2 text-gray-800 hover:text-secondary hover:bg-gray-50 transition-all duration-200"
                    onClick={closeDropdown}
                  >
                    Mandatory Disclosure
                  </Link>
                </div>
              </div>

              <Link
                href="/gallery"
                className="px-4 py-3 text-white hover:bg-[#0D47A1]/80 transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/achievements"
                className="px-4 py-3 text-white hover:bg-[#0D47A1]/80 transition-colors"
              >
                Achievements
              </Link>
            </div>

            {/* Admission Form Button */}
            <div className="ml-auto">
              <Link href="/admission" className="bg-gradient-to-r from-white to-white text-[#0D47A1] px-6 py-2 font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105">
                Admission Form
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Background overlay */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
            onClick={closeMobileMenu}
          ></div>
          
          {/* Side drawer */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl overflow-y-auto" style={{animation: 'slideInRight 0.3s ease-in-out'}}>
          {/* Header with close button */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-[#0D47A1] text-lg font-semibold">Menu</h2>
            <button 
              onClick={closeMobileMenu}
              className="text-[#0D47A1] p-2 hover:bg-gray-100 rounded transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
            
            {/* Menu content */}
            <div className="py-4">
              <div className="space-y-1 flex flex-col">
                {/* About Foundation Mobile Dropdown */}
                <div className="w-full">
                  <button
                    className="flex items-center justify-between w-full px-6 py-3 text-gray-800 hover:bg-gray-100 transition-colors"
                    onClick={() => handleMobileDropdown("foundation")}
                  >
                    About Foundation
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeMobileDropdown === "foundation" ? "rotate-180" : ""
                      }`} 
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeMobileDropdown === "foundation" ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-gray-50 border-l-2 border-[#0D47A1] ml-4">
                      <Link
                        href="/about-foundation/objectives"
                        className="block px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        Objectives
                      </Link>
                      <Link
                        href="/about-foundation/management"
                        className="block px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        Management
                      </Link>
                      <Link
                        href="/about-foundation/institutions"
                        className="block px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        Institutions
                      </Link>
                    </div>
                  </div>
                </div>

                {/* About School Mobile Dropdown */}
                <div className="w-full">
                  <button
                    className="flex items-center justify-between w-full px-6 py-3 text-gray-800 hover:bg-gray-100 transition-colors"
                    onClick={() => handleMobileDropdown("school")}
                  >
                    About School
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeMobileDropdown === "school" ? "rotate-180" : ""
                      }`} 
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeMobileDropdown === "school" ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-gray-50 border-l-2 border-[#0D47A1] ml-4">
                      <Link
                        href="/about-school/messages"
                        className="block px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        Chairman's and Principal's Messages
                      </Link>
                      <Link
                        href="/about-school/missionandvission"
                        className="block px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        Mission & Vision
                      </Link>
                      <Link
                        href="/about-school/associations"
                        className="block px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        Associations
                      </Link>
                      <Link
                        href="/about-school/departments"
                        className="block px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        Departments
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Facilities Mobile Dropdown */}
                <div className="w-full">
                  <button
                    className="flex items-center justify-between w-full px-6 py-3 text-gray-800 hover:bg-gray-100 transition-colors"
                    onClick={() => handleMobileDropdown("Facilities")}
                  >
                    Facilities
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeMobileDropdown === "Facilities" ? "rotate-180" : ""
                      }`} 
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeMobileDropdown === "Facilities" ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-gray-50 border-l-2 border-[#0D47A1] ml-4">
                      {/* <Link
                        href="/facilities/academics"
                        className="block px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        Academics
                      </Link>
                      <Link
                        href="/facilities/nonacademics"
                        className="block px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        Non-Academics
                      </Link> */}
                      <Link
                        href="/facilities/smartclass"
                        className="block px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        Smart Class
                      </Link>
                      <Link
                        href="/facilities/library"
                        className="block px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        Library
                      </Link>
                      <Link
                        href="/facilities/labs"
                        className="block px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        Labs
                      </Link>
                      <Link
                        href="/facilities/atl"
                        className="block px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        ATL
                      </Link>
                      <Link
                        href="/facilities/auditorium"
                        className="block px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        Auditorium
                      </Link>
                      <Link
                        href="/facilities/conferencehall"
                        className="block px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        conference Hall
                      </Link>      
                      <Link
                        href="/facilities/playground"
                        className="block px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        Play ground
                      </Link>      
                      <Link
                        href="/facilities/sportsroom"
                        className="block px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        Sports Room
                      </Link>      
                    </div>
                  </div>
                </div>

                {/* Learning Pathways Mobile Dropdown */}
                <div className="w-full">
                  <button
                    className="flex items-center justify-between w-full px-6 py-3 text-gray-800 hover:bg-gray-100 transition-colors"
                    onClick={() => handleMobileDropdown("learning")}
                  >
                    Pathways
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeMobileDropdown === "learning" ? "rotate-180" : ""
                      }`} 
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeMobileDropdown === "learning" ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-gray-50 border-l-2 border-[#0D47A1] ml-4">
                      <div className="px-4 py-2">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Academic</h4>
                        <Link href="/academics/preprimary" className="block px-4 py-1 text-gray-700 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Pre-Primary</Link>
                        <Link href="/academics/primary" className="block px-4 py-1 text-gray-700 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Primary</Link>
                        <Link href="/academics/secondary" className="block px-4 py-1 text-gray-700 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Secondary</Link>
                        <Link href="/academics/seniorSecondary" className="block px-4 py-1 text-gray-700 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Senior Secondary</Link>
                        <Link href="/academics/yearPlanAndReport" className="block px-4 py-1 text-gray-700 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Year Plan & Annual Report</Link>
                        <Link href="/academics/result" className="block px-4 py-1 text-gray-700 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Result</Link>
                      </div>
                      <div className="px-4 py-2 border-t border-gray-100">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Non-Academic</h4>
                        <Link href="/non-academics/events" className="block px-4 py-1 text-gray-700 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Events</Link>
                        <Link href="/non-academics/clubs" className="block px-4 py-1 text-gray-700 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Clubs</Link>
                        <Link href="/non-academics/houses" className="block px-4 py-1 text-gray-700 hover:bg-gray-100 rounded" onClick={closeMobileMenu}>Houses</Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Documents Mobile Dropdown */}
                <div className="w-full">
                  <button
                    className="flex items-center justify-between w-full px-6 py-3 text-gray-800 hover:bg-gray-100 transition-colors"
                    onClick={() => handleMobileDropdown("documents")}
                  >
                    Documents
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeMobileDropdown === "documents" ? "rotate-180" : ""
                      }`} 
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeMobileDropdown === "documents" ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-gray-50 border-l-2 border-[#0D47A1] ml-4">
                      <Link
                        href="/documents/disclosure"
                        className="block px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        Mandatory Disclosure
                      </Link>
                      <Link
                        href="/documents/tc"
                        className="block px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        TC Certificate
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Gallery - Simple Link */}
                <Link 
                  href="/gallery" 
                  className="block w-full px-6 py-3 text-gray-800 hover:bg-gray-100 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Gallery
                </Link>
                
                <Link 
                  href="/achievements" 
                  className="block w-full px-6 py-3 text-gray-800 hover:bg-gray-100 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Achievements
                </Link>

                {/* Admission Form Button */}
                <div className="px-6 pt-4 w-full">
                  <Link 
                    href="/admission" 
                    className="block w-full bg-[#0D47A1] text-white px-6 py-3 font-semibold rounded-lg hover:bg-[#0D47A1]/90 transition-all duration-200 text-center transform hover:scale-105"
                    onClick={closeMobileMenu}
                  >
                    Admission Form
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;