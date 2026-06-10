import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "./Sidebar";

function Fees() {

    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState("");
    const [paymentStats, setPaymentStats] = useState({
        total_collection: 0,
    });

    useEffect(() => {
        fetchStudents();
        fetchPayments();
    }, []);

    const fetchStudents = async () => {
        try {
            const res = await api.get("/students/");
            setStudents(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const fetchPayments = async () => {
        try {
            const res = await api.get("/payment-stats/");

            setPaymentStats({
                total_collection: Number(res.data.total_collection || 0),
            });
        } catch (err) {
            console.log(err);
        }
    };

    const pendingCollection = students
        .filter((student) => student.fee_status === "Pending")
        .reduce((sum, student) => sum + Number(student.fee_amount || 0), 0);

    const filteredStudents = students.filter(
        (student) =>
            student.name?.toLowerCase().includes(search.toLowerCase()) ||
            student.whatsapp?.includes(search)
    );

    const collectFee = async (student) => {
    const confirmFee = window.confirm(
        `Collect ₹${student.fee_amount} fee from ${student.name}?`
    );

    if (!confirmFee) return;

    const today = new Date().toISOString().split("T")[0];

    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    const nextDueDate = nextMonth.toISOString().split("T")[0];

    try {

        const paymentRes = await api.post("/payments/", {
            student: student.id,
            amount: student.fee_amount,
        });

        await api.patch(`/students/${student.id}/`, {
            fee_status: "Paid",
            last_payment_date: today,
            fee_due_date: nextDueDate,
        });

        setStudents((prevStudents) =>
            prevStudents.map((item) =>
                item.id === student.id
                    ? {
                        ...item,
                        fee_status: "Paid",
                        last_payment_date: today,
                        fee_due_date: nextDueDate,
                    }
                    : item
            )
        );

        setPaymentStats((prev) => ({
            total_collection:
                Number(prev.total_collection || 0) +
                Number(student.fee_amount || 0),
        }));

        // ===== WHATSAPP RECEIPT =====

        if (paymentRes.data?.receipt_url) {

            const receiptLink =
                `https://api.fb.comworld.in${paymentRes.data.receipt_url}`;

            const message = `🏛️ FRONT BENCHERS LIBRARY

Dear ${student.name},

Your monthly fee has been received successfully.

━━━━━━━━━━━━━━━━━━

👤 Student Name:
${student.name}

💰 Amount Paid:
₹${student.fee_amount}

📅 Payment Date:
${today}

📆 Next Due Date:
${nextDueDate}

📌 Status:
Paid

━━━━━━━━━━━━━━━━━━

📄 Payment Receipt:

${receiptLink}

━━━━━━━━━━━━━━━━━━

Please save this receipt for future reference.

Thank you for choosing Front Benchers Library.

📚 Learn • Focus • Achieve`;

            window.open(
                `https://wa.me/91${student.whatsapp}?text=${encodeURIComponent(message)}`,
                "_blank"
            );
        }

        alert("Fee Collected Successfully");

        fetchStudents();
        fetchPayments();

    } catch (error) {
        console.log("Fee collection error:", error.response?.data || error);
        alert("Fee Collection Failed");
    }
};

const renewStudent = async (student) => {

    const confirmRenew = window.confirm(
        `Renew ${student.name}'s membership for next month?`
    );

    if (!confirmRenew) return;

    const dueDate = new Date(student.fee_due_date);
    dueDate.setMonth(dueDate.getMonth() + 1);

    const newDueDate = dueDate.toISOString().split("T")[0];

    try {

        await api.post("/payments/", {
            student: student.id,
            amount: student.fee_amount,
        });

        await api.put(`/students/${student.id}/`, {
            ...student,
            fee_status: "Paid",
            fee_due_date: newDueDate,
            last_payment_date: new Date()
                .toISOString()
                .split("T")[0],
        });

        await fetchStudents();
        await fetchPayments();

        alert(`Membership renewed till ${newDueDate} ✅`);

    } catch (error) {

        console.log(error.response?.data || error);

        alert("Renew Failed ❌");
    }
};



    return (

        <div className="md:flex">

            <Sidebar />

            <div className="flex-1 p-8 bg-slate-100 min-h-screen">

                <h1 className="text-4xl font-bold mb-8">
                    Fees Management
                </h1>

                <div className="
grid
grid-cols-1
md:grid-cols-2
gap-6
mb-8
">

                    <div className="
    bg-gradient-to-r
    from-green-500
    to-emerald-600
    rounded-3xl
    shadow-lg
    p-6
    text-white
  ">

                        <h3>Total Collection</h3>

                        <h2 className="text-4xl font-bold mt-3">
                            ₹{paymentStats.total_collection || 0}
                        </h2>

                    </div>

                    <div className="
    bg-gradient-to-r
    from-red-500
    to-rose-600
    rounded-3xl
    shadow-lg
    p-6
    text-white
  ">

                        <h3>Pending Collection</h3>

                        <h2 className="text-4xl font-bold mt-3">
                            ₹{pendingCollection}
                        </h2>

                    </div>

                </div>


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
    mb-6
  "
                />

                <div className="bg-white rounded-3xl shadow-lg p-6">

                    <table className="min-w-full">

                        <thead>


                            <tr className="border-b">

                                <th className="p-3 text-left">
                                    Name
                                </th>

                                <th className="p-3 text-left">
                                    Fee Amount
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
                                    className="border-b"
                                >

                                    <td className="p-3">
                                        {student.name}
                                    </td>

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

                                    <td className="p-3">
                                        {student.fee_due_date}
                                    </td>

                                    <td className="p-3">

                                        {student.fee_status === "Pending" ? (

                                            <button
                                                onClick={() => collectFee(student)}
                                                className="bg-emerald-500 text-white px-4 py-2 rounded-lg"
                                            >
                                                Collect Fee
                                            </button>

                                        ) : (

                                            <button
                                                onClick={() => renewStudent(student)}
                                                className="bg-indigo-500 text-white px-4 py-2 rounded-lg"
                                            >
                                                Renew
                                            </button>

                                        )}

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

export default Fees;