import SectionTitle from '@/components/ui/SectionTitle';

export default function VideoSection() {
  return (
    <section className="section video-section" style={{ background: 'var(--dark)' }}>
      <div className="container">
        <SectionTitle
          tag="See Us In Action"
          tagIcon="fas fa-play-circle"
          title="Watch What We Do"
          subtitle="A quick look at Easy Touch — our people, our projects, and our commitment to excellence across the UAE."
        />
        <div className="video-wrapper">
          <video
            className="hero-video"
            controls
            playsInline
            preload="metadata"
            poster=""
          >
            <source src="/easy-touch.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </div>
    </section>
  );
}
