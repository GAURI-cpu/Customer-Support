import { Copyright } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t bg-black/40 border-white/5 py-12">
      <div className="max-w-6xl flex mx-auto px-6 flex-col md:flex-row justify-between items-center gap-6">
        <Link href={"/"} className="flex gap-2 items-center">
          <div className="w-5 h-5 rounded-sm bg-white flex items-center justify-center">
            <div className="w-2 h-2 rounded-[1px] bg-black"></div>
          </div>
          <span className="text-sm font-medium text-white">
            OneMinute-Support
          </span>
        </Link>

        <div className="flex gap-8 text-sm text-zinc-600 font-light">
          <Link href="#" className="hover:text-zinc-400 transition-colors ">
            Privacy
          </Link>
          <Link href="#" className="hover:text-zinc-400 transition-colors ">
            Terms
          </Link>
          <Link href="#" className="hover:text-zinc-400 transition-colors ">
            Twitter
          </Link>
        </div>
        <div className="text-xs flex gap-1 text-zinc-700 tracking-wider">
            <Copyright className="w-3 h-3 mt-0.5"/> 2026. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
