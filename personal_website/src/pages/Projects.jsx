function Projects() {
    return (
      <div className="w-full">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-white">Projects</h1>
          <p className="mt-2 text-lg text-slate-400">Here are some of my projects that I've been working on.</p>
        </header>
        <section className="mb-10">
          <p className="text-slate-400 leading-relaxed">
            Add your bio and what you do here. This page uses React and Tailwind
            CSS.
          </p>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-scroll scrollbar-hide">
            <div className="project_card">01</div>
            <div className="project_card">02</div>
            <div className="project_card">03</div>
            <div className="project_card">04</div>
            <div className="project_card">05</div>
            <div className="project_card">06</div>
            <div className="project_card">07</div>
        </div>
      </div>
    )
  } 
  
  export default Projects
  