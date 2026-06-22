import { cn } from '@/lib/utils'

const categories = [
  {
    title: 'Frontend',
    color: 'blue',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML / CSS'],
  },
  {
    title: 'Backend',
    color: 'indigo',
    skills: ['Rust (Axum)', 'Node.js', 'REST APIs', 'PostgreSQL', 'SQLite'],
  },
  {
    title: 'Tools & Others',
    color: 'sky',
    skills: ['Git', 'Docker', 'Vercel', 'Linux', 'AI / LLM Integration'],
  },
]

const colorMap: Record<string, string> = {
  blue: 'bg-blue-50 border-blue-100 text-blue-700',
  indigo: 'bg-indigo-50 border-indigo-100 text-indigo-700',
  sky: 'bg-sky-50 border-sky-100 text-sky-700',
}

const headerMap: Record<string, string> = {
  blue: 'text-blue-600',
  indigo: 'text-indigo-600',
  sky: 'text-sky-600',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-medium uppercase tracking-widest mb-2">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What I Work With</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className={cn('font-semibold mb-4 text-sm uppercase tracking-wider', headerMap[cat.color])}>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={cn(
                      'text-xs font-medium px-3 py-1.5 rounded-full border',
                      colorMap[cat.color]
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
