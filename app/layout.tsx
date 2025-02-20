import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Sonner from '@/components/providers';
import Navbar from '@/components/sections/navbar';
import { Providers } from './providers';
import { auth } from '@/auth';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
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
            <Navbar session={session} />
            {children}
            <Sonner />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
