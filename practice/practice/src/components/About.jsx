function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.18),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.2fr_0.8fr] md:px-8">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-cyan-200">
            Portfolio
          </p>
          <h1 className="max-w-xl text-4xl font-black leading-tight text-white md:text-6xl">
            Building digital experiences that feel refined.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            I’m Justine, a computer science student focused on creating clean,
            responsive, and user-centered web applications with modern frontend
            technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View projects
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 text-left">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-white">2+</p>
              <p className="mt-1 text-sm text-slate-300">Years</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-white">8+</p>
              <p className="mt-1 text-sm text-slate-300">Projects</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-sm">
          <div className="rounded-2xl border border-cyan-400/30 bg-slate-900 p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">Focus</p>
            <h2 className="mt-4 text-2xl font-bold text-white">Frontend & product thinking</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Responsive, accessible interfaces
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-indigo-400" />
                React-powered experiences
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-violet-400" />
                Clean UI systems and UX polish
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;