import { useState, useCallback, useRef } from "react";
import profileHeadshot from "@/assets/profile-headshot.png";

export const ProfileImageTransition = ({ mounted }: { mounted: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const ny = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setTilt({ x: ny * -12, y: nx * 12 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <div
      className={`shrink-0 transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        mounted ? "opacity-100 scale-100" : "opacity-0 scale-[0.9]"
      }`}
      style={{ perspective: "800px" }}
    >
      <div
        ref={containerRef}
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: isHovered
            ? "transform 0.15s ease-out"
            : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Orbiting rings */}
        <div
          className="absolute -inset-3 rounded-2xl border border-accent/20"
          style={{ transform: "translateZ(-20px) rotate(3deg)" }}
        />
        <div
          className="absolute -inset-5 rounded-2xl border border-accent/10"
          style={{ transform: "translateZ(-40px) rotate(-2deg)" }}
        />

        {/* Main image */}
        <div className="relative w-52 h-52 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
          <img
            src={profileHeadshot}
            alt="Ernest Ajieh"
            className="w-full h-full object-cover object-top"
          />

          {/* Specular highlight that follows tilt */}
          <div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${50 + tilt.y * 3}% ${50 + tilt.x * 3}%, rgba(255,255,255,0.12) 0%, transparent 60%)`,
            }}
          />
        </div>

        {/* Floating accent shapes — parallax depth */}
        <div
          className="absolute -bottom-4 -right-4 w-12 h-12 rounded-lg bg-accent/25 -z-10 blur-md group-hover:blur-lg transition-all duration-500"
          style={{ transform: `translateZ(30px) translate(${tilt.y * 0.5}px, ${tilt.x * 0.5}px)` }}
        />
        <div
          className="absolute -top-4 -left-4 w-10 h-10 rounded-lg bg-accent/15 -z-10 blur-md group-hover:blur-lg transition-all duration-500"
          style={{ transform: `translateZ(20px) translate(${tilt.y * -0.3}px, ${tilt.x * -0.3}px)` }}
        />
        <div
          className="absolute top-1/2 -right-6 w-3 h-3 rounded-full bg-accent/40 -z-10 transition-transform duration-500"
          style={{ transform: `translateZ(40px) translate(${tilt.y * 0.8}px, ${tilt.x * 0.8}px)` }}
        />
      </div>
    </div>
  );
};
