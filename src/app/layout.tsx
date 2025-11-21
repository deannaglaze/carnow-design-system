import type { Metadata } from 'next';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Header } from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'CarNow Design System',
  description: 'Multi-brand design system for CarNow automotive retail platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Roboto+Mono&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
