import { TrendingUp, MousePointerClick, Zap, UserCheck, RotateCcw, BarChart3 } from 'lucide-react';

const results = [
  { icon: TrendingUp, metric: '3.2x', title: 'More Qualified Leads', description: 'Average increase in qualified leads within six months of launch.', barWidth: '85%' },
  { icon: MousePointerClick, metric: '156%', title: 'Higher Conversions', description: 'Conversion rates consistently outperforming industry benchmarks.', barWidth: '78%' },
  { icon: Zap, metric: '2.8s', title: 'Faster Load Times', description: 'Sub-3-second load times that reduce bounce rates significantly.', barWidth: '92%' },
  { icon: UserCheck, metric: '89%', title: 'User Engagement', description: 'Higher session durations and increased page interactions per visit.', barWidth: '89%' },
  { icon: RotateCcw, metric: '94%', title: 'Client Retention', description: 'Clients who continue working with us after their first project.', barWidth: '94%' },
  { icon: BarChart3, metric: '67%', title: 'Process Efficiency', description: 'Reduction in manual processes through automation and smart workflows.', barWidth: '67%' },
];

export default function ClientResults() {
  return (
    <section className="section" id="results">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">Results</span>
          <h2 className="section-title">
            Measurable outcomes that{' '}
            <span className="gradient-text">speak for themselves</span>
          </h2>
          <p className="section-subtitle">
            We focus on delivering business impact — not just code. Here's what our clients achieve.
          </p>
        </div>

        <div className="results-grid">
          {results.map((result, i) => {
            const Icon = result.icon;
            return (
              <div key={result.title} className={`result-card reveal delay-${(i % 3) + 1}`}>
                <div className="card-icon">
                  <Icon size={22} />
                </div>
                <div className="result-card-metric">{result.metric}</div>
                <h3 className="result-card-title">{result.title}</h3>
                <p className="result-card-desc">{result.description}</p>
                <div className="result-card-bar">
                  <div className="result-card-bar-fill" style={{ width: result.barWidth }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
