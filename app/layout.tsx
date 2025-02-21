import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Sonner from '@/components/providers';
import Navbar from '@/components/sections/Navbar';
import { Providers } from './providers';
import { auth } from '@/auth';
import Footer from '@/components/sections/footer';

export const metadata: Metadata = {
  title: 'Better.com',
  description: 'Better.com'
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Navbar />
            {children}
            <Footer />
            <Sonner />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
