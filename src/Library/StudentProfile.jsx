import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function StudentProfile() {

  const { id } = useParams();

  const [student, setStudent] = useState({});

  useEffect(() => {

    api.get(`/students/${id}/`)
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [id]);

  return (
    <div className="min-h-screen bg-slate-100 p-8 md:flex">

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-3xl font-bold mb-8">
          Student Profile
        </h1>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <strong>Name:</strong>
            <p>{student.name}</p>
          </div>

          <div>
            <strong>Father Name:</strong>
            <p>{student.father_name}</p>
          </div>

          <div>
            <strong>WhatsApp:</strong>
            <p>{student.whatsapp}</p>
          </div>

          <div>
            <strong>Aadhaar:</strong>
            <p>{student.aadhaar_card}</p>
          </div>

          <div>
            <strong>Fee Amount:</strong>
            <p>₹{student.fee_amount}</p>
          </div>

          <div>
            <strong>Fee Status:</strong>
            <p>{student.fee_status}</p>
          </div>

          <div className="col-span-2">
            <strong>Address:</strong>
            <p>{student.address}</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentProfile;