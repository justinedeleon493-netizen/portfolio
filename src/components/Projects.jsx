const projectList = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS, focused on clarity and modern visual storytelling.",
    link: "https://github.com/yourusername/portfolio",
    tags: ["React", "Tailwind", "UI Design"],
  },
  {
    title: "Todo App",
    description: "A focused task manager with clean interactions, reusable components, and a responsive layout.",
    link: "https://github.com/yourusername/todo-app",
    tags: ["State", "Hooks", "UX"],
  },
  {
    title: "Weather App",
    description: "A data-driven interface that fetches live weather information and presents it in a readable format.",
    link: "https://github.com/yourusername/weather-app",
    tags: ["API", "JavaScript", "Responsive"],
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Selected work</p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Projects that balance function and polish.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projectList.map((project) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-slate-700 bg-slate-800/80 p-6 shadow-lg shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-800"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-lg font-bold text-slate-950">
                {project.title.charAt(0)}
              </div>

              <h3 className="mb-3 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mb-5 min-h-[96px] text-base leading-7 text-slate-300">{project.description}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-600 bg-slate-700/80 px-2.5 py-1 text-xs font-medium text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-white"
              >
                View on GitHub <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;