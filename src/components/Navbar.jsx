import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-3 text-slate-900 transition hover:text-teal-700">
          <span className="text-lg font-semibold tracking-[0.2em] text-slate-800 uppercase">Justine' Portfolio</span>
        </Link>

        <div className="flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="/#about" className="transition hover:text-teal-700">About</a>
          <a href="/#projects" className="transition hover:text-teal-700">Projects</a>
          <a href="/#skills" className="transition hover:text-teal-700">Skills</a>
          <a href="#contact" className="transition hover:text-teal-700">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;