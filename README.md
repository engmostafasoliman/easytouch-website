# Easy Touch UAE — Corporate Website

> **Easy Touch** is the UAE's trusted partner for IT, ELV, AV, Cybersecurity, Software Development, Business Setup, Visa Services, and EV Charger solutions — serving Abu Dhabi since 2017.

🌐 **Live:** [easytouchuae.ae](https://easytouchuae.ae)

---

## 📸 Preview

<!-- Add a screenshot here: ![Homepage](./public/screenshot.png) -->

---

## ⚡ Tech Stack

| Layer         | Technology                                         |
| ------------- | -------------------------------------------------- |
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router)     |
| **Language**  | [TypeScript](https://www.typescriptlang.org/) 5.4+ |
| **UI**        | React 18, Vanilla CSS (custom design system)       |
| **Icons**     | [Font Awesome 6](https://fontawesome.com/) (CDN)   |
| **Font**      | [Inter](https://fonts.google.com/specimen/Inter) via `next/font` |

---

## 📂 Project Structure

```
easytouch-next/
├── app/
│   ├── layout.tsx          # Root layout (TopBar, Header, Footer, FloatingButtons)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles & design tokens
│   ├── about/page.tsx      # About Us page
│   ├── services/page.tsx   # Services page
│   ├── portfolio/page.tsx  # Portfolio / Projects page
│   ├── clients/page.tsx    # Clients page
│   ├── contact/page.tsx    # Contact page
│   └── api/
│       └── contact/route.ts  # Contact form API endpoint (POST)
├── components/
│   ├── home/               # Homepage sections
│   │   ├── Hero.tsx
│   │   ├── ClientsBar.tsx
│   │   ├── WhyUs.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── Metrics.tsx
│   │   ├── PortfolioPreview.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CtaBanner.tsx
│   │   ├── ContactSection.tsx
│   │   └── VideoSection.tsx
│   ├── layout/             # Persistent layout components
│   │   ├── TopBar.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── FloatingButtons.tsx
│   └── ui/                 # Reusable UI primitives
│       ├── PageHero.tsx
│       └── SectionTitle.tsx
├── hooks/
│   ├── useCounter.ts       # Animated counter hook
│   └── useScrollReveal.ts  # Scroll-triggered reveal animation hook
├── public/
│   ├── logo.png
│   └── easy-touch.mp4
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9 (or use `yarn` / `pnpm`)

### Installation

```bash
# Clone the repository
git clone https://github.com/engmostafasoliman/easytouch-website.git
cd easytouch-website

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## 📄 Pages

| Route        | Description                                        |
| ------------ | -------------------------------------------------- |
| `/`          | Homepage — Hero, clients bar, services, metrics, portfolio, testimonials, CTA, contact |
| `/about`     | Company story, mission/vision/values, timeline, team |
| `/services`  | Eight detailed service cards with feature lists     |
| `/portfolio` | Project showcase and case studies                   |
| `/clients`   | Client logos and partnerships                       |
| `/contact`   | Contact form with API integration                   |

---

## 🛠️ Services Covered

- 🔒 **ELV Systems** — CCTV, Access Control, Fire Alarm, Structured Cabling
- 📺 **Audio Visual (AV)** — Conference AV, Digital Signage, Video Walls
- 🌐 **IT & Networking** — LAN/WAN, Wi-Fi, Cloud, Data Centers
- 🛡️ **Cybersecurity** — Firewall, Penetration Testing, SOC, Incident Response
- 💻 **Software Development** — Web & Mobile Apps, ERP/CRM, API Integration
- 🏢 **Business Setup** — Mainland & Free Zone, Trade License, PRO Services
- 🛂 **Visa Services** — Employment, Investor, Family, Golden Visa
- ⚡ **EV Chargers** — Residential, Commercial, Fleet Charging

---

## 🔌 API

### `POST /api/contact`

Contact form endpoint.

**Body (JSON):**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+971 50 123 4567",
  "service": "ELV Systems",
  "message": "I need a quote for CCTV installation."
}
```

**Required fields:** `name`, `email`, `message`

> ⚠️ Currently logs to console. Integrate with SMTP / Resend / SendGrid for production use.

---

## 🎨 Key Features

- **SEO Optimized** — Metadata, Open Graph tags, and semantic HTML on every page
- **Responsive Design** — Mobile-first, works on all screen sizes
- **Scroll Animations** — Custom `useScrollReveal` hook for reveal-on-scroll effects
- **Animated Counters** — Custom `useCounter` hook for metric animations
- **Performance** — React Strict Mode, no `X-Powered-By` header, optimized font loading
- **Modular Components** — Clean separation of layout, page, and UI components

---

## 📬 Contact

- **Website:** [easytouchuae.ae](https://easytouchuae.ae)
- **Email:** info@easytouchuae.ae
- **Location:** Abu Dhabi, UAE

---

## 📝 License

This project is private and proprietary. All rights reserved © Easy Touch UAE.
