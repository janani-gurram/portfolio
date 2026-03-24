import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean> (false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Work Experience", href: "#workexperience" },
    { label: "Contact", href: "#contact" }
  ]

  return (
    // "sticky top-0" => makes the header stick to the top of the page when scrolling
    // "bg-cool-brown-dark shadow-sm" => dark brown background with a subtle shadow for separation from content
    // "z-50" => ensures the header is above other content
    <header className="sticky top-0 bg-cool-brown-dark shadow-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
        {/* name as the site logo on the left side of the nav bar - now clickable */}
        {/* "text-xl" => slightly larger size, "font-semibold" => medium-heavy weight for prominence */}
        <Link to="/" id="logo" className="text-xl font-semibold text-white hover:text-cool-blue-light transition-colors duration-200">
          Janani
        </Link>

        {/* DESKTOP */}
        {/* desktop menu items in the nav bar */}
        {/* "hidden md:flex" => hidden as default on mobile, shown as flex on medium screens and up (formatting applied left to right)*/}
        {/* gap-8 => adds space between each menu item */}
        <div id="desktop-menu" className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              // "text-white" => light text for visibility on dark background, "hover:text-cool-blue-light" => light blue accent on hover
              className="text-white hover:text-cool-blue-light font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* MOBILE */}
        {/* hamburger menu button for mobile */}
        {/* "md:hidden" => hidden on medium screens and up */}
        <button
          id="menu-button"
          className="md:hidden p-2 text-white hover:text-cool-blue-light text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* show "X" when menu is open, hamburger icon when closed */}
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* mobile menu items, shown when hamburger menu is open */}
        { isMenuOpen && (
          <div id="mobile-menu" className="absolute top-full left-0 right-0 md:hidden bg-cool-brown-dark border-b border-cool-brown shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  // "block" => makes the entire area of the link clickable
                  // "py-2" => adds vertical padding for easier clicking
                  className="block py-2 px-3 text-white hover:text-cool-blue-light hover:bg-cool-brown rounded font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}