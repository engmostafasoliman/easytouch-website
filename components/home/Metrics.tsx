'use client';

import { useCounter } from '@/hooks/useCounter';

const metrics = [
  { icon: 'fas fa-users',           label: 'Active Clients',      target: 150, suffix: '+' },
  { icon: 'fas fa-project-diagram', label: 'Projects Completed',  target: 200, suffix: '+' },
  { icon: 'fas fa-user-tie',        label: 'Team Specialists',    target: 25,  suffix: '+' },
  { icon: 'fas fa-trophy',          label: 'Years Experience',    target: 7,   suffix: '+' },
];

function CounterItem({ icon, label, target, suffix }: typeof metrics[0]) {
  const { count, ref } = useCounter(target);
  return (
    <div className="metric-card" ref={ref as React.Ref<HTMLDivElement>}>
      <div className="metric-icon"><i className={icon} /></div>
      <div className="metric-num">
        {count}<span className="suffix">{suffix}</span>
      </div>
      <div className="metric-label">{label}</div>
    </div>
  );
}

export default function Metrics() {
  return (
    <section className="metrics-section">
      <div className="container">
        <div className="metrics-grid">
          {metrics.map(m => <CounterItem key={m.label} {...m} />)}
        </div>
      </div>
    </section>
  );
}
