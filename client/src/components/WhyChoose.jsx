import {
  Award, DollarSign, Zap,
  Cpu, Headphones, ShieldCheck
} from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Professional Quality Work',
    description: 'High-fidelity UI designs, industry-grade coding standards, and rigorous testing protocols for clean, robust platforms.'
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Value-oriented, transparent pricing structures designed to empower startups, SMEs, and digital builders.'
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Sprint-based agile workflows to develop, test, and deploy your digital solutions in record turnaround times.'
  },
  {
    icon: Cpu,
    title: 'Modern Technology Stack',
    description: 'We develop utilizing future-proof stacks including React, Node.js, Express, MongoDB, and modern cloud hosting.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated post-launch troubleshooting, routine updates, and support channels to keep your applications running.'
  },
  {
    icon: ShieldCheck,
    title: 'Client Satisfaction Guaranteed',
    description: 'Iterative feedback cycles and collaborative reviews to ensure your business goals and design visions are fully realized.'
  }
];

export default function WhyChoose() {
  return (
    <section className="section section--alt" id="why-choose">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">Why Choose Us</span>
          <h2 className="section-title">
            Why leading companies{' '}
            <span className="gradient-text">partner with us</span>
          </h2>
          <p className="section-subtitle">
            Technical expertise, enterprise engineering standards, and high-value design systems designed to accelerate your growth.
          </p>
        </div>

        <div className="why-choose-grid">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`why-card reveal delay-${(i % 3) + 1}`}
              >
                <div className="why-card-icon">
                  <Icon size={22} />
                </div>
                <div className="why-card-content">
                  <h3 className="why-card-title">{feature.title}</h3>
                  <p className="why-card-desc">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
