import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';

const projects = [
  { title: 'Pendulum Simulator', description: 'This project took me a year to build and it was super fun to build. I learned so many new skills.', image: '/globe.svg' },
  { title: 'WebChat', description: 'This project took me a year to build and it was super fun to build. I learned so many new skills.', image: '/window.svg' },
  { title: 'ArduCar', description: 'This project took me a year to build and it was super fun to build. I learned so many new skills.', image: '/next.svg' },
  { title: 'Project Name 3', description: 'This project took me a year to build and it was super fun to build. I learned so many new skills.', image: '/vercel.svg' },
  { title: 'Project Name 4', description: 'This project took me a year to build and it was super fun to build. I learned so many new skills.', image: '/file.svg' },
];

export default function ProjectsSection({ className }: { className?: string }) {
  const refs = projects.map(() => useInView({ triggerOnce: true })); // Create refs for each project

  return (
    <section className={`${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">My Projects</h1>
        <p className="text-lg md:text-xl text-gray-400 mb-12">
          A showcase of my technical expertise and proficiency.
        </p>
      </div>

      {projects.map((project, index) => {
        const { ref, inView } = refs[index]; // Access the ref and inView for the current project

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-20`}
          >
            <div className="w-1/2 p-6">
              <h2 className="text-3xl font-bold mb-4" ref={ref}>
                {inView && (
                  <TypeAnimation
                    sequence={[project.title]}
                    speed={60}
                    cursor={false}
                    className="font-mono"
                    wrapper="span"
                  />
                )}
              </h2>
              <hr className="border-pink-300 mb-4" />
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