const skillList = [
  "React",
  "JavaScript (ES6+)",
  "HTML5 & CSS3",
  "Tailwind CSS",
  "Node.js",
  "Git & GitHub",
  "Responsive Design",
  "Problem Solving",
];

function Skills() {
  return (
    <section id="skills" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Capabilities</p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Skills I use to craft polished digital products.</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillList.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-5 text-center shadow-md shadow-slate-950/20 transition hover:border-cyan-400/50 hover:bg-slate-900"
            >
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 text-cyan-300">
                <span className="text-lg font-bold">•</span>
              </div>
              <p className="text-base font-semibold text-slate-100">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;