import profilePicture from '../assets/profile_picture.jpg';

export default function About() {
  return (
    <section id="about" className="bg-cool-blue-lighter py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-cool-blue-dark">
          About Me
        </h2>
        
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div>
            <img
              src={profilePicture}
              alt="Profile Picture"
              className="w-48 h-48 object-cover border-4 border-cool-brown rounded-lg flex-shrink-0"
            />
          </div>

          <div className="flex-1">
            <p className="text-lg text-cool-brown-dark leading-relaxed mb-6">
              I'm Janani Sree Gurram, a Computer Science student at the University of Toronto
              and a software engineer at PointClickCare. My experience spans full-stack development,
              distributed data systems, and data engineering, with work in React, Django,
              Spring Boot, and PySpark on Databricks.
            </p>
            <p className="text-lg text-cool-brown-dark leading-relaxed">
              In my free time, I enjoy cooking, painting, and anything creative.
              I am excited to connect with like-minded individuals and explore new opportunities!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}