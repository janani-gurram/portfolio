import { useParams, Link } from 'react-router-dom'
import architecturePdf from '../assets/UTSCHTP Architecture Overview.pdf'
import tetrisDemoVideo from '../assets/tetris_assembly_demo.mp4'
import stockPortfoDemoVideo from '../assets/stock_portfolio_short_demo.mp4'

const projectsData: { [key: string]: any } = {
  '1': {
    title: "Tetris Assembly",
    description: "I built a classic Tetris game implementation written entirely in Assembly language. This project showcases my low-level programming skills and understanding of hardware interaction.",
    technologies: ["Assembly", "Graphics", "Game Development"],
    link: "https://github.com/janani-gurram/tetris-assembly",
    demo: tetrisDemoVideo,
    details: [
      "Implemented core game mechanics including piece rotation, collision detection, and line clearing",
      "Designed a modular architecture with separate modules for keyboard input, graphics rendering, and game logic",
      "Utilized bitmap display for graphics and keyboard interrupts for real-time player input",
      "Built a tile-based grid system and state management for smooth game progression"
    ],
    features: [
      "Real-time keyboard input handling",
      "Bitmap graphics rendering",
      "Modular code architecture",
      "Game physics and collision detection"
    ],
    year: "2024"
  },
  '8': {
    title: "Pantry Pal",
    description: "I built a collaborative pantry and inventory management application to help users organize and track their pantry items efficiently. This was a pair project where I focused on creating a user-friendly interface and practical functionality.",
    technologies: ["JavaScript", "HTML", "CSS", "Web Development"],
    link: "https://github.com/janani-gurram/project-janani-and-rachel",
    demoLink: "https://www.youtube.com/watch?v=tRbbwgVwjrE",
    details: [
      "Designed and implemented collaborative features for multiple users to manage shared pantry inventory",
      "Built an intuitive user interface for tracking and organizing pantry items",
      "Implemented data persistence to maintain inventory state across sessions",
      "Focused on usability and practical features for real-world pantry management"
    ],
    features: [
      "Inventory tracking and management",
      "Collaborative editing capabilities",
      "User-friendly interface design",
      "Data persistence",
      "Item organization and categorization"
    ],
    year: "2024"
  },
  '2': {
    title: "Router Mininet Simulation",
    description: "I built a software-defined networking project that implements a user-space IPv4 router in C and validates it in a Mininet emulated network controlled by POX. My router handles core L3 behavior including ARP request/reply processing, ARP cache management, longest-prefix route lookup, TTL decrement and checksum updates, ICMP generation, and packet queuing during unresolved ARP lookups.",
    technologies: ["Python", "C", "Mininet", "POX", "Networking"],
    link: "https://github.com/janani-gurram/router-mininet",
    details: [
      "Implemented a C-based software router with ARP cache/timeout logic and longest-prefix matching for IP forwarding",
      "Handled core L3 networking including ARP request/reply processing, TTL decrement, and checksum updates",
      "Implemented ICMP error and echo responses (unreachable, time exceeded, echo reply)",
      "Designed a packet queuing mechanism for retransmission during unresolved ARP lookups",
      "Integrated the router with a Mininet emulated network topology controlled by POX SDN controller",
      "Validated correctness with end-to-end testing using ping, traceroute, HTTP requests, and packet captures"
    ],
    features: [
      "IPv4 routing with longest-prefix matching",
      "ARP protocol implementation and cache management",
      "ICMP error and echo handling",
      "TTL decrement and checksum validation",
      "Packet queuing and retransmission workflow",
      "Mininet topology emulation and testing",
      "Packet capture and network traffic analysis"
    ],
    year: "2025"
  },
  '3': {
    title: "Stock Portfolio Manager",
    description: "I built PortfolioManager, a backend-focused investment management project built around relational database design and API-driven business logic. The primary goal was to model real financial and social workflows in PostgreSQL and expose those workflows through a clean Express API. The frontend is intentionally lightweight and utility-oriented, built mainly to interact with and demonstrate backend endpoints rather than serve as the project's main focus.",
    technologies: ["Node.js", "Express", "PostgreSQL", "express-session", "bcrypt", "REST API", "Vanilla JavaScript", "HTML", "CSS"],
    link: "https://github.com/janani-gurram/stock-portfolio-manager",
    demo: stockPortfoDemoVideo,
    details: [
      "Designed a normalized relational schema with foreign keys to enforce data integrity across users, portfolios, holdings, reviews, and social interactions",
      "Implemented backend logic to handle state transitions (deposit, withdraw, transfer, buy, sell) with SQL transactions to keep financial data consistent",
      "Added analytics-support tables (cov_cache, beta_cache, cov_mat_cache) to reduce repeated expensive calculations",
      "Built API routes to separate domain concerns (auth, portfolio, stock, stock list, review, friends) and keep backend behavior maintainable",
      "Created a simple frontend client to exercise the API and make database-backed workflows easy to demonstrate"
    ],
    features: [
      "Multi-portfolio account model with cash balances and position tracking",
      "Buy/sell workflows that update holdings, cash, and transaction history",
      "Stock list management with public/private visibility controls",
      "Social layer: friend requests, friend graph, and collaborative reviews",
      "Statistical endpoints for covariance/beta with cache tables for efficiency"
    ],
    year: "2024"
  },
  '4': {
    title: "Apache Superset Contribution",
    description: "I contributed an open-source fix to Apache Superset addressing a histogram chart rendering bug with NULL values in datasets.",
    technologies: ["Python", "Open Source", "Testing"],
    link: "https://github.com/apache/superset/pull/35693",
    details: [
      "Identified and fixed a regression where histogram charts crashed with NULL values",
      "Implemented robust NULL value handling in the data processing pipeline",
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
    description: "I built a mobile marketplace application for buyers and store owners using Android Studio while following SOLID design principles and Agile methodology.",
    technologies: ["Java", "Android", "Firebase", "Agile"],
    link: "https://github.com/UTSC-CSCC01-Software-Engineering-I/term-group-project-bedah",
    details: [
      "Served as Scrum Master, managing sprint planning, daily standups, and backlog refinement using Jira",
      "Designed a modular Android application architecture following SOLID design principles",
      "Implemented real-time user authentication and product browsing using Firebase",
      "Developed comprehensive Java unit tests for critical business logic",
      "Managed a 5-person Agile development team with emphasis on timely delivery"
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
    description: "I completed a comprehensive operating systems project where I implemented core OS concepts including threading, virtual memory, and file systems.",
    technologies: ["C", "Operating Systems", "Systems Programming"],
    link: "#",
    details: [
      "Implemented kernel threads with scheduling and synchronization primitives",
      "Designed a virtual memory system with page replacement algorithms",
      "Built a file system with inode management and disk I/O optimization",
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
    description: "I designed and implemented a comprehensive system architecture for a multi-clinic healthcare platform with multi-tenancy migration, performance optimization with ETL pipelines, and Fitbit integration.",
    technologies: ["Solution Architecture", "PostgreSQL", "ETL", "System Design"],
    link: "#",
    documentLink: architecturePdf,
    details: [
      "Migrated from single-tenant MongoDB to multi-tenant PostgreSQL with row-level security",
      "Implemented a bulk FHIR ETL pipeline reducing patient search time from 30s to <2s",
      "Designed Fitbit OAuth integration with per-clinic encryption keys and nightly data sync",
      "Architected a data warehouse for population health analytics with POPULATIONHEALTH table",
      "Implemented a canary deployment strategy with API Gateway for risk mitigation"
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

          {project.demo && (
            <div className="mb-8">
              <video
                src={project.demo}
                className="w-full rounded-lg border-2 border-cool-blue-dark"
                controls
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
