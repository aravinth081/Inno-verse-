import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How much does a typical project cost?',
    answer: 'Project costs vary based on scope, complexity, and timeline. Standard projects start at $2,999, while enterprise solutions are custom-quoted. We provide detailed proposals after an initial discovery call so you know exactly what to expect before committing.',
  },
  {
    question: 'What is the typical project timeline?',
    answer: 'Most projects complete within 4–12 weeks depending on complexity. A standard business website takes 4–6 weeks, while SaaS platforms and enterprise applications typically require 8–16 weeks. We provide a detailed timeline with clear milestones during the planning phase.',
  },
  {
    question: 'What kind of support do you offer after launch?',
    answer: 'All projects include post-launch support ranging from 3 to 12 months, covering bug fixes, minor updates, performance monitoring, and security patches. We also offer extended maintenance plans for ongoing feature development and strategic consulting.',
  },
  {
    question: 'Do you provide ongoing maintenance services?',
    answer: 'Yes. We offer flexible maintenance packages including regular updates, security patches, performance monitoring, backups, and feature enhancements. Our team proactively monitors your platform to prevent issues before they impact your users.',
  },
  {
    question: 'How do you handle SEO and search optimization?',
    answer: 'SEO best practices are built into every project from the ground up. This includes technical SEO (site speed, schema markup, semantic HTML), on-page optimization (meta tags, headings, content structure), and performance tuning for Core Web Vitals.',
  },
  {
    question: 'How do you ensure security?',
    answer: 'Security is embedded in our development process. We follow OWASP best practices, implement encryption, conduct regular security audits, and use automated vulnerability scanning. For enterprise clients, we ensure compliance with standards like HIPAA, SOC 2, and GDPR.',
  },
  {
    question: 'Can the solution scale as our business grows?',
    answer: 'Absolutely. We architect every solution with scalability in mind — from database design and API structure to cloud infrastructure. Whether you\'re serving 100 users or 100,000, our solutions scale without compromising performance or reliability.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section section--alt" id="faq">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">FAQ</span>
          <h2 className="section-title">
            Frequently asked{' '}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about working with us.
            Can't find your answer? Reach out to our team.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item${activeIndex === i ? ' active' : ''} reveal delay-${(i % 4) + 1}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFaq(i)}
                aria-expanded={activeIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                {faq.question}
                <span className="faq-icon">
                  <ChevronDown size={18} />
                </span>
              </button>
              <div
                className="faq-answer"
                id={`faq-answer-${i}`}
                role="region"
              >
                <div className="faq-answer-content">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
