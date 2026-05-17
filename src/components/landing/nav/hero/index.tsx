import { TextRevealHero } from "@/components/ui/text-reveal-card";
import { ArrowRight, User } from "lucide-react";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative pt-30 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center  relative z-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 animate-pulse">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
          <span className="text-sm text-zinc-300 tracking-wide font-light ">
            Version 1.0.0 available now
          </span>
        </div>

        <div className="leading-[1]">
          <TextRevealHero text="Human-friendly Support" />

          <h1>
            <br />
            <span className=" text:5xl md:text-7xl text-zinc-400">
              powered by AI
            </span>
          </h1>
        </div>

        <p className="text-lg md:text-xl text-zinc-400 font-light mb-10 mt-4 max-w-2xl mx-auto leading-relaxed">
          Instantly resolve customer questions with an assistant that reads your
          docs and speaks with empathy. No robotic speak,just replies...
        </p>
        <div className=" flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 ">
          <button className=" cursor-pointer h-11 rounded-full bg-white text-black text-sm font-semibold gap-2 px-3 hover:transition-all flex items-center ">
            Start for free
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="cursor-pointer h-11 px-8 rounded-full border border-zinc-800 text-zinc-300 text-sm font-semibold  hover:border-green-300 hover:transition-colors bg-black/20 backdrop:blur-sm items-center flex  ">
            View demo
          </button>
        </div>
      </div>

      {/* Floating chatbot */}

      <div className="max-w-3xl relative z-10 mx-auto">
        <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="rounded-2xl p-1 md:p-2 relative overflow-hidden ring-1 ring-white/10 bg-[#0a0a0e] shadow-2xl">
          <div className="flex flex-col [h-500px] md:h-[600px] w-full bg-[#0a0a0e] rounded-xl overflow-hidden">
            <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 shrink-0 bg-[#0E0E12]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-zinc-300">
                  OneMinute Inc.
                </span>
              </div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-zinc-950/30">
              <div className="flex  w-full flex-col items-start">
                <div className="flex max-w-[85%] flex-row gap-1 items-start">
                  <div className="w-15 h-15 rounded-full  flex items-center justify-center overflow-hidden shrink-0">
                    {/* 1=4px */}
                    <Image
                      src="/robot.jpg"
                      alt="Robot"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="p-4 rounded-2xl text-sm leading-relaxed shadow-sm bg-white text-zinc-900 rounded-tl-sm">
                      Hii there, How can i help you today?
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1 ml-5">
                      <span className="px-3 py-1.5  rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-300 text-xs font-medium cursor-default">
                        FAQ
                      </span>
                      <span className="px-3 py-1.5  rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-300 text-xs font-medium cursor-default">
                        Pricing
                      </span>
                      <span className="px-3 py-1.5  rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-300 text-xs font-medium cursor-default">
                        Support
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end w-full">
                  <div className="flex max-w-[85%] flex-row-reverse gap-3 ">
                    <div className="w-12 h-12  rounded-full flex items-center justify-center shrink-0 border border-white/5 bg-zinc-700">
                      <User className="w-6 h-6  text-zinc-400" />
                    </div>
                    <div className="p-4 rounded-2xl text-sm leading-relaxed shadow-sm bg-zinc-700 text-white rounded-tl-sm">
                      I need some information about oneminute support.
                    </div>
                  </div>
                </div>

                <div className="flex max-w-[85%] flex-row gap-1 items-start mt-3">
                  <div className="w-15 h-15 rounded-full  flex items-center justify-center overflow-hidden shrink-0">
                    {/* 1=4px */}
                    <Image
                      src="/robot.jpg"
                      alt="Robot"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="p-4 rounded-2xl text-sm leading-relaxed shadow-sm bg-white text-zinc-900 rounded-tl-sm">
                      Oneminute Stack is an integrated ecosystem system that design to
                       enhance the developer efficiency .It include tools like Oneminute logs.
                    </div>              
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
