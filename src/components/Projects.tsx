import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Projects() {


  return (
    <section id="projects" className="bg-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-cool-blue-dark">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
            >
              <h3 className="text-xl font-semibold mb-3 text-cool-blue-dark">
                {project.title}
              </h3>

              <p className="text-cool-brown-dark mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="project-technology"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                to={`/projects/${project.id}`}
                className="inline-block text-cool-blue-dark font-medium hover:text-cool-brown transition-colors duration-200"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
