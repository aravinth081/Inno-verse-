import team1 from '../assets/team-1.jpeg';
import team2 from '../assets/team-2.jpeg';
import team3 from '../assets/team-3.jpeg';

const Linkedin = (props) => (
  <svg
    viewBox="0 0 24 24"
    width={props.size || 18}
    height={props.size || 18}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Whatsapp = (props) => (
  <svg
    viewBox="0 0 24 24"
    width={props.size || 18}
    height={props.size || 18}
    fill="currentColor"
    className={props.className}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97-1.861-1.868-4.339-2.897-6.97-2.899-5.437 0-9.862 4.372-9.866 9.802-.001 1.762.485 3.478 1.405 5.014l-.995 3.635 3.7-.975zm11.087-7.4c-.1-.15-.35-.25-.75-.45s-2.35-1.15-2.715-1.28c-.365-.13-.63-.2-.9.2-.27.4-.1.9-.135 1.05s-.35.15-.75-.05c-.4-.2-1.685-.62-3.21-1.98-1.185-1.058-1.984-2.367-2.215-2.77-.23-.4-.025-.615.175-.813.18-.178.4-.465.6-.7.2-.23.265-.39.4-.66.13-.27.065-.5-.035-.7-.1-.2-.9-2.15-1.235-2.96-.325-.795-.655-.685-.9-.697-.23-.012-.49-.015-.75-.015-.26 0-.685.1-1.045.49-.36.39-1.375 1.34-1.375 3.27 0 1.93 1.405 3.79 1.6 4.05.195.26 2.765 4.22 6.695 5.92.935.405 1.665.647 2.235.827.94.3 1.795.257 2.47.155.755-.112 2.35-.96 2.68-1.885.33-.928.33-1.725.23-1.885z" />
  </svg>
);

const teamMembers = [
  {
    name: 'ARAVINTH S',
    role: 'CEO & Co-Founder',
    image: team1,
    accent: '#2563EB', // Blue Accent
    bio: 'Visionary technologist driving INNOVERSE product architecture and overall startup growth.',
    colorClass: 'blue',
    linkedin: 'https://www.linkedin.com/in/aravinth-s-37770730b/',
    whatsapp: 'https://wa.me/916374995585',
  },
  {
    name: 'SARAN Y',
    role: 'CEO & Managing Director',
    image: team2,
    accent: '#7C3AED', // Violet Accent
    bio: 'Leading business strategy, enterprise relationships, and operational excellence worldwide.',
    colorClass: 'violet',
    linkedin: 'https://www.linkedin.com/in/saran-y-b0307b387?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    whatsapp: 'https://wa.me/916381869897',
  },
  {
    name: 'SREE HARAN G',
    role: 'CEO & Executive Director',
    image: team3,
    accent: '#10B981', // Emerald Accent
    bio: 'Directing technology implementations, engineering quality, and scale initiatives.',
    colorClass: 'emerald',
    linkedin: 'https://www.linkedin.com/feed/',
    whatsapp: 'https://wa.me/918637636852',
  },
];

export default function Team() {
  return (
    <section className="section" id="team">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">Leadership</span>
          <h2 className="section-title">
            The minds behind{' '}
            <span className="gradient-text">digital innovation</span>
          </h2>
          <p className="section-subtitle">
            Our executive leadership team brings together decades of expertise to
            engineer world-class SaaS, websites, and digital products.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className={`team-card is-active reveal delay-${i + 1}`}
              style={{
                '--member-accent': member.accent,
                '--member-glow': `${member.accent}15`,
              }}
            >
              {/* Member Image Header */}
              <div className="team-card-image-wrapper">
                {/* Background glow circle */}
                <div 
                  className="team-card-glow-circle" 
                  style={{ background: `radial-gradient(circle, ${member.accent}30 0%, transparent 70%)` }} 
                />
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-card-avatar"
                />
              </div>

              {/* Member Body */}
              <div className="team-card-body">
                <span className={`team-card-role team-card-role--${member.colorClass}`}>
                  {member.role}
                </span>
                <h3 className="team-card-name">{member.name}</h3>
                <p className="team-card-bio">{member.bio}</p>
              </div>

              {/* Member Social Link Footer */}
              <div className="team-card-footer">
                <a 
                  href={member.linkedin} 
                  className="team-card-social-link" 
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a 
                  href={member.whatsapp} 
                  className="team-card-social-link" 
                  aria-label="WhatsApp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Whatsapp />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

