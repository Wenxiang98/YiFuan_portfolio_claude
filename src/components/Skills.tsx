const categories = [
  {
    title: 'Communications',
    accent: 'navy',
    skills: [
      'Corporate Communications',
      'Stakeholder Management',
      'Issues Management',
      'Media Relations',
      'Spokesperson Content',
      'Reputation Management',
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
      'Power BI Reporting',
      'Agency Management',
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
      'Talking Points & Scripts',
      'Official Correspondence',
      'Intranet Articles',
    ],
  },
  {
    title: 'Creative Tools',
    accent: 'gold',
    skills: [
      'Adobe Premiere Pro',
      'After Effects',
      'Illustrator',
      'Photoshop',
      'InDesign',
      'Canva',
      'CapCut',
      'MS PowerPoint',
    ],
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
        </div>
      </div>
    </section>
  )
}
