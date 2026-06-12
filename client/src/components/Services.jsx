import {
  Briefcase,
  Settings,
  Paintbrush,
  GraduationCap,
  BookOpen,
  Smartphone,
  ShoppingBag,
  Check,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Portfolio Website',
    price: '₹300',
    features: [
      'Responsive Personal Portfolio Website',
      'Free Hosting Setup (Vercel / Netlify)',
      'Modern UI Design',
      'Mobile-Friendly Layout',
      'Custom Domain Support'
    ],
    popular: false,
  },
  {
    icon: Settings,
    title: 'Portfolio Website with Admin Panel',
    price: '₹300',
    extraPrice: '+ ₹200 Extra',
    features: [
      'Portfolio Website Features Included',
      'Secure Admin Dashboard',
      'Content Management System',
      'Project & Details Updates',
      'Easy Administration'
    ],
    popular: false,
  },
  {
    icon: Paintbrush,
    title: 'Website Redesign',
    price: '₹999',
    features: [
      'Complete UI/UX Revamp',
      'Modern Design Upgrade',
      'Mobile Responsive',
      'Performance Optimization'
    ],
    popular: false,
  },
  {
    icon: GraduationCap,
    title: 'Final Year Project',
    price: '₹3499',
    features: [
      'Complete Project Development',
      'Source Code Included',
      'Documentation Support',
      'Demo & Presentation Assistance'
    ],
    popular: false,
  },
  {
    icon: BookOpen,
    title: 'College Project',
    price: '₹2999',
    features: [
      'Custom Project Development',
      'Source Code Included',
      'Documentation Included',
      'Fast Delivery'
    ],
    popular: false,
  },
  {
    icon: Smartphone,
    title: 'App Development',
    price: '₹9999',
    features: [
      'Android Application Development',
      'Modern UI/UX',
      'API Integration',
      'Testing & Deployment Support'
    ],
    popular: false,
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce Website with Order Management',
    price: '₹5999',
    features: [
      'Product Management System',
      'Shopping Cart & Checkout',
      'Secure Admin Dashboard',
      'Order Management System',
      'Customer Management',
      'Inventory Tracking',
      'Mobile Responsive Design',
      'Basic SEO Optimization'
    ],
    popular: false,
    fullWidth: true,
  }
];

export default function Services() {
  const handleChoosePlan = (title) => {
    const inputElement = document.getElementById('contact-project');
    if (inputElement) {
      inputElement.value = title;
      // Trigger native input event so React state updates
      const event = new Event('input', { bubbles: true });
      inputElement.dispatchEvent(event);
    }
  };

  return (
    <section className="section" id="services" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">Pricing Plans</span>
          <h2 className="section-title">
            Modern SaaS-Style{' '}
            <span className="gradient-text">Services & Pricing</span>
          </h2>
          <p className="section-subtitle">
            Premium quality, transparent pricing, and robust digital solutions for your business. Choose a plan to transform your ideas today.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isFullWidth = service.fullWidth;
            return (
              <div
                key={service.title}
                className={`pricing-card reveal reveal-scale ${service.popular ? 'featured' : ''} ${isFullWidth ? 'full-width' : ''} delay-${(i % 6) + 1}`}
              >
                {service.popular && (
                  <span className="pricing-card-badge">Most Popular</span>
                )}
                
                
                <div className="pricing-card-header">
                  <div className="pricing-card-icon-wrapper">
                    <Icon size={24} />
                  </div>
                  <h3 className="pricing-card-title">{service.title}</h3>
                  <div className="pricing-card-price-container">
                    <span className="pricing-card-price">{service.price}</span>
                    {service.extraPrice && (
                      <span className="pricing-card-price-extra">{service.extraPrice}</span>
                    )}
                  </div>
                </div>

                <ul className="pricing-card-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="pricing-card-feature-item">
                      <Check className="pricing-card-feature-icon" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="pricing-card-button"
                  onClick={() => handleChoosePlan(service.title)}
                >
                  Choose Plan
                </a>
              </div>
            );
          })}
        </div>

        {/* Premium Bottom CTA Section */}
        <div className="services-cta-banner reveal reveal-scale">
          <span className="services-cta-tagline">Transforming Ideas into Digital Solutions</span>
          <h3 className="services-cta-title">Ready to launch your next project?</h3>
          <p className="services-cta-desc">
            Partner with us to build modern, high-performance web applications and design systems customized for your brand's growth.
          </p>
          <a href="#contact" className="services-cta-button">
            Get in Touch <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
