'use client';

import ProjectsSection from '@/app/ui/ProjectsSection';
import InternshipSection from '@/app/ui/InternshipSection';
import Footer from '@/app/ui/Footer';
import Hero from '@/app/ui/Hero/Hero';
import BioSection from '@/app/ui/BioSection';
import SkillsSection from '@/app/ui/SkillsSection';

export default function HomePage() {

  return (
    <main className="bg-[#0d1117] text-white min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Bio Section */}
      <BioSection />

      <SkillsSection/>

      {/* Projects Section */}
      <ProjectsSection className='pt-10' />

      {/* Internship Section */}
      <InternshipSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
