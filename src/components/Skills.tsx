const categories = [
  {
    title: 'Communications',
    accent: 'navy',
    skills: [
      'Corporate Communications',
      'Stakeholder Management',
      'Issues Management',
      'Media Relations',
      'Internal Communications',
    ],
  },
  {
    title: 'Campaign & Project',
    accent: 'gold',
    skills: [
      'Campaign Management',
      'Project Coordination',
      'EDM / Email Campaigns',
      'WhatsApp Broadcasting',
      'Event Communications',
    ],
  },
  {
    title: 'Content & Writing',
    accent: 'navy',
    skills: [
      'English Copywriting',
      'Bahasa Malaysia',
      'Mandarin (Conversational)',
      'Press Releases',
      'Educational Articles',
    ],
  },
]

const creativeTools = [
  {
    name: 'Premiere Pro',
    bg: '#2D0040',
    color: '#E577FF',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <text x="4" y="17" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="13" fill="#E577FF">Pr</text>
      </svg>
    ),
  },
  {
    name: 'After Effects',
    bg: '#00005B',
    color: '#9999FF',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <text x="3" y="17" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="13" fill="#9999FF">Ae</text>
      </svg>
    ),
  },
  {
    name: 'Illustrator',
    bg: '#310000',
    color: '#FF9A00',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <text x="4" y="17" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="13" fill="#FF9A00">Ai</text>
      </svg>
    ),
  },
  {
    name: 'Photoshop',
    bg: '#001E36',
    color: '#31A8FF',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <text x="3" y="17" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="13" fill="#31A8FF">Ps</text>
      </svg>
    ),
  },
  {
    name: 'InDesign',
    bg: '#490021',
    color: '#FF3366',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <text x="4" y="17" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="13" fill="#FF3366">Id</text>
      </svg>
    ),
  },
  {
    name: 'Firefly',
    bg: '#E5310D',
    color: '#FFFFFF',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <text x="4" y="17" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="13" fill="#FFFFFF">Ff</text>
      </svg>
    ),
  },
  {
    name: 'Figma',
    bg: '#1E1E1E',
    color: null,
    icon: (
      <svg viewBox="0 0 38 57" width="16" height="22" fill="none">
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#0ACF83"/>
        <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="#FF7262"/>
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/>
      </svg>
    ),
  },
  {
    name: 'Miro',
    bg: '#FFD02F',
    color: '#050038',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <text x="5" y="18" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="16" fill="#050038">M</text>
      </svg>
    ),
  },
  {
    name: 'Canva',
    bg: '#7B2FBE',
    color: '#FFFFFF',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <text x="6" y="18" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="16" fill="#FFFFFF">C</text>
      </svg>
    ),
  },
  {
    name: 'CapCut',
    bg: '#000000',
    color: '#FFFFFF',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <text x="2" y="17" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="12" fill="#FFFFFF">Cc</text>
      </svg>
    ),
  },
  {
    name: 'PowerPoint',
    bg: '#B7472A',
    color: '#FFFFFF',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <text x="3" y="17" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="12" fill="#FFFFFF">Ppt</text>
      </svg>
    ),
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Skills</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-navy"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            What I Work With
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-grey-light hover:shadow-md transition-shadow"
            >
              <h3
                className={`font-bold mb-4 text-sm uppercase tracking-wider ${
                  cat.accent === 'navy' ? 'text-navy' : 'text-gold'
                }`}
              >
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full border ${
                      cat.accent === 'navy'
                        ? 'bg-navy/5 border-navy/20 text-navy'
                        : 'bg-gold/10 border-gold/30 text-gold'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Creative Tools — icon grid */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-grey-light hover:shadow-md transition-shadow">
            <h3 className="font-bold mb-5 text-sm uppercase tracking-wider text-gold">
              Creative Tools
            </h3>
            <div className="grid grid-cols-4 gap-x-3 gap-y-4">
              {creativeTools.map((tool) => (
                <div key={tool.name} className="flex flex-col items-center gap-1.5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                    style={{ background: tool.bg }}
                  >
                    {tool.icon}
                  </div>
                  <span className="text-[9px] text-grey-muted text-center leading-tight font-medium">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
