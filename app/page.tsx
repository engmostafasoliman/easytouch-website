import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import ClientsBar from '@/components/home/ClientsBar';
import WhyUs from '@/components/home/WhyUs';
import ServicesGrid from '@/components/home/ServicesGrid';
import Metrics from '@/components/home/Metrics';
import PortfolioPreview from '@/components/home/PortfolioPreview';
import Testimonials from '@/components/home/Testimonials';
import CtaBanner from '@/components/home/CtaBanner';
import ContactSection from '@/components/home/ContactSection';

export const metadata: Metadata = {
  title: 'Easy Touch — IT & Interactive Solutions | Abu Dhabi, UAE',
  description:
    'Easy Touch delivers ELV, AV, IT Networking, Cybersecurity, Software Development, Business Setup, Visa Services and EV Charger solutions across the UAE.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientsBar />
      <WhyUs />
      <ServicesGrid />
      <Metrics />
      <PortfolioPreview />
      <Testimonials />
      <CtaBanner />
      <ContactSection />
    </>
  );
}
