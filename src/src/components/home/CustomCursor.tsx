import { useEffect, useRef, useState, useCallback } from "react";

const TRAIL_COUNT = 5;

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pos = useRef({ x: 0, y: 0 });
  const trailPositions = useRef(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: 0, y: 0 }))
  );
  const target = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleId = useRef(0);
  const rafId = useRef<number>(0);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = useCallback(() => {
    pos.current.x = lerp(pos.current.x, target.current.x, 0.15);
    pos.current.y = lerp(pos.current.y, target.current.y, 0.15);

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
    }

    for (let i = 0; i < TRAIL_COUNT; i++) {
      const leader = i === 0 ? pos.current : trailPositions.current[i - 1];
      const speed = 0.12 - i * 0.015;
      trailPositions.current[i].x = lerp(trailPositions.current[i].x, leader.x, speed);
      trailPositions.current[i].y = lerp(trailPositions.current[i].y, leader.y, speed);

      const el = trailRefs.current[i];
      if (el) {
        el.style.transform = `translate3d(${trailPositions.current[i].x}px, ${trailPositions.current[i].y}px, 0)`;
      }
    }

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const heroEl = document.querySelector("[data-custom-cursor]");
    if (!heroEl) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = (heroEl as HTMLElement).getBoundingClientRect();
      target.current.x = e.clientX - rect.left;
      target.current.y = e.clientY - rect.top;
    };

    const handleEnter = () => setIsVisible(true);
    const handleLeave = () => setIsVisible(false);

    const handleOverInteractive = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest("a, button, [role='button']");
      setIsHovering(!!interactive);
    };

    const handleClick = () => {
      const id = ++rippleId.current;
      setRipples((prev) => [...prev, { id, x: pos.current.x, y: pos.current.y }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    };

    heroEl.addEventListener("mousemove", handleMouseMove as EventListener);
    heroEl.addEventListener("mouseenter", handleEnter);
    heroEl.addEventListener("mouseleave", handleLeave);
    heroEl.addEventListener("mouseover", handleOverInteractive as EventListener);
    heroEl.addEventListener("click", handleClick);

    rafId.current = requestAnimationFrame(animate);

    return () => {
      heroEl.removeEventListener("mousemove", handleMouseMove as EventListener);
      heroEl.removeEventListener("mouseenter", handleEnter);
      heroEl.removeEventListener("mouseleave", handleLeave);
      heroEl.removeEventListener("mouseover", handleOverInteractive as EventListener);
      heroEl.removeEventListener("click", handleClick);
      cancelAnimationFrame(rafId.current);
    };
  }, [animate]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="pointer-events-none absolute top-0 left-0 z-[51]"
          style={{
            transform: `translate3d(${ripple.x}px, ${ripple.y}px, 0)`,
          }}
        >
          <div className="animate-cursor-ripple rounded-full border border-white/60 mix-blend-difference" />
        </div>
      ))}

      {/* Trail dots */}
      {Array.from({ length: TRAIL_COUNT }, (_, i) => (
        <div
          key={i}
          ref={(el) => { trailRefs.current[i] = el; }}
          className="pointer-events-none absolute top-0 left-0 z-[49] mix-blend-difference"
          style={{
            opacity: isVisible ? 1 - (i + 1) * (0.8 / TRAIL_COUNT) : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <div
            className="rounded-full bg-white"
            style={{
              width: Math.max(4, 10 - i * 1.5),
              height: Math.max(4, 10 - i * 1.5),
              marginLeft: -Math.max(2, (10 - i * 1.5) / 2),
              marginTop: -Math.max(2, (10 - i * 1.5) / 2),
            }}
          />
        </div>
      ))}

      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="pointer-events-none absolute top-0 left-0 z-50 mix-blend-difference"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          className="rounded-full bg-white transition-all duration-300 ease-out"
          style={{
            width: isHovering ? 60 : 16,
            height: isHovering ? 60 : 16,
            marginLeft: isHovering ? -30 : -8,
            marginTop: isHovering ? -30 : -8,
          }}
        />
      </div>
    </>
  );
};
