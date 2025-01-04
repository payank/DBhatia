import React, { useState } from "react";

function CareerForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    gender: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // Restrict input to numbers for the mobile field
    if (name === "mobile" && !/^\d*$/.test(value)) {
      return; // Prevent input if it's not a number
    }

    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const validateForm = () => {
    const errors = {};

    // Validate required fields
    if (!formData.firstName) errors.firstName = "First name is required.";
    if (!formData.lastName) errors.lastName = "Last name is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.mobile) errors.mobile = "Mobile number is required.";
    if (!formData.gender) errors.gender = "Gender is required.";
    if (!formData.dob) errors.dob = "Date of birth is required.";

    // Validate resume file
    if (!formData.resume) {
      errors.resume = "Resume is required.";
    } else {
      const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!allowedTypes.includes(formData.resume.type)) {
        errors.resume = "Invalid file type. Only PDF, DOC, and DOCX are allowed.";
      }
      if (formData.resume.size > 1 * 1024 * 1024) {
        errors.resume = "File size exceeds 1 MB.";
      }
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form Data Submitted:", formData);
    alert("Application Submitted Successfully!");
    setErrors({});
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">-Apply Here-</h1>
        <p className="text-center mb-6">
          We nurture and cultivate a sense of pride in the work and create team
          leaders. Your growth chart will be governed by well-defined
          transparent policies of the firm. Apply via the form given below and
          meet us for a face-to-face interview.
        </p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label className="block font-bold mb-1">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label className="block font-bold mb-1">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block font-bold mb-1">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Mobile No */}
          <div>
            <label className="block font-bold mb-1">Mobile No *</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
          </div>

          {/* Gender */}
          <div>
            <label className="block font-bold mb-1">Gender *</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Select...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block font-bold mb-1">
              Upload Resume *(Max size 1 MB)
            </label>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              accept=".pdf,.doc,.docx"
              className="w-full p-2 border rounded"
            />
            {errors.resume && <p className="text-red-500 text-sm">{errors.resume}</p>}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-primary text-white font-bold py-2 px-6 rounded hover:bg-blue-700"
            >
              Send Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CareerForm;
