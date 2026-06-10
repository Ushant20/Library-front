import { useState } from "react";
import api from "../services/api";
import jsPDF from "jspdf";

function AddStudent() {
  const [formData, setFormData] = useState({
    name: "",
    aadhaar_card: "",
    whatsapp: "",
    address: "",
    joining_date: "",
    fee_amount: "",
    fee_status: "Pending",
    fee_due_date: "",

  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };




  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.aadhaar_card.length !== 12) {
      alert("Aadhaar Number must be exactly 12 digits");
      return;
    }

    try {
      const response = await api.post(
        "/students/",
        formData
      );

     const receiptLink =
  `https://api.fb.comworld.in${response.data.receipt_url}`;


      alert("Student Added Successfully ✅");

      const message = `🏛️ FRONT BENCHERS LIBRARY

Dear ${formData.name},

Your library membership has been successfully activated.

━━━━━━━━━━━━━━━━━━

👤 Student Name:
${formData.name}

📅 Joining Date:
${formData.joining_date}

💰 Monthly Fee:
₹${formData.fee_amount}

📌 Status:
${formData.fee_status}

📆 Renewal Date:
${formData.fee_due_date}

━━━━━━━━━━━━━━━━━━

📄 Membership Receipt:

${receiptLink}

━━━━━━━━━━━━━━━━━━

Please save this receipt for future reference.

Thank you for choosing Front Benchers Library.

📚 Learn • Focus • Achieve`;

      window.open(
        `https://wa.me/91${formData.whatsapp}?text=${encodeURIComponent(message)}`,
        "_blank"
      );

      console.log(response.data);

      setFormData({
        name: "",
        aadhaar_card: "",
        whatsapp: "",
        address: "",
        joining_date: "",
        fee_amount: "",
        fee_status: "Pending",
        fee_due_date: "",
      });

    } catch (error) {

      console.log(error);

      alert(
        error?.response?.data
          ? JSON.stringify(error.response.data)
          : "Something went wrong"
      );
    }
  };




  return (
    <div className="min-h-screen bg-gray-100 py-4 sm:py-6 md:py-10 px-2 sm:px-4 md:px-6">
      <div className="w-full max-w-5xl mx-auto bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 sm:p-6 md:p-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            Add New Student
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-indigo-100 mt-2">
            Register a new student in the library system
          </p>
        </div>

        {/* Form */}
        <div className="p-4 sm:p-6 md:p-8">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Student Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter student name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Father Name
              </label>

              <input
                type="text"
                name="father_name"
                value={formData.father_name}
                onChange={handleChange}
                placeholder="Enter Father Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Aadhaar Card Number
              </label>

              <input
                type="text"
                name="aadhaar_card"
                value={formData.aadhaar_card
                  .replace(/\s/g, "")
                  .replace(/(\d{4})(?=\d)/g, "$1 ")
                }
                onChange={(e) => {
                  const value = e.target.value
                    .replace(/\D/g, "")
                    .slice(0, 12);

                  setFormData({
                    ...formData,
                    aadhaar_card: value,
                  });
                }}
                placeholder="1234 5678 9012"
                className="
      w-full
      border
      border-gray-300
      rounded-xl
      px-4
      py-3
      focus:ring-2
      focus:ring-indigo-500
      outline-none
    "
              />

              {formData.aadhaar_card &&
                formData.aadhaar_card.length !== 12 && (
                  <p className="text-red-500 text-sm mt-1">
                    Aadhaar Number must be 12 digits
                  </p>
                )}

              {formData.aadhaar_card.length === 12 && (
                <p className="text-green-600 text-sm mt-1">
                  ✓ Valid Aadhaar Number
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Whatsapp No
              </label>
              <input
                type="text"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="Enter Whatsapp No"
                maxLength={10}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>





            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Joining Date
              </label>
              <input
                type="date"
                name="joining_date"
                value={formData.joining_date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Fee Amount
              </label>
              <input
                type="number"
                name="fee_amount"
                value={formData.fee_amount}
                onChange={handleChange}
                placeholder=""
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Fee Status
              </label>
              <select
                name="fee_status"
                onChange={handleChange}
                value={formData.fee_status}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                <option value="Pending">Pending</option>
                <option value="Paid">Paid</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Fee Due Date
              </label>

              <input
                type="date"
                name="fee_due_date"
                value={formData.fee_due_date}
                onChange={handleChange}
                className="
      w-full
      border
      border-gray-300
      rounded-xl
      px-4
      py-3
      focus:ring-2
      focus:ring-indigo-500
      outline-none
    "
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium text-gray-700">
                Address
              </label>
              <textarea
                name="address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>



            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300"
              >
                Add Student
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;