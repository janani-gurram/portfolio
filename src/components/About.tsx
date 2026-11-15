import { profile } from '../data/profile'
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
              alt={profile.name}
              className="w-48 h-48 object-cover border-4 border-cool-brown rounded-lg flex-shrink-0"
            />
          </div>

          <div className="flex-1">
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