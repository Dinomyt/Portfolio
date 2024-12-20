import Grid from "@/components/Grid";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import RecentProjects from "@/components/RecentProjects";

import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "@/components/ui/Hero";
import { navItems } from "@/data";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";




 

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
    <div className="max-w-7xl w-full ">
      <h1 className="text-white-200">Hello, Portfolio</h1>
      <FloatingNav navItems={navItems}/>
      <Hero/>
      <Grid/>
      {/* <RecentProjects/> */}
      <ProjectsCarousel/>
    </div>
   </main>
  );
}