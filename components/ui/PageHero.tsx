import Link from 'next/link';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  tag?: string;
  tagIcon?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHero({ title, subtitle, tag, tagIcon, breadcrumbs }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        {breadcrumbs && (
          <nav className="breadcrumb" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} style={{ display: 'contents' }}>
                {i > 0 && <i className="fas fa-chevron-right" />}
                {crumb.href ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span className="breadcrumb-current">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {tag && (
          <div className="page-hero-tag">
            {tagIcon && <i className={tagIcon} />}
            {tag}
          </div>
        )}
        <h1>{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
