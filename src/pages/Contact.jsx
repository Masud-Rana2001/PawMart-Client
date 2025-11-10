import { useState } from "react";
import { toast } from "react-toastify";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(
      `🌿 Message sent successfully! Thank you very much ${e.target.name.value} for contacting us.`
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-emerald-100 via-emerald-50 to-green-100 dark:from-emerald-800 dark:via-emerald-900 dark:to-green-900 p-4 transition-colors duration-300">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/90 dark:bg-gray-900/80 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700 transition-all duration-300 backdrop-blur-md"
      >
        {/* Header */}
        <fieldset className="border-none">
          <legend className="text-3xl font-bold text-emerald-800 dark:text-emerald-300 mb-8 text-center">
            Get in Touch
          </legend>

          {/* Name Field */}
          <div className="mb-5">
            <label className="block text-emerald-700 dark:text-emerald-200 mb-2 text-sm font-semibold">
              Name :
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-emerald-300 dark:border-emerald-700 rounded-lg bg-white/80 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-100 placeholder-emerald-400 dark:placeholder-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-5">
            <label className="block text-emerald-700 dark:text-emerald-200 mb-2 text-sm font-semibold">
              Email :
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-emerald-300 dark:border-emerald-700 rounded-lg bg-white/80 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-100 placeholder-emerald-400 dark:placeholder-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-5">
            <label className="block text-emerald-700 dark:text-emerald-200 mb-2 text-sm font-semibold">
              Message :
            </label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              className="w-full h-32 px-4 py-2 border border-emerald-300 dark:border-emerald-700 rounded-lg bg-white/80 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-100 placeholder-emerald-400 dark:placeholder-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg focus:ring-4 focus:ring-emerald-400 transition-all duration-300"
          >
            Send Message
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center my-6">
            <div className="flex-grow h-px bg-emerald-300 dark:bg-emerald-700/50"></div>
            <span className="mx-3 text-emerald-500 dark:text-emerald-300 text-sm font-medium">or</span>
            <div className="flex-grow h-px bg-emerald-300 dark:bg-emerald-700/50"></div>
          </div>

          {/* Contact Info */}
          <p className="text-center text-emerald-700 dark:text-emerald-300 text-sm">
            Need quick help?{" "}
            <a
              href="mailto:support@greennest.com"
              className="text-emerald-600 dark:text-emerald-200 hover:text-emerald-500 dark:hover:text-emerald-100 hover:underline font-semibold"
            >
              support@greennest.com
            </a>
          </p>
        </fieldset>
      </form>
    </div>
  );
}

export default Contact;
