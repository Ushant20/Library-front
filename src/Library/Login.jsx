import { useState } from "react";
import { HiMiniShieldCheck } from "react-icons/hi2";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/login/", formData);

      console.log("SUCCESS:", res.data);

      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");

    } catch (error) {
      console.log("ERROR:", error.response?.data);
      console.log("STATUS:", error.response?.status);

      alert("Invalid Username or Password");
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center px-4">

      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070')] bg-cover bg-center opacity-10"></div>

      <div className="relative w-full max-w-md">

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8">

          <div className="text-center mb-8">

            <div className="flex justify-center mb-4">
              <div className="bg-amber-500/20 p-4 rounded-full">
                <HiMiniShieldCheck
                  size={42}
                  className="text-amber-400"
                />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-white">
              Admin Portal
            </h1>

            <p className="text-gray-300 mt-2">
              Front Benchers Library & Cafe
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="block text-gray-300 mb-2">
                Username
              </label>

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter username"
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  bg-white/10
                  border
                  border-white/20
                  text-white
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-amber-400
                "
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  bg-white/10
                  border
                  border-white/20
                  text-white
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-amber-400
                "
              />
            </div>

            <button
              type="submit"
              className="
                w-full
                py-3
                rounded-xl
                bg-gradient-to-r
                from-amber-500
                to-orange-500
                text-white
                font-semibold
                shadow-lg
                hover:scale-[1.02]
                transition-all
                duration-300
              "
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            Authorized Personnel Only
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;