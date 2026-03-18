import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Easy Touch — IT & Interactive Solutions | Abu Dhabi, UAE',
    template: '%s | Easy Touch UAE',
  },
  description:
    'Easy Touch is the UAE\'s trusted partner for ELV Systems, AV, IT Networking, Cybersecurity, Software Development, Business Setup, Visa Services, and EV Chargers. Serving Abu Dhabi since 2017.',
  keywords: [
    'ELV systems UAE', 'AV solutions Abu Dhabi', 'IT networking UAE',
    'cybersecurity Abu Dhabi', 'software development UAE', 'business setup UAE',
    'visa services Abu Dhabi', 'EV chargers UAE', 'Easy Touch UAE',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    siteName: 'Easy Touch UAE',
    title: 'Easy Touch — IT & Interactive Solutions | Abu Dhabi, UAE',
    description:
      'Trusted partner for ELV, AV, IT, Cybersecurity, Software Development, Business Setup & Visa Services in the UAE.',
  },
  metadataBase: new URL('https://easytouchuae.ae'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
