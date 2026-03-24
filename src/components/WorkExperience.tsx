export default function WorkExperience() {
  const experiences = [
    {
      id: 1,
      company: "PointClickCare",
      position: "Software Engineer",
      location: "Mississauga, Ontario",
      duration: "Jan 2025 - Aug 2026",
      achievements: [
        "Resolved production issues in a large healthcare platform by debugging React frontends and Django/Python backend, restoring correct system behavior for customer-facing workflows across legacy and modern interfaces",
        "Improved backend data integrity and API reliability by ensuring critical system events were correctly persisted and exposed, preventing duplicate events and keeping services consistent at scale",
        "Increased system stability and security by handling vulnerable dependencies, resolving deployment failures during live incidents, and contributing documentation that reduced onboarding friction for new engineers"
      ]
    },
    {
      id: 2,
      company: "Huawei Technologies",
      position: "Software Engineer - Distributed Data Systems",
      location: "Markham, Ontario",
      duration: "May 2025 - Aug 2025",
      achievements: [
        "Designed and implemented an asynchronous write-ahead logging (WAL) based recovery system in C++ and Python with log-matching algorithms for an AI data processing pipeline, contributing approximately 3,000 lines of code across multiple modules",
        "Benchmarked recovery strategies using custom Python scripts and containerized test environments with Docker and Kubernetes, achieving 38% faster recovery times with negligible runtime overhead",
        "Developed automated unit, integration, end-to-end, and performance test suites using C++, Python, Bash, and Jenkins, expanding validation coverage and preventing regressions during ongoing development",
        "Identified and resolved concurrency and distributed timing issues in asynchronous multi-node systems, improving pipeline stability under high-throughput workloads"
      ]
    },
    {
      id: 3,
      company: "University of Toronto",
      position: "Application Developer",
      location: "Toronto, Ontario",
      duration: "Jan 2024 - Apr 2024",
      achievements: [
        "Engineered extract, transform, load (ETL) pipelines using Python, Bash, and SQL to ingest and normalize large-scale Statistics Canada datasets into CHASS data centre, simplifying access for researchers",
        "Automated data extraction and transformation workflows to generate Excel-based analytical and usage reports with dynamic formatting and conditional highlighting",
        "Developed a prototype application integrated with Microsoft Office 365 to streamline the TA hiring process, featuring admin dashboards and automated email reminders"
      ]
    },
    {
      id: 4,
      company: "University of Toronto Scarborough",
      position: "Teaching Assistant",
      location: "Toronto, Ontario",
      duration: "Sept 2024 - Dec 2024; Sept 2025 - Present",
      achievements: [
        "Led tutorials explaining complex computer science concepts (theory of computation, web development, algorithms, data structures), adapting explanations to support students with diverse learning styles",
        "Provided hands-on guidance in Node.js, Express.js, React, SQL/NoSQL databases, and cloud deployment across Google Cloud, Azure, and AWS",
        "Authored clear technical documentation and reference implementations for lab sessions, enabling students to independently apply best practices"
      ]
    }
  ];

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
              className="bg-cool-blue-lighter border-l-4 border-cool-brown rounded-lg p-8 hover:shadow-lg transition-shadow duration-200"
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
