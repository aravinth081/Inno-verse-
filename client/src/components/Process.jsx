import { useState } from 'react';
import {
  Search, Lightbulb, PenTool, Code2, TestTube, Rocket
} from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery & Research',
    description: 'We start by understanding your business goals, target audience, and competitive landscape to define a clear project vision.',
  },
  {
    icon: Lightbulb,
    title: 'Strategy & Planning',
    description: 'We define the roadmap, technology stack, feature priorities, and success metrics aligned with your business objectives.',
  },
  {
    icon: PenTool,
    title: 'Design & Prototyping',
    description: 'High-fidelity designs with premium aesthetics, intuitive interactions, and thorough user testing before development begins.',
  },
  {
    icon: Code2,
    title: 'Development & Engineering',
    description: 'Clean, maintainable code built with modern frameworks, following best practices for performance, security, and scalability.',
  },
  {
    icon: TestTube,
    title: 'Testing & QA',
    description: 'Comprehensive testing across devices and browsers — unit tests, integration tests, and thorough user acceptance testing.',
  },
  {
    icon: Rocket,
    title: 'Launch & Growth',
    description: 'Smooth deployment with CI/CD, post-launch optimization, ongoing support, and strategic guidance for continued growth.',
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section className="section" id="process" onClick={() => setActiveStep(null)}>
      <div className="container">
        <div className="section-header reveal" onClick={(e) => e.stopPropagation()}>
          <span className="section-badge">Our Process</span>
          <h2 className="section-title">
            A proven process for{' '}
            <span className="gradient-text">exceptional results</span>
          </h2>
          <p className="section-subtitle">
            Our structured approach ensures every project is delivered
            on time, on budget, and beyond expectations.
          </p>
        </div>

        <div className="process-container reveal" onClick={(e) => e.stopPropagation()}>
          <div className="timeline">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = activeStep === i;
              return (
                <div
                  key={step.title}
                  className={`timeline-item ${isActive ? 'is-active' : ''}`}
                >
                  <div className="timeline-marker">{i + 1}</div>
                  <div 
                    className="timeline-content"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveStep((prev) => (prev === i ? null : i));
                    }}
                  >
                    <div className="card-icon" style={{ flexShrink: 0, marginBottom: 0, minWidth: '44px' }}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="timeline-title">{step.title}</h3>
                      <p className="timeline-description">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
