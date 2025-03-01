import React, { useState, useEffect } from 'react';

export default function EligibilityModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: 'hsc', // Default value
    cgpa: '',
    ielts: 'no', // Default value
    ieltsScore: '',
    preferredCountry: '',
    budget: '',
    captcha: '',
    num1: 0,
    num2: 0,
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (isOpen) {
      fetchCaptchaNumbers();
    }
  }, [isOpen]);

  const fetchCaptchaNumbers = async () => {
    const response = await fetch('/api/student-info');
    const data = await response.json();
    setFormData((prevData) => ({
      ...prevData,
      num1: data.num1,
      num2: data.num2,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    console.log("student form submitted");
    try {
      const response = await fetch('/api/student-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Form submitted successfully!');
        setTimeout(() => {
          onClose();
          setFormData({
            name: '',
            email: '',
            phone: '',
            education: 'hsc',
            cgpa: '',
            ielts: 'no',
            ieltsScore: '',
            preferredCountry: '',
            budget: '',
            captcha: '',
            num1: 0,
            num2: 0,
          });
        }, 2000);
      } else {
        setStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      setStatus('Failed to submit form. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex justify-center" style={{top: "0%", height: "100%", left: "50%", overflowY: "auto"}}>
      {/* Blurred Overlay */}
      <div 
        className="fixed inset-0 backdrop-blur-sm bg-black/50  flex items-center justify-center" style={{left: "15%"}}
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
        <div className="fixed inset-0 flex items-center justify-center p-4 m-10 " style={{width: "100%", height: "100%", maxHeight: "100vh", overflowY: "auto", borderRadius: "10px", background: "rgba(134, 99, 167, 0.22)", backdropFilter: "blur(10px)"}}>
          <div className="bg-white rounded-2xl shadow-2xl w-full md:w-[600px] max-h-[90vh] overflow-y-auto relative" style={{width: "40%" ,padding:"5%"}}>
            {/* Purple Gradient Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-t-2xl">
            <h2 className="text-2xl font-bold text-center text-black">
              Student Information Form
            </h2>
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-white/80 hover:text-white transition-colors"
              style={{top: "10%", left: "90%"}}
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Form Fields - Single Column */}
              {/* Name */}
              <div className="form-group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone */}
              <div className="form-group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Education Level */}
              <div className="form-group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Latest Education Level *
                </label>
                <select
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                  value={formData.education}
                  onChange={(e) => setFormData({...formData, education: e.target.value})}
                >
                  <option value="hsc">HSC</option>
                  <option value="diploma">Diploma</option>
                  <option value="bachelors">Bachelors</option>
                  <option value="masters">Masters</option>
                </select>
              </div>

              {/* CGPA */}
              <div className="form-group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  CGPA/GPA *
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="5"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                  value={formData.cgpa}
                  onChange={(e) => setFormData({...formData, cgpa: e.target.value})}
                  placeholder="Enter your CGPA"
                />
              </div>

              {/* IELTS */}
              <div className="form-group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Have you taken IELTS? *
                </label>
                <select
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                  value={formData.ielts}
                  onChange={(e) => setFormData({...formData, ielts: e.target.value})}
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                  <option value="preparing">Preparing</option>
                </select>
              </div>

              {/* Conditional IELTS Score */}
              {formData.ielts === 'yes' && (
                <div className="form-group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    IELTS Score
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    min="0"
                    max="9"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                    value={formData.ieltsScore}
                    onChange={(e) => setFormData({...formData, ieltsScore: e.target.value})}
                    placeholder="Enter your IELTS score"
                  />
                </div>
              )}

              {/* Preferred Country */}
              <div className="form-group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Country *
                </label>
                <select
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                  value={formData.preferredCountry}
                  onChange={(e) => setFormData({...formData, preferredCountry: e.target.value})}
                >
                  <option value="">Select a country</option>
                  <option value="uk">United Kingdom</option>
                  <option value="usa">United States</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="malaysia">Malaysia</option>
                </select>
              </div>

              {/* Budget Range */}
              <div className="form-group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget Range (BDT) *
                </label>
                <select
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                >
                  <option value="">Select budget range</option>
                  <option value="15-20">15-20 Lakh</option>
                  <option value="20-25">20-25 Lakh</option>
                  <option value="25-30">25-30 Lakh</option>
                  <option value="30+">30+ Lakh</option>
                </select>
              </div>

              {/* CAPTCHA */}
              <div className="form-group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What is {formData.num1} + {formData.num2}? *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                  value={formData.captcha}
                  onChange={(e) => setFormData({...formData, captcha: e.target.value})}
                  placeholder="Enter the result"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex justify-center mt-6">
                <button
                  type="submit"
                  className=""
                  style={{
                    color: "rgb(209, 178, 236)",
                    background: "#333764",
                    boxShadow: "0 4px 15px rgba(155, 81, 224, 0.3)",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "40%",
                    cursor: "pointer"
                  }}
                >
                  Submit Application
                </button>
                {status && (
                  <p className="mt-4 text-center font-medium text-gray-700">
                    {status}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
