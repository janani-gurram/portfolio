import { Link } from 'react-router-dom'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Tetris Assembly",
      description: "I built a classic Tetris game implementation written entirely in Assembly language. This was a fun project to showcase my low-level programming skills!",
      technologies: ["Assembly", "Graphics", "Game Development"],
      link: "https://github.com/janani-gurram/tetris-assembly"
    },
    {
      id: 8,
      title: "Pantry Pal",
      description: "I collaborated on a pantry and inventory management app to help users organize and track their pantry items with an intuitive interface.",
      technologies: ["JavaScript", "HTML", "CSS", "Web Development"],
      link: "https://github.com/janani-gurram/project-janani-and-rachel"
    },
    {
      id: 2,
      title: "Router Mininet Simulation",
      description: "I implemented a C-based IPv4 router and validated it in a Mininet emulated network. It was a deep dive into networking fundamentals and systems programming!",
      technologies: ["Python", "C", "Mininet", "POX"],
      link: "https://github.com/janani-gurram/router-mininet"
    },
    {
      id: 3,
      title: "Stock Portfolio Manager",
      description: "I built a full-stack web application for managing and tracking stock portfolios with real-time data updates and portfolio analysis tools.",
      technologies: ["PostgreSQL", "JavaScript", "Express", "Node.js",  "Full-Stack"],
      link: "https://github.com/janani-gurram/stock-portfolio-manager"
    },
    {
      id: 4,
      title: "Apache Superset Contribution",
      description: "I contributed an open-source fix to Apache Superset that addressed histogram chart rendering bugs with NULL values in datasets.",
      technologies: ["Python", "Open Source", "Testing"],
      link: "https://github.com/apache/superset/pull/35693"
    },
    {
      id: 5,
      title: "Shopping Mall Android Application",
      description: "I built a mobile marketplace app for buyers and store owners while serving as Scrum Master. It was great experience managing an Agile team!",
      technologies: ["Java", "Android", "Firebase", "Agile"],
      link: "https://github.com/UTSC-CSCC01-Software-Engineering-I/term-group-project-bedah"
    },
    {
      id: 6,
      title: "Pintos Operating System Project",
      description: "I completed a comprehensive OS implementation with threading, virtual memory, file systems, and synchronization primitives.",
      technologies: ["C", "Operating Systems", "Systems Programming"],
      link: "#"
    },
    {
      id: 7,
      title: "UTSC HealthTech Platform - Solution Architecture",
      description: "I designed a comprehensive system architecture for a multi-clinic healthcare platform with multi-tenancy and ETL optimization.",
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
