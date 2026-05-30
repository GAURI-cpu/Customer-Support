import Sidebar from "@/components/dashboard/Sidebar";
import { Metadata } from "next";
import { cookies } from "next/headers";



export const metadata: Metadata = {
  title: "OneMinute Support - Dashboard",

  description:
    "Instantly resolve customer questions with an assistant that reads your docs and speaks with empathy.",
};


export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    const cookiesStore=await cookies();
    const metadataCookies=cookiesStore.get("metadata");


    return(
        <div className="bg-[#050509] min-h-screen flex flex-col p-0 antialiased text-zinc-100 selection:bg-zinc-800 font-sans">
            {metadataCookies?.value?(
                <>
                <Sidebar/>
                <div className="flex-1 flex flex-col md: ml-64 relative min-h-screen transition-all duration-300">
                    {/* Header */}
                    <main className="flex-1">{children}</main>
                </div>
                </>
            ): (
                children
            )}
        </div>
    )
}