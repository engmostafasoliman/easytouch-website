import Link from 'next/link';

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CtaBanner({
  title = 'Ready to Transform Your Business?',
  subtitle = "Let's discuss how Easy Touch can deliver the perfect technology solution for your organization. Free consultation — no obligation.",
  primaryLabel = 'Book Free Consultation',
  primaryHref = '/contact',
  secondaryLabel = '+971 2 6770551',
  secondaryHref = 'tel:+97126770551',
}: CtaBannerProps) {
  return (
    <section className="cta-banner">
      <div className="container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <div className="cta-actions">
          <Link href={primaryHref} className="btn btn-white btn-lg">
            <i className="fas fa-calendar-check" />
            {primaryLabel}
          </Link>
          <a href={secondaryHref} className="btn btn-outline btn-lg">
            <i className="fas fa-phone" />
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
