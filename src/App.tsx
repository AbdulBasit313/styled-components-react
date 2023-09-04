import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

export const Blogs = () => <h2>You are in the Blogs</h2>
export const Projects = () => <h2>You are in the Projects</h2>
export const About = () => <h2>You are in the About</h2>
export const Contact = () => <h2>You are in the Contact</h2>

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
