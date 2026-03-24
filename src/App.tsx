import Header from './components/Header'
import About from './components/About'

function App() {
  return (
    // <> and </> are React fragments, which allow us to return multiple elements without adding extra nodes to the DOM
    <>
      <Header />
      <About />
    </>
  )
}

export default App
