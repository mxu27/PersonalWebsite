import { Routes, Route, NavLink } from 'react-router-dom'
import ParticleBackground from './components/ParticleBackground.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Links from './pages/Links.jsx'

function NavLinkClasses({ isActive }) {
  return `text-center rounded-lg px-3 py-2 text-sm transition-colors hover:text-white ${
    isActive ? 'text-white' : 'text-slate-400'
  }`
}

function App() {
  return (
    <>
      <ParticleBackground />
      <div className="relative z-10 grid min-h-screen grid-rows-[1fr_auto]">
      <div className="flex min-h-0 min-w-0 flex-col md:flex-row">
        {/* Sidebar: top bar on mobile, left column on desktop */}
        <aside className="shrink-0 px-4 py-4 md:sticky md:top-0 md:h-full md:w-56 md:border-b-0 md:px-5 md:py-8">
        <div className="flex flex-col md:h-full md:flex-col justify-center">
          <nav className="flex flex-row gap-1 md:flex-col">
            <NavLink to="/" end className={NavLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/about" className={NavLinkClasses}>
              About
            </NavLink>
            <NavLink to="/links" className={NavLinkClasses}>
              Links
            </NavLink>
          </nav>
        </div>
      </aside>

      {/* Main content, this is where i put the route pages */}
      <main className="min-w-0 flex-1 px-6 py-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/links" element={<Links />} />
        </Routes>
      </main>
      </div>
      <footer className="px-6 py-4 text-center text-sm text-slate-500">
        <p>&copy; 2026 Michael Xu. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default App
