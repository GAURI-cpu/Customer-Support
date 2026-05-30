import { isAuthorized } from "@/lib/isAuthorized";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const user = await isAuthorized();
  return (
    <nav className="top-0 fixed inset-x-0 z-50 transition-all duration-300 backdrop-blur-sm border-white/5 bg-[#050509]/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <Link href={"/"} className="gap-2 flex items-center ">
          <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-black rounded-[1px]"></div>
          </div>
          <span className="text-lg text-white/90 font-semibold tracking-wide">
            OneMinute-Support
          </span>
        </Link>

        <div className="hidden md:flex text-zinc-400 gap-8 items-center text-md font-light">
          <Link href="#features" className="hover:text-white transition-colors">
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="hover:text-white transition-colors"
          >
            Integration
          </Link>
          <Link href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </Link>
        </div>

        <div className="gap-4 flex items-center">
          {user ? (
            <div className="items-center flex gap-3">
              <Link
                href="/dashboard"
                className=" h-10 text-md font-semibold bg-white text-black px-4 py-2 rounded-2xl "
              >
                Dashboard
              </Link>
            </div>
          ) : (
            <>
              <Link
                href="/api/auth"
                className=" text-lg font-semibold text-white hover:text-white transition-colors no-underline"
              >
                Sign In
              </Link>

              <Link
                href="/api/auth"
                className=" text-sm font-semibold bg-white text-black px-4 py-3 rounded-2xl  "
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
