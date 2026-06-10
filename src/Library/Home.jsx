import React, { useEffect, useState, useRef } from "react";
import Logo from "../assets/logo.png";
import { FiUser } from "react-icons/fi";
import { MapPin, Phone, Clock, Cake } from "lucide-react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import { HiMiniShieldCheck } from "react-icons/hi2";



import Img1 from "../assets/Img1.jpeg";
import Img2 from "../assets/Img2.jpeg";
import Img3 from "../assets/Img3.jpeg";
import Img4 from "../assets/Img4.jpeg";
import Img5 from "../assets/Img5.jpeg";
import Img6 from "../assets/Img6.jpeg";
import Img7 from "../assets/Img7.jpeg";
import Img8 from "../assets/Img8.jpeg";
import Img9 from "../assets/Img9.jpeg";
import Img10 from "../assets/Img10.jpeg";
import Google from "../assets/Googlelogo.png";
import fbcafe from "../assets/fb cafe.PNG";
import library from "../assets/library.PNG";
import chai from "../assets/chai.PNG";
import large from "../assets/large.PNG";
import orea from "../assets/orea.PNG";
import hot from "../assets/hotcoffe.PNG";
import hazelnut from "../assets/hazelnut.PNG";
import classic from "../assets/classic.PNG";
import masala from "../assets/masala.PNG";
import plain from "../assets/plainmaggi.PNG";
import veg from "../assets/vegmaggi.PNG";
import chese from "../assets/cake.PNG";
import vanila from "../assets/vanila.PNG";
import hotcoffe from "../assets/hotcofe.PNG";
import caramel from "../assets/caramel.PNG";
import DeveloperCredit from "./DeveloperCredit";



const Home = () => {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();



  useEffect(() => {
    if (isHovering) return;




    const reviews = [
      {
        name: "Rahul Sharma",
        rating: 5,
        time: "2 months ago",
        text: "Very calm and disciplined environment. Perfect for long study hours.",
      }
    ]

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovering]);


  const [form, setForm] = useState({
    name: "",
    phone: "",
    plan: "",
    facilities: [],
    time: "",
    joining: ""
  });

  const facilitiesList = [
    "AC / Heated Room",
    "100 Mbps WiFi",
    "Power Socket",
    "Silent Study Zone"
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleFacility = (f) => {
    let updated = [...form.facilities];
    if (updated.includes(f)) {
      updated = updated.filter((x) => x !== f);
    } else {
      updated.push(f);
    }
    setForm({ ...form, facilities: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello Front Benchers Library,

New Enquiry Received:

Name: ${form.name}
Mobile: ${form.phone}
Plan: ${form.plan}
Preferred Time: ${form.time}
Joining: ${form.joining}

Please connect with the student.`;

    const whatsappURL = `https://wa.me/919990226207?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };



  const styles = {
    page: {
      maxWidth: "520px",
      margin: "auto",
      padding: "20px",
      background: "#f8fafc",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.08)"
    }

    ,
    form: {
      display: "flex",
      flexDirection: "column"
    }

    ,
    input: {
      padding: "10px",
      marginBottom: "12px",
      borderRadius: "6px",
      border: "1px solid #ccc"
    }

    ,
    option: {
      display: "block",
      marginBottom: "6px"
    }

    ,
    button: {
      marginTop: "15px",
      padding: "12px",
      background: "#111827",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "16px"
    }
  };

  const menuItems = [
    {
      id: 1,
      name: "Classic Cold Coffee",
      price: "₹60",
      image: classic
    },
    {
      id: 2,
      name: "Hazelnut Coffee",
      price: "₹80",
      image: hazelnut
    },
    {
      id: 3,
      name: "Hot Coffee",
      price: "₹30",
      image: hot
    },
    {
      id: 4,
      name: "Chai Regular",
      price: "₹15",
      image: chai
    },
    {
      id: 5,
      name: "Chai Large",
      price: "₹25",
      image: large

    },
    {
      id: 6,
      name: "Masala Chai",
      price: "₹20",
      image: masala
    },
    {
      id: 7,
      name: "Plain Maggie",
      price: "₹40",
      image: plain
    },
    {
      id: 8,
      name: "Veggie Maggie",
      price: "₹50",
      image: veg
    },
    {
      id: 10,
      name: "Cheese Maggie",
      price: "₹60",
      image: chese

    },
    {
      id: 9,
      name: "Oreo Shake",
      price: "₹80",
      image: orea
    },

    {
      id: 11,
      name: "Vanilla Coffee",
      price: "₹80",
      image: vanila
    },
    {
      id: 12,
      name: "Caramel Coffee",
      price: "₹90",
      image: caramel

    },
    {
      id: 13,
      name: "Black Coffee",
      price: "₹35",
      image: hotcoffe
    }


  ]

  const coldDrinks = [
    {
      id: 101,
      name: "Coca Cola",
      price: "₹20",
    },
    {
      id: 102,
      name: "Fanta",
      price: "₹20",
    },
    {
      id: 103,
      name: "Sprite",
      price: "₹20",
    },
    {
      id: 104,
      name: "Limca",
      price: "₹20",
    },

  ];



  const policies = [
    {
      title: "Membership Policy",
      content:
        "Library access is available only to registered members. Membership is non-transferable and valid ID verification may be required."
    },
    {
      title: "Study Environment",
      content:
        "The library operates as a silent study zone. Loud talking, phone calls, or any disruptive behavior is strictly prohibited. Mobile phones must remain on silent mode at all times."
    },
    {
      title: "Seating & Discipline",
      content:
        "Members are required to use only their allotted seats. Any misuse of seating or repeated indiscipline may result in temporary or permanent suspension."
    },
    {
      title: "Timings & Access",
      content:
        "Entry is permitted strictly according to the selected membership plan. Library management reserves the right to modify operating hours when required."
    },
    {
      title: "Food & Cleanliness",
      content:
        "Consumption of food inside the study area is strictly prohibited. Members are expected to maintain cleanliness within the library premises."
    },
    {
      title: "Payment & Refund",
      content:
        "All membership fees must be paid in advance. Fees once paid are non-refundable and non-adjustable under any circumstances."
    },
    {
      title: "Safety & Security",
      content:
        "The premises are under CCTV surveillance for safety purposes. Damage to property or misuse of facilities may attract strict action."
    },
    {
      title: "Management Rights",
      content:
        "Library management reserves the right to update or modify policies without prior notice. The management’s decision shall be final and binding."
    },
    {
      title: "Policy Acceptance",
      content:
        "By using library facilities, members agree to comply with all policies and guidelines mentioned above."
    }
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const [showOrder, setShowOrder] = useState(false)
  const [selectedItems, setSelectedItems] = useState([])
  const [seatNumber, setSeatNumber] = useState("")
  const [cartItems, setCartItems] = useState([])
  const [showColdDrinks, setShowColdDrinks] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [onlinePaymentStarted, setOnlinePaymentStarted] = useState(false);
  const [currentOrderId, setCurrentOrderId] = useState("");
  const [showDeveloperCard, setShowDeveloperCard] = useState(true);


  useEffect(() => {
    if (showOrder) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showOrder]);


  const CAFE_UPI_ID = "9643394793@axl";
  const CAFE_NAME = "FB Cafe";
  const WHATSAPP_NUMBER = "919990226207";

  const getItemPrice = (item) => {
    return Number(String(item.price).replace(/[^\d.]/g, "")) || 0;
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + getItemPrice(item) * item.quantity;
    }, 0);
  };

  const createOrderId = () => {
    return `FBCAFE${Date.now()}`;
  };

  const buildUpiQuery = (amount, orderId) => {
    return new URLSearchParams({
      pa: CAFE_UPI_ID.trim(),
      pn: CAFE_NAME,
      am: Number(amount).toFixed(2),
      cu: "INR",
      tn: `FB Cafe Order ${orderId}`,
      tr: orderId,
    }).toString();
  };

  const buildUpiPaymentLink = (amount, orderId) => {
    return `upi://pay?${buildUpiQuery(amount, orderId)}`;
  };

  const openOnlinePayment = () => {
    if (cartItems.length === 0) {
      alert("Please add at least one item");
      return;
    }

    const amount = getCartTotal();

    if (amount <= 0) {
      alert("Invalid order amount");
      return;
    }

    const orderId = currentOrderId || createOrderId();

    setPaymentMethod("Online Payment");
    setCurrentOrderId(orderId);
    setOnlinePaymentStarted(true);

    const paymentLink = buildUpiPaymentLink(amount, orderId);

    console.log("UPI LINK:", paymentLink);

    // Android + iPhone
    window.location.assign(paymentLink);
  };

  const resetOnlinePayment = () => {
    setOnlinePaymentStarted(false);
    setCurrentOrderId("");
  };
  const handleCart = (item) => {
    resetOnlinePayment();

    const existingItem = cartItems.find((data) => data.id === item.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((data) =>
          data.id === item.id
            ? { ...data, quantity: data.quantity + 1 }
            : data
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    resetOnlinePayment();

    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    resetOnlinePayment();

    setCartItems(
      cartItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const categories = [...new Set(menuItems.map((item) => item.category))];




  //   const amount = getCartTotal();

  //   if (amount <= 0) {
  //     alert("Invalid order amount");
  //     return;
  //   }

  //   const orderId = currentOrderId || createOrderId();
  //   const upiLink = buildUpiPaymentLink(amount, orderId);

  //   setPaymentMethod("Online Payment");
  //   setCurrentOrderId(orderId);
  //   setOnlinePaymentStarted(true);

  //   window.location.href = upiLink;
  // };

  const sendWhatsappOrder = (
    paymentStatus = "Payment status not confirmed",
    orderId = currentOrderId || createOrderId()
  ) => {
    const orderItems = cartItems
      .map((item) => {
        const itemTotal = getItemPrice(item) * item.quantity;
        return `${item.name} x${item.quantity} = Rs.${itemTotal}`;
      })
      .join("\n");

    const totalAmount = getCartTotal();

    const message = `
Hi FB Cafe,

New cafe order received.

Order ID: ${orderId}
Seat Number: ${seatNumber}

Order:
${orderItems}

Total Amount:
Rs.${totalAmount}

Payment Method:
${paymentMethod}

Payment Status:
${paymentStatus}

Kindly deliver the order to my seat once it is ready.

Thank you.
`;

    const whatsappURL =
      `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  const handleConfirmOrder = () => {
    if (cartItems.length === 0) {
      alert("Please add at least one item");
      return;
    }

    if (!seatNumber) {
      alert("Please enter seat number");
      return;
    }

    if (!paymentMethod) {
      alert("Please select payment method");
      return;
    }

    if (paymentMethod === "Online Payment") {
      if (!onlinePaymentStarted) {
        alert("Please click Pay Online and complete payment first");
        return;
      }

      sendWhatsappOrder(
        "Online payment completed by customer. Please verify UPI payment.",
        currentOrderId
      );
      return;
    }

    sendWhatsappOrder("Pay at counter", createOrderId());
  };


  const totalAmt = getCartTotal();


  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      {/* NAVBAR */}
      <div className="bg-[#2D1B14] hover:bg-[#1E120D]">
        <DeveloperCredit />
      </div>
      <nav className="flex flex-col lg:flex-row shadow-sm relative">


        <div className="flex flex-col lg:flex-row w-full">

          <div className="w-full lg:w-1/2">

            {/* Left Image */}
            <img
              className="
          block
          w-full
          h-auto
          max-h-[300px]
          md:max-h-[350px]
          lg:h-40
          object-cover
        "
              src={library}
              alt=""
            />
          </div>





          {/* Right Image Container */}
          <div className="relative w-full lg:w-1/2">

            <img
              className="
          block
          w-full
          h-auto
          max-h-[300px]
          md:max-h-[350px]
          lg:h-40
          object-cover
        "
              src={fbcafe}
              alt=""
            />
            <button
              onClick={() => navigate("/login")}
              className="
    absolute
    top-4
    right-4
    group
  "
            >
              <div
                className="
      flex items-center gap-2
      px-4 py-2
      rounded-full
      backdrop-blur-md
      bg-black/20
      border border-white/20
      shadow-xl
      hover:bg-black/40
      transition-all duration-500
      hover:scale-105
    "
              >
                <HiMiniShieldCheck
                  size={24}
                  className="text-amber-300"
                />

                <span
                  className="
        text-white
        font-medium
        text-sm
        hidden md:block
      "
                >
                  Admin Portal
                </span>
              </div>
            </button>


            <div className="relative">

              {/* Main Library Page */}
              <div className={`${showOrder ? "blur-sm h-screen overflow-hidden" : ""}`}>

                <div className="flex justify-center">

                  <button
                    onClick={() => setShowOrder(true)}
                    className="
              absolute
              top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2

              bg-black text-white

              px-4 sm:px-5 md:px-5
              py-2 md:py-2

              rounded-xl

              hover:bg-gray-800

              transition-all duration-300
              hover:scale-105

              text-sm sm:text-base md:text-lg

              -mt-4 sm:-mt-5 md:-mt-7 ml-2
            "
                  >
                    Order Now
                  </button>

                </div>

              </div>

              {/* Popup Modal */}
              {showOrder && (

                <div className="
          fixed inset-0
          flex items-center justify-center
          bg-black/50
          backdrop-blur-sm
          z-50
          p-3 sm:p-4
        ">

                  <motion.div

                    initial={{
                      opacity: 0,
                      scale: 0.85,
                      y: 40,
                      filter: "blur(10px)"
                    }}

                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "blur(0px)"
                    }}

                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      y: 20,
                      filter: "blur(6px)"
                    }}

                    transition={{
                      type: "spring",
                      damping: 22,
                      stiffness: 180,
                      mass: 0.8
                    }}

                    className="
              bg-white/80
              backdrop-blur-2xl
              border border-white/30
              shadow-2xl

              p-4 sm:p-6 md:p-8

              rounded-[25px] md:rounded-[30px]

              w-full
              max-w-[800px]

              relative

              max-h-[85vh]

              overflow-y-auto
              scrollbar-thin
            "
                  >

                    <button
                      onClick={() => setShowOrder(false)}
                      className="
                absolute
                top-3 right-4

                text-2xl md:text-3xl

                hover:scale-125
                transition-all duration-300
              "
                    >
                      ×
                    </button>

                    <h2 className="
              text-2xl sm:text-3xl md:text-4xl
              font-bold
              mb-5 md:mb-8
            ">
                      Order Menu
                    </h2>

                    <div className="  grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-6">

                      {menuItems.map((item) => (
                        <div
                          className="
    bg-white
    rounded-2xl
    overflow-hidden
    shadow-md
    hover:shadow-xl
    transition-all duration-300
    hover:-translate-y-1
  "
                        >


                          <img
                            src={item.image}
                            alt={item.name}
                            className="
      w-full
      h-44
      sm:h-44
      md:h-52
      object-cover
    "
                          />

                          <div className="p-4">

                            <h3 className="text-lg font-semibold">
                              {item.name}
                            </h3>

                            {/* <p className="text-sm text-gray-500 mt-1">
      Fresh & Delicious
    </p> */}

                            <div className="flex justify-between items-center mt-4">

                              <span className="font-bold text-lg">
                                {item.price}
                              </span>
                            </div>

                            <div className="flex items-center gap-3">

                              {cartItems.find((data) => data.id === item.id) ? (

                                <div className="
      flex items-center gap-3
      bg-black text-white
      px-4 py-2
      rounded-xl
    ">

                                  <button
                                    onClick={() => decreaseQuantity(item.id)}
                                    className="text-xl"
                                  >
                                    -
                                  </button>

                                  <span>

                                    {
                                      cartItems.find((data) => data.id === item.id)
                                        ?.quantity
                                    }

                                  </span>

                                  <button
                                    onClick={() => increaseQuantity(item.id)}
                                    className="text-xl"
                                  >
                                    +
                                  </button>

                                </div>

                              ) : (

                                <button
                                  onClick={() => handleCart(item)}
                                  className="
           bg-green-600
          text-white
          px-5
          py-2
          rounded-xl
          font-medium
          hover:bg-green-700
      "
                                >
                                  Add
                                </button>

                              )}

                            </div>

                          </div>

                        </div>
                      ))}

                    </div>
                    <div className="mt-5 border rounded-2xl overflow-hidden">

                      <button
                        onClick={() => setShowColdDrinks(!showColdDrinks)}
                        className="
      w-full
      flex justify-between items-center
      p-4
      bg-gray-100
      font-bold
      text-lg
    "
                      >
                        🥤 Cold Drinks

                        <span>
                          {showColdDrinks ? "▲" : "▼"}
                        </span>
                      </button>

                      {showColdDrinks && (

                        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">

                          {coldDrinks.map((item) => (

                            <div
                              key={item.id}
                              className="
          border
          p-4
          rounded-xl
          flex
          justify-between
          items-center
        "
                            >

                              <div>
                                <h3 className="font-semibold">
                                  {item.name}
                                </h3>

                                <p>{item.price}</p>
                              </div>

                              <div>

                                {cartItems.find(
                                  (data) => data.id === item.id
                                ) ? (

                                  <div
                                    className="
                flex items-center gap-3
                bg-black text-white
                px-3 py-2 rounded-xl
              "
                                  >

                                    <button
                                      onClick={() =>
                                        decreaseQuantity(item.id)
                                      }
                                    >
                                      -
                                    </button>

                                    <span>
                                      {
                                        cartItems.find(
                                          (data) =>
                                            data.id === item.id
                                        )?.quantity
                                      }
                                    </span>

                                    <button
                                      onClick={() =>
                                        increaseQuantity(item.id)
                                      }
                                    >
                                      +
                                    </button>

                                  </div>

                                ) : (

                                  <button
                                    onClick={() => handleCart(item)}
                                    className="
                bg-black
                text-white
                px-4 py-2
                rounded-lg
              "
                                  >
                                    Add
                                  </button>

                                )}

                              </div>

                            </div>

                          ))}

                        </div>

                      )}

                    </div>



                    <div className="mt-6">
                      <h2 className="text-2xl font-bold mb-4">
                        Selected Items
                      </h2>

                      <div className="space-y-3">
                        {cartItems.length === 0 ? (
                          <p className="text-sm text-gray-500">
                            No item selected yet
                          </p>
                        ) : (
                          cartItems.map((item) => (
                            <div
                              key={item.id}
                              className="flex justify-between bg-gray-100 p-3 rounded-xl"
                            >
                              <span>
                                {item.name} x{item.quantity}
                              </span>

                              <span>
                                Rs.{getItemPrice(item) * item.quantity}
                              </span>
                            </div>
                          ))
                        )}
                      </div>



                      <div className="mt-6 border rounded-2xl p-4 bg-white">
                        <h2 className="text-xl font-bold mb-4">
                          Payment Details
                        </h2>

                        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
                          <p className="text-sm text-gray-600">
                            Total Payable Amount
                          </p>

                          <h2 className="text-3xl font-bold text-green-600">
                            Rs.{totalAmt}
                          </h2>
                        </div>

                        <div className="space-y-3">
                          <button
                            onClick={openOnlinePayment}
                            className={`
        w-full
        p-3
        rounded-xl
        font-semibold

        ${paymentMethod === "Online Payment"
                                ? "bg-green-600 text-white"
                                : "bg-gray-100 text-black"
                              }
      `}
                          >
                            Pay Online
                          </button>

                          <button
                            onClick={() => {
                              setPaymentMethod("Pay At Counter");
                              setOnlinePaymentStarted(false);
                              setCurrentOrderId("");
                            }}
                            className={`
        w-full
        p-3
        rounded-xl
        font-semibold

        ${paymentMethod === "Pay At Counter"
                                ? "bg-black text-white"
                                : "bg-gray-100 text-black"
                              }
      `}
                          >
                            Pay At Counter
                          </button>
                        </div>

                        {paymentMethod === "Online Payment" && onlinePaymentStarted && (
                          <p className="mt-3 text-sm text-green-700">
                            Payment app opened. Complete payment, then click Confirm Order.
                          </p>
                        )}


                      </div>



                      <input
                        type="number"
                        placeholder="Enter Seat Number"
                        value={seatNumber}
                        min="1"
                        max="61"
                        onChange={(e) => {
                          const value = e.target.value;

                          if (value === "" || (Number(value) >= 1 && Number(value) <= 61)) {
                            setSeatNumber(value);
                          }
                        }}
                        className="
    w-full
    border
    p-4
    rounded-2xl
    outline-none
    text-black
  "
                      />

                    </div>

                    <button
                      onClick={handleConfirmOrder}
                      className="
    bg-black text-white

    px-5 py-3

    rounded-2xl

    mt-6

    w-full

    text-sm sm:text-base md:text-lg

    hover:bg-gray-800

    transition-all duration-300
    hover:scale-[1.02]
  "
                    >
                      Confirm Order
                    </button>

                    {/* {showQR && (
                      <div
                        className="
      absolute inset-0
      bg-black/60
      flex items-center justify-center
      rounded-[30px]
      z-50
    "
                      >
                        <div
                          className="
        bg-white
        p-6
        rounded-2xl
        text-center
        w-[320px]
        shadow-2xl
      "
                        >
                          <h2 className="text-2xl font-bold mb-4">
                            Scan & Pay
                          </h2>

                          <img
                            src={paymentQr}
                            alt="QR Code"
                            className="w-60 h-60 mx-auto"
                          />

                          <p className="mt-4 text-sm text-gray-600">
                            Complete payment and click below
                          </p>

                          <button
                            onClick={() => {
                              setShowQR(false);
                              sendWhatsappOrder();
                            }}
                            className="
          mt-5
          bg-green-600
          text-white
          px-5 py-3
          rounded-xl
          w-full
        "
                          >
                            I've Paid
                          </button>

                          <button
                            onClick={() => setShowQR(false)}
                            className="
          mt-3
          bg-red-500
          text-white
          px-5 py-3
          rounded-xl
          w-full
        "
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}

 */}


                  </motion.div>

                </div>

              )}

            </div>

          </div>

        </div>
















        <div className=" hidden md:flex gap-8 text-xl">

          {/* <span
      onClick={() => scrollToSection("home")}
      className="cursor-pointer hover:text-blue-600"
    >
      Home
    </span>

    <span
      onClick={() => scrollToSection("enquiries")}
      className="cursor-pointer hover:text-blue-600"
    >
      Enquiries
    </span>

    <span
      onClick={() => scrollToSection("contact")}
      className="cursor-pointer hover:text-blue-600"
    >
      Contact
    </span>

    <span
      onClick={() => scrollToSection("policies")}
      className="cursor-pointer hover:text-blue-600"
    >
      Policies
    </span> */}
        </div>

        {/* <div className=" hidden md:flex items-center gap-2 cursor-pointer hover:text-blue-600">
          <FiUser size={26} />
          <span className="text-lg">Login</span>
        </div> */}
      </nav>

      {/* <div className="flex justify- h-40">
        

      </div> */}

      {/* ================= MAIN SECTION ================= */}
      <section id="home" className="bg-[#f7f0e6] px-4 sm:px-6 md:px-10 py-18">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-10">

          {/* LEFT IMAGE CARD */}
          <div className="w-full md:w-1/2">
            <div className="bg-[#ece6dd] rounded-[28px] p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex flex-col">

              {/* IMAGE AREA */}
              <div className="w-full h-[220px] sm:h-[280px] md:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden mb-6">
                <img
                  src={images[activeIndex]}
                  alt="Library"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* THUMBNAILS */}
              <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
                {images.map((img, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden cursor-pointer
              border-2 transition-all
              ${activeIndex === index
                        ? "border-black scale-105"
                        : "border-transparent"
                      }`}
                  >
                    <img
                      src={img}
                      alt="thumb"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT INFO CARD */}
          <div className="w-full md:w-1/2">
            <div className="bg-[#ece6dd] rounded-[28px] p-6 sm:p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex flex-col gap-8 h-full">

              {/* CONTENT */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold mb-6">
                  Why Students Choose <br /> Front Benchers Library
                </h2>

                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    ✔ A Calm Space for Deep Focus
                  </h3>
                  <ul className="ml-5 text-gray-700 space-y-1">
                    <li>Individual sound-controlled cubicles</li>
                    <li>Soft LED lighting for eye comfort</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    🪑 Comfort That Supports Long Hours
                  </h3>
                  <ul className="ml-5 text-gray-700 space-y-1">
                    <li>Air-conditioned & heated rooms</li>
                    <li>Ergonomic seating</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    📶 Fast & Reliable Internet
                  </h3>
                  <ul className="ml-5 text-gray-700 space-y-1">
                    <li>100 Mbps dual Wi-Fi</li>
                    <li>Ideal for online classes & research</li>
                  </ul>
                </div>
              </div>

              {/* BADGES */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {[
                  "🕒 24×7 Open",
                  "📶 High-Speed Wi-Fi",
                  "🪑 Private Cubicles",
                  "❄️ AC & Heated Rooms",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#f7f0e6] px-4 py-2 rounded-xl shadow-sm font-medium text-sm sm:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= ENQUIRY FORM ================= */}
      <section id="enquiries" className="bg-[#f7f0e6] py-14 px-4">
        <div className="max-w-xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-md">

          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">
            Enquiry Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />

            <input
              name="phone"
              placeholder="Mobile Number"
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />

            <select
              name="plan"
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            >
              <option value="">Select Plan</option>
              <option value="Less than 6 Hours">Less than 6 Hours</option>
              <option>6 Hours</option>
              <option>8 Hours</option>
              <option>12 Hours</option>
              <option>24 Hours</option>
            </select>

            <select
              name="time"
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            >
              <option value="">Preferred Time</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
              <option>Night</option>
            </select>

            <select
              name="joining"
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            >
              <option value="">Joining When?</option>
              <option>Today</option>
              <option>This Week</option>
              <option>Next Week</option>
            </select>

            <button
              className="w-full bg-black text-white py-3 rounded text-base sm:text-lg
             transition-all duration-300
             hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)]
             active:translate-y-0 active:shadow-inner"
            >
              Send Enquiry on WhatsApp
            </button>
          </form>

        </div>
      </section>



      <section id="contact" className="bg-[#f7f0e6] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Contact Us
            </h2>
            <p className="text-gray-600 mt-2">
              Get in touch or visit our library anytime
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-3">

            {/* Address */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <MapPin className="h-10 w-10 text-[#9b7a4b]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Address
              </h3>
              <p className="text-gray-600 leading-relaxed">
                FRONT BENCHERS LIBRARY <br />
                M-50 OLD DLF COLONY,SEC-14<br />
                GURUGRAM – 122001, India
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <Phone className="h-10 w-10 text-[#9b7a4b]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Call / WhatsApp
              </h3>
              <p className="text-gray-600">
                <a
                  href="tel:+919990226207"
                  className="cursor-pointer hover:text-blue-600"
                >
                  +91 9990226207
                </a>
              </p>
              <a
                href="https://wa.me/919990226207"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline ml-2"
              >
                Available for quick assistance on WhatsApp
              </a>

            </div>

            {/* Timing */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <Clock className="h-10 w-10 text-[#9b7a4b]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Opening Hours <br />24×7
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Flexible study access for students with
                extended availability throughout the day.
              </p>


            </div>
            <div className="w-full max-w-5xl h-[300px] md:h-[420px] mx-auto rounded-2xl overflow-hidden shadow-xl mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.3311383268165!2d77.0438528!3d28.4695726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1900310c6435%3A0xfb8c416fb0b3a63a!2sFront%20Benchers%20Library!5e0!3m2!1sen!2sin!4v1768835192348!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>

            </div>

            <div ref={scrollRef} className="flex overflow-x-auto gap-4 mt-8 ml-10">
              {/* review cards */}
              <div className="bg-white rounded-xl shadow-md p-5 w-[280px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                    R
                  </div>

                  <div>
                    <p className="font-medium text-sm">Rahul Sharma</p>
                    <p className="text-xs text-gray-500">⭐⭐⭐⭐⭐ · 2 months ago</p>
                  </div>
                </div>

                <p className="text-sm text-gray-700">
                  Very calm and disciplined environment. Perfect for long study hours.
                </p>

                <p className="text-xs text-gray-400 mt-2">Reviewed on Google</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6 mt-8">
              <img
                src={Google}
                className="w-10 h-10"
              />

              <div>
                <p className="text-xl font-semibold">4.9</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                  <span className="text-sm text-gray-500 ml-2">
                    Based on 50 reviews
                  </span>
                </div>
              </div>
            </div>






          </div>
        </div>

      </section>

      <section id="policies " className="bg-[#f7f0e6] py-16 px-4">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-10">
            Library Policies
          </h2>

          <div className="space-y-4">
            {policies.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold"
                >
                  <span>{item.title}</span>
                  <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-600 mt-12">
            These policies are designed to ensure a disciplined, secure, and
            productive study environment for all members.
          </p>

        </div>
      </section>

      <footer className="bg-[#ece6dd] px-4">
        <div className="max-w-7xl mx-auto px-10 py-14">

          {/* TOP SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* BRAND */}
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Front Benchers Library
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A calm, disciplined and well-equipped study space designed
                for long hours of focused learning and exam preparation.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="hover:underline cursor-pointer">Home</li>
                <li className="hover:underline cursor-pointer">About Us</li>
                <li className="hover:underline cursor-pointer">Facilities</li>
                <li className="hover:underline cursor-pointer">Plans & Pricing</li>
                <li className="hover:underline cursor-pointer">Contact</li>
              </ul>
            </div>

            {/* FACILITIES */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Facilities</h4>
              <ul className="space-y-2 text-gray-700">
                <li>24×7 Open Library</li>
                <li>Individual Study Cubicles</li>
                <li>High-Speed Wi-Fi</li>
                <li>AC & Heated Rooms</li>
                <li>Clean & Hygienic Washrooms</li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3 text-gray-700">
                <li>📍 M-50 OLD DLF COLONY SEC-14     GURUGRAM</li>
                <li>📞 +91 9990226207</li>
                <li>🕒 Open 24×7</li>
              </ul>
            </div>

          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-300 my-10"></div>

          {/* BOTTOM BAR */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
            <p>
              © {new Date().getFullYear()} Front Benchers Library. All rights reserved.
            </p>

            <div className="flex gap-6">
              <span className="hover:underline cursor-pointer">Privacy Policy</span>
              <span className="hover:underline cursor-pointer">Terms & Conditions</span>
            </div>
          </div>

        </div>
      </footer>




    </div>

  );


}
export default Home;
