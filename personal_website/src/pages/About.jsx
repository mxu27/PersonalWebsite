import { NavLink } from 'react-router-dom'

function About() {
  return (
    <div className="w-full">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-white">Hi, I'm Michael!</h1>
        <p className="mt-2 text-lg text-slate-400">
          I'm currently a student at Washington University in St. Louis studying Computer Science. 
          I'm born and raised in a humble town called Swampscott, Massachusetts and currently live in St. Louis, Missouri.
          </p>
      </header>
      <section className="mb-10">
        <p className="text-slate-400 leading-relaxed">
          Hello! My name is Michael, and I'm currently a junior at Washington University in St. Louis, pursuing a degree in Computer Science with minors in Human-Computer Interaction and Electrical Engineering. I enjoy working on scalable backend systems as well as hands-on projects in game development and web applications. I am particularly interested in AI and how it is being used both in the workforce and in daily life, from optimizing business processes to enhancing the way people interact with technology. I'm excited to continue exploring opportunities where I can apply these interests to create meaningful and impactful solutions.
        </p>
      </section>
      <section className="mb-10">
        <p className="text-slate-400 leading-relaxed">
          I'm currently looking for internship opportunities for the summer of 2026. I have experience in building backend systems using Java and Python, as well as frontend development using React and Tailwind CSS. I'm interested in full-time positions starting in 2027. I'm also open to remote positions.
        </p>
      </section>
      <section className="mb-10">
        <p className="text-slate-400 leading-relaxed">
          Check out my <NavLink to={'/experiences'} className="text-sky-400 hover:underline">experiences</NavLink> and <NavLink to={'/projects'} className="text-sky-400 hover:underline">projects</NavLink>!
        </p>
      </section>
    </div>
  )
}

export default About
