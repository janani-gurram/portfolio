import { useParams, Link } from 'react-router-dom'
import architecturePdf from '../assets/UTSCHTP Architecture Overview.pdf'

const projectsData: { [key: string]: any } = {
  '1': {
    title: "Tetris Assembly",
    description: "A classic Tetris game implementation written entirely in Assembly language. This project demonstrates low-level programming skills and understanding of hardware interaction.",
    technologies: ["Assembly", "Graphics", "Game Development"],
    link: "https://github.com/janani-gurram/tetris-assembly",
    details: [
      "Implemented core game mechanics including piece rotation, collision detection, and line clearing",
      "Designed modular architecture with separate modules for keyboard input, graphics rendering, and game logic",
      "Utilized bitmap display for graphics and keyboard interrupts for real-time player input",
      "Features tile-based grid system and state management for game progression"
    ],
    features: [
      "Real-time keyboard input handling",
      "Bitmap graphics rendering",
      "Modular code architecture",
      "Game physics and collision detection"
    ],
    year: "2023"
  },
  '2': {
    title: "Router Mininet Simulation",
    description: "A comprehensive networking project that simulates routing protocols and network behavior using Mininet and the POX controller framework.",
    technologies: ["Python", "C", "Mininet", "POX"],
    link: "https://github.com/janani-gurram/router-mininet",
    details: [
      "Implemented routing simulation using Mininet network emulator for testing routing protocols",
      "Developed custom router using POX controller framework for OpenFlow switches",
      "Created HTTP servers and client utilities for network traffic testing",
      "Configured routing tables and demonstrated OSPF-like routing implementation"
    ],
    features: [
      "Network topology simulation",
      "OpenFlow switch control",
      "Custom routing algorithm implementation",
      "Network traffic analysis tools"
    ],
    year: "2024"
  },
  '3': {
    title: "Stock Portfolio Manager",
    description: "A full-stack web application for managing and tracking stock portfolios. Features real-time data updates and portfolio analysis tools.",
    technologies: ["JavaScript", "HTML", "CSS", "Full-Stack"],
    link: "https://github.com/janani-gurram/stock-portfolio-manager",
    details: [
      "Designed and implemented responsive frontend with real-time portfolio updates",
      "Created backend API for portfolio management and stock data aggregation",
      "Integrated with financial data APIs for real-time stock prices",
      "Implemented portfolio analytics and performance tracking features"
    ],
    features: [
      "Portfolio tracking dashboard",
      "Real-time stock updates",
      "Performance analytics",
      "Responsive design"
    ],
    year: "2024"
  },
  '4': {
    title: "Apache Superset Contribution",
    description: "An open-source contribution to Apache Superset addressing a histogram chart rendering bug with NULL values in datasets.",
    technologies: ["Python", "Open Source", "Testing"],
    link: "https://github.com/apache/superset/pull/35693",
    details: [
      "Identified and fixed regression where histogram charts crashed with NULL values",
      "Implemented robust NULL value handling in data processing pipeline",
      "Added comprehensive unit tests covering grouped and ungrouped scenarios",
      "Tested with partial and complete NULL datasets to ensure reliability"
    ],
    features: [
      "NULL value handling",
      "Chart stability improvements",
      "Comprehensive unit test coverage",
      "Real-world dataset compatibility"
    ],
    year: "2024"
  },
  '5': {
    title: "Shopping Mall Android Application",
    description: "A mobile marketplace application for buyers and store owners. Built with Android Studio following SOLID design principles and Agile methodology.",
    technologies: ["Java", "Android", "Firebase", "Agile"],
    link: "https://github.com/UTSC-CSCC01-Software-Engineering-I/term-group-project-bedah",
    details: [
      "Served as Scrum Master, managing sprint planning, daily standups, and backlog refinement using Jira",
      "Designed modular Android application architecture following SOLID design principles",
      "Implemented real-time user authentication and product browsing using Firebase",
      "Developed comprehensive Java unit tests for critical business logic",
      "Managed 5-person Agile development team with emphasis on timely delivery"
    ],
    features: [
      "Modular architecture",
      "Real-time Firebase sync",
      "User authentication system",
      "Product catalog and search",
      "Shopping cart and checkout",
      "Admin store management"
    ],
    year: "2023"
  },
  '6': {
    title: "Pintos Operating System Project",
    description: "A comprehensive operating systems project from CSCC69 at the University of Toronto. Implements core OS concepts including threading, virtual memory, and file systems.",
    technologies: ["C", "Operating Systems", "Systems Programming"],
    link: "#",
    details: [
      "Implemented kernel threads with scheduling and synchronization primitives",
      "Designed virtual memory system with page replacement algorithms",
      "Built file system with inode management and disk I/O optimization",
      "Implemented locks, semaphores, and condition variables for thread safety",
      "Optimized system performance while maintaining correctness under concurrent load"
    ],
    features: [
      "Thread management and scheduling",
      "Virtual memory and paging",
      "File system implementation",
      "Synchronization primitives",
      "Interrupt handling"
    ],
    year: "2025"
  },
  '7': {
    title: "UTSC HealthTech Platform - Solution Architecture",
    description: "Designed comprehensive system architecture for multi-clinic healthcare platform. Implemented multi-tenancy migration, performance optimization with ETL pipelines, and Fitbit integration.",
    technologies: ["Solution Architecture", "PostgreSQL", "ETL", "System Design"],
    link: "#",
    documentLink: architecturePdf,
    details: [
      "Migrated from single-tenant MongoDB to multi-tenant PostgreSQL with row-level security",
      "Implemented bulk FHIR ETL pipeline reducing patient search time from 30s to <2s",
      "Designed Fitbit OAuth integration with per-clinic encryption keys and nightly data sync",
      "Architected data warehouse for population health analytics with POPULATIONHEALTH table",
      "Implemented canary deployment strategy with API Gateway for risk mitigation"
    ],
    features: [
      "Multi-tenancy with row-level isolation",
      "Bulk FHIR data ingestion via ETL",
      "Real-time patient search optimization",
      "Secure Fitbit token management",
      "Population health analytics and reporting"
    ],
    year: "2025"
  }
}

export default function ProjectDetails() {
  const { id } = useParams()
  const project = projectsData[id || '']

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
    <div className="min-h-screen bg-cool-blue-lighter py-12">
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

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-cool-blue-dark">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="bg-cool-brown text-white px-4 py-2 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-cool-blue-dark">Overview</h2>
            <ul className="space-y-3">
              {project.details.map((detail: string, index: number) => (
                <li key={index} className="flex gap-3 text-cool-brown-dark">
                  <span className="text-cool-brown font-bold flex-shrink-0">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-cool-blue-dark">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature: string, index: number) => (
                <div
                  key={index}
                  className="bg-cool-blue-lighter border-l-4 border-cool-brown p-4 rounded"
                >
                  <p className="text-cool-brown-dark font-medium">{feature}</p>
                </div>
              ))}
            </div>
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
