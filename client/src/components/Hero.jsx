import { useState } from 'react';
import { ArrowRight, Play, CheckCircle2, Layers, Palette, Server, Cpu } from 'lucide-react';

const heroCards = [
  {
    icon: Layers,
    title: 'SaaS Platforms',
    desc: 'Cloud-native applications with modern architecture and microservices',
    tag: 'Popular',
    statNumber: '200+',
    statLabel: 'Projects Delivered',
    colorClass: 'blue',
    gradient: 'linear-gradient(135deg, rgba(79, 70, 229, 0.03) 0%, rgba(99, 102, 241, 0.03) 100%)',
    activeGradient: 'linear-gradient(135deg, rgba(79, 70, 229, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%)',
    accentColor: '#4F46E5',
  },
  {
    icon: Palette,
    title: 'Premium Design',
    desc: 'Pixel-perfect UI/UX crafted for conversion and engagement',
    tag: 'Top Rated',
    statNumber: '98%',
    statLabel: 'Client Satisfaction',
    colorClass: 'violet',
    gradient: 'linear-gradient(135deg, rgba(124, 58, 237, 0.03) 0%, rgba(139, 92, 246, 0.03) 100%)',
    activeGradient: 'linear-gradient(135deg, rgba(124, 58, 237, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)',
    accentColor: '#7C3AED',
  },
  {
    icon: Server,
    title: 'Enterprise Software',
    desc: 'Robust systems built for reliability, security and performance',
    tag: 'Global',
    statNumber: '15+',
    statLabel: 'Countries Served',
    colorClass: 'emerald',
    gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.03) 0%, rgba(5, 150, 105, 0.03) 100%)',
    activeGradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(5, 150, 105, 0.08) 100%)',
    accentColor: '#10B981',
  },
  {
    icon: Cpu,
    title: 'AI Solutions',
    desc: 'Intelligent automation and analytics powered by cutting-edge AI',
    tag: 'New',
    statNumber: '24/7',
    statLabel: 'Expert Support',
    colorClass: 'amber',
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.03) 0%, rgba(217, 119, 6, 0.03) 100%)',
    activeGradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(217, 119, 6, 0.08) 100%)',
    accentColor: '#F59E0B',
  },
];

export default function Hero() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="hero" id="hero">
      {/* Subtle Background */}
      <div className="hero-grid-bg" />
      <div className="hero-glow hero-glow--1" />
      <div className="hero-glow hero-glow--2" />

      <div className="hero-container">
        {/* ─── Main Content ─── */}
        <div className="hero-content">
          <div className="hero-badge hero-animate hero-animate-1">
            <span className="hero-badge-dot" />
            <span>Trusted by 200+ businesses worldwide</span>
          </div>

          <h1 className="hero-title hero-animate hero-animate-2">
            We build <span className="hero-text-blue">digital products</span> that
            <br />
            drive real business growth
          </h1>

          <p className="hero-description hero-animate hero-animate-3">
            From <span className="hero-desc-accent">high-performance websites</span> to scalable SaaS platforms and enterprise software — we help ambitious companies turn ideas into products that customers love.
          </p>

          <div className="hero-ctas hero-animate hero-animate-4">
            <a href="#contact" className="btn btn-primary btn-lg" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Start Your Project
              <ArrowRight size={18} />
            </a>
            <a href="#portfolio" className="btn btn-secondary btn-lg" onClick={(e) => { e.preventDefault(); document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <Play size={16} />
              View Our Work
            </a>
          </div>

          {/* Feature Pills */}
          <div className="hero-features hero-animate hero-animate-4">
            <div className="hero-feature-pill">
              <CheckCircle2 size={15} />
              <span>No Setup Fees</span>
            </div>
            <div className="hero-feature-pill">
              <CheckCircle2 size={15} />
              <span>14-Day Free Trial</span>
            </div>
            <div className="hero-feature-pill">
              <CheckCircle2 size={15} />
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>

        {/* ─── Combined Service & Stats Cards ─── */}
        <div className="hero-combined-grid hero-animate hero-animate-5">
          {heroCards.map((card, idx) => {
            const Icon = card.icon;
            const isActive = activeCard === idx;
            return (
              <div
                key={card.title}
                className={`hero-combined-card hero-combined-card--${card.colorClass} ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveCard(isActive ? null : idx)}
                style={{
                  background: isActive ? card.activeGradient : card.gradient,
                  borderColor: isActive ? card.accentColor : 'var(--color-border)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-base)',
                  boxShadow: isActive ? `0 12px 30px rgba(0, 0, 0, 0.04), 0 0 15px ${card.accentColor}15` : 'none',
                  transform: isActive ? 'scale(1.02) translateY(-2px)' : 'none',
                }}
              >
                {/* Top Row: Icon & Tag */}
                <div className="hero-combined-card-header">
                  <div className={`hero-combined-card-icon hero-combined-card-icon--${card.colorClass}`}>
                    <Icon size={22} />
                  </div>
                  {card.tag && (
                    <span className={`hero-combined-card-tag hero-combined-card-tag--${card.colorClass}`}>
                      {card.tag}
                    </span>
                  )}
                </div>

                {/* Middle Content: Title & Desc */}
                <div className="hero-combined-card-body">
                  <h3 className="hero-combined-card-title">{card.title}</h3>
                  <p className="hero-combined-card-desc">{card.desc}</p>
                </div>

                {/* Divider */}
                <div className="hero-combined-card-divider" />

                {/* Bottom Row: Highlighted Stat */}
                <div className="hero-combined-card-footer">
                  <span className={`hero-combined-card-stat-num hero-combined-card-stat-num--${card.colorClass}`}>
                    {card.statNumber}
                  </span>
                  <span className="hero-combined-card-stat-label">
                    {card.statLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
