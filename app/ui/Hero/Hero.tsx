"use client";

import "@/app/ui/styles/typing.css"; // cursor pseudo-element
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState, useRef, useEffect} from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CURSOR = "typingCursor";

export default function Hero() {
  const router = useRouter();
  const [textFinished, setTextFinished] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  /* speed-boost smoke video on hover */
  const boostRate = (rate: number) => {
    if (videoRef.current) videoRef.current.playbackRate = rate;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          // Scroll to #bio when Hero is no longer visible
          const bioElement = document.getElementById("bio");
          if (bioElement) {
            bioElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      },
      { threshold: 0.99 } // Trigger when 10% of Hero is visible
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={heroRef} // Attach ref to Hero component
className="relative w-full h-[calc(100vh-4rem)] flex flex-col items-center justify-center"
>
      {/* Title */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <TypeAnimation
          className={`${CURSOR} font-mono text-5xl font-bold md:text-7xl`}
          cursor={false}
          sequence={[
            "Welcome to my website",
            () => {
              document.querySelector(`.${CURSOR}`)?.classList.remove(CURSOR);
              setTextFinished(true);
            },
          ]}
          speed={25}
          wrapper="span"
          repeat={0}
        />
      </motion.div>

      {/* Button appears after typing */}
              <motion.button
          aria-label="Enter Ben's 3D world"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          onMouseEnter={() => boostRate(2.5)}
          onMouseLeave={() => boostRate(1)}
          onClick={() => router.push("/world")}
          className="relative mt-12 overflow-hidden rounded-xl px-10 py-4 font-semibold
                     text-white backdrop-blur-md focus-visible:outline-2"
        >
          {/* smoke background video (no blur) */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            src="/smoke.mp4"
            className="absolute inset-0 -z-10 h-full w-full object-cover mix-blend-screen opacity-80"
          />
          <span className="relative z-10 text-lg md:text-xl">Enter 3D World</span>
        </motion.button>
      
      {/* Chevron prompt */}
      {textFinished && (
        <Link href="/#bio" scroll={true} className="absolute bottom-10">
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col items-center"
>
            <p className="text-md tracking-wide shiny-pink">Scroll down to discover more!</p>
            <motion.div
              animate={{
                y: [0, 10, 0], // Keyframes for up and down motion
              }}
              transition={{
                duration: 2, // Duration of one cycle
                repeat: Infinity, // Repeat forever
                ease: "easeInOut", // Smooth easing
              }}
            >
              <ChevronDoubleDownIcon className="mt-2 h-6 w-6 text-pink-300" />
            </motion.div>
          </motion.button>
        </Link>
      )}
    </div>
  );
}
