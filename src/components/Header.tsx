import { NavLink } from 'react-router-dom'
import { profile } from '../data/profile'

const tabs = [
  { label: 'About', path: '/about', tone: 'yellow' },
  { label: 'Projects', path: '/projects', tone: 'pink' },
  { label: 'Experience', path: '/experience', tone: 'blue' },
  { label: 'Skills', path: '/skills', tone: 'green' },
  { label: 'Contact', path: '/contact', tone: 'peach' },
]

export default function Header() {
  return (
    <header className="notebook-header">
      <div className="notebook-title-row">
        <NavLink to="/about" className="notebook-title">{profile.name.split(' ')[0]}’s notebook<span aria-hidden="true">✳</span></NavLink>
        <span className="notebook-subtitle">software, systems & a few ideas</span>
      </div>
      <nav className="notebook-tabs" aria-label="Main navigation">
        {tabs.map(tab => (
          <NavLink key={tab.path} to={tab.path} className={({isActive}) => `notebook-tab tab-${tab.tone}${isActive ? ' is-active' : ''}`}>
            {tab.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
