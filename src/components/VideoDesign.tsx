import { useState, useCallback } from 'react'

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const featured = [
  {
    title: 'Tech Women in PETRONAS',
    badge: 'Documentary Series · 2023',
    description:
      'A documentary series spotlighting five exceptional women leaders across PETRONAS — from operations and occupational hygiene to exploration, R&T, and culture. Produced entirely in-house from concept to final edit.',
    leaders: [
      'Nenisurya — Iron Lady of PMA Operations',
      'Norhazlina Mydin — Sifu of Occupational Hygiene in Malaysia',
      'Suhaileen Shahar — Queen of Exploration',
      'Norharyati Hashim — Face of Research & Technology',
    ],
    role: 'Lead Producer · Videographer · Coordinator · Script Writer · Storyboarding · Graphic Set Creation · Final Editing',
    tools: ['Sony a6400 ×2', 'Premiere Pro', 'After Effects', 'Illustrator'],
    thumbnailUrl: '/thumbnails/tech-women-petronas.jpeg',
    leaderStills: [
      '/thumbnails/tech-women-nenisurya.jpeg',
      '/thumbnails/tech-women-norhazlina.jpeg',
      '/thumbnails/tech-women-noriani.jpeg',
      '/thumbnails/tech-women-suhaileen.jpeg',
    ],
    fuellingSuccessVideos: [] as string[],
    linkedinPosts: [
      {
        label: 'Tech Women in PETRONAS — LinkedIn',
        url: 'https://www.linkedin.com/posts/yi-fuan-chew-20_petroleumengineer-innovation-stem-activity-7117173379727601665-U0DG?utm_source=share&utm_medium=member_desktop&rcm=ACoAADO7rYIBvm8mKtISOPtbI8ca0b7sjEbm6ak',
      },
    ],
  },
  {
    title: 'PETRONAS 50th Anniversary Video Series',
    badge: 'Corporate Series · 2024',
    description:
      "Highlighting the inspiring journeys and innovative contributions of talent nurtured within PETRONAS in conjunction with the company's 50th Anniversary. Designed structured interview frameworks to draw out authentic leader narratives from Non-Executive to GM level.",
    leaders: [],
    role: 'Interview Framework Design · Leader Direction · Script Review & Alignment',
    tools: ['Premiere Pro', 'After Effects'],
    thumbnailUrl: 'https://img.youtube.com/vi/_hbj9sHAFX4/hqdefault.jpg',
    leaderStills: [] as string[],
    fuellingSuccessVideos: ['0NMnjZq1zGg', 'SyM5pFoveI5Q', '_ApB3xLAFyA'],
    linkedinPosts: [
      {
        label: 'PETRONAS 50th: Technopreneurship Spotlight',
        url: 'https://www.linkedin.com/posts/petronas_petronas-passionateaboutprogress-petronas50-activity-7273864342847000576-upjw',
      },
      {
        label: 'PETRONAS 50th: Technopreneurship Leaders',
        url: 'https://www.linkedin.com/posts/petronas_petronas-passionateaboutprogress-petronas50-activity-7282931601162838016--HkI',
      },
    ],
  },
]

const otherVideos = [
  {
    title: 'Integrity Module Awareness Video',
    note: 'Scenario-based integrity learning module to spread awareness on the importance of integrity. Topics: Integrity Beyond The Grey Zone (Module 1 & 2).',
    meta: 'Videographer & Final Editor · 2 weeks · Premiere Pro + After Effects',
  },
  {
    title: 'OJL Beta Pilot Testimonial Series',
    note: '6 testimonial videos across 5 programme roles (Learner, Line Manager, OJL Provider, Admin, Observer) plus a 3-minute highlight reel for awareness.',
    meta: 'Full production end-to-end',
  },
  {
    title: 'LERA — Learning Excellence Testimonials',
    note: 'Testimonial series for PETRONAS Learning Excellence and Recognition Awards, promoting myLearningX playlist utilisation through award-winning leaders as role models.',
    meta: 'Premiere Pro',
  },
  {
    title: 'Learn Like A Leader',
    note: 'Testimonial video series encouraging myLearningX adoption by showcasing how leaders use curated learning playlists.',
    meta: 'Premiere Pro',
  },
  {
    title: 'President Townhall Roamers',
    note: 'Conducted roaming on-camera interviews with senior PETRONAS leaders: VP & Chief Sustainability Officer, CEO HCD, Senior Leadership Team, and Head of Downstream Culture Excellence.',
    meta: 'Videographer · Sony a6400',
  },
  {
    title: 'Commercial Video with BRB',
    note: 'Collaboration with BRB (PETRONAS Chemicals Group subsidiary) to raise awareness on continuous learning and myLearningX platform support.',
    meta: 'Script Proofreading · Videographer · Final Cut Pro · 1-week turnaround',
  },
  {
    title: 'HR Leaders Sharing Series',
    note: 'HR leaders sharing learning experiences and field insights to increase awareness about the HR function within PETRONAS.',
    meta: '3-month timeline · Premiere Pro · Final Cut Pro · Illustrator',
  },
  {
    title: 'Circular Economy Animation Video',
    note: 'Animated video communicating circular economy concepts to PETRONAS employees in an accessible format.',
    meta: 'After Effects',
  },
  {
    title: 'myLearningX Navigation Tutorials',
    note: 'Step-by-step platform tutorial videos: Coaching Plans, Coach Directory, and AI Coaching Draft.',
    meta: 'Screen capture + editing',
  },
  {
    title: 'Management System Review Campaign Video',
    note: 'First video produced for the Transformation Office during internship. Promoted the MSR Campaign organised by the R&T Department.',
    meta: 'Internship · PETRONAS Refinery & Trading',
  },
]

const graphicDesign = [
  {
    title: 'myLearningX Campaign & Internal Comms',
    client: 'PETRONAS GLD · 2022–2024',
    scope: '2-year engagement · Platform-wide distribution',
    description:
      'Two-year design output for PETRONAS GLD — cultural festival banners (Hari Raya, Chinese New Year, Deepavali, World Water Day), platform migration announcements, and step-by-step instructional infographics distributed to PETRONAS employees nationwide via myLearningX.',
    formats: ['Festival Banners', 'Internal Comms', 'Instructional Design'],
    tags: ['Campaign Design', 'Cultural Localisation', 'myLearningX'],
    gallery: [
      '/graphic-design/world-water-day.png',
      '/graphic-design/ramadan-kareem.jpeg',
      '/graphic-design/we-have-moved.jpeg',
      '/graphic-design/learning-community.jpeg',
      '/graphic-design/hrd-award-2023.jpeg',
      '/graphic-design/clo-award-2023.jpeg',
    ] as string[],
  },
  {
    title: 'HSSE Forced Labour Awareness Posters',
    client: 'PETRONAS Downstream · 2022',
    scope: 'Published · HSSE Heartbeat Newsletter & SharePoint',
    description:
      'Poster series translating forced labour compliance topics into clear, employee-facing visuals — published in PETRONAS Downstream\'s HSSE Heartbeat Edition #2 and distributed through the Downstream HSE Excellence SharePoint portal to operations staff.',
    formats: ['Awareness Posters', 'Compliance Design', 'Print-Ready'],
    tags: ['Social Awareness', 'HSSE Campaign', 'Corporate Comms'],
    gallery: ['/graphic-design/forced-labour-posters.jpeg'] as string[],
  },
  {
    title: 'Management System Review Campaigns Communication',
    client: 'PETRONAS Refinery & Trading · 2021',
    scope: 'Internship · Transformation Office · myLearningX Distribution',
    description:
      'Campaign communication visuals for the Management System Review (MSR) initiative — motivational banners promoting the Plan-Do-Check-Act cycle, distributed via myLearningX across PETRONAS Refinery & Trading.',
    formats: ['Campaign Banners', 'Internal Comms', 'Digital Distribution'],
    tags: ['MSR Campaign', 'OEMS', 'myLearningX'],
    gallery: [
      '/graphic-design/msr-execute-with-pace.jpeg',
      '/graphic-design/msr-fail-to-plan.jpeg',
      '/graphic-design/msr-planning-key-success.jpeg',
      '/graphic-design/msr-change-inevitable.jpeg',
      '/graphic-design/msr-never-stop-evolving.jpeg',
      '/graphic-design/msr-execute-the-plan.jpeg',
      '/graphic-design/msr-self-reflection.jpeg',
      '/graphic-design/msr-devil-in-details.jpeg',
    ] as string[],
  },
  {
    title: 'MSR Implementation Review — OU Support Communications',
    client: 'PETRONAS Refinery & Trading · 2021',
    scope: 'Internship · Transformation Office · Multi-OU',
    description:
      'Motivational support visuals sent to different Operating Units (PP(T)SB, MRCSB) ahead of their OEMS Implementation Reviews — wishing them well and encouraging them through the Plan-Do-Check-Act cycle.',
    formats: ['OU Support Cards', 'Internal Comms', 'Digital Distribution'],
    tags: ['MSR', 'Implementation Review', 'OU Support'],
    gallery: [
      '/graphic-design/msr-ir-allthebest-pptsb.jpeg',
      '/graphic-design/msr-ir-allthebest-mrcsb.jpeg',
      '/graphic-design/msr-ir-rooting-pptsb.jpeg',
      '/graphic-design/msr-ir-youcan-pptsb.jpeg',
      '/graphic-design/msr-ir-allthebest-eo.jpeg',
    ] as string[],
  },
  {
    title: 'MSR Implementation Review — OU Congratulations',
    client: 'PETRONAS Refinery & Trading · 2021',
    scope: 'Internship · Transformation Office · Multi-OU',
    description:
      'Congratulatory visuals sent to Operating Units (PP(T)SB, MRCSB, EO) upon completing their OEMS Implementation Reviews with excellent results — celebrating their commitment and achievement through the Plan-Do-Check-Act cycle.',
    formats: ['Congratulations Cards', 'Internal Comms', 'Digital Distribution'],
    tags: ['MSR', 'Implementation Review', 'OU Congratulations'],
    gallery: [
      '/graphic-design/msr-ir-congrats-pptsb-fish.jpeg',
      '/graphic-design/msr-ir-congrats-eo-tulips.jpeg',
      '/graphic-design/msr-ir-congrats-mrcsb-sandals.jpeg',
      '/graphic-design/msr-ir-congrats-pptsb-firefly.jpeg',
      '/graphic-design/msr-ir-congrats-petco-bird.jpeg',
      '/graphic-design/msr-ir-congrats-pptsb-turtle2.jpeg',
      '/graphic-design/msr-ir-congrats-petco-eagle.jpeg',
    ] as string[],
  },
  {
    title: 'OE R2 Multi-OU Internal Comms',
    client: 'PETRONAS R&T Transformation Office · 2021',
    scope: 'Internship · Multi-OU Distribution',
    description:
      'Internal communications suite designed for different Organisational Units under the R&T Transformation Office — congratulatory announcements in multiple visual styles (light, dark, retro), event speaker banners, and festive communications distributed across OUs.',
    formats: ['Congratulatory Cards', 'Event Banners', 'Festival Comms'],
    tags: ['Internal Comms', 'Multi-OU', 'Internship'],
    gallery: [
      '/graphic-design/rt-congratulations-dark.jpeg',
      '/graphic-design/rt-golive-f1-photo.jpeg',
      '/graphic-design/rt-golive-refinery.jpeg',
      '/graphic-design/rt-golive-f1-art.jpeg',
      '/graphic-design/rt-congratulations-light.jpeg',
      '/graphic-design/rt-congratulations-retro.jpeg',
      '/graphic-design/rt-congratulations-mrcsb.jpeg',
      '/graphic-design/rt-allthebest-mrcsb.jpeg',
      '/graphic-design/rt-speak-up-event.jpeg',
      '/graphic-design/rt-raya-ketupat.jpeg',
    ] as string[],
  },
]

const scriptDocs = [
  {
    title: 'Circular Economy — Animated Video Storyboard',
    context: 'Circular Economy Animation · PETRONAS',
    desc: 'Visual storyboard for the 2-minute animated Circular Economy awareness video — scene frames, VO copy, motion graphic notes, and character directions.',
    downloadSrc: '',
    slides: [
      '/documents/circular-slides/slide-02.jpeg',
      '/documents/circular-slides/slide-03.jpeg',
      '/documents/circular-slides/slide-04.jpeg',
      '/documents/circular-slides/slide-05.jpeg',
      '/documents/circular-slides/slide-06.jpeg',
    ],
  },
  {
    title: 'Storyboard — Tech Women in PETRONAS',
    context: 'Tech Women in PETRONAS Documentary · PETRONAS GLD · 2023',
    desc: 'Pre-production storyboard for the TWP documentary — scene flow, host intro framework, interview cues, and visual direction across 4 pages.',
    downloadSrc: '/documents/twp-storyboard.pdf',
    slides: [
      '/documents/twp-storyboard-slides/page-01.jpeg',
      '/documents/twp-storyboard-slides/page-02.jpeg',
      '/documents/twp-storyboard-slides/page-03.jpeg',
      '/documents/twp-storyboard-slides/page-04.jpeg',
    ],
  },
  {
    title: 'Storyboard — OJL Onboarding Beta Video',
    context: 'OJL Beta Pilot Testimonial Series · PETRONAS GLD',
    desc: 'Scene-by-scene storyboard for the OJL Beta pilot video — camera directions, VO scripts, and action notes for each scene.',
    downloadSrc: '/documents/ojl-storyboard.pdf',
    slides: [
      '/documents/ojl-slides/page-01.jpeg',
      '/documents/ojl-slides/page-02.jpeg',
      '/documents/ojl-slides/page-03.jpeg',
      '/documents/ojl-slides/page-04.jpeg',
    ],
  },
]

const productionTools = [
  'Adobe Premiere Pro',
  'After Effects',
  'Illustrator',
  'Photoshop',
  'InDesign',
  'Final Cut Pro',
  'Canva',
  'CapCut',
  'Filmora',
  'Sony a6400 ×2',
]

function LeaderStillCarousel({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0)
  const prev = useCallback(() => setIdx((i) => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIdx((i) => (i + 1) % images.length), [images.length])

  return (
    <div className="relative rounded-xl overflow-hidden bg-[#1a0a2e] group/lsc aspect-video">
      <img
        key={idx}
        src={images[idx]}
        alt={`Leader still ${idx + 1}`}
        className="w-full h-full object-contain"
      />
      {images.length > 1 && (
        <>
          <button onClick={prev} aria-label="Previous leader"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover/lsc:opacity-100 transition-opacity">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={next} aria-label="Next leader"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover/lsc:opacity-100 transition-opacity">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} aria-label={`Go to leader ${i + 1}`}
                className={`rounded-full transition-all duration-200 ${i === idx ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/75'}`} />
            ))}
          </div>
          <div className="absolute top-2 right-2 bg-black/50 text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
            {idx + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  )
}

function DesignCarousel({ images, title }: { images: string[]; title: string }) {
  const [idx, setIdx] = useState(0)
  const prev = useCallback(() => setIdx((i) => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIdx((i) => (i + 1) % images.length), [images.length])

  if (images.length === 0) return null

  return (
    <div className="relative w-full bg-gray-100 overflow-hidden group/dc" style={{ height: '180px' }}>
      <img
        key={idx}
        src={images[idx]}
        alt={`${title} sample ${idx + 1}`}
        className="w-full h-full object-contain"
      />
      {images.length > 1 && (
        <>
          <button onClick={prev} aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover/dc:opacity-100 transition-opacity">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={next} aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover/dc:opacity-100 transition-opacity">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} aria-label={`Go to ${i + 1}`}
                className={`rounded-full transition-all duration-200 ${i === idx ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/75'}`} />
            ))}
          </div>
          <div className="absolute top-2 right-2 bg-black/40 text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
            {idx + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  )
}

function ScriptDocCard({
  title,
  context,
  desc,
  downloadSrc,
  slides,
}: {
  title: string
  context: string
  desc: string
  downloadSrc: string
  slides: string[]
}) {
  const [slideIdx, setSlideIdx] = useState(0)
  const prevSlide = useCallback(() => setSlideIdx((i) => (i - 1 + slides.length) % slides.length), [slides.length])
  const nextSlide = useCallback(() => setSlideIdx((i) => (i + 1) % slides.length), [slides.length])

  return (
    <div className="bg-white rounded-2xl border border-grey-light overflow-hidden">
      {/* Card header */}
      <div className="px-6 py-5 border-b border-grey-light flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-gold text-[10px] font-semibold uppercase tracking-widest mb-0.5">{context}</p>
          <h4 className="text-sm font-bold text-navy leading-snug">{title}</h4>
          <p className="text-xs text-grey-muted mt-1 leading-relaxed">{desc}</p>
        </div>
        {downloadSrc && (
          <a
            href={downloadSrc}
            download
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0 flex items-center gap-1.5 text-[11px] font-semibold bg-cream text-navy border border-grey-light px-3 py-1.5 rounded-full hover:border-gold/50 hover:text-gold transition-colors"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V4" />
            </svg>
            Download
          </a>
        )}
      </div>

      {/* Image carousel viewer */}
      {slides.length > 0 && (
        <div className="relative bg-gray-50 group/sdoc">
          <img
            key={slideIdx}
            src={slides[slideIdx]}
            alt={`${title} — page ${slideIdx + 1}`}
            className="w-full h-auto block"
          />
          {slides.length > 1 && (
            <>
              <button onClick={prevSlide} aria-label="Previous page"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover/sdoc:opacity-100 transition-opacity">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button onClick={nextSlide} aria-label="Next page"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover/sdoc:opacity-100 transition-opacity">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <button key={i} onClick={() => setSlideIdx(i)} aria-label={`Page ${i + 1}`}
                    className={`rounded-full transition-all duration-200 ${i === slideIdx ? 'w-5 h-2 bg-navy' : 'w-2 h-2 bg-navy/30 hover:bg-navy/60'}`} />
                ))}
              </div>
              <div className="absolute top-3 right-3 bg-navy/80 text-white text-[10px] font-medium px-2.5 py-1 rounded-full">
                {slideIdx + 1} / {slides.length}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default function VideoDesign() {
  return (
    <section id="video-design" className="pt-24 pb-10 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">
            Video & Design
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-navy"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Creative Production Work
          </h2>
          <p className="text-grey-muted mt-3 text-sm max-w-xl mx-auto">
            From concept to final cut — end-to-end video production and graphic design across PETRONAS.
          </p>
        </div>

        {/* Featured Productions */}
        <div className="mb-16">
          <p className="text-navy text-xs font-bold uppercase tracking-widest mb-6">
            Featured Productions
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((v) => (
              <div
                key={v.title}
                className="bg-navy rounded-2xl p-7 border border-gold/20 flex flex-col gap-4"
              >
                {v.leaderStills && v.leaderStills.length > 0 ? (
                  <LeaderStillCarousel images={v.leaderStills} />
                ) : v.thumbnailUrl && v.linkedinPosts.length > 0 ? (
                  <a
                    href={v.linkedinPosts[0].url}
                    target="_blank"
                    rel="noreferrer"
                    className="block relative group/thumb rounded-xl overflow-hidden"
                  >
                    <img
                      src={v.thumbnailUrl}
                      alt={`${v.title} thumbnail`}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/30 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center gap-1.5 bg-[#0A66C2] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        View on LinkedIn
                      </span>
                    </div>
                  </a>
                ) : v.thumbnailUrl ? (
                  <img
                    src={v.thumbnailUrl}
                    alt={`${v.title} thumbnail`}
                    className="w-full aspect-video object-cover rounded-xl"
                  />
                ) : v.linkedinPosts.length > 0 ? (
                  <a
                    href={v.linkedinPosts[0].url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full aspect-video bg-[#0A66C2]/10 border border-[#0A66C2]/30 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/50 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#0A66C2]">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="text-xs text-[#0A66C2] font-semibold">View on LinkedIn</span>
                  </a>
                ) : (
                  <div className="w-full aspect-video bg-navy-light border border-dashed border-gold/20 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl mb-1">🎬</div>
                      <p className="text-xs text-gray-500">[ Add video thumbnail ]</p>
                    </div>
                  </div>
                )}

                <div>
                  <span className="text-xs text-gold/80 font-medium">{v.badge}</span>
                  <h3
                    className="text-xl font-bold text-white mt-1 leading-snug"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {v.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">{v.description}</p>

                {v.leaders.length > 0 && !(v.leaderStills && v.leaderStills.length > 0) && (
                  <div>
                    <p className="text-gold text-xs font-semibold uppercase tracking-wide mb-2">
                      Featured Leaders
                    </p>
                    <ul className="space-y-1">
                      {v.leaders.map((l) => (
                        <li key={l} className="text-gray-300 text-xs flex gap-2">
                          <span className="text-gold mt-0.5">·</span>
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <p className="text-gold text-xs font-semibold uppercase tracking-wide mb-1">
                    My Role
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed">{v.role}</p>
                </div>

                {v.fuellingSuccessVideos.length > 0 && (
                  <div>
                    <p className="text-gold text-xs font-semibold uppercase tracking-wide mb-2">
                      Fuelling Success · Case Study Playlist
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {v.fuellingSuccessVideos.map((id, i) => (
                        <div key={id} className="rounded-xl overflow-hidden bg-black aspect-video">
                          <iframe
                            src={`https://www.youtube.com/embed/${id}`}
                            title={`Fuelling Success — Episode ${i + 1}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {v.linkedinPosts.length > 0 && (
                  <div>
                    <p className="text-gold text-xs font-semibold uppercase tracking-wide mb-2">
                      As Seen On LinkedIn
                    </p>
                    <div className="flex flex-col gap-2">
                      {v.linkedinPosts.map((post) => (
                        <a
                          key={post.url}
                          href={post.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-xs text-gray-300 hover:text-gold transition-colors group"
                        >
                          <span className="w-6 h-6 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors text-gold">
                            <LinkedInIcon />
                          </span>
                          <span className="underline underline-offset-2 decoration-gold/30 group-hover:decoration-gold">
                            {post.label}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-gold/10">
                  {v.tools.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-gold/10 border border-gold/20 text-gold px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Video Work */}
        <div className="mb-16">
          <p className="text-navy text-xs font-bold uppercase tracking-widest mb-6">
            Other Video Work
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {otherVideos.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-5 border border-grey-light hover:border-gold/30 hover:shadow-sm transition-all"
              >
                <h4 className="text-sm font-bold text-navy mb-1">{v.title}</h4>
                <p className="text-xs text-grey-muted leading-relaxed mb-2">{v.note}</p>
                <p className="text-xs text-gold/80 font-medium">{v.meta}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scripts & Storyboards */}
        <div className="mb-16">
          <p className="text-navy text-xs font-bold uppercase tracking-widest mb-2">
            Scripts & Storyboards
          </p>
          <p className="text-grey-muted text-xs mb-6">
            Pre-production documents — storyboards, shoot rundowns, and scripting frameworks.
          </p>
          <div className="flex flex-col gap-6">
            {scriptDocs.map((doc) => (
              <ScriptDocCard key={doc.title} {...doc} />
            ))}
          </div>
        </div>

        {/* Graphic Design */}
        <div className="mb-14">
          <p className="text-navy text-xs font-bold uppercase tracking-widest mb-6">
            Graphic Design
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {graphicDesign.map((d) => (
              <div
                key={d.title}
                className="bg-white rounded-2xl border border-grey-light hover:border-gold/40 hover:shadow-md transition-all overflow-hidden"
              >
                {d.gallery.length > 0 ? (
                  <DesignCarousel images={d.gallery} title={d.title} />
                ) : (
                  /* Format chips header for cards without images */
                  <div className="bg-navy px-5 py-3 flex flex-wrap gap-1.5">
                    {d.formats.map((f) => (
                      <span
                        key={f}
                        className="text-[10px] font-semibold bg-gold/15 text-gold border border-gold/25 px-2.5 py-0.5 rounded-full"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                )}

                <div className="p-5">
                  {/* Format chips below image grid (only when gallery shown) */}
                  {d.gallery.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {d.formats.map((f) => (
                        <span
                          key={f}
                          className="text-[10px] font-semibold bg-navy/8 text-navy border border-navy/15 px-2.5 py-0.5 rounded-full"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Scope callout */}
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold bg-gold/8 border border-gold/20 px-3 py-1 rounded-full mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {d.scope}
                  </div>

                  <h4 className="text-sm font-bold text-navy mb-0.5">{d.title}</h4>
                  <p className="text-xs text-gold/80 font-medium mb-3">{d.client}</p>
                  <p className="text-xs text-grey-muted leading-relaxed mb-4">{d.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {d.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-cream border border-grey-light text-grey-muted px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Production Tools */}
        <div className="bg-navy rounded-2xl p-7">
          <p className="text-gold text-xs font-bold uppercase tracking-widest mb-5">
            Production Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {productionTools.map((tool) => (
              <span
                key={tool}
                className="text-xs bg-gold/10 border border-gold/20 text-gold px-3 py-1.5 rounded-full font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
