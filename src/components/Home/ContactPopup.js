import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { toast } from "react-toastify";

const ContactPopup = ({ setShowContactPopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    toast.success("Thank you for contacting us. We will response you soon!");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[99999999999999999]">
      <div className="bg-white rounded-lg p-6 w-1/2 max-h-[80vh] overflow-y-auto ecoScroll">
        <div className="bg-[#7abf18] text-white w-full flex justify-between items-center p-6">
          <h2 className="text-xl font-semibold">Contact us</h2>
          <FaWindowClose
            className="cursor-pointer"
            onClick={() => setShowContactPopup(false)}
          />
        </div>
        <div className="w-96 mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-3 py-2 text-gray-700 border rounded"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 text-gray-700 border rounded"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 text-gray-700 border rounded"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
