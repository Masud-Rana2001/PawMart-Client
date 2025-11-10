import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MeetOurExperts() {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch("/experts.json")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-emerald-900 text-white">
    

      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-emerald-300 mb-6">
          💐 Meet Our Green Experts
        </h2>
        <p className="text-lg text-green-100/80 max-w-2xl mx-auto mb-14">
          Our experienced plant care specialists are here to guide you toward a
          greener, healthier lifestyle.
        </p>

        
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {experts.map((expert, index) => (
            <div
              key={expert.id}
              
              className="bg-white/10 backdrop-blur-md border border-emerald-400/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-2 transition-all duration-300 "
            >
              <div className="relative">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-56 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-emerald-200">
                  {expert.name}
                </h3>
                <p className="text-green-100/80 mt-1 text-sm">
                  {expert.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
