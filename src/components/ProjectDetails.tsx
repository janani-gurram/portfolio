import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetails() {
  const { id } = useParams()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [id])
  const project = projects.find(project => String(project.id) === id)
  if (!project) return <main className="project-detail"><div className="detail-layout"><h1>Project not found</h1><Link to="/#projects">Back to projects</Link></div></main>

  return (
    <main className="project-detail">
      <article className="detail-layout">
        <Link to="/#projects" className="detail-back">← Back to projects</Link>
        <div className="detail-heading">
          <p className="detail-year">{project.year}</p>
          <h1>{project.title}</h1>
          <p className="detail-description">{project.description}</p>
        </div>
        {(project.demo || project.demoLink) && <div className="detail-media">
          {project.demo ? <video src={project.demo} poster={project.demoPoster} controls preload="metadata" aria-label={`${project.title} demo`} /> :
            <iframe src={project.demoLink!.replace('watch?v=', 'embed/')} title={`${project.title} demo`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />}
        </div>}
        <div className="detail-notes">
          <aside className="detail-tools">
            <h2>Tools & technologies</h2>
            <ul>{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
            <div className="detail-links">
              {project.link !== '#' && <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub ↗</a>}
              {project.documentLink && <a href={project.documentLink} target="_blank" rel="noopener noreferrer">View architecture PDF ↗</a>}
            </div>
          </aside>
          <div className="detail-highlights">
            <h2>Project highlights</h2>
            <ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
          </div>
        </div>
      </article>
    </main>
  )
}
