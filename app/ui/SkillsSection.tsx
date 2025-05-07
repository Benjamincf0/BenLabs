const skills = [
  { name: "Javascript", color: "bg-yellow-500", icon: "/javascript-icon.svg", lvl: 8 },
  { name: "HTML", color: "bg-red-400", icon: "/html-icon.svg", lvl: 9 },
  { name: "Next.js", color: "bg-gray-700", icon: "/nextjs-icon.svg", lvl: 6 },
  { name: "Python", color: "bg-blue-500", icon: "/python-icon.svg", lvl: 8.5 },
  { name: "CSS", color: "bg-blue-400", icon: "/css-icon.svg", lvl: 5 },
  { name: "Tailwind", color: "bg-teal-500", icon: "/tailwind-icon.svg", lvl: 7 },
  { name: "React", color: "bg-cyan-500", icon: "/react-icon.svg", lvl: 8 },
  { name: "Java", color: "bg-amber-600", icon: "/java-icon.svg", lvl: 6 },
  { name: "GitHub", color: "bg-gray-800", icon: "/github-icon.svg", lvl: 9 },
  { name: "Firebase", color: "bg-yellow-600", icon: "/firebase-icon.svg", lvl: 7 },
];

export default function SkillsSection() {
  return (
    <section className="py-16 bg-gray-900 text-white w-full">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">My Skills</h1>
        <p className="text-lg md:text-xl text-gray-400 mb-12">
          I&apos;m continuously improving!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {skills.map((li) => (
          <div
            key={li.name}
            className={`group relative p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 ${li.color}`}
          >
            <div className="flex items-center mb-4">
              <img src={"/skill_icons" + li.icon} alt={`${li.name} icon`} className="w-10 h-10 mr-4" />
              <h2 className="text-xl font-bold">{li.name}</h2>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                style={{ width: `${li.lvl * 10}%` }}
                className="h-4 rounded-full bg-gradient-to-r from-green-500 via-green-300 to-green-500 animate-gradient-x shadow-[0_0_10px_4px_rgba(34,197,94,0.6)]"
              ></div>
            </div>
            <p className="mt-2 text-sm text-gray-100 font-medium">
              <span className="inline-block bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text font-extrabold drop-shadow-md">
                Proficiency Level: {li.lvl}/10
              </span>
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}