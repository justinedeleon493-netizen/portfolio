import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${name}, your message has been noted! (This is a demo — no server connected yet.)`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 to-slate-800 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Contact</p>
          <h2 className="mt-4 text-3xl font-bold">Let’s build something meaningful.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            I’m open to freelance work, internships, and collaborative opportunities where design and engineering meet.
          </p>

          <div className="mt-8 space-y-4 text-slate-200">
            <p>Email: justine@email.com</p>
            <p>Location: Philippines</p>
            <p>Available for remote roles</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-700 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/30">
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Name
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-2xl border border-slate-600 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
                required
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Email
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-2xl border border-slate-600 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
                required
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Message
              <textarea
                placeholder="Tell me about your project or idea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[140px] rounded-2xl border border-slate-600 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
                rows="4"
                required
              />
            </label>

            <button
              type="submit"
              className="mt-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;