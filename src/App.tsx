import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ScrollToSection from './components/ScrollToSection'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Contact from './components/Contact'
import ProjectDetails from './components/ProjectDetails'

function App() {
  return (
    <Router basename="/portfolio">
      <ScrollToSection />
      <div className="notebook">
        <div className="spiral-binding" aria-hidden="true" />
        <div className="notebook-content">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<PageShell number="01"><About /></PageShell>} />
            <Route path="/projects" element={<PageShell number="02"><Projects /></PageShell>} />
            <Route path="/experience" element={<PageShell number="03"><WorkExperience /></PageShell>} />
            <Route path="/skills" element={<PageShell number="04"><Skills /></PageShell>} />
            <Route path="/contact" element={<PageShell number="05"><Contact /></PageShell>} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

function PageShell({ number, children }: { number: string; children: React.ReactNode }) {
  return <main className="page-shell">{children}<span className="page-number" aria-hidden="true">{number}</span></main>
}

export default App
