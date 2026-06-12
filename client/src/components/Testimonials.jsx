import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Subash G',
    role: 'Operations Director',
    company: 'Logistics & Order Hub',
    avatar: 'SG',
    rating: 5,
    text: 'The Order Management Platform has significantly improved our workflow by reducing manual effort, ensuring accurate order tracking, and simplifying billing and invoice generation. It is user-friendly, efficient, and has helped us save time while improving overall productivity. A great platform that makes daily operations much smoother.',
    color: 'blue',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
    shadowColor: 'rgba(37, 99, 235, 0.15)',
    borderHover: '#3B82F6',
    project: 'Order Management Dashboard',
  },
  {
    name: 'Raj',
    role: 'Full Stack Engineer',
    company: 'Portfolio Showcase',
    avatar: 'R',
    rating: 5,
    text: 'Building my portfolio was a great experience. It helped me present my skills and projects professionally, improve my personal brand, and create a strong professional profile. Overall, it was highly beneficial for my career growth.',
    color: 'violet',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
    shadowColor: 'rgba(124, 58, 237, 0.15)',
    borderHover: '#8B5CF6',
    project: 'Portfolio Website',
  },
  {
    name: 'Sathish G',
    role: 'Chief Physiotherapist',
    company: 'Only Physio',
    avatar: 'SG',
    rating: 5,
    text: 'The physiotherapy website is easy to use and highly convenient. The online booking feature simplifies appointment scheduling, while the clear service information enhances the overall user experience. It is an efficient platform that makes accessing physiotherapy services much easier.',
    color: 'emerald',
    gradient: 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
    shadowColor: 'rgba(5, 150, 105, 0.15)',
    borderHover: '#10B981',
    project: 'Business Website for Physio',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">Feedback</span>
          <h2 className="section-title">
            Client{' '}
            <span className="gradient-text">Feedback</span>
          </h2>
          <p className="section-subtitle">
            Hear what our clients say about their experience working with Innoverse.
          </p>
        </div>

        <div 
          className="testimonials-slider-wrapper reveal"
          style={{
            '--active-color': activeTestimonial.borderHover,
            '--active-shadow': activeTestimonial.shadowColor,
            '--active-gradient': activeTestimonial.gradient,
          }}
        >
          <button 
            className="slider-nav-btn prev-btn-absolute" 
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="testimonials-slider-container">
            <div 
              className="testimonials-slider-inner"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className="testimonial-slide"
                >
                  <div
                    className="testimonial-card active-card"
                    style={{
                      '--hover-border': t.borderHover,
                      '--hover-shadow': t.shadowColor,
                      '--card-accent-gradient': t.gradient,
                    }}
                  >
                    <div className="testimonial-card-header">
                      <div className="testimonial-project">
                        Project: <span className="testimonial-project-name" style={{ color: t.borderHover }}>{t.project}</span>
                      </div>
                      <div className="testimonial-stars" style={{ marginBottom: 0 }}>
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} size={14} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    <p className="testimonial-text">"{t.text}"</p>
                    <div className="testimonial-author">
                      <div 
                        className="testimonial-avatar"
                        style={{ background: t.gradient }}
                      >
                        {t.avatar}
                      </div>
                      <div>
                        <div className="testimonial-name">{t.name}</div>
                        <div className="testimonial-role">{t.role}, {t.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="slider-nav-btn next-btn-absolute" 
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          <div className="slider-dots-container">
            <div className="slider-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`slider-dot${activeIndex === i ? ' active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

