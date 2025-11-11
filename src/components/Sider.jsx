import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Sider() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSider = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={toggleSider}
        className="p-2 text-xl bg-blue-600 text-white rounded-md"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "-100%" }}      // hidden position (off-screen)
            animate={{ x: 0 }}             // visible position
            exit={{ x: "-100%" }}          // exit animation
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg z-50 p-5"
          >
            <h2 className="text-2xl font-semibold mb-4">My Sidebar</h2>
            <ul className="space-y-3">
              <li className="hover:bg-gray-700 p-2 rounded">🏠 Home</li>
              <li className="hover:bg-gray-700 p-2 rounded">📁 Files</li>
              <li className="hover:bg-gray-700 p-2 rounded">⚙️ Settings</li>
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
