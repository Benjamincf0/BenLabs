import './ui/globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Navbar from './ui/Navbar';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-sans' });
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400'], variable: '--font-mono' });

export const metadata = {
  title: 'Benlab',
  description: 'Welcome to Ben Lab',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetBrainsMono.variable} font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
