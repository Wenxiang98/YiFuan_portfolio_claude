const stats = [
  { label: 'Years Learning', value: '3+' },
  { label: 'Projects Built', value: '10+' },
  { label: 'Technologies', value: '15+' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-medium uppercase tracking-widest mb-2">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Who I Am</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-56 h-56 mx-auto md:mx-0 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-6xl shadow-sm">
              👨‍💻
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Full Stack Developer based in Malaysia
            </h3>
            <p className="text-gray-500 leading-relaxed mb-4">
              I'm Wen Xiang, a passionate developer who loves building things from the ground up.
              I enjoy working on both the front-end and back-end, creating seamless user experiences
              backed by solid, scalable systems.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Outside of coding, I'm interested in algorithmic trading and AI tooling —
              I've built personal projects that combine both worlds.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <div className="text-2xl font-bold text-blue-600">{s.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
