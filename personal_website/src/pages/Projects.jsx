import { Link } from 'react-router-dom';
import projects from '../data/projects';

function Projects() {
    return (
      <div className="w-full">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-white">Projects</h1>
          <p className="mt-2 text-lg text-slate-400">Click on each project to see more details.</p>
        </header>
        <section className="mb-10">
          <p className="text-slate-400 leading-relaxed">
            I've worked on a variety of projects, from small personal projects to larger group projects. Here are some of my favorites.
          </p>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-scroll scrollbar-hide p-4">
          {projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className="project_card block">
              <h3 className="project_title text-lg font-semibold">{project.title}</h3>
              <p className="project_preview">{project.preview}</p>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    )
  } 
  
  export default Projects
  