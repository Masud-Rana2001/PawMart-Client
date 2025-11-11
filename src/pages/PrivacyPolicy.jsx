import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen flex items-center justify-center 
      bg-gradient-to-r from-sky-200 via-cyan-300 to-sky-400 
      dark:from-sky-900 dark:via-sky-950 dark:to-cyan-950 
      p-4 transition-colors duration-300 py-10">
      
      {/* Background overlay image */}
      <div className="absolute inset-0 bg-[url('/paws-bg.png')] opacity-10 bg-cover bg-center blur-sm"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-sky-600 dark:text-sky-300 mb-8">
          🐾 Privacy Policy
        </h1>

        <p className="text-lg text-sky-800/80 dark:text-sky-200/80 max-w-2xl mx-auto mb-12">
          At <span className="font-semibold text-sky-700 dark:text-sky-300">PawMart</span>, we care deeply about your privacy.  
          We only collect the necessary information to ensure a safe and personalized pet adoption and shopping experience.
        </p>

        {/* Policy cards */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          
          {/* Data Collection */}
          <div className="p-6 rounded-2xl bg-sky-50/60 dark:bg-sky-900/40 border border-sky-400/20 shadow-lg backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-sky-700 dark:text-sky-200 mb-3">
              🐶 Data Collection
            </h3>
            <p className="text-sky-800/80 dark:text-sky-200/80 text-sm leading-relaxed">
              We collect basic personal details like your name, email, and profile picture 
              to manage your account securely and make your pet adoption journey smoother.
            </p>
          </div>

          {/* Data Protection */}
          <div className="p-6 rounded-2xl bg-sky-50/60 dark:bg-sky-900/40 border border-sky-400/20 shadow-lg backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-sky-700 dark:text-sky-200 mb-3">
              🔒 Data Protection
            </h3>
            <p className="text-sky-800/80 dark:text-sky-200/80 text-sm leading-relaxed">
              All your personal data is securely encrypted and stored.  
              PawMart never sells or shares your data with any third-party companies.
            </p>
          </div>

          {/* Consent */}
          <div className="p-6 rounded-2xl bg-sky-50/60 dark:bg-sky-900/40 border border-sky-400/20 shadow-lg backdrop-blur-sm md:col-span-2">
            <h3 className="text-2xl font-semibold text-sky-700 dark:text-sky-200 mb-3">
              💡 Your Consent
            </h3>
            <p className="text-sky-800/80 dark:text-sky-200/80 text-sm leading-relaxed">
              By using <span className="font-semibold text-sky-700 dark:text-sky-300">PawMart</span>, you agree to our privacy practices 
              and consent to secure data handling to improve your experience.  
              If you have any concerns, please contact us through our <span className="text-sky-600 dark:text-sky-400 font-medium hover:underline">Contact Page</span>.
            </p>
          </div>
        </div>

       
      </div>
    </section>
  );
}
