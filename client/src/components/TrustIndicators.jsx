import { Briefcase, Heart, Globe, Headphones } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

const stats = [
  { icon: Briefcase, target: 200, suffix: '+', label: 'Projects Delivered', color: '#2563EB' },
  { icon: Heart, target: 98, suffix: '%', label: 'Client Satisfaction', color: '#4F46E5' },
  { icon: Globe, target: 15, suffix: '+', label: 'Countries Served', color: '#10B981' },
  { icon: Headphones, target: 24, suffix: '/7', label: 'Dedicated Support', color: '#F59E0B' },
];

function StatCard({ stat, delay }) {
  const { count, ref } = useCountUp(stat.target, 2000);
  const Icon = stat.icon;

  return (
    <div className={`stat-card reveal delay-${delay}`} ref={ref}>
      <div className="stat-icon">
        <Icon size={22} />
      </div>
      <div className="stat-number">
        {count}{stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

export default function TrustIndicators() {
  return (
    <section className="trust-section" id="trust">
      <div className="trust-grid">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} delay={i + 1} />
        ))}
      </div>
    </section>
  );
}
