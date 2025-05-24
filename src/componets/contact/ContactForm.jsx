"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phoneNumber: "",
    businessEmail: "",
    jobTitle: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.businessEmail.trim())
      newErrors.businessEmail = "Email is required";
    if (
      formData.businessEmail &&
      !/\S+@\S+\.\S+/.test(formData.businessEmail)
    ) {
      newErrors.businessEmail = "Email is invalid";
    }
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);

      try {
        console.log("Form submitted successfully", formData);
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          phoneNumber: "",
          businessEmail: "",
          jobTitle: "",
        });
        alert("Application submitted successfully!");
      } catch (error) {
        console.error("Error submitting form:", error);
        alert(
          "There was an error submitting your application. Please try again."
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-slate-800">Get In Touch</h2>
        <p className="text-xl text-slate-600 mt-2">
          Explore how we can support your research or learning journey.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="FIRST NAME"
              className={`w-full border border-gray-300 py-3 px-3 focus:outline-none focus:border-orange-500 bg-transparent ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>

          <div className="relative">
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="LAST NAME"
              className={`w-full border border-gray-300 py-3 px-3 focus:outline-none focus:border-orange-500 bg-transparent ${
                errors.lastName ? "border-red-500" : ""
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>

          <div className="relative">
            <input
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="COMPANY"
              className="w-full border radius-md border-gray-300 py-3 px-3 focus:outline-none focus:border-orange-500 bg-transparent"
            />
          </div>

          <div className="relative">
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="PHONE NUMBER"
              className={`w-full border border-gray-300 py-3 px-3 focus:outline-none focus:border-orange-500 bg-transparent ${
                errors.phoneNumber ? "border-red-500" : ""
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
            )}
          </div>

          <div className="relative">
            <input
              type="email"
              name="businessEmail"
              id="businessEmail"
              value={formData.businessEmail}
              onChange={handleChange}
              placeholder="BUSINESS EMAIL"
              className={`w-full border border-gray-300 py-3 px-3 focus:outline-none focus:border-orange-500 bg-transparent ${
                errors.businessEmail ? "border-red-500" : ""
              }`}
            />
            {errors.businessEmail && (
              <p className="text-red-500 text-xs mt-1">
                {errors.businessEmail}
              </p>
            )}
          </div>

          <div className="relative">
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="JOB TITLE"
              className="w-full border border-gray-300 py-3 px-3 focus:outline-none focus:border-orange-500 bg-transparent"
            />
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 bg-rd text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-base md:text-md font-medium shadow-md hover:bg-bl transition-all cursor-pointer"
          >
            {isSubmitting ? "Submitting..." : "Apply Now"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
