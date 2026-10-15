export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "Docker", "GitHub", "VS Code", "Webpack"]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-cool-blue-dark">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={category.category} className={`paper-card highlight-card p-8 ${
              idx % 3 === 0 ? 'rotate-[-0.3deg]' : idx % 3 === 1 ? 'rotate-[0.25deg]' : 'rotate-[-0.2deg]'
            }`}>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: '#3D2817' }}>
                {category.category}
              </h3>

              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-cool-brown-dark font-medium"
                  >
                    <span className="w-2 h-2 bg-cool-blue-dark rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
