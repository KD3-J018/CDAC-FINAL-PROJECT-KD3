import React, { useState, useEffect } from "react";

const TaskerEditProfile = ({ taskerId }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    city: "",
    skills: "",
    experience: "",
    hourlyRate: "",
    governmentId: null,
    password: "",
    confirmPassword: "",
    bio: "",
  });

  const [errors, setErrors] = useState({});

  // Fetch tasker details from backend (Provision for Axios call)
  useEffect(() => {
    // Example: 
    // axios.get(`/api/taskers/${taskerId}`)
    //   .then(response => {
    //     setFormData(response.data);
    //   })
    //   .catch(error => {
    //     console.log("Error fetching tasker data:", error);
    //   });
  }, [taskerId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, governmentId: e.target.files[0] });
  };

  const validateForm = () => {
    let newErrors = {};

    // Required field validation
    Object.keys(formData).forEach((field) => {
      if (!formData[field] && field !== "governmentId") {
        newErrors[field] = `${field.replace(/([A-Z])/g, " $1")} is required`;
      }
    });

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone validation (10 digits)
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    // Password validation
    if (formData.password && formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Hourly Rate validation (must be a positive number)
    if (formData.hourlyRate && (isNaN(formData.hourlyRate) || formData.hourlyRate <= 0)) {
      newErrors.hourlyRate = "Hourly rate must be a positive number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted", formData);
      // Send updated data to backend (Provision for Axios call)
      // Example: axios.put(`/api/taskers/${taskerId}`, formData)
      //   .then(response => {
      //     console.log("Profile updated successfully");
      //   })
      //   .catch(error => {
      //     console.log("Error updating profile:", error);
      //   });
    }
  };

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="col-md-6 p-4 border rounded shadow bg-white">
        <h2 className="text-center">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          {[ 
            { label: "Full Name", name: "fullName", type: "text" },
            { label: "Email (Username)", name: "email", type: "email" },
            { label: "Phone Number", name: "phone", type: "tel" },
            { label: "Date of Birth", name: "dob", type: "date" },
            { label: "City", name: "city", type: "text" },
            { label: "Years of Experience", name: "experience", type: "number" },
            { label: "Hourly Rate ($)", name: "hourlyRate", type: "number" },
          ].map(({ label, name, type }) => (
            <div className="mb-3" key={name}>
              {errors[name] && <small className="text-danger">{errors[name]}</small>}
              <label className="form-label">{label}</label>
              <input
                type={type}
                name={name}
                value={formData[name] || ""}
                className={`form-control ${errors[name] ? "border-danger" : ""}`}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          {/* Gender */}
          <div className="mb-3">
            {errors.gender && <small className="text-danger">{errors.gender}</small>}
            <label className="form-label">Gender</label>
            <select name="gender" className={`form-control ${errors.gender ? "border-danger" : ""}`} value={formData.gender || ""} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Skills / Services Offered (Dropdown) */}
          <div className="mb-3">
            {errors.skills && <small className="text-danger">{errors.skills}</small>}
            <label className="form-label">Skills / Services Offered</label>
            <select name="skills" className={`form-control ${errors.skills ? "border-danger" : ""}`} value={formData.skills || ""} onChange={handleChange} required>
              <option value="">Select a Service</option>
              <option value="Sofa Cleaning">Sofa Cleaning</option>
              <option value="Men's Hair Cutting">Men's Hair Cutting</option>
              <option value="Door Lock Repairing">Door Lock Repairing</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Electrical Repairs">Electrical Repairs</option>
              <option value="Carpentry">Carpentry</option>
            </select>
          </div>

          {/* Government ID Proof */}
          <div className="mb-3">
            {errors.governmentId && <small className="text-danger">{errors.governmentId}</small>}
            <label className="form-label">Government ID Proof</label>
            <input type="file" name="governmentId" className="form-control" onChange={handleFileChange} />
          </div>

          {/* Password */}
          <div className="mb-3">
            {errors.password && <small className="text-danger">{errors.password}</small>}
            <label className="form-label">Password</label>
            <input type="password" name="password" value={formData.password} className={`form-control ${errors.password ? "border-danger" : ""}`} onChange={handleChange} required />
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
            <label className="form-label">Confirm Password</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} className={`form-control ${errors.confirmPassword ? "border-danger" : ""}`} onChange={handleChange} required />
          </div>

          {/* Brief Bio */}
          <div className="mb-3">
            {errors.bio && <small className="text-danger">{errors.bio}</small>}
            <label className="form-label">Brief Bio</label>
            <textarea name="bio" className={`form-control ${errors.bio ? "border-danger" : ""}`} rows="3" value={formData.bio} onChange={handleChange} required></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default TaskerEditProfile;
