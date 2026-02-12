function Links() {
  return (
    <div className="mx-auto max-w-3xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-white">Links</h1>
        <p className="mt-2 text-lg text-slate-400">Find me elsewhere.</p>
      </header>
      <ul className="space-y-3">
        <li>
          <a
            href="#"
            className="text-sky-400 hover:text-sky-300 hover:underline"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sky-400 hover:text-sky-300 hover:underline"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Links
