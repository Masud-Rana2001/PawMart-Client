import { useEffect, useState } from "react";

export default function PlantCareTips() {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("/careTips.json")
      .then((res) => res.json())
      .then((data) => setTips(data));
  }, []);

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-slider1.png')] opacity-10 bg-cover bg-center blur-sm"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-emerald-300 mb-8">
          🌱 Plant Care Tips
        </h2>
        <p className="text-lg text-green-100/80 max-w-2xl mx-auto mb-12">
          Keep your indoor plants healthy and happy with these simple care
          guidelines.
        </p>

        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className={`rounded-2xl p-6 text-left bg-gradient-to-br ${tip.bg} backdrop-blur-md border border-emerald-400/20 shadow-lg hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300`}
            >
              <div className="text-4xl mb-4">{tip.icon}</div>
              <h3 className="text-2xl font-semibold text-emerald-200 mb-2">
                {tip.title}
              </h3>
              <p className="text-green-100/90 text-sm leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
