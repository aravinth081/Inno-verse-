import { Monitor, Server, Database, Cloud } from 'lucide-react';

const categories = [
  {
    icon: Monitor,
    title: 'Frontend',
    techs: [
      { name: 'React', color: '#2563EB' },
      { name: 'Next.js', color: '#0F172A' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Vue.js', color: '#41B883' },
      { name: 'HTML5/CSS3', color: '#E34F26' },
      { name: 'Tailwind CSS', color: '#38BDF8' },
    ],
  },
  {
    icon: Server,
    title: 'Backend',
    techs: [
      { name: 'Node.js', color: '#339933' },
      { name: 'Express.js', color: '#000000' },
      { name: 'Laravel', color: '#FF2D20' },
      { name: 'Python', color: '#3776AB' },
      { name: 'Django', color: '#092E20' },
      { name: 'GraphQL', color: '#E10098' },
    ],
  },
  {
    icon: Database,
    title: 'Database',
    techs: [
      { name: 'PostgreSQL', color: '#4169E1' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'MySQL', color: '#4479A1' },
      { name: 'Redis', color: '#DC382D' },
      { name: 'Firebase', color: '#FFCA28' },
      { name: 'Supabase', color: '#3ECF8E' },
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    techs: [
      { name: 'AWS', color: '#FF9900' },
      { name: 'Google Cloud', color: '#4285F4' },
      { name: 'Docker', color: '#2496ED' },
      { name: 'Vercel', color: '#000000' },
      { name: 'GitHub Actions', color: '#2088FF' },
      { name: 'Kubernetes', color: '#326CE5' },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="section section--alt" id="tech-stack">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">Technology</span>
          <h2 className="section-title">
            Built with{' '}
            <span className="gradient-text">industry-leading tools</span>
          </h2>
          <p className="section-subtitle">
            We carefully select the best technologies for each project, ensuring
            optimal performance, maintainability, and long-term scalability.
          </p>
        </div>

        <div className="tech-stack-grid">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title} className={`reveal delay-${i + 1}`}>
                <div className="tech-category">
                  <h3 className="tech-category-title">
                    <Icon size={18} style={{ color: 'var(--color-primary)' }} />
                    {cat.title}
                  </h3>
                  <div className="tech-category-grid">
                    {cat.techs.map((tech) => (
                      <div
                        key={tech.name}
                        className="tech-badge"
                        style={{
                          '--brand-color': tech.color,
                          '--brand-bg': `${tech.color}08`,
                          '--brand-bg-hover': `${tech.color}15`,
                          '--brand-border': `${tech.color}20`,
                          '--brand-border-hover': tech.color,
                          '--brand-glow': `${tech.color}25`,
                        }}
                      >
                        <span
                          className="tech-badge-dot"
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: tech.color,
                            flexShrink: 0,
                            transition: 'all var(--transition-base)',
                          }}
                        />
                        <span style={{ color: 'var(--color-text)', fontSize: '0.85rem', fontWeight: 500 }}>
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
