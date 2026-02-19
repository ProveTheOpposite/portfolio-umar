import Banner from "@/components/pages/HomePage/Banner";
import ProjectsSection from "@/components/pages/HomePage/ProjectsSection";
import Services from "@/components/pages/HomePage/Services";
import About from "@/components/pages/HomePage/About";
import CTA from "@/components/pages/HomePage/CTA";

export default function Home() {
  return (
    <>
      <Banner />
      <ProjectsSection />
      <Services />
      <About />
      <CTA />
    </>
  );
}
