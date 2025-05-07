"use client";

import dynamic from 'next/dynamic';

const WorldCanvas = dynamic(() => import('@/app/ui/world/WorldCanvas'), { ssr: false });

export default function WorldPage() {
  return (
    <div className="relative flex-1 h-[calc(100vh -)] text-white">
      <WorldCanvas />
    </div>
  );
}