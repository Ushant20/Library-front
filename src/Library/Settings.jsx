import { useEffect, useState } from "react";
import {
  FaBook,
  FaCoffee,
  FaBell,
  FaShieldAlt,
  FaSave,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Sidebar from "./Sidebar";
import api from "../services/api";

function Settings() {
  const [settings, setSettings] = useState({
    library_name: "",
    library_address: "",
    contact_number: "",
    email: "",
    opening_time: "",
    closing_time: "",
    cafe_name: "",
    gst_percent: 0,
    service_charge: 0,
    email_notifications: true,
    whatsapp_notifications: true,
    dark_mode: false,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await api.get("/settings/");
      setSettings(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  const handleToggle = (field) => {
    setSettings({
      ...settings,
      [field]: !settings[field],
    });
  };

  const saveSettings = async () => {
    try {
      await api.put("/settings/", settings);
      alert("✅ Settings Updated Successfully");
    } catch (err) {
      alert("❌ Update Failed");
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-xl font-semibold">
        Loading Settings...
      </div>
    );
  }

  return (
    <div className="md:flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-6 md:p-8 text-white shadow-xl mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Settings Center
          </h1>
          <p className="mt-2 text-indigo-100">
            Manage Library, Cafe & System Preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all">
            <div className="flex items-center gap-3 mb-6">
              <FaBook className="text-indigo-600 text-2xl" />
              <h2 className="text-xl font-bold">Library Information</h2>
            </div>

            <div className="space-y-4">
              <input
                name="library_name"
                value={settings.library_name}
                onChange={handleChange}
                placeholder="Library Name"
                className="w-full border rounded-xl p-3"
              />

              <textarea
                name="library_address"
                value={settings.library_address}
                onChange={handleChange}
                placeholder="Library Address"
                className="w-full border rounded-xl p-3"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="contact_number"
                  value={settings.contact_number}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  className="border rounded-xl p-3"
                />

                <input
                  name="email"
                  value={settings.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="border rounded-xl p-3"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all">
            <div className="flex items-center gap-3 mb-6">
              <FaCoffee className="text-orange-500 text-2xl" />
              <h2 className="text-xl font-bold">Cafe Configuration</h2>
            </div>

            <div className="space-y-4">
              <input
                name="cafe_name"
                value={settings.cafe_name}
                onChange={handleChange}
                placeholder="Cafe Name"
                className="w-full border rounded-xl p-3"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="number"
                  name="gst_percent"
                  value={settings.gst_percent}
                  onChange={handleChange}
                  placeholder="GST %"
                  className="border rounded-xl p-3"
                />

                <input
                  type="number"
                  name="service_charge"
                  value={settings.service_charge}
                  onChange={handleChange}
                  placeholder="Service Charge %"
                  className="border rounded-xl p-3"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all">
            <div className="flex items-center gap-3 mb-6">
              <FaBell className="text-yellow-500 text-2xl" />
              <h2 className="text-xl font-bold">Notifications</h2>
            </div>

            <div className="space-y-5">
              <label className="flex justify-between">
                <span>Email Notifications</span>
                <input
                  type="checkbox"
                  checked={settings.email_notifications}
                  onChange={() => handleToggle("email_notifications")}
                />
              </label>

              <label className="flex justify-between">
                <span>WhatsApp Notifications</span>
                <input
                  type="checkbox"
                  checked={settings.whatsapp_notifications}
                  onChange={() => handleToggle("whatsapp_notifications")}
                />
              </label>

              <label className="flex justify-between">
                <span>Dark Mode</span>
                <input
                  type="checkbox"
                  checked={settings.dark_mode}
                  onChange={() => handleToggle("dark_mode")}
                />
              </label>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all">
            <div className="flex items-center gap-3 mb-6">
              <FaShieldAlt className="text-green-600 text-2xl" />
              <h2 className="text-xl font-bold">Library Timings</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="time"
                name="opening_time"
                value={settings.opening_time}
                onChange={handleChange}
                className="border rounded-xl p-3"
              />

              <input
                type="time"
                name="closing_time"
                value={settings.closing_time}
                onChange={handleChange}
                className="border rounded-xl p-3"
              />
            </div>

            <div className="mt-6 bg-slate-50 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <FaPhone />
                {settings.contact_number}
              </div>

              <div className="flex items-center gap-2 mb-2">
                <FaEnvelope />
                {settings.email}
              </div>

              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                {settings.library_address || "No Address Added"}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={saveSettings}
            className="flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transition-all hover:scale-105"
          >
            <FaSave />
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
