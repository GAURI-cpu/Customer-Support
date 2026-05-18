import { BookOpen, MessageCircleHeart, ShieldCheck } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <section id="features" className="py-32 px-6 mx-auto max-w-6xl">
      <div className="mb-20">
        <h2 className="text-3xl text-zinc-300 md:text-5xl font-medium tracking-tight mb-6 ">
          Designed for Trust
        </h2>
        <p className="text-xl text-zinc-500 font-light max-w-xl leading-relaxed">
          Most AI assistants guess. Ours answers from your actual knowledge
          base, with a tone you fully control.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8  md:grid-cols-3">
        <div className="group p-8 rounded-3xl border border-white/5 bg-linear-to-b from-white/20 to-transparent hover:border-white/10 transition-colors">
          <div className=" flex items-center justify-center mb-6 group-hover:scale-105 transition-transform w-12 h-12  rounded-2xl bg-[#0a0a0e] border border-white/10">
            <BookOpen className="w-6 h-6 text-zinc-300 " />
          </div>
          <h3 className="text-lg font-medium text-white mb-3">
            Knowledge Graph
          </h3>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            We crawl your site and docs to build structured understanding of
            your product. No matter training required.
          </p>
        </div>

        <div className="group p-8 rounded-3xl border border-white/5 bg-linear-to-b from-white/20 to-transparent hover:border-white/10 transition-colors">
          <div className=" flex items-center justify-center mb-6 group-hover:scale-105 transition-transform w-12 h-12  rounded-2xl bg-[#0a0a0e] border border-white/10">
            <ShieldCheck className="w-6 h-6 text-zinc-300 " />
          </div>
          <h3 className="text-lg font-medium text-white mb-3">
            Strict Guardrails
          </h3>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            Define exactly what the AI can and cannot say. It will politely
            decline out-of-scope questions.
          </p>
        </div>

        <div className="group p-8 rounded-3xl border border-white/5 bg-linear-to-b from-white/20 to-transparent hover:border-white/10 transition-colors">
          <div className=" flex items-center justify-center mb-6 group-hover:scale-105 transition-transform w-12 h-12  rounded-2xl bg-[#0a0a0e] border border-white/10">
            <MessageCircleHeart className="w-6 h-6 text-zinc-300 " />
          </div>
          <h3 className="text-lg font-medium text-white mb-3">Tone Matching</h3>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            Whether You&apos;r professional, quirky, or concise, the AI mimics random
            voice perfectly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
