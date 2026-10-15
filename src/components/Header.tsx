import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = useMemo(
    () => [
      { label: 'About', path: '/about', color: '#FFFACD' },
      { label: 'Projects', path: '/projects', color: '#FFE4E1' },
      { label: 'Skills', path: '/skills', color: '#E0F8E0' },
      { label: 'Work', path: '/experience', color: '#E6F3FF' },
      { label: 'Contact', path: '/contact', color: '#FFE8CC' }
    ],
    []
  );

  const activePath = location.pathname.startsWith('/projects') ? '/projects' : location.pathname;
  const headerBackgroundByPath: Record<string, string> = {
    '/about': 'linear-gradient(180deg, rgba(255, 250, 205, 0.42) 0%, rgba(248, 246, 241, 0.92) 100%)',
    '/projects': 'linear-gradient(180deg, rgba(255, 228, 225, 0.42) 0%, rgba(248, 246, 241, 0.92) 100%)',
    '/skills': 'linear-gradient(180deg, rgba(224, 248, 224, 0.42) 0%, rgba(248, 246, 241, 0.92) 100%)',
    '/experience': 'linear-gradient(180deg, rgba(230, 243, 255, 0.42) 0%, rgba(248, 246, 241, 0.92) 100%)',
    '/contact': 'linear-gradient(180deg, rgba(255, 232, 204, 0.42) 0%, rgba(248, 246, 241, 0.92) 100%)'
  };
  const headerBackground = headerBackgroundByPath[activePath] ?? headerBackgroundByPath['/about'];

  return (
    <header className="relative z-50">
      <div
        style={{
          background: headerBackground,
          borderBottom: '1px solid rgba(139,115,85,0.18)',
          boxShadow: '0 1px 5px rgba(0,0,0,0.05)',
          backdropFilter: 'blur(4px)'
        }}
      >
        <nav className="max-w-6xl mx-auto px-4 py-2.5 flex justify-center">
          <div style={{ display: 'flex', gap: '0.55rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {tabs.map((tab) => {
              const isActive = activePath === tab.path;
              return (
                <button
                  key={tab.label}
                  onClick={() => navigate(tab.path)}
                  style={{
                    minWidth: tab.label === 'Work' ? '144px' : '108px',
                    padding: '0.45rem 1rem',
                    background: isActive ? tab.color : 'rgba(255,255,255,0.72)',
                    borderBottom: 'none',
                    borderRadius: '10px 10px 0 0',
                    fontSize: '12.5px',
                    fontWeight: '700',
                    color: '#3D2817',
                    textAlign: 'center',
                    boxShadow: isActive
                      ? '0 -5px 12px rgba(0, 0, 0, 0.16), inset 0 1px 0 rgba(255,255,255,0.75)'
                      : '0 -2px 6px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255,255,255,0.55)',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
                    position: 'relative',
                    top: isActive ? '-5px' : '0',
                    appearance: 'none',
                    fontFamily: 'inherit',
                    zIndex: isActive ? 2 : 1,
                    transform: isActive ? 'translateY(-1px)' : 'translateY(0)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 -7px 14px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255,255,255,0.75)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = isActive ? 'translateY(-1px)' : 'translateY(0)';
                    e.currentTarget.style.boxShadow = isActive
                      ? '0 -5px 12px rgba(0, 0, 0, 0.16), inset 0 1px 0 rgba(255,255,255,0.75)'
                      : '0 -2px 6px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255,255,255,0.55)';
                  }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}