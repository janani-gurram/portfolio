import { skillCategories } from '../data/skillCategories'
export default function Skills() {


  return (
    <section id="skills" className="bg-cool-blue-lighter py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-cool-blue-dark">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="skill-card">
              <h3 className="text-2xl font-semibold mb-6 text-cool-brown">
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
