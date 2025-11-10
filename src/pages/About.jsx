import React from "react";

export default function About() {
  return (
    <section className="min-h-screen relative py-20 px-6 bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-slider1.png')] opacity-10 bg-cover bg-center blur-sm"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-300 mb-8">
          🌿 About GreenNest
        </h1>
        <p className="text-lg text-green-100/80 max-w-2xl mx-auto mb-10">
          GreenNest is your trusted companion for bringing the freshness of
          nature indoors. We help plant lovers find, care for, and style
          beautiful indoor plants that brighten any space.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 rounded-2xl bg-green-800/40 border border-emerald-400/20 shadow-lg hover:shadow-emerald-500/20 transition">
            <h3 className="text-2xl font-semibold text-emerald-200 mb-3">
              🌱 Our Mission
            </h3>
            <p className="text-green-100/80 text-sm leading-relaxed">
              To make plant care simple, accessible, and enjoyable for
              everyone, regardless of experience level.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-green-800/40 border border-emerald-400/20 shadow-lg hover:shadow-emerald-500/20 transition">
            <h3 className="text-2xl font-semibold text-emerald-200 mb-3">
              🌎 Sustainability
            </h3>
            <p className="text-green-100/80 text-sm leading-relaxed">
              We promote eco-friendly lifestyles through plants that purify air
              and foster well-being.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-green-800/40 border border-emerald-400/20 shadow-lg hover:shadow-emerald-500/20 transition">
            <h3 className="text-2xl font-semibold text-emerald-200 mb-3">
              💚 Our Promise
            </h3>
            <p className="text-green-100/80 text-sm leading-relaxed">
              Quality plants, expert care tips, and a commitment to helping you
              grow your green space with love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
