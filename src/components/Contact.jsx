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
    <section id="contact" className="bg-slate-100 py-24 text-slate-900">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div className="rounded-3xl border border-teal-100 bg-teal-50 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">Contact</p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900">Let’s build something meaningful.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            I’m open to freelance work, internships, and collaborative opportunities where design and engineering meet.
          </p>

          <div className="mt-8 space-y-4 text-slate-700">
            <p>Email: justine@email.com</p>
            <p>Location: Philippines</p>
            <p>Available for remote roles</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-300/40">
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Name
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                required
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Email
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                required
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Message
              <textarea
                placeholder="Tell me about your project or idea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[140px] rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                rows="4"
                required
              />
            </label>

            <button
              type="submit"
              className="mt-2 rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
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