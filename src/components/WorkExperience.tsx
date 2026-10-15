import { experiences } from '../data/experiences'
export default function WorkExperience() {


  return (
    <section id="workexperience" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-cool-blue-dark">
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`paper-card agenda-card rounded-lg p-8 hover:shadow-lg transition-shadow duration-200 ${
                exp.id % 4 === 0 ? 'rotate-[0.35deg]' : exp.id % 3 === 0 ? 'rotate-[-0.2deg]' : exp.id % 2 === 0 ? 'rotate-[0.2deg]' : 'rotate-[-0.25deg]'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-cool-blue-dark">
                    {exp.position}
                  </h3>
                  <p className="text-lg font-medium text-cool-brown mt-1">
                    {exp.company}
                  </p>
                </div>
                <div className="text-right">
                  <p className="calendar-badge mb-2">
                    {exp.duration}
                  </p>
                  <p className="text-sm text-cool-brown-dark">
                    {exp.location}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="todo-item text-cool-brown-dark leading-relaxed">
                    <span>{achievement}</span>
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
