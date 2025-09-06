import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const handleClear = () => {
    setFormData({
      studentName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 md:py-8">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-primary">
          Contact Us
        </h2>
        <p className="text-base md:text-lg text-light-dark">
          We make your child happy day after day
        </p>
      </div>

      {/* Form Container */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-center gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Left Side - Input Fields */}
          <div className="flex flex-col gap-4 w-full lg:w-auto">
            {/* Name Input */}
            <input
              type="text"
              name="studentName"
              placeholder="Name of the Student"
              value={formData.studentName}
              onChange={handleChange}
              className="px-4 py-3 text-base rounded-lg focus:outline-none focus:border-primary border-2 border-light-dark text-dark w-full lg:w-[550px] h-16 md:h-20"
            />
            
            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="E-mail ID"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-3 text-base rounded-lg focus:outline-none focus:border-primary border-2 border-light-dark text-dark w-full lg:w-[550px] h-16 md:h-20"
            />
            
            {/* Phone Input */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="px-4 py-3 text-base rounded-lg focus:outline-none focus:border-primary border-2 border-light-dark text-dark w-full lg:w-[550px] h-16 md:h-20"
            />
          </div>

          {/* Right Side - Textarea */}
          <div className="w-full lg:w-auto">
            <textarea
              name="message"
              placeholder="Class to which admission is sought"
              value={formData.message}
              onChange={handleChange}
              className="px-4 py-3 text-base rounded-lg focus:outline-none focus:border-primary border-2 border-light-dark text-dark w-full lg:w-[550px] h-48 md:h-64 lg:h-72"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 md:mb-12">
          <button
            type="button"
            onClick={handleClear}
            className="px-6 py-3 text-base rounded-lg border-2 border-light-dark text-light-dark hover:bg-neutral transition-colors"
          >
            Clear form
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="px-6 py-3 text-base rounded-lg text-white bg-secondary hover:opacity-90 transition-opacity"
          >
            Submit form
          </button>
        </div>

        {/* Map */}
        <div className="flex justify-center">
          <iframe 
            className="rounded-lg w-full max-w-4xl h-48 md:h-60 lg:h-72" 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15349.119451110402!2d76.555631!3d9.074611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b060486d944e3ef%3A0x1fc0ffd45235fe05!2zU3JlZSBCdWRkaGEgQ2VudHJhbCBTY2hvb2wg4LS24LWN4LSw4LWAIOC0rOC1geC0puC1jeC0pyDgtLjgtYbgtbvgtJ_gtY3gtLDgtb0g4LS44LWN4LSV4LWC4LW-!5e1!3m2!1sen!2sin!4v1757143485544!5m2!1sen!2sin" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}