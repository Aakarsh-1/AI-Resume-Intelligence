
export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-50 p-8 text-slate-900">
      <header className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
          AI Resume Intelligence
        </p>

        <h1 className="mt-3 text-3xl font-bold">
          Welcome to your hiring workspace
        </h1>

        <p className="mt-3 max-w-2xl text-slate-600">
          Build a clearer, more efficient resume screening and job-matching
          workflow.
        </p>

        <nav className="mt-8 flex gap-4">
          <a
            href="/"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-white"
          >
            Dashboard
          </a>
          <a
            href="/jobs"
            className="rounded-lg border border-slate-300 px-4 py-2"
          >
            Jobs
          </a>
        </nav>

        <section className="mt-10 grid gap-5 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="font-semibold">Resume Validation</h2>
            <p className="mt-2 text-sm text-slate-600">
              Check uploaded resumes for supported formats and required content.
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="font-semibold">Job Management</h2>
            <p className="mt-2 text-sm text-slate-600">
              Organize job descriptions and hiring requirements.
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="font-semibold">Resume Matching</h2>
            <p className="mt-2 text-sm text-slate-600">
              Prepare for future AI-assisted resume and job comparisons.
            </p>
          </article>
        </section>
      </header>
    </main>
  )
}
