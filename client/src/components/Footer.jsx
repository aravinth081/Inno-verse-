import { MessageCircle, Mail, Heart } from 'lucide-react';

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


const footerColumns = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#hero' },
      { label: 'Our Team', href: '#team' },
      { label: 'Services', href: '#services' },
      { label: 'Projects', href: '#portfolio' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Website Development', href: '#services' },
      { label: 'SaaS Development', href: '#services' },
      { label: 'AI Solutions', href: '#services' },
      { label: 'UI/UX Design', href: '#services' },
      { label: 'Enterprise Software', href: '#services' },
    ],
  },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn', colorClass: 'linkedin' },
  { icon: Instagram, href: 'https://www.instagram.com/innoverse208?igsh=c3ExYXp4ZXMzeTJ6&utm_source=ig_contact_invite', label: 'Instagram', colorClass: 'instagram' },
  { icon: MessageCircle, href: 'https://wa.me/916374995585', label: 'WhatsApp', colorClass: 'whatsapp' },
  { icon: Mail, href: 'mailto:innoverse208@gmail.com', label: 'Email', colorClass: 'email' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleFooterLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (href === '#' || href === '#hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.png" alt="Innoverse" className="footer-logo-img" />
              <span className="brand-text">INNOVERSE</span>
            </div>
            <p className="footer-brand-desc">
              A premium digital product studio helping businesses build
              world-class websites, SaaS platforms, and enterprise software
              that drives measurable growth.
            </p>
            <div className="social-links">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`social-link footer-social--${social.colorClass}`}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="footer-column-title">{col.title}</h4>
              <div className="footer-links">
                {col.links.map((link) => (
                  <a 
                    key={link.label} 
                    href={link.href} 
                    className="footer-link"
                    onClick={(e) => handleFooterLinkClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Innoverse. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
