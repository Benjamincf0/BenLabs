'use client';

import ProjectsSection from '@/app/ui/ProjectsSection';
import InternshipSection from '@/app/ui/InternshipSection';
import Footer from '@/app/ui/Footer';
import Hero from '@/app/ui/Hero/Hero';
import BioSection from '@/app/ui/BioSection';
import SkillsSection from '@/app/ui/SkillsSection';

export default function HomePage() {

  return (
    <div className="flex-1 min-h-screen text-white flex flex-col">
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
    </div>
  );
}
