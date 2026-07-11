const slides = [
  {
    src: '/slides/slide5_redacted.jpeg',
    label: 'Executive Performance Overview',
    desc: 'High-level campaign results summary structured for leadership review',
    featured: true,
  },
  {
    src: '/slides/slide1_redacted.jpeg',
    label: 'Campaign Comms Calendar',
    desc: 'Multi-channel planning across EDM, WhatsApp Broadcast, and digital ads',
    featured: false,
  },
  {
    src: '/slides/slide4_redacted.jpeg',
    label: 'Data Visualisation — Campaign Results',
    desc: 'Chart-based performance breakdown for stakeholder reporting',
    featured: false,
  },
  {
    src: '/slides/slide3_redacted.jpeg',
    label: 'Campaign Performance Report',
    desc: 'Structured reporting across multiple campaign touchpoints',
    featured: false,
  },
  {
    src: '/slides/slide2_redacted.jpeg',
    label: 'Customer Communication Sample',
    desc: 'Experience10 series EDM — copy and layout for direct customer engagement',
    featured: false,
  },
]

function SlideFrame({
  src,
  label,
  desc,
  filename,
}: {
  src: string
  label: string
  desc: string
  filename?: string
}) {
  return (
    <div className="group">
      {/* PPT window chrome */}
      <div className="rounded-lg overflow-hidden shadow-2xl ring-1 ring-black/10 bg-[#323232]">
        {/* Title bar */}
        <div className="bg-[#1e1e1e] px-3 py-2 flex items-center gap-2.5">
          <div className="flex gap-1.5 flex-shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <span className="text-[#888] text-[10px] font-medium mx-auto truncate">
            {filename ?? 'Allianz Campaign Presentation.pptx — PowerPoint'}
          </span>
        </div>
        {/* Slide canvas area */}
        <div className="bg-[#404040] p-3 md:p-4">
          <div className="aspect-video bg-white overflow-hidden shadow-lg">
            <img
              src={src}
              alt={label}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
      {/* Caption */}
      <div className="mt-3 px-1">
        <p className="text-sm font-semibold text-navy leading-snug">{label}</p>
        <p className="text-xs text-grey-muted mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export default function PresentationDesign() {
  const [featured, ...thumbnails] = slides

  return (
    <section id="presentation-design" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">
            Presentation Design
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-navy"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Decks That Drive Decisions
          </h2>
          <p className="text-grey-muted mt-3 text-sm max-w-xl mx-auto">
            Internal presentation slides built for Allianz Malaysia — translating campaign data into
            clear, structured narratives for leadership and cross-functional stakeholders.
          </p>
        </div>

        {/* Context chip */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Allianz Malaysia · Campaign Communications
          </span>
          <span className="inline-flex items-center gap-1.5 bg-cream border border-grey-light text-grey-muted text-xs font-medium px-3 py-1.5 rounded-full">
            Confidential data anonymised
          </span>
        </div>

        {/* Featured slide — full width */}
        <div className="mb-8">
          <SlideFrame
            src={featured.src}
            label={featured.label}
            desc={featured.desc}
          />
        </div>

        {/* Thumbnail grid — 2 × 2 */}
        <div className="grid sm:grid-cols-2 gap-6">
          {thumbnails.map((s) => (
            <SlideFrame key={s.src} src={s.src} label={s.label} desc={s.desc} />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-grey-muted/70 mt-10">
          Sensitive figures and internal distribution labels have been removed. Structural content and narrative design are intact.
        </p>
      </div>
    </section>
  )
}
