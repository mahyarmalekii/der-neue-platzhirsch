import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setProgress(window.scrollY / scrollHeight);
      }
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-soot/30">
      <div
        className="h-full bg-ember transition-all duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
