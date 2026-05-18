import React from "react";

const Integration = () => {
  return (
    <section
      id="how-it-works"
      className="py-24  border-t border-white/5 bg-black/20"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center flex-col md:flex-row gap-16">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
            Drop-in Simplicity
          </h2>
          <p className="text-lg font-light mb-8 text-zinc-400 leading-relaxed ">
            No complex SDKs or user syncing. Just add your script tag and
            you&apos;re live. We inherit your CSS variable automatically
          </p>

          <div className="flex flex-col gap-2">
            <div className=" flex items-center gap-4 text-md text-zinc-300 font-light">
              <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[15px] text-zinc-500">
                1
              </div>
              Scan your documentation URL
            </div>
            <div className="w-px h-3 bg-zinc-700 ml-3" />
            <div className=" flex items-center gap-4 text-md text-zinc-300 font-light">
              <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[15px] text-zinc-500">
                2
              </div>
              Copy the embed Snippet
            </div>
            <div className="w-px h-3 bg-zinc-700 ml-3" />
            <div className=" flex items-center gap-4 text-md text-zinc-300 font-light">
              <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[15px] text-zinc-500">
                3
              </div>
              Auto-resolve tickets
            </div>
          </div>
        </div>
        <div className="max-w-lg w-full flex-1">
          <div className="glass-card p-6 relative rounded-xl ">
            <div className="flex items-center-safe justify-between mb-4">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border-red-500/50 border"/>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border-yellow-500/50 border"/>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border-green-500/50 border"/>
                </div>
                <span className="text-xs text-zinc-500 font-mono">index.html</span>
            </div>
            <div className="font-mono text-xs md:text-sm leading-7 text-zinc-400">
                <div className="text-zinc-600">
                    &lt;!-- OneMinute Support --&gt;
                </div>
                <div>
                    &lt;<span className="text-pink-400">script</span>
                </div>
                <div className="pl-4">
                    <span className="text-indigo-400">src=</span>
                    <span className="text-emerald-400">
                        &quot;https://oneminutesupport.com/init.js&quot;
                        {/*you can change your website link after vercel deploy */}
                    </span>
                </div>
                <div className="pl-4">
                    <span className="text-indigo-400">data_id=</span>
                    <span className="text-emerald-400">
                        &quot;b7880cds-18a-479b-baf6-c6fb66777xhs89&quot;
                        {/*you can change your data */}
                    </span>
                    <br />
                    <span className="text-indigo-400">defer&gt;</span>
                </div>
                <div>
                    &lt;<span className="text-pink-400">script</span>&gt;
                </div>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Integration;
