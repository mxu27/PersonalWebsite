import Resume from '../assets/Michael_Xu_s_Resume_Fullstack.pdf'

function Experiences() {
  return (
    <div className="w-full">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-white">Experiences</h1>
        <p className="mt-2 text-lg text-slate-400">
            Work in progress!
        </p>
      </header>
      <section className="mb-10">
        <p className="text-slate-400 leading-relaxed mb-10">
            But for now feel free to check out my resume!
        </p>
        <a href={Resume} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">
            Resume
        </a>
      </section>
    </div>
  )
}

export default Experiences