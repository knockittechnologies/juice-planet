import './globals.css';

const siteUrl = 'https://juiceplanet.co.uk';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Juice Planet — Fresh Juices From Another Planet',
    template: '%s | Juice Planet',
  },
  description:
    'Cold-pressed, organic juice and smoothie blends in Southall, West London. Order ahead in the app, shop the menu, or find a Juice Planet near you.',
  keywords: [
    'juice bar',
    'smoothies',
    'cold-pressed juice',
    'Southall',
    'West London',
    'organic smoothies',
    'juice planet',
  ],
  authors: [{ name: 'Juice Planet' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Juice Planet — Fresh Juices From Another Planet',
    description:
      'Cold-pressed, organic juice and smoothie blends in Southall, West London. Real fruit, no refined sugar, no shortcuts.',
    url: siteUrl,
    siteName: 'Juice Planet',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Juice Planet — Fresh Juices From Another Planet',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juice Planet — Fresh Juices From Another Planet',
    description:
      'Cold-pressed, organic juice and smoothie blends in Southall, West London.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#business`,
  name: 'Juice Planet',
  description:
    'Family-run juice and smoothie bar in Southall, West London. Cold-pressed, organic, no refined sugar.',
  url: siteUrl,
  telephone: '+442074321001',
  email: 'hello@juiceplanet.co.uk',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Southall',
    addressRegion: 'West London',
    addressCountry: 'GB',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
      ],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/juiceplanet.uk',
    'https://www.tiktok.com/@juiceplanetuk',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
