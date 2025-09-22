import { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

// Simple Skeleton component
const Skeleton = ({ height = "h-16", width = "w-full", className = "" }) => (
  <div className={`${height} ${width} ${className} bg-gray-200 rounded-md animate-pulse`}></div>
);

// Input Skeleton
const InputSkeleton = () => (
  <div className="space-y-1">
    <Skeleton height="h-16 sm:h-20" />
  </div>
);

// Textarea Skeleton
const TextareaSkeleton = ({ rows = 3 }) => (
  <Skeleton height={rows === 3 ? "h-24" : "h-32"} />
);

// Button Skeleton
const ButtonSkeleton = () => (
  <Skeleton height="h-12" width="w-full sm:w-auto" className="sm:w-32" />
);

export default function AdmissionForm() {
  const [isLoading, setIsLoading] = useState(true);
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

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Generate dynamic academic year
  const getCurrentAcademicYear = () => {
    const currentYear = new Date().getFullYear();
    return `${currentYear} - ${currentYear + 1}`;
  };

  // Class options for dropdown
  const classOptions = [
    'KG Section',
    'Class I',
    'Class II', 
    'Class III',
    'Class IV',
    'Class V',
    'Class VI',
    'Class VII',
    'Class VIII',
    'Class IX',
    'Class X',
    'Class XI',
    'Class XII'
  ];

  // Sanitization functions
  const sanitizeText = (text) => {
    return text.trim().replace(/[<>\"']/g, '');
  };

  const sanitizeEmail = (email) => {
    return email.trim().toLowerCase().replace(/[<>\"']/g, '');
  };

  const sanitizePhone = (phone) => {
    return phone.replace(/[^0-9+\-\s()]/g, '');
  };

  const sanitizeNumber = (number) => {
    return number.replace(/[^0-9]/g, '');
  };

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/[^0-9]/g, ''));
  };

  const validateAge = (age) => {
    const numAge = parseInt(age);
    return numAge >= 1 && numAge <= 25;
  };

  const validateDate = (date) => {
    const selectedDate = new Date(date);
    const currentDate = new Date();
    const minDate = new Date(currentDate.getFullYear() - 25, 0, 1);
    const maxDate = new Date(currentDate.getFullYear() - 1, 11, 31);
    return selectedDate >= minDate && selectedDate <= maxDate;
  };

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'studentName':
        if (!value.trim()) {
          error = 'Student name is required';
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters';
        } else if (!/^[a-zA-Z\s.]+$/.test(value.trim())) {
          error = 'Name can only contain letters, spaces, and periods';
        }
        break;

      case 'classAdmission':
        if (!value.trim()) {
          error = 'Class admission is required';
        }
        break;

      case 'gender':
        if (!value) {
          error = 'Gender selection is required';
        }
        break;

      case 'dateOfBirth':
        if (!value) {
          error = 'Date of birth is required';
        } else if (!validateDate(value)) {
          error = 'Please enter a valid date of birth';
        }
        break;

      case 'ageOn31stMay':
        if (value && !validateAge(value)) {
          error = 'Age must be between 1 and 25';
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!validateEmail(value)) {
          error = 'Please enter a valid email address';
        }
        break;

      case 'presentAddress':
        if (!value.trim()) {
          error = 'Present address is required';
        } else if (value.trim().length < 10) {
          error = 'Address must be at least 10 characters';
        }
        break;

      case 'contactNo':
        if (!value.trim()) {
          error = 'Contact number is required';
        } else if (!validatePhone(value)) {
          error = 'Please enter a valid 10-digit phone number';
        }
        break;

      case 'fatherName':
        if (value.trim() && !/^[a-zA-Z\s.]+$/.test(value.trim())) {
          error = 'Name can only contain letters, spaces, and periods';
        }
        break;

      case 'motherName':
        if (value.trim() && !/^[a-zA-Z\s.]+$/.test(value.trim())) {
          error = 'Name can only contain letters, spaces, and periods';
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let sanitizedValue = value;

    // Apply appropriate sanitization based on field type
    switch (name) {
      case 'studentName':
      case 'fatherName':
      case 'motherName':
      case 'schoolPreviouslyAttended':
        sanitizedValue = sanitizeText(value);
        break;
      case 'email':
        sanitizedValue = sanitizeEmail(value);
        break;
      case 'contactNo':
        sanitizedValue = sanitizePhone(value);
        break;
      case 'ageOn31stMay':
        sanitizedValue = sanitizeNumber(value);
        break;
      case 'presentAddress':
      case 'permanentAddress':
      case 'specialRequests':
        sanitizedValue = value.trim();
        break;
      default:
        sanitizedValue = value;
    }

    setFormData({
      ...formData,
      [name]: sanitizedValue
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    
    if (error) {
      setErrors({
        ...errors,
        [name]: error
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showPopupMessage = (type, title, message) => {
    if (type === 'success') {
      toast.success(message);
    } else if (type === 'error') {
      toast.error(message);
    } else {
      toast(message);
    }
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
    setErrors({});
    showPopupMessage('info', 'Form Cleared', 'All form fields have been cleared successfully.');
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      showPopupMessage('error', 'Validation Error', 'Please correct the errors in the form before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      showPopupMessage('success', 'Success!', 'Your admission application has been submitted successfully. We will contact you soon.');
      handleClearForm();
    } catch (error) {
      showPopupMessage('error', 'Network Error', 'Unable to connect to the server. Please check your internet connection and try again.');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Common input classes
  const inputClasses = "w-full h-16 sm:h-20 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent placeholder-gray-500 text-gray-700 text-sm sm:text-base";
  const errorInputClasses = "w-full h-16 sm:h-20 px-4 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent placeholder-gray-500 text-gray-700 text-sm sm:text-base";

  const getInputClasses = (fieldName) => {
    return errors[fieldName] ? errorInputClasses : inputClasses;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-4 sm:py-8 px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-lg p-4 sm:p-8 shadow-sm">
          {/* Header Skeleton */}
          <div className="text-center mb-6 sm:mb-8">
            <Skeleton height="h-8" width="w-80" className="mx-auto mb-2" />
            <Skeleton height="h-4" width="w-64" className="mx-auto" />
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* First Row Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <InputSkeleton />
              <InputSkeleton />
              <InputSkeleton />
            </div>

            {/* Second Row Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <InputSkeleton />
              <InputSkeleton />
              <InputSkeleton />
            </div>

            {/* Third Row Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <TextareaSkeleton />
              <TextareaSkeleton />
              <InputSkeleton />
            </div>

            {/* Fourth Row Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <InputSkeleton />
              <InputSkeleton />
              <InputSkeleton />
            </div>

            {/* Special Requests Skeleton */}
            <div className="w-full">
              <TextareaSkeleton rows={4} />
            </div>

            {/* Buttons Skeleton */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
              <ButtonSkeleton />
              <ButtonSkeleton />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8 px-4">
      <Toaster position="top-right" />

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
                onBlur={handleBlur}
                className={getInputClasses('studentName')}
                style={{ '--tw-ring-color': errors.studentName ? '#ef4444' : '#1e40af' }}
                required
              />
              {errors.studentName && <p className="mt-1 text-sm text-red-600">{errors.studentName}</p>}
            </div>
            <div>
              <select
                name="classAdmission"
                value={formData.classAdmission}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClasses('classAdmission')}
                style={{ '--tw-ring-color': errors.classAdmission ? '#ef4444' : '#1e40af' }}
                required
              >
                <option value="">Class to which admission is sought ({getCurrentAcademicYear()})</option>
                {classOptions.map((classOption, index) => (
                  <option key={index} value={classOption}>
                    {classOption}
                  </option>
                ))}
              </select>
              {errors.classAdmission && <p className="mt-1 text-sm text-red-600">{errors.classAdmission}</p>}
            </div>
            <div>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClasses('gender')}
                style={{ '--tw-ring-color': errors.gender ? '#ef4444' : '#1e40af' }}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender}</p>}
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
                onBlur={handleBlur}
                className={getInputClasses('dateOfBirth')}
                style={{ '--tw-ring-color': errors.dateOfBirth ? '#ef4444' : '#1e40af' }}
                required
              />
              {errors.dateOfBirth && <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth}</p>}
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
                onBlur={handleBlur}
                className={getInputClasses('ageOn31stMay')}
                style={{ '--tw-ring-color': errors.ageOn31stMay ? '#ef4444' : '#1e40af' }}
              />
              {errors.ageOn31stMay && <p className="mt-1 text-sm text-red-600">{errors.ageOn31stMay}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="E-mail ID"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClasses('email')}
                style={{ '--tw-ring-color': errors.email ? '#ef4444' : '#1e40af' }}
                required
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
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
                onBlur={handleBlur}
                rows={3}
                className={`w-full px-4 py-3 border ${errors.presentAddress ? 'border-red-300' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:border-transparent placeholder-gray-500 text-gray-700 resize-none text-sm sm:text-base`}
                style={{ '--tw-ring-color': errors.presentAddress ? '#ef4444' : '#1e40af' }}
              />
              {errors.presentAddress && <p className="mt-1 text-sm text-red-600">{errors.presentAddress}</p>}
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
                onBlur={handleBlur}
                className={getInputClasses('fatherName')}
                style={{ '--tw-ring-color': errors.fatherName ? '#ef4444' : '#1e40af' }}
              />
              {errors.fatherName && <p className="mt-1 text-sm text-red-600">{errors.fatherName}</p>}
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
                onBlur={handleBlur}
                className={getInputClasses('motherName')}
                style={{ '--tw-ring-color': errors.motherName ? '#ef4444' : '#1e40af' }}
              />
              {errors.motherName && <p className="mt-1 text-sm text-red-600">{errors.motherName}</p>}
            </div>
            <div>
              <input
                type="tel"
                name="contactNo"
                placeholder="Contact No."
                pattern="[0-9]{10}"
                value={formData.contactNo}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClasses('contactNo')}
                style={{ '--tw-ring-color': errors.contactNo ? '#ef4444' : '#1e40af' }}
              />
              {errors.contactNo && <p className="mt-1 text-sm text-red-600">{errors.contactNo}</p>}
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
              disabled={isSubmitting}
            >
              Clear form
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md transition duration-200 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}