"use client";
import { metadata } from "@/db/schema";
import { useUser } from "@/hooks/useUser";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Bot,
  Layers,
  LayoutDashboard,
  MessageSquare,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const SIDEBAR_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "knowledge", href: "/dashboard/knowledge", icon: BookOpen },
  { label: "Sections", href: "/dashboard/sections", icon: Layers },
  { label: "Chatbot", href: "/dashboard/chatbot", icon: Bot },
  {
    label: "Conversations",
    href: "/dashboard/conversations",
    icon: MessageSquare,
  },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];
const Sidebar = () => {
  const { email } = useUser();
  const [metadata, setMetadata] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const fetchMetaData = async () => {
      const response = await fetch("/api/metadata/fetch");
      const res = await response.json();
      setMetadata(res.data);
      setIsLoading(false);
    };
    fetchMetaData();
  }, []);
  return (
    <div className="w-64 border-r border-white/5 bg-[#050509] flex-col h-screen fixed left-0 top-0 z-40 hidden md:flex">
      <div className="h-16 flex items-center px-6 border-b border-white/5 ">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-sm bg-white flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-[1px] bg-black"></div>
          </div>
          <span className="text-sm font-medium text-white/90 tracking-tight">
            OneMinute-Support
          </span>
        </Link>
      </div>
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {SIDEBAR_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-white/5 text-white"
                  : "text-zinc-400 hover:text-white hover:bg-white/5",
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Profile /Bottom Area */}

      <div className="p-4 border-t border-white/5">
        <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 cursor-pointer transition-colors group">
          <div className="rounded-full w-8 h-8 bg-zinc-800 flex items-center justify-center border border-white/10">
            <span className="text-xs text-zinc-400 group-hover:text-white">
              {metadata?.business_name?.slice(0, 2).toUpperCase() || ".."}
            </span>
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-medium text-zinc-300 truncate group-hover:text-white">
                {isLoading?"Loading...":`${metadata?.business_name}'s Workspace`}
            </span>
            <span className="text-sm text-zinc-500 truncate">{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
