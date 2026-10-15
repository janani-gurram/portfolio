import profilePicture from '../assets/profile_picture.jpg';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-cool-blue-dark">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
          <div className="md:col-span-2 paper-card gallery-card p-5 rotate-[-1deg]">
            <div className="photo-strip">
              <span />
              <span />
              <span />
              <span />
            </div>
            <img
              src={profilePicture}
              alt="Profile Picture"
              className="w-full h-80 object-cover rounded-xl flex-shrink-0 shadow-lg"
              style={{ borderColor: '#3D2817' }}
            />
          </div>

          <div className="md:col-span-3 paper-card note-card">
            <p className="text-lg text-cool-brown-dark leading-relaxed mb-6">
              I'm a software engineer with a passion for building impactful projects.
              I have experience in full-stack development, and I enjoy working on both the frontend and backend.
              I love learning new technologies and am always looking for opportunities to grow and collaborate with others.
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