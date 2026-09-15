import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-3 text-white transition hover:text-cyan-300">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 text-sm font-bold text-slate-950">
            J
          </span>
          <span className="text-lg font-semibold tracking-[0.2em] text-slate-100 uppercase">Justine</span>
        </Link>

        <div className="flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="/#about" className="transition hover:text-white">About</a>
          <a href="/#projects" className="transition hover:text-white">Projects</a>
          <a href="/#skills" className="transition hover:text-white">Skills</a>
          <a href="/#testimonials" className="transition hover:text-white">Testimonials</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;