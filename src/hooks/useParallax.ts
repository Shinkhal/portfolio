// hooks/useParallax.ts
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useParallax({ speed = 30 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    const tween = gsap.to(el, {
      yPercent: -speed,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [speed]);

  return ref;
}
