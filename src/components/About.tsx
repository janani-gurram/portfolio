import { profile } from '../data/profile'
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
              alt={profile.name}
              className="w-full h-80 object-cover rounded-xl flex-shrink-0 shadow-lg"
              style={{ borderColor: '#3D2817' }}
            />
          </div>

          <div className="md:col-span-3 paper-card note-card">
            <h1 className="text-3xl font-semibold text-cool-blue-dark mb-4">{profile.headline}</h1>
            <p className="text-lg text-cool-brown-dark leading-relaxed mb-6">{profile.summary}</p>
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="text-lg text-cool-brown-dark leading-relaxed mb-6">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}