import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function EditStudent() {

  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    father_name: "",
    aadhaar_card: "",
    whatsapp: "",
    address: "",
    joining_date: "",
    fee_amount: "",
    fee_status: "Pending",
    fee_due_date: "",
  });

  useEffect(() => {

    api.get(`/students/${id}/`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.put(
        `/students/${id}/`,
        formData
      );

      alert("Student Updated Successfully ✅");

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert("Update Failed ❌");

    }

    if (formData.aadhaar_card.length !== 12) {

      alert(
        "Aadhaar Number must be exactly 12 digits"
      );

      return;
    }

  };
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-3xl font-bold mb-8">
          Edit Student
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Student Name"
            className="border p-3 rounded-xl"
          />

          <input
            type="text"
            name="father_name"
            value={formData.father_name}
            onChange={handleChange}
            placeholder="Father Name"
            className="border p-3 rounded-xl"
          />

          <input
            type="text"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="Whatsapp Number"
            className="border p-3 rounded-xl"
          />

          <div>
            <input
              type="text"
              name="aadhaar_card"
              value={formData.aadhaar_card
                ?.replace(/\s/g, "")
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
              className="border p-3 rounded-xl w-full"
            />

            {formData.aadhaar_card &&
              formData.aadhaar_card.length !== 12 && (
                <p className="text-red-500 text-sm mt-1">
                  Aadhaar Number must be 12 digits
                </p>
              )}

            {formData.aadhaar_card?.length === 12 && (
              <p className="text-green-600 text-sm mt-1">
                ✓ Valid Aadhaar Number
              </p>
            )}
          </div>

            <input
            type="date"
            name="joining_date"
            value={formData.joining_date || ""}
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />

          <input
            type="number"
            name="fee_amount"
            value={formData.fee_amount}
            onChange={handleChange}
            placeholder="Fee Amount"
            className="border p-3 rounded-xl"
          />

          <input
            type="date"
            name="fee_due_date"
            value={formData.fee_due_date || ""}
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />

        


          <select
            name="fee_status"
            value={formData.fee_status}
            onChange={handleChange}
            className="border p-3 rounded-xl"
          >
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
            <option value="Partial">Partial</option>
          </select>


          <div className="md:col-span-2">

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="border p-3 rounded-xl w-full"
            />

          </div>

          <div className="flex gap-4 mt-4">

            <button
              type="submit"
              className="
      bg-gradient-to-r
      from-indigo-600
      to-purple-600
      text-white
      px-8
      py-3
      rounded-xl
      font-semibold
      shadow-lg
      hover:scale-105
      transition-all
      duration-300
    "
            >
              Update Student
            </button>

            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="
      px-8
      py-3
      rounded-xl
      font-semibold
      text-white
      bg-gradient-to-r
      from-slate-600
      to-slate-800
      shadow-lg
      hover:scale-105
      transition-all
      duration-300
    "
            >
              Cancel
            </button>

          </div>



        </form>

      </div>

    </div>
  );
}

export default EditStudent;