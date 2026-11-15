import { experiences } from '../data/experiences'
export default function WorkExperience() {


  return (
    <section id="workexperience" className="bg-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-cool-blue-dark">
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-cool-blue-lighter rounded-lg p-8 hover:shadow-lg transition-shadow duration-200"
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
                  <p className="text-sm font-medium text-cool-brown-dark">
                    {exp.duration}
                  </p>
                  <p className="text-sm text-cool-brown-dark">
                    {exp.location}
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex gap-3 text-cool-brown-dark leading-relaxed">
                    <span className="text-cool-brown font-bold flex-shrink-0 mt-1">•</span>
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
