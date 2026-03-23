import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [stage, setStage] = useState<"enter" | "exit">("enter");

  useEffect(() => {
    if (children !== displayChildren) {
      setStage("exit");
      const timeout = setTimeout(() => {
        setDisplayChildren(children);
        window.scrollTo(0, 0);
        setStage("enter");
      }, 250);
      return () => clearTimeout(timeout);
    }
  }, [children, displayChildren]);

  return (
    <div
      className={`transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        stage === "enter"
          ? "opacity-100 translate-y-0 blur-0"
          : "opacity-0 translate-y-3 blur-[2px]"
      }`}
    >
      {displayChildren}
    </div>
  );
};