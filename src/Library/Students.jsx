import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

function Students() {

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {

    api.get("/students/")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));

  }, []);

  const deleteStudent = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {

      await api.delete(`/students/${id}/`);

      setStudents(
        students.filter(
          (student) => student.id !== id
        )
      );

    } catch (error) {

      console.log(error);

    }

  };

  const markPaid = async (student) => {

  try {

    await api.put(
      `/students/${student.id}/`,
      {
        ...student,
        fee_status: "Paid",
      }
    );

    setStudents(
      students.map((s) =>
        s.id === student.id
          ? {
              ...s,
              fee_status: "Paid",
            }
          : s
      )
    );

  } catch (error) {

    console.log(error);

  }

};

  const filteredStudents = students.filter(
    (student) =>
      student.name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||

      student.whatsapp
        ?.includes(search)
  );

  return (

    <div className="md:flex">

      <Sidebar />

      <div className="flex-1 p-8 bg-slate-100 min-h-screen">

        <h1 className="text-4xl font-bold mb-8">
          All Students
        </h1>

        {/* Total Students Card */}

        <div
          className="
            bg-gradient-to-r
            from-indigo-600
            to-purple-600
            rounded-3xl
            shadow-lg
            p-6
            text-white
            mb-8
            max-w-sm
          "
        >
          <h3>Total Students</h3>

          <h2 className="text-4xl font-bold mt-3">
            {students.length}
          </h2>

        </div>

        {/* Search */}

        <div className="mb-8">

          <input
            type="text"
            placeholder="🔍 Search Student..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full
              md:w-96
              px-5
              py-3
              rounded-2xl
              shadow-md
              border
              border-gray-200
              outline-none
            "
          />

        </div>

        {/* Table */}

        <div className="bg-white rounded-3xl shadow-lg p-6">

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead>

                <tr className="border-b">

                  <th className="p-3 text-left">
                    Name
                  </th>

                  <th className="p-3 text-left">
                    WhatsApp
                  </th>

                  <th className="p-3 text-left">
                    Fee
                  </th>

                  <th className="p-3 text-left">
                    Status
                  </th>

                  <th className="p-3 text-left">
                    Due Date
                  </th>

                  <th className="p-3 text-left">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredStudents.map((student) => (

                  <tr
                    key={student.id}
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="p-3">
                      {student.name}
                    </td>

                    <td className="p-3">
                      {student.whatsapp}
                    </td>

                    <td className="p-3">
                      ₹{student.fee_amount}
                    </td>

                    <td className="p-3">

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          student.fee_status === "Paid"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {student.fee_status}
                      </span>

                    </td>

                    <td className="p-3">
                      {student.fee_due_date}
                    </td>

                    <td className="p-3 flex gap-2">

                      <button
                        onClick={() =>
                          navigate(`/student/${student.id}`)
                        }
                        className="
                          bg-green-500
                          hover:bg-green-600
                          text-white
                          px-3
                          py-1
                          rounded-lg
                        "
                      >
                        View
                      </button>

                      <button
                        onClick={() =>
                          navigate(`/edit-student/${student.id}`)
                        }
                        className="
                          bg-blue-500
                          hover:bg-blue-600
                          text-white
                          px-3
                          py-1
                          rounded-lg
                        "
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          deleteStudent(student.id)
                        }
                        className="
                          bg-red-500
                          hover:bg-red-600
                          text-white
                          px-3
                          py-1
                          rounded-lg
                        "
                      >
                        Delete
                      </button>
                      

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Students;