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
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-r from-sky-200 via-cyan-300 to-sky-400 
      dark:from-sky-900 dark:via-sky-950 dark:to-cyan-950 
      p-4 transition-colors duration-300">
      
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/90 dark:bg-gray-900/80 
        rounded-2xl shadow-2xl p-8 border border-cyan-200 
        dark:border-cyan-800 transition-all duration-300 backdrop-blur-md"
      >
        <fieldset className="border-none">
          <legend className="text-3xl font-bold text-sky-800 
          dark:text-cyan-300 mb-8 text-center">
            Get in Touch
          </legend>

          {/* Name */}
          <div className="mb-5">
            <label className="block text-sky-700 dark:text-cyan-200 mb-2 text-sm font-semibold">
              Name :
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-sky-300 dark:border-cyan-700 
              rounded-lg bg-white/80 dark:bg-sky-950/40 text-sky-900 dark:text-cyan-100 
              placeholder-sky-400 dark:placeholder-cyan-500 focus:outline-none 
              focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sky-700 dark:text-cyan-200 mb-2 text-sm font-semibold">
              Email :
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-sky-300 dark:border-cyan-700 
              rounded-lg bg-white/80 dark:bg-sky-950/40 text-sky-900 dark:text-cyan-100 
              placeholder-sky-400 dark:placeholder-cyan-500 focus:outline-none 
              focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-5">
            <label className="block text-sky-700 dark:text-cyan-200 mb-2 text-sm font-semibold">
              Message :
            </label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              className="w-full h-32 px-4 py-2 border border-sky-300 dark:border-cyan-700 
              rounded-lg bg-white/80 dark:bg-sky-950/40 text-sky-900 dark:text-cyan-100 
              placeholder-sky-400 dark:placeholder-cyan-500 focus:outline-none 
              focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all resize-none"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 
            dark:hover:bg-cyan-400 text-white font-semibold py-2 rounded-lg 
            shadow-md hover:shadow-lg focus:ring-4 focus:ring-cyan-400 
            transition-all duration-300"
          >
            Send Message
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center my-6">
            <div className="flex-grow h-px bg-cyan-300 dark:bg-cyan-800/50"></div>
            <span className="mx-3 text-cyan-500 dark:text-cyan-300 text-sm font-medium">or</span>
            <div className="flex-grow h-px bg-cyan-300 dark:bg-cyan-800/50"></div>
          </div>

          {/* Contact Info */}
          <p className="text-center text-sky-700 dark:text-cyan-300 text-sm">
            Need quick help?{" "}
            <a
              href="mailto:support@pawmart.com"
              className="text-cyan-700 dark:text-cyan-200 hover:text-cyan-500 dark:hover:text-cyan-100 hover:underline font-semibold"
            >
              support@pawmart.com
            </a>
          </p>
        </fieldset>
      </form>
    </div>
  );
}

export default Contact;
