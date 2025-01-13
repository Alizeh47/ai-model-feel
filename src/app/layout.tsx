import type { Metadata } from 'next';
import './globals.css';
import { ErrorBoundary } from '@/components/molecules/error-boundary/error-boundary';
import { ToastProvider } from '@/components/molecules/toast/toast';
import { Playfair_Display, Inter } from 'next/font/google';

// Load Google fonts
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'FEEL GOOD - Premium Winter Wear',
  description: 'Discover our collection of premium winter wear. Classy, trendy, and modern designs for the fashion-conscious.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <ErrorBoundary>
          <ToastProvider>
            {children}
          </ToastProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}