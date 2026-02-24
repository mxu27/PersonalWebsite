import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="w-full">
        <h1 className="text-3xl font-bold text-white mb-4">Project not found</h1>
        <Link to="/projects" className="text-sky-400 hover:underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-white">{project.title}</h1>
        <p className="mt-2 text-lg text-slate-400">{project.preview}</p>
      </header>

      <section className="mb-8">
        <p className="text-slate-300 leading-relaxed">{project.details}</p>
      </section>

      {project.tech && project.tech.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-2">Technologies</h2>
          <ul className="list-disc list-inside text-slate-300">
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>
      )}

      {project.image && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-2">Preview</h2>
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-w-xl rounded-lg shadow-lg"
          />
        </section>
      )}

      <Link
        to="/projects"
        className="inline-block mt-4 px-4 py-2 rounded-md bg-slate-800 text-sky-400 hover:bg-slate-700 transition-colors"
      >
        Back to Projects
      </Link>
    </div>
  );
}

export default ProjectDetail;

