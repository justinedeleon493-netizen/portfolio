const skillList = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Tailwind",
];

function Skills() {
  return (
    <section id="skills" className="bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">Tech stack</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Tools I use to build websites.</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {skillList.map((skill) => (
            <div
              key={skill}
              className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-center text-base font-semibold text-slate-800 shadow-sm transition hover:border-teal-300 hover:bg-white hover:text-teal-700 hover:shadow-md"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;