import '@/app/ui/styles/globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Navbar from '@/app/ui/Navbar';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-sans' });
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400'], variable: '--font-mono' });

export const metadata = {
  title: 'BENNN',
  description: 'Welcome to my portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark h-full">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${jetBrainsMono.variable} font-sans`}>
        <div className="bg-[#0d1117] h-full flex flex-col">
          <Navbar />
          <main className="pt-16 flex-1 flex flex-col min-h-screen">{children}</main>
        </div>
      </body>
    </html>
  );
}
