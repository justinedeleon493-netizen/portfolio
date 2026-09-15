import heroImage from '../assets/hero.png';

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.08),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.2fr_0.8fr] md:px-8">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-teal-700">
            Portfolio
          </p>
          <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
            Building digital experiences that feel refined.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            I’m Justine, a BSIT student focused on creating clean,
            responsive, and user-centered web applications.
          </p>

          <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 text-left">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
              <p className="text-2xl font-bold text-slate-900">3+</p>
              <p className="mt-1 text-sm text-slate-500">Years</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
              <p className="text-2xl font-bold text-slate-900">3+</p>
              <p className="mt-1 text-sm text-slate-500">Projects</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-xl shadow-slate-200/70 backdrop-blur-sm">
          <div className="mb-6 flex justify-center">
            <div className="h-44 w-44 overflow-hidden rounded-full border-4 border-slate-200 bg-white shadow-xl shadow-slate-300/60">
              <img
                src={heroImage}
                alt="Justine's profile portrait"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Education</p>
            <h2 className="mt-4 text-2xl font-bold text-slate-900">Bulacan State University</h2>
            <p className="mt-2 leading-7 text-slate-600">
              Bachelor of Science in Information Technology
            </p>

            <div className="mt-7 border-t border-slate-200 pt-5">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Languages</p>
              <p className="mt-3 text-lg font-semibold text-slate-900">Filipino and English</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;