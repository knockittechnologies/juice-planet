import './globals.css';

export const metadata = {
  title: 'Juice Planet — Fresh Juices From Another Planet',
  description:
    'Cold-pressed, organic juice and smoothie blends. Order ahead in the app, shop the menu, or find a Juice Planet near you.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
