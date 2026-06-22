import { Mail } from 'lucide-react'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-blue-600 text-sm font-medium uppercase tracking-widest mb-2">Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
        <p className="text-gray-500 mb-10 leading-relaxed">
          Whether you have a project in mind, want to collaborate, or just want to say hi —
          my inbox is always open.
        </p>

        <a
          href="mailto:tan.wen.xiang98@gmail.com"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm mb-12"
        >
          <Mail size={16} />
          Say Hello
        </a>

        <div className="flex justify-center gap-8">
          <a
            href="https://github.com/Wenxiang98"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-700 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gray-400 transition-colors">
              <GithubIcon />
            </div>
            <span className="text-xs">GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-blue-300 transition-colors">
              <LinkedinIcon />
            </div>
            <span className="text-xs">LinkedIn</span>
          </a>
          <a
            href="mailto:tan.wen.xiang98@gmail.com"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-blue-300 transition-colors">
              <Mail size={18} />
            </div>
            <span className="text-xs">Email</span>
          </a>
        </div>
      </div>
    </section>
  )
}
