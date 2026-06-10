import { useEffect, useState } from "react";
import Developer from "../assets/developer.jpeg"

function DeveloperCredit() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <>
    <button
  onClick={() => setOpen(true)}
 className="group relative w-full overflow-hidden rounded-3xl border border-white/40 bg-white/30 px-6 py-4 backdrop-blur-2xl shadow-[0_8px_32px_rgba(31,38,135,0.15)]"
>
  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />

  <div className="relative flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2">
    <span className="hidden text-white/40 sm:inline">|</span>

    <span className="text-sm font-semibold text-slate-800">
      Designed and Developed by Ushant
    </span>

    <span className="hidden text-white/40 sm:inline">|</span>

    <span className="text-xs font-medium text-slate-600">
      View Developer Profile
    </span>
  </div>
</button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 px-4 backdrop-blur-md">
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0"
          />

        <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-6 text-center shadow-2xl backdrop-blur-xl">
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-indigo-500/25 via-emerald-400/20 to-sky-400/25" />

            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/70 px-3 py-1 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur-md hover:bg-white"
            >
              X
            </button>

            <div className="relative z-10 mx-auto mt-8 h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-lg">
              <img
                src={Developer}
                alt="Ushant"
                className="h-full w-full object-cover"
                style={{ objectPosition: "center 10%"}}
              />
            </div>

            <h2 className="relative z-10 mt-5 text-2xl font-bold text-slate-900">
              Ushant
            </h2>

            <p className="relative z-10 mt-1 text-sm font-medium text-indigo-700">
              Full Stack Developer
            </p>

            <p className="relative z-10 mt-4 text-sm leading-6 text-white-600">
              Designed and developed this Library Management System with a clean,
              secure and user-friendly workflow.
            </p>

            <div className="relative z-10 mt-5 rounded-2xl border border-white/60 bg-white/55 p-4 text-sm text-slate-700 shadow-sm backdrop-blur-xl">
              <p className="font-medium">
                React | Django REST Framework | Python
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Library Management System v1.0
              </p>
            </div>

            <div className="relative z-10 mt-6 grid grid-cols-1 gap-3">
              <a
                href="ushantkumar2002@gmail.com"
                className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                Email: ushantkumar2002@gmail.com
              </a>

              <a
                href="tel:+919643394793"
                className="rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
              >
                Call: +91 9643394793
              </a>

              <a
                href="https://wa.me/919643394793"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
              >
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DeveloperCredit;