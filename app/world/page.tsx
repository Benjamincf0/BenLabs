"use client";

import dynamic from 'next/dynamic';
import Link from 'next/link';

const WorldCanvas = dynamic(() => import('../ui/WorldCanvas'), { ssr: false });

export default function WorldPage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <WorldCanvas />
      <Link
        href="/"
        className="absolute top-4 left-4 text-white bg-black/50 px-4 py-2 rounded-lg transition-transform hover:translate-y-1"
      >
        Back to Home
      </Link>
    </main>
  );
}