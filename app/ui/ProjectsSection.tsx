import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';

const projects = [
  { title: 'Project Name 0', description: 'This project took me a year to build and it was super fun to build. I learned so many new skills.', image: '/globe.svg' },
  { title: 'Project Name 1', description: 'This project took me a year to build and it was super fun to build. I learned so many new skills.', image: '/window.svg' },
  { title: 'Project Name 2', description: 'This project took me a year to build and it was super fun to build. I learned so many new skills.', image: '/next.svg' },
  { title: 'Project Name 3', description: 'This project took me a year to build and it was super fun to build. I learned so many new skills.', image: '/vercel.svg' },
  { title: 'Project Name 4', description: 'This project took me a year to build and it was super fun to build. I learned so many new skills.', image: '/file.svg' },
];

export default function ProjectsSection({ className }: { className?: string }) {
  return (
    <section className={`${className}`}>
      {projects.map((project, index) => {
        const { ref, inView } = useInView({ triggerOnce: true }); // Track when each project is in view

        return (
          <motion.div
            key={index}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-20`}
          >
            <div className="w-1/2 p-6">
              <h2 className="text-3xl font-bold mb-4">
                {inView && (
                  <TypeAnimation
                    sequence={[project.title]}
                    speed={60}
                    cursor={false}
                    className="font-mono"
                  />
                )}
              </h2>
              <hr className="border-pink-300 mb-4" /> {/* Changed to light pink */}
              <p>{project.description}</p>
            </div>
            <div className="w-1/2 p-6">
              <img src={project.image} alt={project.title} className="rounded-lg shadow-lg" />
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}