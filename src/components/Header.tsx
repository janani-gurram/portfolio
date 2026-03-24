import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean> (false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Work Experience", href: "#workexperience" },
    { label: "Contact", href: "#contact" }
  ]

  return (
    // "sticky top-0" => makes the header stick to the top of the page when scrolling
    // "bg-white shadow-sm" => white background with a subtle shadow for separation from content
    // "z-50" => ensures the header is above other content
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
        {/* name as the site logo on the left side of the nav bar - now clickable */}
        {/* "text-xl" => slightly larger size, "font-semibold" => medium-heavy weight for prominence */}
        <a href="#home" id="logo" className="text-xl font-semibold text-slate-900 hover:text-blue-600 transition-colors duration-200">
          Janani
        </a>

        {/* DESKTOP */}
        {/* desktop menu items in the nav bar */}
        {/* "hidden md:flex" => hidden as default on mobile, shown as flex on medium screens and up (formatting applied left to right)*/}
        {/* gap-8 => adds space between each menu item */}
        <div id="desktop-menu" className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              // "text-slate-700" => nice dark gray, "hover:text-blue-600" => blue accent on hover
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200"
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
          className="md:hidden p-2 text-slate-700 hover:text-blue-600 text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* show "X" when menu is open, hamburger icon when closed */}
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* mobile menu items, shown when hamburger menu is open */}
        { isMenuOpen && (
          <div id="mobile-menu" className="absolute top-full left-0 right-0 md:hidden bg-white border-b border-slate-200 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  // "block" => makes the entire area of the link clickable
                  // "py-2" => adds vertical padding for easier clicking
                  className="block py-2 px-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded font-medium"
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