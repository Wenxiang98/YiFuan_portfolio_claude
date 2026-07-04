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
    thumbnailUrl: '',
    fuellingSuccessVideos: [] as string[],
    linkedinPosts: [] as { label: string; url: string }[],
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
    title: 'Forced Labour Awareness Posters',
    client: 'PETRONAS Downstream · 2022',
    description:
      'Series of awareness posters produced for Downstream HSSE Heartbeat Edition #2, published on the Downstream HSE Excellence SharePoint portal.',
    tags: ['Social Awareness', 'HSSE Campaign', 'SharePoint'],
  },
  {
    title: 'MSR Campaign Communications',
    client: 'PETRONAS Refinery & Trading · 2021',
    description:
      'Visual communications materials for the Management System Review (MSR) Campaign — internship project for the Transformation Office.',
    tags: ['Campaign Design', 'Internal Comms', 'Internship'],
  },
  {
    title: 'myLearningX Festival & Campaign Banners',
    client: 'PETRONAS GLD · 2022–2024',
    description:
      'Campaign banners and posters for national and global festival celebrations on myLearningX — Raya, Chinese New Year, and cultural events — aligning learning content with cultural moments.',
    tags: ['Campaign Banners', 'Cultural Events', 'myLearningX'],
  },
  {
    title: 'PETRONAS Digital Day 2023 Collaterals',
    client: 'PETRONAS GLD · 2023',
    description:
      'Full suite of event graphics and collaterals for PETRONAS Digital Day 2023, supporting 1,500+ visitors and 1,000+ platform activations over 2 days.',
    tags: ['Event Graphics', 'Digital Day 2023'],
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

export default function VideoDesign() {
  return (
    <section id="video-design" className="py-24 px-6 bg-cream">
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
                {v.thumbnailUrl ? (
                  <img
                    src={v.thumbnailUrl}
                    alt={`${v.title} thumbnail`}
                    className="w-full aspect-video object-cover rounded-xl"
                  />
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

                {v.leaders.length > 0 && (
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

        {/* Graphic Design */}
        <div className="mb-14">
          <p className="text-navy text-xs font-bold uppercase tracking-widest mb-6">
            Graphic Design
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {graphicDesign.map((d) => (
              <div
                key={d.title}
                className="bg-white rounded-2xl p-6 border border-grey-light hover:border-gold/30 hover:shadow-sm transition-all"
              >
                {/* Design screenshot placeholder — replace with actual image */}
                <div className="w-full aspect-video bg-grey-light/60 border border-dashed border-grey-light rounded-xl flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-2xl mb-1">🖼️</div>
                    <p className="text-xs text-grey-muted/60">[ Add design screenshot ]</p>
                  </div>
                </div>

                <div className="mb-3">
                  <h4 className="text-sm font-bold text-navy">{d.title}</h4>
                  <p className="text-xs text-gold/80 font-medium mt-0.5">{d.client}</p>
                </div>
                <p className="text-xs text-grey-muted leading-relaxed mb-3">{d.description}</p>
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
