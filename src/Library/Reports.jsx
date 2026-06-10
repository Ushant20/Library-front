import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import api from "../services/api";

function Reports() {

  const [stats, setStats] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/dashboard/")
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err));
  }, []);

  const cards = [
    {
      title: "Total Students",
      value: stats.total_students || 0,
      color: "from-blue-500 to-indigo-600",
      route: "/student",
    },
    {
      title: "Paid Students",
      value: stats.paid_students || 0,
      color: "from-green-500 to-emerald-600",
      route: "/fees",
    },
    {
      title: "Pending Students",
      value: stats.pending_students || 0,
      color: "from-red-500 to-pink-600",
      route: "/fees",
    },
    {
      title: "Total Collection",
      value: `₹${stats.total_collection || 0}`,
      color: "from-purple-500 to-indigo-600",
      route: "/fees",
    },
    {
      title: "Pending Collection",
      value: `₹${stats.pending_collection || 0}`,
      color: "from-orange-500 to-red-500",
      route: "/fees",
    },
    {
      title: "Fee Due Today",
      value: stats.due_today || 0,
      color: "from-yellow-500 to-orange-500",
      route: "/fees",
    },
    {
      title: "Due This Week",
      value: stats.due_this_week || 0,
      color: "from-cyan-500 to-blue-600",
      route: "/fees",
    },
  ];

  return (
    <div className="md:flex">
      <Sidebar />

      <div className="flex-1 min-h-screen bg-slate-100 p-4 sm:p-6 md:p-8">

        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
            Reports & Analytics
          </h1>

          <p className="text-gray-500 mt-2">
            Library Performance Overview
          </p>
        </div>

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-5
        ">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.route)}
              className={`
                bg-gradient-to-r
                ${card.color}
                text-white
                rounded-3xl
                p-6
                cursor-pointer
                shadow-lg
                hover:scale-105
                transition-all
                duration-300
              `}
            >
              <h3 className="text-sm opacity-90">
                {card.title}
              </h3>

              <h2 className="text-3xl font-bold mt-3">
                {card.value}
              </h2>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Reports;