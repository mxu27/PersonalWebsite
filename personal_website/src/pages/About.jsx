import { useEffect, useState } from 'react'
import { getHello } from '../api.js'

function About() {
  const [backendMessage, setBackendMessage] = useState(null)
  const [backendError, setBackendError] = useState(null)

  useEffect(() => {
    getHello('Michael')
      .then(setBackendMessage)
      .catch((err) => setBackendError(err.message))
  }, [])

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
          I'm currently a student at Washington University in St. Louis studying Computer Science. 
          I'm born and raised in a humble town called Swampscott, Massachusetts and currently live in St. Louis, Missouri.
        </p>
      </section>
      {backendMessage && (
        <p className="text-slate-500 text-sm">Backend says: {backendMessage}</p>
      )}
      {backendError && (
        <p className="text-amber-600/80 text-sm">Backend unreachable: {backendError}</p>
      )}
    </div>
  )
}

export default About
