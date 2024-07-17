import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';
//import Footer from '';

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'NotSchool',
  description: 'NotSchool is a platform for online learning for various subjects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <div className='flex-grow md:pt-20 pt-6'>
                {children}
            </div>
        </div>
      </body>
    </html>
  );
}
