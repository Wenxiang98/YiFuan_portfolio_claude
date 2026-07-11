import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Slides', href: '#presentation-design' },
  { label: 'Video & Design', href: '#video-design' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur border-b border-navy-light">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-bold text-gold tracking-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Yi Fuan
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-300 hover:text-gold transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm bg-gold text-navy px-4 py-2 rounded-full hover:bg-gold-light transition-colors font-semibold"
          >
            Get In Touch
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-gray-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-navy',
          open ? 'max-h-64' : 'max-h-0'
        )}
      >
        <nav className="flex flex-col px-6 pb-4 gap-3 border-t border-navy-light pt-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-gray-300 hover:text-gold font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-sm bg-gold text-navy px-4 py-2 rounded-full font-semibold text-center mt-1"
          >
            Get In Touch
          </a>
        </nav>
      </div>
    </header>
  )
}
