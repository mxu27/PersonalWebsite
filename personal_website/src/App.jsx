import { Routes, Route, NavLink } from 'react-router-dom'
import StarfieldBackground from './components/StarfieldBackground.jsx'
import About from './pages/About.jsx'
import Links from './pages/Links.jsx'
import Projects from './pages/Projects.jsx'
import Hobbies from './pages/Hobbies.jsx'

function NavLinkClasses({ isActive }) {
  return `text-left rounded-lg px-3 py-2 text-sm transition-colors hover:text-white ${isActive ? 'text-white' : 'text-slate-400'
    }`
}

function App() {
  return (
    <>
      <StarfieldBackground />
      <div className="relative z-10 grid h-screen overflow-hidden grid-rows-[1fr_auto]">
        <div className="flex min-h-0 min-w-0 flex-col md:flex-row">
          {/* Sidebar: top bar on mobile, left column on desktop */}
          <aside className="shrink-0 px-4 py-4 md:sticky md:top-0 md:h-full md:w-56 md:border-b-0 md:px-5 md:py-8">
            <div className="flex flex-col md:h-full md:flex-col justify-center items-center">
              <nav className="flex flex-row gap-1 md:flex-col">
                <NavLink to="/" className={NavLinkClasses}>
                  About
                </NavLink>
                <NavLink to="/projects" className={NavLinkClasses}>
                  Projects
                </NavLink>
                <NavLink to="/hobbies" className={NavLinkClasses}>
                  Hobbies
                </NavLink>
                <NavLink to="/links" className={NavLinkClasses}>
                  Links
                </NavLink>
              </nav>
            </div>
          </aside>

          {/* Main content, this is where i put the route pages */}
          <main className="min-h-0 min-w-0 flex-1 overflow-y-auto px-6 py-16 scrollbar-hide">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/hobbies" element={<Hobbies />} />
              <Route path="/links" element={<Links />} />
            </Routes>
          </main>
        </div>
        <footer className="px-6 py-4 text-center text-sm text-slate-500">
          <p>&copy; Made by Michael Xu</p>
        </footer>
      </div>
    </>
  )
}

export default App
