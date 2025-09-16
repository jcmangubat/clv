import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { FiUser, FiPhone, FiMail, FiCalendar, FiMessageSquare, FiCheck } from "react-icons/fi";

interface BookingFormData {
  name: string;
  phone: string;
  email?: string;
  doctor: string;
  preferredDate: Date | null;
  notes?: string;
}

const doctors = [
  { id: "santos", name: "Dr. Santos", specialty: "Pathology" },
  { id: "reyes", name: "Dr. Reyes", specialty: "Microbiology" },
  { id: "cruz", name: "Dr. Cruz", specialty: "Clinical Chemistry" }
];

const CallInBookingPage: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    phone: "",
    email: "",
    doctor: doctors[0].id,
    preferredDate: null,
    notes: "",
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^(09|\+639)\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid PH phone number";
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.preferredDate) {
      newErrors.preferredDate = "Please select a date and time";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleDateChange = (date: Date | null) => {
    setFormData({ ...formData, preferredDate: date });
    if (errors.preferredDate) {
      setErrors({ ...errors, preferredDate: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // TODO: send formData to backend or email service
      console.log("Booking request submitted:", formData);
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      doctor: doctors[0].id,
      preferredDate: null,
      notes: "",
    });
    setSubmitted(false);
    setErrors({});
  };

  const getDoctorName = () => {
    return doctors.find(d => d.id === formData.doctor)?.name || "";
  };

  return (
    <div className="max-w-md mx-auto mt-8 mb-8 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Request an Appointment</h2>
        <p className="text-gray-600 mt-2">Central Lab Ventures - Davao City</p>
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
      </div>

      {submitted ? (
        <div className="text-center py-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiCheck className="text-green-500 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Request Submitted!</h3>
          <p className="text-gray-600 mb-1">Thank you, {formData.name}!</p>
          <p className="text-gray-600 mb-4">Our clinic will call you shortly to confirm your appointment with {getDoctorName()}.</p>
          
          <div className="bg-gray-50 p-4 rounded-lg text-left mb-6">
            <h4 className="font-medium text-gray-800 mb-2">Appointment Details:</h4>
            <p className="text-gray-600"><span className="font-medium">Date:</span> {formData.preferredDate ? format(formData.preferredDate, "MMMM d, yyyy h:mm a") : ""}</p>
            <p className="text-gray-600"><span className="font-medium">Doctor:</span> {getDoctorName()}</p>
            <p className="text-gray-600"><span className="font-medium">Phone:</span> {formData.phone}</p>
          </div>
          
          <button
            onClick={resetForm}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Book Another Appointment
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-medium text-gray-700 mb-1">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="text-gray-400" />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="Your full name"
              />
            </div>
            {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Phone Number</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiPhone className="text-gray-400" />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="09123456789"
              />
            </div>
            {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Email (optional)</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="you@example.com"
              />
            </div>
            {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Select Doctor</label>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {doctors.map((doc) => (
                <option key={doc.id} value={doc.id}>
                  {doc.name} - {doc.specialty}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Preferred Date & Time</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiCalendar className="text-gray-400" />
              </div>
              <DatePicker
                selected={formData.preferredDate}
                onChange={handleDateChange}
                minDate={new Date()}
                showTimeSelect
                timeFormat="h:mm aa"
                timeIntervals={30}
                placeholderText="Select date and time"
                className={`w-full pl-10 pr-3 py-2 border ${errors.preferredDate ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </div>
            {errors.preferredDate && <p className="mt-1 text-red-500 text-sm">{errors.preferredDate}</p>}
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Notes / Reason for Visit</label>
            <div className="relative">
              <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                <FiMessageSquare className="text-gray-400 mt-0.5" />
              </div>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
                placeholder="e.g., symptoms, special requests"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center disabled:opacity-70"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              "Submit Request"
            )}
          </button>
        </form>
      )}
      
      <div className="mt-6 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
        <p>Need assistance? Call us at <a href="tel:+63822345678" className="text-blue-600 hover:underline">(082) 234-5678</a></p>
        <p className="mt-1">Open: Mon-Fri 8AM-5PM, Sat 8AM-12PM</p>
      </div>
    </div>
  );
};

export default CallInBookingPage;