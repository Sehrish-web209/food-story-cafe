import type { Metadata } from 'next';
import './globals.css';
import TopInfoBar from '@/components/layout/TopInfoBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Food Story Café | Chakwal',
  description: 'Artisanal coffee, cold sips & hearty bites in Chakwal.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#fcf9f3] text-[#1c1c18] antialiased min-h-screen flex flex-col">
        <TopInfoBar />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}