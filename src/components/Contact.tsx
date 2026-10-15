export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-cool-blue-dark">
          Contact
        </h2>

        <div className="todo-card paper-card max-w-3xl mx-auto text-left mb-12 p-8">
          <p className="text-xl mb-8 text-cool-brown-dark max-w-2xl mx-auto text-center">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out!
          </p>

          <div className="space-y-3 mb-10 max-w-xl mx-auto">
            <div className="todo-item text-cool-brown-dark">Send a message</div>
            <div className="todo-item text-cool-brown-dark">Connect on LinkedIn</div>
            <div className="todo-item text-cool-brown-dark">Check out GitHub projects</div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a
            href="mailto:janani.gurram@outlook.com"
            className="px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            style={{ backgroundColor: '#3D2817', color: '#FFFACD' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5D4E37'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3D2817'}
          >
            Email Me
          </a>
            <a
            href="https://www.linkedin.com/in/janani-gurram-021129200/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            style={{ backgroundColor: '#3D2817', color: '#FFFACD' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5D4E37'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3D2817'}
          >
            LinkedIn
          </a>
            <a
            href="https://github.com/janani-gurram"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            style={{ backgroundColor: '#3D2817', color: '#FFFACD' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5D4E37'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3D2817'}
          >
            GitHub
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}
