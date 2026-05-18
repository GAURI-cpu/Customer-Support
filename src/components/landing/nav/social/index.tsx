import React from "react";

const Socialproof = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-black/20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-8">
          Trusted by modern proctuct terms
        </p>

        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50">
            <span className="text-lg font-bold tracking-tight text-white">ACME</span>
            <span className="text-lg font-bold flex items-center tracking-tight text-white"><div className="w-4 h-4 bg-white rounded-full"/>Sphere</span>
            <span className="text-lg font-semibold tracking-tight text-white">NEXUS</span>
            <span className="text-lg font-semibold tracking-tight text-white italic font-serif">Vantage</span>
            <span className="text-lg font-light tracking-[0.2rem] text-white ">Horizon</span>
        </div>
      </div>
    </section>
  );
};

export default Socialproof;
