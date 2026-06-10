import { useState } from "react";
import {
  FaHome,
  FaUserGraduate,
  FaPlusCircle,
  FaMoneyBill,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaCoffee,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Sidebar() {

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {

    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    localStorage.removeItem(
      "isLoggedIn"
    );

    navigate("/");
  };

  const navigate = useNavigate();

  return (
    <>
      {/* Mobile Navbar */}

      <div className="md:hidden flex items-center justify-between bg-slate-950 text-white p-4 sticky top-0 z-50">

        <h1 className="text-xl font-bold">
          📚 Front Benchers
        </h1>

        <button
          onClick={() => setIsOpen(true)}
          className="text-2xl"
        >
          <FaBars />
        </button>

      </div>

      {/* Overlay */}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}

      <div
        className={`
          fixed md:static
          top-0 left-0
          h-screen
          w-72
          bg-slate-950
          text-white
          p-6
          z-50
          transform
          transition-transform
          duration-300

          ${isOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
          }
        `}
      >

        <div className="flex justify-between items-center mb-10">

          <h1 className="text-2xl font-bold">
            📚 Front Benchers
          </h1>

          <button
            className="md:hidden text-xl"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>

        </div>

        <div className="space-y-3">

          <Link
            to="/dashboard"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
          >
            <FaHome />
            Dashboard
          </Link>

          <Link
            to="/student"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
          >
            <FaUserGraduate />
            Students
          </Link>

          <Link
            to="/add-student"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
          >
            <FaPlusCircle />
            Add Student
          </Link>

          <Link
            to="/fees"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
          >
            <FaMoneyBill />
            Fees
          </Link>

          <Link
            to="/cafe-orders"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
          >
            <FaCoffee />
            Cafe Orders
          </Link>

          <Link
            to="/reports"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
          >
            <FaChartBar />
            Report
          </Link>

          <Link
            to="/settings"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
          >
            <FaCog />
            Settings
          </Link>

          <button
            onClick={handleLogout}
            className="
    flex
    items-center
    gap-3
    p-3
    rounded-xl
    hover:bg-red-600
    transition
    w-full
  "
          >
            <FaSignOutAlt />
            Logout
          </button>

        </div>

      </div>
    </>
  );
}

export default Sidebar;