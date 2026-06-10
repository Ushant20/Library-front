import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [stats, setStats] = useState({});
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [dueFilter, setDueFilter] = useState("all");


  const today = new Date().toISOString().split("T")[0];

  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);

  const nextWeekDate =
    nextWeek.toISOString().split("T")[0];

  useEffect(() => {

    api.get("/dashboard/")
      .then((res) => {

        console.log(
          "DASHBOARD DATA =>",
          res.data
        );

        setStats(res.data);

      })
      .catch((err) => console.log(err));

    api.get("/students/")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));

    fetchDashboard();

  }, []);

  const deleteStudent = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure?"
    );

    if (!confirmDelete) return;

    try {

      await api.delete(
        `/students/${id}/`
      );

      setStudents(
        students.filter(
          (student) => student.id !== id
        )
      );

    } catch (error) {

      console.log(error);

    }

  };

  const filteredStudents = students.filter(
    (student) => {

      const matchesSearch =
        student.name
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        student.whatsapp
          ?.includes(search);

      const matchesStatus =
        filter === "all"
          ? true
          : student.fee_status === filter;

      const today = new Date()
        .toISOString()
        .split("T")[0];

      const studentDate = new Date(
        student.fee_due_date
      );

      const todayDate = new Date();

      todayDate.setHours(
        0,
        0,
        0,
        0
      );

      const weekDate = new Date();

      weekDate.setDate(
        weekDate.getDate() + 7
      );

      weekDate.setHours(
        23,
        59,
        59,
        999
      );

      const matchesDue =

        dueFilter === "all"

          ? true

          : dueFilter === "today"

            ? student.fee_due_date === today

            : dueFilter === "week"

              ? (
                studentDate >= todayDate &&
                studentDate <= weekDate
              )

              : true;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesDue
      );
    }
  );

  const navigate = useNavigate();

  const fetchDashboard = () => {

    api.get("/dashboard/")
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err));

  };


  useEffect(() => {

    const isLoggedIn =
      localStorage.getItem(
        "isLoggedIn"
      );

    if (!isLoggedIn) {

      navigate("/");

    }

  }, []);

  return (
    <div className="md:flex">
      <Sidebar />

      <div className="flex-1 p-8 bg-slate-100 min-h-screen">
        <h1 className="
text-4xl
font-bold
mb-8
text-slate-800
">
          Dashboard Overview
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-6 mb-10">

          <div
            onClick={() => {
              setFilter("all");
              setDueFilter("all");
              setSearch("");
            }}
            className="    cursor-pointer
    bg-white
    rounded-3xl
    shadow-lg
    p-6
    hover:scale-105
    transition-all">
            <h3 className="text-slate-500 text-sm">
              Total Students
            </h3>

            <h2 className="text-4xl font-bold mt-3">
              {stats.total_students || 0}
            </h2>
          </div>

          <div
            onClick={() => setFilter("Paid")}
            className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl shadow-lg p-6 text-white hover:scale-105 transition-all">
            <h3 className="text-sm">
              Paid Students
            </h3>

            <h2 className="text-4xl font-bold mt-3">
              {stats.paid_students || 0}
            </h2>
          </div>

          <div
            onClick={() => setFilter("Pending")}
            className="bg-gradient-to-r from-red-500 to-rose-600 rounded-3xl shadow-lg p-6 text-white hover:scale-105 transition-all">
            <h3 className="text-sm">
              Pending Students
            </h3>

            <h2 className="text-4xl font-bold mt-3">
              {stats.pending_students || 0}
            </h2>
          </div>

          <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl shadow-lg p-6 text-white hover:scale-105 transition-all">
            <h3 className="text-sm">
              Total Collection
            </h3>

            <h2 className="text-4xl font-bold mt-3">
              ₹{stats.total_collection || 0}
            </h2>
          </div>
          <div className="
bg-gradient-to-r
from-red-600
to-pink-600
rounded-3xl
shadow-lg
p-6
text-white
hover:scale-105
transition-all
">
            <h3>Pending Collection</h3>

            <h2 className="text-4xl font-bold mt-3">
              ₹{stats.pending_collection || 0}
            </h2>
          </div>
          <div
            onClick={() => setDueFilter("today")}
            className={`
    bg-gradient-to-r
    from-yellow-500
    to-orange-500
    rounded-3xl
    shadow-lg
    p-6
    text-white
    cursor-pointer
    hover:scale-105
    transition-all

    ${dueFilter === "today"
                ? "ring-4 ring-white"
                : ""}
  `}>
            <h3 className="text-sm">
              Fee Due Today
            </h3>

            <h2 className="text-4xl font-bold mt-3">
              {stats.due_today || 0}
            </h2>
          </div>

          <div
            onClick={() => setDueFilter("week")}
            className={`
    bg-gradient-to-r
    from-purple-600
    to-indigo-600
    rounded-3xl
    shadow-lg
    p-6
    text-white
    cursor-pointer
    hover:scale-105
    transition-all

    ${dueFilter === "week"
                ? "ring-4 ring-white"
                : ""}
  `}>
            <h3 className="text-sm">
              Due This Week
            </h3>

            <h2 className="text-4xl font-bold mt-3">
              {stats.due_this_week || 0}
            </h2>
          </div>



        </div>



        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold ">
            Recent Students
          </h2>

        </div>

        <div className="mt-6 mb-8">
          <input
            type="text"
            placeholder="🔍 Search Student..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}

            className="
w-full
max-w-md
bg-white
px-5
py-4
rounded-2xl
shadow-lg
border
border-gray-200
focus:border-indigo-500
"
          />
        </div>



        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">whatsapp</th>
                <th className="text-left p-3">Fee</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Action</th>
              </tr>
            </thead>



            <tbody>
              {filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-3">{student.name}</td>

                  <td className="p-3">{student.whatsapp}</td>

                  <td className="p-3">
                    ₹{student.fee_amount}
                  </td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${student.fee_status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                        }`}
                    >
                      {student.fee_status}
                    </span>
                  </td>

                  <td className="p-3 flex gap-2">

                    <button
                      onClick={() => navigate(`/edit-student/${student.id}`)}
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
                      onClick={() => deleteStudent(student.id)}
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

                    <button
                      onClick={() => navigate(`/student/${student.id}`)}
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

                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;