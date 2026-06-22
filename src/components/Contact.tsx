import { Mail, Phone, MapPin } from 'lucide-react'

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const openTo = [
  'Corporate Communications',
  'Strategic Communications',
  'Public Relations',
  'Brand Management',
  'Content Marketing',
  'Internal Communications',
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-navy">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Contact</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Let's Work Together
          </h2>
          <p className="text-gray-400 mt-3 max-w-md mx-auto text-sm leading-relaxed">
            Open to corporate communications roles in Kuala Lumpur and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact info panel */}
          <div className="bg-navy-light rounded-2xl p-8 border border-gold/20">
            <h3 className="text-gold font-bold text-xs uppercase tracking-widest mb-6">Get In Touch</h3>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:yfuan81@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Mail size={15} className="text-gold" />
                </div>
                <span className="text-sm">yfuan81@gmail.com</span>
              </a>

              <a
                href="tel:+601153065973"
                className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Phone size={15} className="text-gold" />
                </div>
                <span className="text-sm">+6011 5306 5973</span>
              </a>

              <a
                href="https://linkedin.com/in/yi-fuan-chew-20/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <LinkedinIcon />
                </div>
                <span className="text-sm">linkedin.com/in/yi-fuan-chew-20/</span>
              </a>

              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={15} className="text-gold" />
                </div>
                <span className="text-sm">Kuala Lumpur, Malaysia</span>
              </div>
            </div>

            <div>
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Open to roles in</p>
              <div className="flex flex-wrap gap-2">
                {openTo.map((role) => (
                  <span
                    key={role}
                    className="text-xs bg-gold/10 border border-gold/20 text-gold px-3 py-1.5 rounded-full"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Message form */}
          <div className="bg-navy-light rounded-2xl p-8 border border-gold/20">
            <h3 className="text-gold font-bold text-xs uppercase tracking-widest mb-6">Send a Message</h3>
            <form
              action="mailto:yfuan81@gmail.com"
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label className="block text-xs text-gray-400 mb-1.5">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full bg-navy border border-gold/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full bg-navy border border-gold/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1.5">Organisation</label>
                <input
                  type="text"
                  name="organisation"
                  placeholder="Your company"
                  className="w-full bg-navy border border-gold/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1.5">Message</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="What's on your mind?"
                  className="w-full bg-navy border border-gold/20 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-navy font-semibold py-3 rounded-xl text-sm hover:bg-gold-light transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
