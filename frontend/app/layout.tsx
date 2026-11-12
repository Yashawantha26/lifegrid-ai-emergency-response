import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LIFEGRID AI',
  description: 'AI-powered emergency response automation and incident coordination platform.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
