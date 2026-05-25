"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const SLIDES = [
  { src: "/exercise.jpg",     alt: "Training session"   },
  { src: "/weights.jpg",      alt: "Strength training"  },
  { src: "/glute-bridge.jpg", alt: "Mobility work"      },
  { src: "/green-juice.jpg",  alt: "Wellness ritual"    },
  { src: "/breakfast.jpg",    alt: "Nutrition"          },
];

const INTERVAL_MS  = 4500;
const FADE_MS      = 1000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Images — stacked, cross-fade via opacity */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition: `opacity ${FADE_MS}ms ease-in-out`,
            zIndex: i === current ? 1 : 0,
          }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Dot indicators */}
      <div
        className="absolute bottom-5 left-0 right-0 flex justify-center gap-2"
        style={{ zIndex: 2 }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width:           i === current ? "1.5rem" : "0.4rem",
              height:          "0.4rem",
              borderRadius:    "999px",
              backgroundColor: i === current
                ? "#C9D4D8"
                : "rgba(201,212,216,0.35)",
              border:          "none",
              padding:         0,
              cursor:          "pointer",
              transition:      "width 0.4s ease, background-color 0.4s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
