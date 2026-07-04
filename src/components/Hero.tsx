import { ArrowDown, Mail } from 'lucide-react'

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const stats = [
  { value: '4+', label: 'Years Experience', note: 'PETRONAS & Allianz' },
  { value: '10+', label: 'Campaigns Managed', note: 'End-to-end delivery' },
  { value: '441%', label: 'Campaign Engagement ↑', note: '9,525 engagements' },
  { value: '3', label: 'Languages', note: 'EN · BM · Mandarin' },
]

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-navy relative overflow-hidden">
      {/* Gold radial gradients */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge — task #4: softened tone */}
        <div className="inline-flex items-center gap-2 bg-navy-light border border-gold/30 text-gold text-xs font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Open to the right opportunity
        </div>

        {/* Name label */}
        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
          Chew Yi Fuan
        </p>

        {/* Headline */}
        <h1
          className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          I turn complex ideas into communications people{' '}
          <em className="text-gold not-italic">actually want to read.</em>
        </h1>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#work"
            className="bg-gold text-navy px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-gold-light transition-colors shadow-lg"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="border border-gold/50 text-gold px-7 py-3.5 rounded-full text-sm font-medium hover:bg-gold/10 transition-colors"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats bar — task #5: added note row for 441% context, task #6: languages note */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14 max-w-2xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="bg-navy-light border border-gold/20 rounded-xl px-4 py-4">
              <div
                className="text-2xl font-bold text-gold"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {s.value}
              </div>
              <div className="text-xs text-gray-300 mt-1 font-medium">{s.label}</div>
              <div className="text-xs text-gray-500 mt-0.5">{s.note}</div>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <a
            href="https://linkedin.com/in/yi-fuan-chew-20/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-gold transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a
            href="mailto:yfuan81@gmail.com"
            className="text-gray-400 hover:text-gold transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <a
          href="#about"
          aria-label="Scroll down"
          className="text-gray-500 hover:text-gold transition-colors animate-bounce inline-block"
        >
          <ArrowDown size={22} />
        </a>
      </div>
    </section>
  )
}
