import { useState } from "react";

export default function AdmissionRegistrationForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    classAdmission: '',
    gender: '',
    dateOfBirth: '',
    ageOn31stMay: '',
    email: '',
    presentAddress: '',
    permanentAddress: '',
    fatherName: '',
    motherName: '',
    contactNo: '',
    schoolPreviouslyAttended: '',
    specialRequests: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleClearForm = () => {
    setFormData({
      studentName: '',
      classAdmission: '',
      gender: '',
      dateOfBirth: '',
      ageOn31stMay: '',
      email: '',
      presentAddress: '',
      permanentAddress: '',
      fatherName: '',
      motherName: '',
      contactNo: '',
      schoolPreviouslyAttended: '',
      specialRequests: ''
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-accent py-8 px-4">
      <div className="max-w-7xl mx-auto bg-accent rounded-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold" style={{ color: '#0D47A1' }}>
            ADMISSION REGISTRATION FORM
          </h1>
          <p className="text-gray-600 text-sm mt-2">We make your child happy day after day</p>
        </div>

        <div className="space-y-6 space-x-8">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                name="studentName"
                placeholder="Name of the Student"
                value={formData.studentName}
                onChange={handleChange}
                className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent placeholder-gray-500 text-gray-700"
                style={{ '--tw-ring-color': '#0D47A1', width: '360px', height: '80px', padding: '0 16px' }}
              />
            </div>
            <div>
              <input
                type="text"
                name="classAdmission"
                placeholder="Class to which admission is sought"
                value={formData.classAdmission}
                onChange={handleChange}
                className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent placeholder-gray-500 text-gray-700"
                style={{ '--tw-ring-color': '#0D47A1', width: '360px', height: '80px', padding: '0 16px' }}
              />
            </div>
            <div>
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                value={formData.gender}
                onChange={handleChange}
                className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent placeholder-gray-500 text-gray-700"
                style={{ '--tw-ring-color': '#0D47A1', width: '360px', height: '80px', padding: '0 16px' }}
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                name="dateOfBirth"
                placeholder="dd-mm-yyyy"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent placeholder-gray-500 text-gray-700"
                style={{ '--tw-ring-color': '#0D47A1', width: '360px', height: '80px', padding: '0 16px' }}
              />
            </div>
            <div>
              <input
                type="text"
                name="ageOn31stMay"
                placeholder="Age on 31st May 2025"
                value={formData.ageOn31stMay}
                onChange={handleChange}
                className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent placeholder-gray-500 text-gray-700"
                style={{ '--tw-ring-color': '#0D47A1', width: '360px', height: '80px', padding: '0 16px' }}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="E-mail ID"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent placeholder-gray-500 text-gray-700"
                style={{ '--tw-ring-color': '#0D47A1', width: '360px', height: '80px', padding: '0 16px' }}
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                name="presentAddress"
                placeholder="Present Address"
                value={formData.presentAddress}
                onChange={handleChange}
                className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent placeholder-gray-500 text-gray-700"
                style={{ '--tw-ring-color': '#0D47A1', width: '360px', height: '80px', padding: '0 16px' }}
              />
            </div>
            <div>
              <input
                type="text"
                name="permanentAddress"
                placeholder="Permanent Address"
                value={formData.permanentAddress}
                onChange={handleChange}
                className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent placeholder-gray-500 text-gray-700"
                style={{ '--tw-ring-color': '#0D47A1', width: '360px', height: '80px', padding: '0 16px' }}
              />
            </div>
            <div>
              <input
                type="text"
                name="fatherName"
                placeholder="Father's Name"
                value={formData.fatherName}
                onChange={handleChange}
                className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent placeholder-gray-500 text-gray-700"
                style={{ '--tw-ring-color': '#0D47A1', width: '360px', height: '80px', padding: '0 16px' }}
              />
            </div>
          </div>

          {/* Fourth Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                name="motherName"
                placeholder="Mother's Name"
                value={formData.motherName}
                onChange={handleChange}
                className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent placeholder-gray-500 text-gray-700"
                style={{ '--tw-ring-color': '#0D47A1', width: '360px', height: '80px', padding: '0 16px' }}
              />
            </div>
            <div>
              <input
                type="tel"
                name="contactNo"
                placeholder="Contact No."
                value={formData.contactNo}
                onChange={handleChange}
                className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent placeholder-gray-500 text-gray-700"
                style={{ '--tw-ring-color': '#0D47A1', width: '360px', height: '80px', padding: '0 16px' }}
              />
            </div>
            <div>
              <input
                type="text"
                name="schoolPreviouslyAttended"
                placeholder="School previously attended"
                value={formData.schoolPreviouslyAttended}
                onChange={handleChange}
                className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent placeholder-gray-500 text-gray-700"
                style={{ '--tw-ring-color': '#0D47A1', width: '360px', height: '80px', padding: '0 16px' }}
              />
            </div>
          </div>

          {/* Special Requests */}
          <div className="w-full">
            <textarea
              name="specialRequests"
              placeholder="Special requests if any"
              value={formData.specialRequests}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent placeholder-gray-500 text-gray-700 resize-none"
              style={{ '--tw-ring-color': '#0D47A1' }}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <button
              onClick={handleClearForm}
              className="px-8 py-3 border-2 font-medium rounded-md transition duration-200 hover:bg-blue-50"
              style={{ 
                borderColor: '#0D47A1', 
                color: '#0D47A1'
              }}
            >
              Clear form
            </button>
            <button
              onClick={handleSubmit}
              className="px-8 py-3 text-white font-medium rounded-md transition duration-200"
              style={{ 
                backgroundColor: '#FBC02D',
                '&:hover': { backgroundColor: '#F9A825' }
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#F9A825'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#FBC02D'}
            >
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}