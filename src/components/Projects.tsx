import { useState, useCallback } from 'react'

const cases = [
  {
    company: 'Allianz Malaysia',
    co: 'allianz',
    title: '10 Campaigns. Zero Missed Deadlines.',
    challenge:
      'Managing communications across 9+ simultaneous product and engagement campaigns — each with strict regulatory, legal, and brand standards — while pioneering a brand-new direct-to-customer channel from scratch.',
    whatIDid:
      'Owned campaign comms for the Experience10 series (Meet the Stars, Celebrate Together, Badminton 2026, A Timeless Reunion), HealthAssured product conversion, Together We Celebrate Malaysia Day, Allianz Carnival Johor Bahru activation, Voice of Allianz NPS series, and Allianz 25th Anniversary. Pioneered WhatsApp Broadcast as Allianz\'s first direct-to-customer engagement channel — wrote all copy, managed send cadence, and monitored customer responses.',
    result:
      '10+ campaigns delivered on time. Zero regulatory escalations. AGIC Above Market NPS VoC 4.56, ALIM Loyalty Leader NPS VoC 4.55.',
    tags: ['Campaign Management', 'Multi-channel', 'WhatsApp', 'EDM'],
    campaigns: ['Experience10 × 4 Editions', 'HealthAssured Conversion', 'Malaysia Day', 'Allianz Carnival JB', 'Voice of Allianz NPS', 'Allianz 25th Anniversary'],
    highlight: 'First WhatsApp Broadcast channel at Allianz — built from scratch',
    featured: true,
    banners: [
      '/banners/banner-meet-the-stars.jpeg',
      '/banners/banner-meet-the-star-2.jpeg',
      '/banners/banner-celebrate-together.jpeg',
      '/banners/banner-malaysia-day.jpeg',
      '/banners/banner-25th-anniversary.jpeg',
      '/banners/banner-voice-of-allianz.jpeg',
      '/banners/banner-rate-allianz-10.jpeg',
      '/banners/banner-rate-us-10.jpeg',
      '/banners/banner-badminton-2026.jpeg',
    ],
  },
  {
    company: 'Allianz Malaysia',
    co: 'allianz',
    title: 'Writing Under Pressure — ALIM Repricing',
    challenge:
      'ALIM repricing required time-sensitive, legally precise policyholder communications with zero room for ambiguity or regulatory escalation.',
    whatIDid:
      'Drafted and reviewed all policyholder communications, official correspondence, and editorial content — press-release-style clarity delivered under tight deadlines with multiple internal stakeholders.',
    result:
      'Delivered legally precise communications to policyholders within tight deadlines — first-pass approval across all stakeholder reviewers. Maintained brand trust through a high-pressure repricing event with zero regulatory queries raised.',
    tags: ['Issues Management', 'Official Correspondence', 'Regulatory Comms'],
    campaigns: [],
    highlight: '',
    featured: false,
    banners: [] as string[],
  },
  {
    company: 'Allianz Malaysia',
    co: 'allianz',
    title: 'Making Insurance Something People Actually Want to Read',
    challenge:
      'Insurance is a low-interest category. Allianz needed copy that turned dry product information into something customers would actually read — including a high-stakes product migration that had to feel like an upgrade, not a disruption.',
    whatIDid:
      'Wrote the HealthAssured conversion EDM — reframing a regulatory MediSafe product migration as a customer benefit story. Also authored educational articles for RinggitKu in Bahasa Malaysia, translating complex policy and financial concepts into accessible, genuinely readable content.',
    result:
      'HealthAssured conversion communications signed off first-pass. 2 published BM articles demonstrating bilingual content capability across technical and lifestyle formats.',
    tags: ['Educational Content', 'Bahasa Malaysia', 'Copywriting'],
    campaigns: [],
    highlight: '',
    featured: false,
    banners: [] as string[],
  },
  {
    company: 'PETRONAS GLD',
    co: 'petronas',
    title: '1,112 New Users in One Month',
    challenge:
      'myLearningX platform needed rapid adoption among PETRONAS employees, with limited organic engagement and a large, dispersed workforce.',
    whatIDid:
      'Developed and executed a targeted internal email campaign with personalised sequences designed to drive platform activation across business units.',
    result: '2.50% platform activation increase — 1,112 new users in a single month.',
    tags: ['Internal Comms', 'Email Campaign', 'Platform Adoption'],
    campaigns: [],
    highlight: '',
    featured: true,
    banners: [] as string[],
  },
  {
    company: 'PETRONAS GLD',
    co: 'petronas',
    title: '441% More Campaign Interactions',
    challenge:
      'PETRONAS GLD needed to dramatically increase employee engagement with learning campaigns across internal channels.',
    whatIDid:
      'Designed and executed multi-channel campaigns: Integrity Day 2023 (3,000+ views, 2,800 LO registrations), Top Women Leaders video series (250+ views, 200 registrations), Future Energy Leader 2023 (500+ participants).',
    result:
      '441% campaign interaction increase — 9,525 total engagements across all campaigns versus the previous benchmark period.',
    tags: ['Multi-channel Campaign', 'Video Production', 'Stakeholder Comms'],
    campaigns: [],
    highlight: '',
    featured: false,
    banners: [] as string[],
  },
  {
    company: 'PETRONAS GLD',
    co: 'petronas',
    title: 'PETRONAS Digital Day — 1,500 Visitors in 2 Days',
    challenge:
      'PETRONAS Digital Day 2023 required end-to-end event communications and stakeholder mapping for a high-visibility internal event.',
    whatIDid:
      'Led event communications, stakeholder mapping, graphic design for all event collaterals, and coordinated logistics across departments for the two-day event.',
    result: '1,500+ visitors. 1,000+ platform activations in just 2 days.',
    tags: ['Event Comms', 'Stakeholder Mapping', 'Graphic Design'],
    campaigns: [],
    highlight: '',
    featured: false,
    banners: [] as string[],
  },
]

const badgeStyle: Record<string, string> = {
  allianz: 'bg-blue-50 text-blue-800 border-blue-200',
  petronas: 'bg-emerald-50 text-emerald-800 border-emerald-200',
}

function BannerCarousel({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0)

  const prev = useCallback(() => setIdx((i) => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIdx((i) => (i + 1) % images.length), [images.length])

  if (images.length === 0) {
    return (
      <div className="w-full h-44 bg-grey-light/50 border border-dashed border-grey-light rounded-xl flex items-center justify-center mb-4">
        <p className="text-xs text-grey-muted/60">[ Add campaign banners — see banners[] in Projects.tsx ]</p>
      </div>
    )
  }

  return (
    <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 bg-grey-light group/carousel">
      {/* Slides */}
      <img
        key={idx}
        src={images[idx]}
        alt={`Campaign banner ${idx + 1}`}
        className="w-full h-full object-cover object-center transition-opacity duration-300"
      />

      {/* Prev / Next arrows — visible on hover */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous banner"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-150"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next banner"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-150"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to banner ${i + 1}`}
                className={`rounded-full transition-all duration-200 ${
                  i === idx ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>

          {/* Slide counter */}
          <div className="absolute top-2 right-2 bg-black/40 text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
            {idx + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="work" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Work</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-navy"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Case Studies
          </h2>
          <p className="text-grey-muted mt-3 text-sm">Challenge → What I Did → Result</p>
        </div>

        {/* PETRONAS quote — task #8 placeholder for Allianz testimonial below */}
        <div className="bg-navy rounded-2xl p-8 mb-6 text-center">
          <p
            className="text-gold italic text-lg leading-relaxed"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            "Content produced with minimal amendments, receiving commendations from Heads of Department."
          </p>
          <p className="text-gray-400 text-sm mt-3">— PETRONAS Global Learning &amp; Development</p>
        </div>

        {/* task #8: Allianz testimonial placeholder */}
        <div className="border-2 border-dashed border-gold/30 rounded-2xl p-6 mb-10 text-center bg-gold/5">
          <p className="text-gold/60 text-xs font-bold uppercase tracking-widest mb-2">Allianz Testimonial</p>
          <p
            className="text-grey-muted italic text-base leading-relaxed"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            "[ Add quote from Allianz manager or team lead here ]"
          </p>
          <p className="text-grey-muted/60 text-xs mt-2">— Replace with real testimonial</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div
              key={c.title}
              className="group border border-grey-light rounded-2xl p-6 hover:border-gold/40 hover:shadow-lg transition-all duration-200 bg-white"
            >
              <BannerCarousel images={c.banners} />

              {c.highlight && (
                <div className="flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-xl px-3 py-2 mb-3">
                  <span className="text-gold text-xs font-bold uppercase tracking-wide flex-shrink-0">New Channel</span>
                  <span className="text-xs text-navy font-medium">{c.highlight}</span>
                </div>
              )}

              <div className="flex items-start justify-between mb-3">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full border ${badgeStyle[c.co]}`}
                >
                  {c.company}
                </span>
                {c.featured && (
                  <span className="text-xs font-medium bg-gold/10 text-gold border border-gold/30 px-2.5 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <h3
                className="text-base font-bold text-navy mb-4 group-hover:text-gold transition-colors leading-snug"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {c.title}
              </h3>

              <div className="space-y-3 text-xs mb-5">
                <div>
                  <p className="font-bold text-navy uppercase tracking-wide mb-1">Challenge</p>
                  <p className="text-grey-muted leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <p className="font-bold text-navy uppercase tracking-wide mb-1">What I Did</p>
                  <p className="text-grey-muted leading-relaxed">{c.whatIDid}</p>
                </div>
                <div>
                  <p className="font-bold text-gold uppercase tracking-wide mb-1">Result</p>
                  <p className="text-grey-muted leading-relaxed font-medium">{c.result}</p>
                </div>
              </div>

              {c.campaigns.length > 0 && (
                <div className="mb-3">
                  <p className="text-xs font-bold text-navy uppercase tracking-wide mb-2">Campaigns Managed</p>
                  <div className="flex flex-wrap gap-1.5">
                    {c.campaigns.map((camp) => (
                      <span
                        key={camp}
                        className="text-xs bg-blue-50 border border-blue-200 text-blue-700 px-2.5 py-1 rounded-full font-medium"
                      >
                        {camp}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-cream border border-grey-light text-grey-muted px-2.5 py-1 rounded-full"
                  >
                    {tag}
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
