import { Link } from 'react-router-dom'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Tetris Assembly",
      description: "A classic Tetris game implementation written entirely in Assembly language. Features modular architecture with keyboard input, bitmap graphics rendering, and core game logic.",
      technologies: ["Assembly", "Graphics", "Game Development"],
      link: "https://github.com/janani-gurram/tetris-assembly"
    },
    {
      id: 2,
      title: "Router Mininet Simulation",
      description: "Network routing simulation project using Mininet and POX controller. Implements routing protocols and network behavior simulation with HTTP server components for testing.",
      technologies: ["Python", "C", "Mininet", "POX"],
      link: "https://github.com/janani-gurram/router-mininet"
    },
    {
      id: 3,
      title: "Stock Portfolio Manager",
      description: "Full-stack web application for managing and tracking stock portfolios. Built with a modern tech stack featuring separate frontend and backend architecture.",
      technologies: ["PostgreSQL", "JavaScript", "Express", "Node.js",  "Full-Stack"],
      link: "https://github.com/janani-gurram/stock-portfolio-manager"
    },
    {
      id: 4,
      title: "Apache Superset Contribution",
      description: "Contributed a fix to Apache Superset addressing histogram chart rendering with NULL values. Includes comprehensive unit tests and handles real-world imperfect datasets.",
      technologies: ["Python", "Open Source", "Testing"],
      link: "https://github.com/apache/superset/pull/35693"
    },
    {
      id: 5,
      title: "Shopping Mall Android Application",
      description: "Mobile marketplace app for buyers and store owners. Served as Scrum Master managing Agile development with modular Android architecture and Firebase integration.",
      technologies: ["Java", "Android", "Firebase", "Agile"],
      link: "https://github.com/UTSC-CSCC01-Software-Engineering-I/term-group-project-bedah"
    },
    {
      id: 6,
      title: "Pintos Operating System Project",
      description: "Comprehensive operating systems implementation from CSCC69. Features threading, virtual memory, file systems, and synchronization primitives.",
      technologies: ["C", "Operating Systems", "Systems Programming"],
      link: "#"
    },
    {
      id: 7,
      title: "UTSC HealthTech Platform - Solution Architecture",
      description: "Designed comprehensive system architecture for multi-clinic healthcare platform. Implemented multi-tenancy migration, performance optimization with ETL pipelines, and Fitbit integration.",
      technologies: ["Solution Architecture", "PostgreSQL", "ETL", "System Design"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="bg-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-cool-blue-dark">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-cool-blue-lighter border-2 border-cool-blue-dark rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold mb-3 text-cool-blue-dark">
                {project.title}
              </h3>

              <p className="text-cool-brown-dark mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-cool-brown text-white px-3 py-1 rounded-full text-sm"
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
