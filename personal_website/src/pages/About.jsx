import { useEffect, useState } from 'react'

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
    </div>
  )
}

export default About
