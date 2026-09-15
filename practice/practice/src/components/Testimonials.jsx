const testimonialList = [
  {
    name: "Juan Dela Cruz",
    feedback: "Justine brings a strong sense of design and a thoughtful approach to building user-friendly interfaces.",
  },
  {
    name: "Maria Santos",
    feedback: "Reliable, detail-oriented, and proactive in delivering polished work with clear communication throughout.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Testimonials</p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">What people appreciate most.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonialList.map((t) => (
            <div key={t.name} className="rounded-3xl border border-slate-700 bg-slate-800/80 p-6 shadow-lg shadow-slate-950/20">
              <p className="mb-5 text-lg leading-8 text-slate-200">“{t.feedback}”</p>
              <p className="text-base font-semibold text-cyan-300">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;