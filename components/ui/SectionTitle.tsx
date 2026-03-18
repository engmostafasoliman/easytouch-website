interface SectionTitleProps {
  tag?: string;
  tagIcon?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  light?: boolean;
}

export default function SectionTitle({
  tag, tagIcon, title, subtitle, align = 'center', light = false,
}: SectionTitleProps) {
  return (
    <div className={`section-title ${align === 'left' ? 'left' : ''}`}>
      {tag && (
        <div className="section-tag">
          {tagIcon && <i className={tagIcon} />}
          {tag}
        </div>
      )}
      <h2 style={light ? { color: 'white' } : {}}>{title}</h2>
      {subtitle && <p style={light ? { color: 'rgba(255,255,255,0.75)' } : {}}>{subtitle}</p>}
      <div className="divider" />
    </div>
  );
}
