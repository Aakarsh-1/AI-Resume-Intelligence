
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/', { replace: true })
    }, 5000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 text-slate-900">
      <section className="max-w-lg text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
          AI Resume Intelligence
        </p>

        <h1 className="mt-4 text-7xl font-bold text-indigo-600">404</h1>

        <h2 className="mt-4 text-2xl font-semibold">
          Page not found
        </h2>

        <p className="mt-3 text-slate-600">
          Sorry, the page you're looking for doesn't exist or may have moved.
        </p>

        <p className="mt-4 text-sm text-slate-500">
          Redirecting you to the dashboard in 5 seconds...
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700"
        >
          Go to Dashboard Now
        </Link>
      </section>
    </main>
  )
}
