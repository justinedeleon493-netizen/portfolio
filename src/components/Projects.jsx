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
    <section id="projects" className="bg-slate-100 py-24 text-slate-900">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">Selected work</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Projects that balance function and polish.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-600">
            A small selection of interfaces built with thoughtful details and practical technology.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm shadow-slate-300/50 transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-900/10"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-sm font-bold text-teal-700 ring-1 ring-teal-100">
                  0{index + 1}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Case study</span>
              </div>

              <h3 className="mb-3 text-2xl font-semibold tracking-tight text-slate-900">{project.title}</h3>
              <p className="mb-6 min-h-[96px] text-base leading-7 text-slate-600">{project.description}</p>

              <div className="mb-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:gap-3 hover:text-teal-900"
              >
                View project <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;