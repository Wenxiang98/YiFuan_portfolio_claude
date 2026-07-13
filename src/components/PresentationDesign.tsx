const slides = [
  {
    src: '/slides/pptx_performance.jpeg',
    label: 'Performance Over Time',
    desc: 'KPI panel + cumulative participation chart annotated with each channel send — showing how every EDM and WhatsApp blast produced a measurable step-up.',
    featured: true,
  },
  {
    src: '/slides/pptx_calendar.jpeg',
    label: 'Campaign Comms Calendar',
    desc: 'Full send schedule mapped across three months — EDM, SMS, WhatsApp, and paid social sequenced by segment.',
    featured: false,
  },
  {
    src: '/slides/pptx_channel.jpeg',
    label: 'Channel Performance Breakdown',
    desc: 'Open rate vs participation rate by channel — localised-language EDMs converted at nearly double the standard rate.',
    featured: false,
  },
  {
    src: '/slides/pptx_overview.jpeg',
    label: 'Campaign Overview Dashboard',
    desc: 'Timeline of all channel sends overlaid with daily participation — built for leadership review at campaign mid-point.',
    featured: false,
  },
  {
    src: '/slides/pptx_sentiment.jpeg',
    label: 'NPS Sentiment by Segment',
    desc: 'Promoter, Passive, and Detractor distribution broken down across Overall, Segment A, Segment B, and Common — with callout insight flagging repricing-related feedback volume and the headline finding that 3 in 5 customers rated us 9 or 10.',
    featured: false,
  },
  {
    src: '/slides/pptx_segmentation.jpeg',
    label: 'Passive Customer Segmentation',
    desc: 'Behavioural profile of passive customers across three lenses — agent agency, policy count, and customer tenure. Headline finding: same agency, single policy, 10+ years tenured. Insight fed directly into the next campaign\'s targeting logic and reward structure.',
    featured: false,
  },
]

function SlideFrame({
  src,
  label,
  desc,
}: {
  src: string
  label: string
  desc: string
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
            Allianz Malaysia — Campaign Report
          </span>
        </div>
        {/* Slide canvas */}
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

        {/* Context chips */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Allianz Malaysia · Campaign Communications
          </span>
        </div>

        {/* Featured slide — full width */}
        <div className="mb-8">
          <SlideFrame src={featured.src} label={featured.label} desc={featured.desc} />
        </div>

        {/* Thumbnail grid — 2 columns */}
        <div className="grid sm:grid-cols-2 gap-6">
          {thumbnails.map((s) => (
            <SlideFrame key={s.src} src={s.src} label={s.label} desc={s.desc} />
          ))}
        </div>

      </div>
    </section>
  )
}
