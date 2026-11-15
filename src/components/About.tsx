import { profile } from '../data/profile'
import profilePicture from '../assets/profile_picture.jpg';

export default function About() {
  return (
    <section id="about" className="hero">
      <div className="hero-layout">
        <div className="hero-copy">
          <h1>{profile.headline}</h1>
          <p className="hero-description">{profile.summary}</p>
          <div className="hero-actions">
            <a className="button-primary" href="#projects">Explore my work <span aria-hidden="true">→</span></a>
            <a className="button-text" href="#contact">Let’s connect <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame"><img src={profilePicture} alt={profile.name} /></div>
        </div>
      </div>
      <div className="about-strip">
        <h2 className="about-heading">About me</h2>
        <div>
          {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}
