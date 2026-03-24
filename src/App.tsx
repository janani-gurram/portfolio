import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
        <Route path="/" element={
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <About />
            <Projects />
            <Skills />
            <WorkExperience />
            <Contact />
          </div>
        } />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  )
}

export default App
