export default function Contact() {
  return (
    <section id="contact" className="bg-cool-blue-dark text-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Get In Touch
        </h2>

        <p className="text-xl mb-12 text-white max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out!
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
          <a
            href="mailto:janani.gurram@outlook.com"
            className="px-8 py-3 bg-cool-brown hover:bg-cool-brown-light transition-colors duration-200 rounded-lg font-semibold text-white"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/janani-gurram-021129200/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-cool-brown hover:bg-cool-brown-light transition-colors duration-200 rounded-lg font-semibold text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/janani-gurram"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-cool-brown hover:bg-cool-brown-light transition-colors duration-200 rounded-lg font-semibold text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
