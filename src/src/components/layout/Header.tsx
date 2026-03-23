import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";
import { FileDown, Sun, Moon, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Certifications", href: "/certifications" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const [hoverBg, setHoverBg] = useState({ left: 0, width: 0, height: 0, opacity: 0, top: 0 });

  // Swipe tracking
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  // Swipe-to-close handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!touchStartRef.current) return;
      const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
      const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
      // Swipe right or down to close (min 80px, more horizontal/vertical than opposite)
      if ((dx > 80 && Math.abs(dx) > Math.abs(dy)) || (dy > 100 && Math.abs(dy) > Math.abs(dx))) {
        setIsOpen(false);
      }
      touchStartRef.current = null;
    },
    []
  );

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const updateIndicator = useCallback((el: HTMLElement | null) => {
    if (!navRef.current || !el) {
      setIndicator((s) => ({ ...s, opacity: 0 }));
      return;
    }
    const navRect = navRef.current.getBoundingClientRect();
    const linkRect = el.getBoundingClientRect();
    setIndicator({
      left: linkRect.left - navRect.left + 16,
      width: linkRect.width - 32,
      opacity: 1,
    });
  }, []);

  const updateHoverBg = useCallback((el: HTMLElement | null) => {
    if (!navRef.current || !el) {
      setHoverBg((s) => ({ ...s, opacity: 0 }));
      return;
    }
    const navRect = navRef.current.getBoundingClientRect();
    const linkRect = el.getBoundingClientRect();
    setHoverBg({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
      height: linkRect.height,
      top: linkRect.top - navRect.top,
      opacity: 1,
    });
  }, []);

  // Set indicator to active link on route change
  useEffect(() => {
    if (!navRef.current) return;
    const activeLink = navRef.current.querySelector<HTMLElement>('[data-active="true"]');
    updateIndicator(activeLink);
  }, [location.pathname, updateIndicator]);

  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    updateIndicator(e.currentTarget);
    updateHoverBg(e.currentTarget);
  };

  const handleNavLeave = () => {
    setHoverBg((s) => ({ ...s, opacity: 0 }));
    if (!navRef.current) return;
    const activeLink = navRef.current.querySelector<HTMLElement>('[data-active="true"]');
    updateIndicator(activeLink);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-border/30 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      )}
      role="banner"
    >
      <div
        className={cn(
          "container-wide flex items-center justify-between transition-all duration-500",
          scrolled ? "h-14" : "h-20"
        )}
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center group relative z-[60]"
          aria-label={`${profile.displayName} – Home`}
        >
          <span
            className={cn(
              "font-display tracking-tight transition-all duration-500 group-hover:text-accent",
              scrolled ? "text-lg" : "text-xl",
              isOpen && "text-primary-foreground"
            )}
          >
            {profile.displayName}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          ref={navRef}
          className="hidden lg:flex items-center gap-0.5 relative"
          aria-label="Main navigation"
          onMouseLeave={handleNavLeave}
        >
          {/* Hover background pill */}
          <span
            className={cn(
              "absolute rounded-full pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
              scrolled ? "bg-secondary/60" : "bg-primary-foreground/[0.07]"
            )}
            style={{
              left: hoverBg.left,
              width: hoverBg.width,
              height: hoverBg.height,
              top: hoverBg.top,
              opacity: hoverBg.opacity,
            }}
          />

          {/* Sliding underline indicator */}
          <span
            className="absolute bottom-0 h-[2px] bg-accent rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
            style={{
              left: indicator.left,
              width: indicator.width,
              opacity: indicator.opacity,
            }}
          />

          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              data-active={isActive(item.href) ? "true" : undefined}
              aria-current={isActive(item.href) ? "page" : undefined}
              onMouseEnter={handleLinkHover}
              className={cn(
                "relative px-4 py-2 text-[12px] font-medium tracking-[0.15em] uppercase transition-all duration-200",
                isActive(item.href)
                  ? "text-accent"
                  : scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-primary-foreground/50 hover:text-primary-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={cn(
              "relative p-2.5 rounded-full transition-all duration-300 active:scale-90 group",
              scrolled
                ? "text-muted-foreground hover:text-foreground hover:bg-secondary/70"
                : "text-primary-foreground/40 hover:text-primary-foreground hover:bg-primary-foreground/10"
            )}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            <span className="relative block">
              {theme === "light" ? (
                <Moon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-[-20deg]" />
              ) : (
                <Sun className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
              )}
            </span>
          </button>
          <Button
            variant="default"
            size="sm"
            className="gap-2 rounded-full h-9 px-5 text-[11px] tracking-widest uppercase bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 active:scale-95"
            asChild
          >
            <a href={profile.cvDownloadUrl} target="_blank" rel="noopener noreferrer">
              <FileDown className="h-3.5 w-3.5" aria-hidden="true" />
              CV
            </a>
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-1 relative z-[60]">
          <button
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-full transition-colors",
              isOpen
                ? "text-primary-foreground/50 hover:text-primary-foreground"
                : scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-primary-foreground/50 hover:text-primary-foreground"
            )}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
          <button
            className={cn(
              "relative p-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              isOpen
                ? "text-primary-foreground hover:bg-primary-foreground/10"
                : scrolled
                ? "text-foreground hover:bg-secondary/50"
                : "text-primary-foreground hover:bg-primary-foreground/10"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            <span className="relative block w-5 h-5">
              <span
                className={cn(
                  "absolute left-0 w-5 h-[1.5px] rounded-full transition-all duration-300",
                  isOpen ? "bg-primary-foreground" : scrolled ? "bg-foreground" : "bg-primary-foreground",
                  isOpen ? "rotate-45 top-[10px]" : "top-[6px]"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-[1.5px] rounded-full transition-all duration-300",
                  isOpen ? "bg-primary-foreground w-5" : scrolled ? "bg-foreground w-3.5" : "bg-primary-foreground w-3.5",
                  isOpen ? "-rotate-45 top-[10px]" : "top-[13px]"
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu — full overlay with swipe support */}
      <div
        id="mobile-nav"
        ref={mobileMenuRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={cn(
          "lg:hidden fixed inset-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-primary/[0.97] backdrop-blur-2xl transition-opacity duration-500",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsOpen(false)}
        />

        {/* Nav content */}
        <div className="relative h-full flex flex-col justify-center px-10 sm:px-16 py-24">
          <nav className="space-y-1" aria-label="Mobile navigation">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "group flex items-center gap-3 py-3.5 transition-all duration-500",
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                )}
                style={{ transitionDelay: isOpen ? `${80 + i * 50}ms` : "0ms" }}
              >
                <span
                  className={cn(
                    "h-[2px] transition-all duration-300",
                    isActive(item.href)
                      ? "w-6 bg-accent"
                      : "w-0 bg-primary-foreground/30 group-hover:w-4"
                  )}
                />
                <span
                  className={cn(
                    "font-display text-[1.75rem] sm:text-3xl transition-all duration-300",
                    isActive(item.href)
                      ? "text-accent"
                      : "text-primary-foreground/50 group-hover:text-primary-foreground"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div
            className={cn(
              "mt-12 flex flex-col sm:flex-row gap-3 transition-all duration-500",
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: isOpen ? "500ms" : "0ms" }}
          >
            <Button
              variant="default"
              size="lg"
              className="gap-3 rounded-none h-13 px-8 text-[11px] tracking-widest uppercase bg-accent text-accent-foreground hover:bg-accent/90 active:scale-[0.97] transition-all"
              asChild
            >
              <a href={profile.cvDownloadUrl} target="_blank" rel="noopener noreferrer">
                <FileDown className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};