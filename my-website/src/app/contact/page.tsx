"use client";

import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject:"", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setForm({ name: "", email: "", subject:"", message: "" });
        toast.success("Message sent successfully!"); // success notification
      } else {

        toast.error(`❌ Failed to send message: ${data.error || "Unknown error"}`); // error notification
        console.log(data);
      }
    } catch (err) {
      setStatus("⚠️ Error: " + err.message);
      toast.error("⚠️ Error: " + err.message); // error notification
      console.log(err);
    }

    setLoading(false);
  };


  return (
    <div className="flex flex-col items-center justify-start w-full text-lg p-6 gap-10">
      {/* Heading */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent mt-10 align-center">Let’s Connect!</h1>
        <p className="text-gray-700 text-lg">
          Shoot me a message about any upcoming projects or if you need help
          with something — I’d be happy to collaborate or assist.
        </p>
      </div>

      {/* Form */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full md:w-1/2 max-w-lg p-8 bg-white rounded-2xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                      required
                    />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 h-32 resize-none"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-purple-500 text-white py-3 rounded-lg shadow hover:bg-purple-600 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
      </div>

      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
}
