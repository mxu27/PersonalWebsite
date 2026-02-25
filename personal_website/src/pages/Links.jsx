import Resume from '../assets/Michael_Xu_s_Resume_Fullstack.pdf'
function Links() {
  return (
    <div className="w-full">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-white">Links</h1>
        <p className="mt-2 text-lg text-slate-400">Find me elsewhere.</p>
      </header>
      <ul className="space-y-3">
        <li>
          <a
            href="https://github.com/MichaelXu27"
            target="_blank"
            className="text-sky-400 hover:text-sky-300 hover:underline"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/michael-xu-98a601272/"
            target="_blank"
            className="text-sky-400 hover:text-sky-300 hover:underline"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href={Resume} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">
            Resume
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Links
