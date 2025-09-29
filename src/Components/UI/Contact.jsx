// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const form = useRef();
//   const [loading, setLoading] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .sendForm(
//         "service_ug61amp",
//         "template_bk6zrfh",
//         form.current,
//         "iDMapTqVUzlwPWpEv"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           alert("✅ Message sent successfully!");
//           form.current.reset(); // ✅ Clear form
//           setLoading(false);
//         },
//         (error) => {
//           console.error(error.text);
//           alert("❌ Failed to send message. Please try again.");
//           setLoading(false);
//         }
//       );
//   };

//   return (
//     <section id="contact" className="pb-16 contact-div">
//       <div className="container p-5">
//         <h2 className="font-bold text-[2.5rem] get-h">Get in touch</h2>

//         <div className="md:flex justify-between items-center">
//           {/* Google Map */}
//           <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
//             <iframe
//               title="google-maps"
//               src="https://www.google.com/maps/embed?pb=..."
//               className="border-0 w-full h-full"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>

//           {/* Form */}
//           <div className="w-full md:w-1/2 bg-white shadow-lg rounded-xl p-6 md:p-8">
//             <form ref={form} onSubmit={sendEmail} className="space-y-6">
//               <div className="relative">
//                 <input
//                   type="text"
//                   name="user_name"
//                   required
//                   className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
//                 />
//                 <label className="absolute left-3 top-2 text-gray-500 text-xs peer-focus:text-orange-600 peer-focus:top-1 transition-all">
//                   Your Name
//                 </label>
//               </div>

//               <div className="relative">
//                 <input
//                   type="email"
//                   name="user_email"
//                   required
//                   className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
//                 />
//                 <label className="absolute left-3 top-2 text-gray-500 text-xs peer-focus:text-orange-600 peer-focus:top-1 transition-all">
//                   Email Address
//                 </label>
//               </div>

//               <div className="relative">
//                 <input
//                   type="text"
//                   name="subject"
//                   className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
//                 />
//                 <label className="absolute left-3 top-2 text-gray-500 text-xs peer-focus:text-orange-600 peer-focus:top-1 transition-all">
//                   Subject (optional)
//                 </label>
//               </div>

//               <div className="relative">
//                 <textarea
//                   name="message"
//                   rows={4}
//                   required
//                   className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm resize-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
//                 ></textarea>
//                 <label className="absolute left-3 top-2 text-gray-500 text-xs peer-focus:text-orange-600 peer-focus:top-1 transition-all">
//                   Your Message
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-full bg-orange-600 text-white font-medium py-2 px-4 rounded-md hover:bg-orange-700 transition ${
//                   loading ? "opacity-50 cursor-not-allowed" : ""
//                 }`}
//               >
//                 {loading ? "Sending..." : "Send Message"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

//----------------------------------------------

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ug61amp",
        "template_bk6zrfh",
        form.current,
        "iDMapTqVUzlwPWpEv"
      )
      .then(
        () => {
          toast.success("✅ Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        () => {
          toast.error("❌ Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-orange-50 via-white to-orange-100">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-xl h-[300px] sm:h-[450px] border border-orange-200">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=..."
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Form */}
          <div className="bg-white/60 backdrop-blur-xl border border-orange-100 rounded-xl shadow-lg p-6 sm:p-10">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {[
                { name: "user_name", type: "text", label: "Your Name", required: true },
                { name: "user_email", type: "email", label: "Email Address", required: true },
                { name: "subject", type: "text", label: "Subject (optional)", required: false },
              ].map((field, i) => (
                <div className="relative" key={i}>
                  <input
                    type={field.type}
                    name={field.name}
                    required={field.required}
                    className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm bg-white/70 backdrop-blur focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                  <label className="absolute left-3 top-2 text-gray-500 text-xs peer-focus:text-orange-600 peer-focus:top-1 transition-all">
                    {field.label}
                  </label>
                </div>
              ))}

              <div className="relative">
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm resize-none bg-white/70 backdrop-blur focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                ></textarea>
                <label className="absolute left-3 top-2 text-gray-500 text-xs peer-focus:text-orange-600 peer-focus:top-1 transition-all">
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 transition-all duration-300 ${
                  loading ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
