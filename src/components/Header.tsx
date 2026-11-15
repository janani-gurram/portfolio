import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const links = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'workexperience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Say hello', id: 'contact' },
  ];
  const goTo = (id: string) => {
    navigate({ pathname: '/', hash: '#' + id });
    setIsMenuOpen(false);
  };
  return (
    <header className="site-header">
      <nav className="navigation" aria-label="Main navigation">
        <Link to="/" className="wordmark" onClick={() => setIsMenuOpen(false)}>janani<span>.</span></Link>
        <div className="desktop-navigation">{links.map(link => <button key={link.id} onClick={() => goTo(link.id)}>{link.label}</button>)}</div>
        <button className="menu-toggle" aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? 'Close −' : 'Menu +'}</button>
        {isMenuOpen && <div id="mobile-navigation" className="mobile-navigation">{links.map(link => <button key={link.id} onClick={() => goTo(link.id)}>{link.label}</button>)}</div>}
      </nav>
    </header>
  );
}
