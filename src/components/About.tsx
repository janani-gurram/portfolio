import profilePicture from '../assets/profile_picture.jpg'
import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="notebook-entry">
      <h2 className="entry-title">A little about me</h2>
      <div className="notebook-introduction">
        <figure className="notebook-photo">
          <img src={profilePicture} alt={profile.name} />
          <figcaption>{profile.name}</figcaption>
        </figure>
        <div className="notebook-bio">
          <h1>{profile.headline}</h1>
          <p className="intro-summary">{profile.summary}</p>
          <p>{profile.about[0]}</p>
          <div className="future-note"><span className="handwritten-note">what’s next?</span><p>{profile.about[1]}</p></div>
        </div>
      </div>
    </section>
  )
}
