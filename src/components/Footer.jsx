import Logo from '../assets/logo.png'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="w-full mx-auto  bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-400 
           dark:from-sky-900 dark:via-sky-950 dark:to-cyan-950 transition-colors duration-300">
      <div className="px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Logo & About */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
            <img src={`https://i.ibb.co.com/7NRGyQ9T/Screenshot-2025-11-09-180702.png`} className="lg:w-30 w-20 rounded-full" alt="GreenNest Logo" /> 
            <p className="font-semibold text-2xl text-emerald-900 dark:text-emerald-50">PawMart</p>
          </div>
          <p className="text-sm leading-relaxed text-emerald-800 dark:text-emerald-200">
           PawMart connects local pet owners and buyers for adoption and pet care products
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-emerald-900 dark:text-emerald-50">Quick Links</h3>
          <ul className="space-y-2">
            
            <li>
              <Link to="/contact" className="text-emerald-800 dark:text-emerald-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacypolicy" className="text-emerald-800 dark:text-emerald-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-3 text-emerald-900 dark:text-emerald-50">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            {[FaInstagram, FaFacebookF, FaXTwitter ].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="p-2 bg-emerald-200/40 dark:bg-emerald-700/40 rounded-full hover:bg-emerald-300 dark:hover:bg-emerald-600 transition"
              >
                <Icon size={18} className="text-emerald-900 dark:text-emerald-50" />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom text */}
      <div className="border-t border-emerald-200/30 dark:border-emerald-700/50 text-center py-4 text-sm text-emerald-800 dark:text-emerald-200 transition-colors duration-300">
        © 2025 <span className="font-semibold text-emerald-900 dark:text-emerald-50">PawMart</span>. All rights reserved.
      </div>
    </footer>
  );
}
