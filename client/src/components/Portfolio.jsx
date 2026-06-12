import { ExternalLink } from 'lucide-react';
import portfolioImg from '../assets/portfolio.png';
import orderMgmtImg from '../assets/order-mgmt.png';
import physioImg from '../assets/physio.png';

const projects = [
  {
    title: 'Portfolio Website',
    category: 'Web Design',
    industry: 'Creative & Personal',
    description: 'A clean, modern, and highly interactive personal portfolio website built to showcase creative work and professional achievements. Features custom animations, smooth scrolling, and a responsive layout.',
    challenge: 'Creating unique micro-interactions without performance compromises',
    result: '100% Google Lighthouse score · Mobile friendly layout',
    techs: ['React', 'CSS3', 'Vite', 'Framer Motion'],
    gradient: 'linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)',
    link: 'http://aravinthtech.in/',
    image: portfolioImg,
  },
  {
    title: 'Order Management Dashboard',
    category: 'SaaS',
    industry: 'E-Commerce',
    description: 'An enterprise-grade order management dashboard with real-time stock tracking, shopping cart integrations, secure admin panel, customer overview, and automatic invoices.',
    challenge: 'Synchronizing multi-source inventory in real-time',
    result: '99.9% uptime · 40% reduced order processing delay',
    techs: ['Next.js', 'Node.js', 'MongoDB', 'Express'],
    gradient: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
    link: 'http://sabi-returns-gift.vercel.app/',
    image: orderMgmtImg,
  },
  {
    title: 'Business Website for Physio',
    category: 'Healthcare',
    industry: 'Physiotherapy Clinic',
    description: 'A responsive healthcare website for a physiotherapy clinic. Includes online appointment scheduling, treatment services overview, patient reviews, and clinic location guide.',
    challenge: 'Creating an intuitive booking flow for patients',
    result: '150% increase in online appointment bookings',
    techs: ['React', 'Node.js', 'Tailwind CSS', 'MongoDB'],
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    link: 'https://only-physio.vercel.app/',
    image: physioImg,
  },
];

export default function Portfolio() {
  return (
    <section className="section section--alt" id="portfolio">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">Projects</span>
          <h2 className="section-title">
            Projects that define{' '}
            <span className="gradient-text">digital excellence</span>
          </h2>
          <p className="section-subtitle">
            From startups to enterprise — explore the products we've built
            that are driving real business impact worldwide.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`portfolio-card reveal delay-${(i % 3) + 1}`}
              style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
            >
              <div className="portfolio-card-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-card-img-element"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform var(--transition-base)',
                  }}
                />
                <div className="portfolio-card-overlay">
                  <div className="portfolio-card-overlay-text">
                    <strong>{project.result}</strong>
                  </div>
                </div>
              </div>

              <div className="portfolio-card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
                  <span className="portfolio-card-tag" style={{ marginBottom: 0 }}>{project.category}</span>
                  <ExternalLink size={16} className="portfolio-card-link-icon" />
                </div>
                <h3 className="portfolio-card-title">{project.title}</h3>
                <p className="portfolio-card-desc">{project.description}</p>
                <div className="portfolio-card-techs">
                  {project.techs.map((tech) => (
                    <span key={tech} className="portfolio-card-tech">{tech}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
