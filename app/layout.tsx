import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/comps/navbar';
import Footer from '@/comps/Footer';

const inter = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'SourceGuide',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark:bg-[#09090B]">
      <link rel="icon" type="image/x-icon" href="favicon.svg" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://api.github.com" />
      
      <body className={inter.className}>
        <Navbar />
        {children}
        <div className=' my-14'></div>
        <Footer/>
      </body>
    </html>
  );
}
