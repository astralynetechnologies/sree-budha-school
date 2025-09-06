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

  // Common input classes
  const inputClasses = "w-full h-16 sm:h-20 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent placeholder-gray-500 text-gray-700 text-sm sm:text-base";

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-lg p-4 sm:p-8 shadow-sm">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-bold text-blue-900">
            ADMISSION REGISTRATION FORM
          </h1>
          <p className="text-gray-600 text-xs sm:text-sm mt-2">We make your child happy day after day</p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                name="studentName"
                placeholder="Name of the Student"
                value={formData.studentName}
                onChange={handleChange}
                className={inputClasses}
                style={{ '--tw-ring-color': '#1e40af' }}
              />
            </div>
            <div>
              <input
                type="text"
                name="classAdmission"
                placeholder="Class to which admission is sought"
                value={formData.classAdmission}
                onChange={handleChange}
                className={inputClasses}
                style={{ '--tw-ring-color': '#1e40af' }}
              />
            </div>
            <div>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={inputClasses}
                style={{ '--tw-ring-color': '#1e40af' }}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <input
                type="date"
                name="dateOfBirth"
                placeholder="Date of Birth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className={inputClasses}
                style={{ '--tw-ring-color': '#1e40af' }}
              />
            </div>
            <div>
              <input
                type="number"
                name="ageOn31stMay"
                placeholder="Age on 31st May 2025"
                min="1"
                max="25"
                value={formData.ageOn31stMay}
                onChange={handleChange}
                className={inputClasses}
                style={{ '--tw-ring-color': '#1e40af' }}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="E-mail ID"
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                style={{ '--tw-ring-color': '#1e40af' }}
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <textarea
                name="presentAddress"
                placeholder="Present Address"
                value={formData.presentAddress}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent placeholder-gray-500 text-gray-700 resize-none text-sm sm:text-base"
                style={{ '--tw-ring-color': '#1e40af' }}
              />
            </div>
            <div>
              <textarea
                name="permanentAddress"
                placeholder="Permanent Address"
                value={formData.permanentAddress}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent placeholder-gray-500 text-gray-700 resize-none text-sm sm:text-base"
                style={{ '--tw-ring-color': '#1e40af' }}
              />
            </div>
            <div>
              <input
                type="text"
                name="fatherName"
                placeholder="Father's Name"
                value={formData.fatherName}
                onChange={handleChange}
                className={inputClasses}
                style={{ '--tw-ring-color': '#1e40af' }}
              />
            </div>
          </div>

          {/* Fourth Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                name="motherName"
                placeholder="Mother's Name"
                value={formData.motherName}
                onChange={handleChange}
                className={inputClasses}
                style={{ '--tw-ring-color': '#1e40af' }}
              />
            </div>
            <div>
              <input
                type="tel"
                name="contactNo"
                placeholder="Contact No."
                pattern="[0-9]{10}"
                value={formData.contactNo}
                onChange={handleChange}
                className={inputClasses}
                style={{ '--tw-ring-color': '#1e40af' }}
              />
            </div>
            <div>
              <input
                type="text"
                name="schoolPreviouslyAttended"
                placeholder="School previously attended"
                value={formData.schoolPreviouslyAttended}
                onChange={handleChange}
                className={inputClasses}
                style={{ '--tw-ring-color': '#1e40af' }}
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
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent placeholder-gray-500 text-gray-700 resize-none text-sm sm:text-base"
              style={{ '--tw-ring-color': '#1e40af' }}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
            <button
              onClick={handleClearForm}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-blue-900 text-blue-900 font-medium rounded-md transition duration-200 hover:bg-blue-50 text-sm sm:text-base"
            >
              Clear form
            </button>
            <button
              onClick={handleSubmit}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md transition duration-200 text-sm sm:text-base"
            >
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}