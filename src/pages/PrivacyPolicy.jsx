import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen relative py-20 px-6 bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-slider3.png')] opacity-10 bg-cover bg-center blur-sm"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-300 mb-8">
          🔒 Privacy Policy
        </h1>
        <p className="text-lg text-green-100/80 max-w-2xl mx-auto mb-12">
          Your privacy matters to us. GreenNest collects only necessary data to
          ensure a secure and personalized plant care experience.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="p-6 rounded-2xl bg-green-800/40 border border-emerald-400/20 shadow-lg">
            <h3 className="text-2xl font-semibold text-emerald-200 mb-3">
              🪴 Data Collection
            </h3>
            <p className="text-green-100/80 text-sm leading-relaxed">
              We collect minimal personal information such as your name and
              email to enhance your user experience and keep your profile secure.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-green-800/40 border border-emerald-400/20 shadow-lg">
            <h3 className="text-2xl font-semibold text-emerald-200 mb-3">
              🔐 Data Protection
            </h3>
            <p className="text-green-100/80 text-sm leading-relaxed">
              Your information is encrypted and stored safely. We never sell or
              share your data with third parties.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-green-800/40 border border-emerald-400/20 shadow-lg md:col-span-2">
            <h3 className="text-2xl font-semibold text-emerald-200 mb-3">
              💡 Your Consent
            </h3>
            <p className="text-green-100/80 text-sm leading-relaxed">
              By using GreenNest, you agree to our privacy policy and consent to
              data handling for an improved experience. For any concerns, please
              reach out through our contact page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
