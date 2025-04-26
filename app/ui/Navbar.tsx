// app/components/Navbar.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  /* close on outside-click */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (open && !menuRef.current?.contains(e.target as Node)) setOpen(false);
    }
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [open]);

  /* blur / bg after small scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={clsx(
        'fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between px-4 md:px-6 transition-colors duration-300',
        scrolled ? 'bg-white/30 backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      {/* hamburger */}
      <button
        aria-label="Main menu"
        onClick={() => setOpen(!open)}
        className="grid h-10 w-10 place-items-center rounded-md transition hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-purple-500/20 focus-visible:outline-2"
      >
        {open ? (
          <XMarkIcon className="h-6 w-6 text-white" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-white" />
        )}
      </button>

      {/* profile */}
      <Link
        href="/login"
        aria-label="Account"
        className="grid h-10 w-10 place-items-center rounded-full border-2 border-white/60 text-white transition hover:scale-105 focus-visible:outline-2"
      >
        <UserCircleIcon className="h-7 w-7" />
      </Link>

      {/* dropdown */}
      <div
        ref={menuRef}
        className={clsx(
          'absolute left-4 top-16 w-52 origin-top-left rounded-xl bg-gradient-to-br from-pink-500/70 to-purple-500/70 p-4 shadow-xl backdrop-blur-lg transition-transform duration-150',
          open
            ? 'pointer-events-auto scale-100 opacity-100'
            : 'pointer-events-none scale-95 opacity-0'
        )}
      >
        <ul className="space-y-1 text-sm font-medium text-white">
          <li>
            <Link
              href="/account"
              className="block rounded-md px-3 py-2 transition hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              My Profile
            </Link>
          </li>
          <li>
            <Link
              href="#connect"
              className="block rounded-md px-3 py-2 transition hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              Connect
            </Link>
          </li>
          <li>
            <Link
              href="#learn"
              className="block rounded-md px-3 py-2 transition hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              Learn More
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
