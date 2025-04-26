'use client';

import ProjectsSection from './ui/ProjectsSection';
import InternshipSection from './ui/InternshipSection';
import Footer from './ui/Footer';
import Hero from './ui/Hero';
import BioSection from './ui/BioSection';

export default function HomePage() {

  return (
    <main className="bg-[#0d1117] text-white min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Bio Section */}
      <BioSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Internship Section */}
      <InternshipSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
