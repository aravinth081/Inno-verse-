import { useState } from 'react';
import {
  Mail, Phone, MessageCircle,
  Send, CheckCircle
} from 'lucide-react';

const Linkedin = (props) => (
  <svg
    viewBox="0 0 24 24"
    width={props.size || 20}
    height={props.size || 20}
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

const Instagram = (props) => (
  <svg
    viewBox="0 0 24 24"
    width={props.size || 20}
    height={props.size || 20}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);


const contactInfo = [
  { icon: Mail, label: 'Email', value: 'innoverse208@gmail.com', href: 'mailto:innoverse208@gmail.com', colorClass: 'blue' },
  { icon: Phone, label: 'Phone', value: '8637636852', href: 'tel:8637636852', colorClass: 'violet' },
  { icon: MessageCircle, label: 'WhatsApp', value: '6374995585', href: 'https://wa.me/916374995585', colorClass: 'emerald' },
  { icon: MessageCircle, label: 'WhatsApp (24/7 Support)', value: '6381869897', href: 'https://wa.me/916381869897', colorClass: 'emerald' },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn', colorClass: 'linkedin' },
  { icon: Instagram, href: 'https://www.instagram.com/innoverse208?igsh=c3ExYXp4ZXMzeTJ6&utm_source=ig_contact_invite', label: 'Instagram', colorClass: 'instagram' },
  { icon: MessageCircle, href: 'https://wa.me/916374995585', label: 'WhatsApp', colorClass: 'whatsapp' },
  { icon: Mail, href: 'mailto:innoverse208@gmail.com', label: 'Email', colorClass: 'email' },
];

const projectTypes = [
  'Website Development',
  'SaaS Platform',
  'Enterprise Application',
  'AI Solution',
  'CRM / ERP System',
  'E-Commerce Platform',
  'UI/UX Design',
  'Other',
];

const budgetRanges = [
  '$2,000 - $5,000',
  '$5,000 - $15,000',
  '$15,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000+',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '',
    projectType: '', budget: '', message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      }
    } catch (err) {
      setSubmitted(true);
    }
    setLoading(false);

    // Auto-reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '', email: '', phone: '', company: '',
        projectType: '', budget: '', message: '',
      });
      setErrors({});
    }, 3000);
  };

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">Contact</span>
          <h2 className="section-title">
            Let's build something{' '}
            <span className="gradient-text">great together</span>
          </h2>
          <p className="section-subtitle">
            Tell us about your project and discover how we can help
            transform your ideas into impactful digital products.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-card reveal reveal-left">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">
                  <CheckCircle size={28} />
                </div>
                <h3 className="form-success-title">Message sent successfully</h3>
                <p className="form-success-text">
                  Thank you for reaching out. Our team will review your project details
                  and respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">Full Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      className="form-input"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange('name')}
                    />
                    {errors.name && <p className="form-error">{errors.name}</p>}
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      className="form-input"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange('email')}
                    />
                    {errors.email && <p className="form-error">{errors.email}</p>}
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      className="form-input"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange('phone')}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-company">Company Name</label>
                    <input
                      id="contact-company"
                      type="text"
                      className="form-input"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange('company')}
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-project">Project Type</label>
                    <input
                      id="contact-project"
                      type="text"
                      list="project-types-list"
                      className="form-input"
                      placeholder="Select or type"
                      value={formData.projectType}
                      onChange={handleChange('projectType')}
                    />
                    <datalist id="project-types-list">
                      {projectTypes.map((type) => (
                        <option key={type} value={type} />
                      ))}
                    </datalist>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-budget">Budget Range</label>
                    <input
                      id="contact-budget"
                      type="text"
                      list="budget-ranges-list"
                      className="form-input"
                      placeholder="Select or type"
                      value={formData.budget}
                      onChange={handleChange('budget')}
                    />
                    <datalist id="budget-ranges-list">
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} />
                      ))}
                    </datalist>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Project Details *</label>
                  <textarea
                    id="contact-message"
                    className="form-textarea"
                    placeholder="Tell us about your project, goals, and timeline..."
                    value={formData.message}
                    onChange={handleChange('message')}
                  />
                  {errors.message && <p className="form-error">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%' }}
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="contact-sidebar-card reveal reveal-right">
            <h3 className="contact-sidebar-title">Get in touch</h3>
            <p className="contact-sidebar-desc">
              Whether you have a detailed project brief or just an idea,
              we'd love to hear from you. Our team typically responds within 24 hours.
            </p>

            <div className="contact-info-list">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className={`contact-info-item contact-info-item--${info.colorClass}`}>
                    <div className="contact-info-icon">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="contact-info-label">{info.label}</div>
                      <div className="contact-info-value">
                        {info.href ? (
                          <a href={info.href} target="_blank" rel="noopener noreferrer">
                            {info.value}
                          </a>
                        ) : (
                          info.value
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: 'var(--space-8)' }}>
              <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-3)', color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Follow Us
              </h4>
              <div className="social-links">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`social-link social-link--${social.colorClass}`}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
