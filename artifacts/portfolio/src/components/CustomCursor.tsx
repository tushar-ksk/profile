import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -200, y: -200 });
  const smooth = useRef({ x: -200, y: -200 });
  const hovering = useRef(false);
  const raf = useRef<number>(0);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      hovering.current = !!(
        t.tagName === "BUTTON" ||
        t.tagName === "A" ||
        t.closest("button") ||
        t.closest("a") ||
        t.closest(".bento-card")
      );
    };

    const tick = () => {
      const lerp = 0.16;
      smooth.current.x += (pos.current.x - smooth.current.x) * lerp;
      smooth.current.y += (pos.current.y - smooth.current.y) * lerp;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x - 4}px,${pos.current.y - 4}px,0)`;
      }
      if (ringRef.current) {
        const scale = hovering.current ? 1.6 : 1;
        ringRef.current.style.transform = `translate3d(${smooth.current.x - 18}px,${smooth.current.y - 18}px,0) scale(${scale})`;
        ringRef.current.style.opacity = hovering.current ? "0.9" : "0.45";
      }

      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999] will-change-transform"
        style={{ transform: "translate3d(-200px,-200px,0)" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-primary pointer-events-none z-[9998] will-change-transform"
        style={{
          transform: "translate3d(-200px,-200px,0)",
          transition: "opacity 0.15s ease",
        }}
      />
    </>
  );
}
