import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetails() {
  const { id } = useParams()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [id])
  const project = projects.find(project => String(project.id) === id)

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-cool-blue-dark mb-4">Project not found</h2>
          <Link to="/" className="text-cool-brown hover:text-cool-brown-dark font-medium">
            Back to portfolio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail min-h-screen bg-cool-blue-lighter py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/#projects" className="text-cool-brown hover:text-cool-brown-dark font-medium mb-8 inline-block">
          ← Back to projects
        </Link>

        <div className="bg-white rounded-lg p-8 border-2 border-cool-blue-dark">
          <h1 className="text-4xl font-bold mb-2 text-cool-blue-dark">
            {project.title}
          </h1>

          <p className="text-cool-brown-dark text-lg mb-6">
            {project.year}
          </p>

          <p className="text-lg text-cool-brown-dark mb-8 leading-relaxed">
            {project.description}
          </p>

          {project.demo && (
            <div className="mb-8">
              <video
                src={project.demo}
                poster={project.demoPoster}
                className="w-full rounded-lg border-2 border-cool-blue-dark"
                controls
                preload="metadata"
              />
            </div>
          )}

          {project.demoLink && !project.demo && (
            <div className="mb-8">
              <iframe
                width="100%"
                height="500"
                src={project.demoLink.replace('watch?v=', 'embed/')}
                title="Project Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg border-2 border-cool-blue-dark"
              ></iframe>
            </div>
          )}

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-cool-blue-dark">Technologies</h2>
            <div className="project-technologies">
              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="project-technology"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-cool-blue-dark">Project highlights</h2>
            <ul className="space-y-3">
              {project.details.map((detail: string, index: number) => (
                <li key={index} className="flex gap-3 text-cool-brown-dark">
                  <span className="text-cool-brown font-bold flex-shrink-0">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4">
            {project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cool-brown hover:bg-cool-brown-light text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                View on GitHub →
              </a>
            )}
            {project.documentLink && (
              <a
                href={project.documentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cool-brown hover:bg-cool-brown-light text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                View Architecture PDF →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
