const stats = [
  { label: 'Years Experience', value: '4+' },
  { label: 'Campaigns Managed', value: '10+' },
  { label: 'Interaction Increase', value: '441%' },
  { label: 'NPS Score (VoC)', value: '4.56' },
]

const timeline = [
  {
    period: '2025 – Present',
    role: 'Senior Executive, Customer Engagement & Digital Adoption',
    company: 'Allianz Malaysia',
  },
  {
    period: 'Dec 2022 – 2024',
    role: 'Creative Learning Content Designer',
    company: 'PETRONAS Global Learning & Development',
  },
  {
    period: 'Aug – Nov 2022',
    role: 'Graphic Designer',
    company: 'PETRONAS Downstream Business Excellence',
  },
  {
    period: 'Mar – Nov 2021',
    role: 'Internship Trainee, Strategic Communications',
    company: 'PETRONAS Refinery & Trading',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">About Me</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-navy"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Who I Am
          </h2>
        </div>

        {/* Bio split */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          {/* Photo placeholder */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-64 h-72 rounded-2xl bg-grey-light border-2 border-gold/30 flex items-center justify-center text-center p-6 shadow-sm">
              <div>
                <div className="text-4xl mb-3">📸</div>
                <p className="text-xs text-grey-muted font-semibold">[ Headshot goes here ]</p>
                <p className="text-xs text-grey-muted mt-1 opacity-70">Replace with real photo</p>
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div>
            <h3 className="text-xl font-semibold text-navy mb-4">
              Corporate Communications Professional
            </h3>
            <p className="text-grey-muted leading-relaxed mb-4">
              I'm Yi Fuan — and I genuinely love the craft of communications. Not the corporate-speak version.
              The kind that makes people stop scrolling, actually read, and walk away understanding something better.
            </p>
            <p className="text-grey-muted leading-relaxed mb-4">
              Over 4 years across PETRONAS and Allianz Malaysia, I've handled everything from stakeholder
              newsletters and employee branding to campaign management, video production, and leadership reporting.
              I've managed high-stakes communications under pressure, coordinated 10+ campaigns end-to-end,
              and written content that earned commendations from Heads of Department with minimal amendments.
            </p>
            <p className="text-grey-muted leading-relaxed mb-8">
              Trilingual in English, Bahasa Malaysia, and Mandarin — which means I don't just translate words,
              I translate context. I work on both sides of the camera, love a good dashboard, and take unusual
              pride in making compliance letters feel less terrible.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center p-4 rounded-xl bg-white border border-grey-light shadow-sm"
                >
                  <div
                    className="text-2xl font-bold text-gold"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs text-grey-muted mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education strip */}
        <div className="rounded-2xl bg-gold p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <p className="text-navy text-xs font-bold uppercase tracking-widest mb-1">Education</p>
              <h3
                className="text-xl font-bold text-navy"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Bachelor of Media Studies &amp; Communication
              </h3>
              <p className="text-navy/80 font-medium mt-1">University of Malaya · April 2022</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['CGPA 3.80', "Dean's List × 6", 'University Book Prize', 'Exchange: Indonesia'].map(
                (badge) => (
                  <span
                    key={badge}
                    className="bg-navy text-gold text-xs font-semibold px-3 py-1.5 rounded-full"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Career timeline */}
        <div className="rounded-2xl bg-navy p-8">
          <p className="text-gold text-xs font-bold uppercase tracking-widest mb-6">Career Timeline</p>
          <div className="space-y-6">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gold mt-1 flex-shrink-0" />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-gold/20 mt-2" />
                  )}
                </div>
                <div className="pb-2">
                  <p className="text-gold text-xs font-medium mb-0.5">{t.period}</p>
                  <p className="text-white font-semibold text-sm">{t.role}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
