import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Contact from './components/Contact'
import ProjectDetails from './components/ProjectDetails'

function App() {
  return (
    <Router basename="/portfolio">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<PageShell tone="about"><About /></PageShell>} />
        <Route path="/projects" element={<PageShell tone="projects"><Projects /></PageShell>} />
        <Route path="/skills" element={<PageShell tone="skills"><Skills /></PageShell>} />
        <Route path="/experience" element={<PageShell tone="experience"><WorkExperience /></PageShell>} />
        <Route path="/contact" element={<PageShell tone="contact"><Contact /></PageShell>} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  )
}

type PageShellProps = {
  tone: 'about' | 'projects' | 'skills' | 'experience' | 'contact'
  children: React.ReactNode
}

function PageShell({ tone, children }: PageShellProps) {
  return <div className={`page-shell page-shell-${tone}`}>{children}</div>
}

export default App
