import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const RouteProgressBar = () => {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Start progress
    setVisible(true);
    setProgress(0);

    // Quick jump to ~70%
    const t1 = setTimeout(() => setProgress(70), 50);
    // Then to 90%
    const t2 = setTimeout(() => setProgress(90), 200);
    // Complete
    const t3 = setTimeout(() => setProgress(100), 400);
    // Hide
    const t4 = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [location.pathname]);

  if (!visible && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] pointer-events-none">
      <div
        className="h-full bg-accent shadow-[0_0_8px_hsl(var(--accent)/0.4)] transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          width: `${progress}%`,
          transitionDuration: progress === 100 ? "200ms" : "400ms",
          opacity: visible ? 1 : 0,
        }}
      />
    </div>
  );
};