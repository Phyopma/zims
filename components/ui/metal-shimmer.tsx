"use client";

import { memo, useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { animate } from "motion/react";

interface MetalShimmerProps {
  tier: "gold" | "silver" | "bronze";
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

const tierGradients = {
  gold: `radial-gradient(circle, #ffd700 10%, #ffd70000 20%),
        radial-gradient(circle at 40% 40%, #daa520 5%, #daa52000 15%),
        radial-gradient(circle at 60% 60%, #b8860b 10%, #b8860b00 20%),
        repeating-conic-gradient(
          from 236.84deg at 50% 50%,
          #ffd700 0%,
          #daa520 calc(25% / 5),
          #b8860b calc(50% / 5),
          #ffd700 calc(75% / 5),
          #daa520 calc(100% / 5)
        )`,
  silver: `radial-gradient(circle, #c0c0c0 10%, #c0c0c000 20%),
          radial-gradient(circle at 40% 40%, #a9a9a9 5%, #a9a9a900 15%),
          radial-gradient(circle at 60% 60%, #808080 10%, #80808000 20%),
          repeating-conic-gradient(
            from 236.84deg at 50% 50%,
            #c0c0c0 0%,
            #a9a9a9 calc(25% / 5),
            #808080 calc(50% / 5),
            #c0c0c0 calc(75% / 5),
            #a9a9a9 calc(100% / 5)
          )`,
  bronze: `radial-gradient(circle, #cd7f32 10%, #cd7f3200 20%),
          radial-gradient(circle at 40% 40%, #b87333 5%, #b8733300 15%),
          radial-gradient(circle at 60% 60%, #a0522d 10%, #a0522d00 20%),
          repeating-conic-gradient(
            from 236.84deg at 50% 50%,
            #cd7f32 0%,
            #b87333 calc(25% / 5),
            #a0522d calc(50% / 5),
            #cd7f32 calc(75% / 5),
            #b87333 calc(100% / 5)
          )`
};

const MetalShimmer = memo(
  ({
    tier,
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    className,
    movementDuration = 2,
    borderWidth = 1,
    disabled = false,
  }: MetalShimmerProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>(0);

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current) return;

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current;
          if (!element) return;

          const { left, top, width, height } = element.getBoundingClientRect();
          const mouseX = e?.x ?? lastPosition.current.x;
          const mouseY = e?.y ?? lastPosition.current.y;

          if (e) {
            lastPosition.current = { x: mouseX, y: mouseY };
          }

          const center = [left + width * 0.5, top + height * 0.5];
          const distanceFromCenter = Math.hypot(
            mouseX - center[0],
            mouseY - center[1],
          );
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0");
            return;
          }

          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity;

          element.style.setProperty("--active", isActive ? "1" : "0");

          if (!isActive) return;

          const currentAngle =
            parseFloat(element.style.getPropertyValue("--start")) || 0;
          let targetAngle =
            (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
              Math.PI +
            90;

          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
          const newAngle = currentAngle + angleDiff;

          animate(currentAngle, newAngle, {
            duration: movementDuration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (value) => {
              element.style.setProperty("--start", String(value));
            },
          });
        });
      },
      [inactiveZone, proximity, movementDuration],
    );

    useEffect(() => {
      if (disabled) return;

      const handleScroll = () => handleMove();
      const handlePointerMove = (e: PointerEvent) => handleMove(e);

      window.addEventListener("scroll", handleScroll, { passive: true });
      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        window.removeEventListener("scroll", handleScroll);
        document.body.removeEventListener("pointermove", handlePointerMove);
      };
    }, [handleMove, disabled]);

    return (
      <div
        ref={containerRef}
        style={
          {
            "--blur": `${blur}px`,
            "--spread": spread,
            "--start": "0",
            "--active": "0",
            "--gradient": tierGradients[tier],
            "--glowingeffect-border-width": `${borderWidth}px`,
          } as React.CSSProperties
        }
        className={cn(
          "pointer-events-none absolute overflow-visible inset-0 rounded-[inherit] opacity-100 transition-opacity",
          blur > 0 && "blur-[var(--blur)]",
          className,
          disabled && "!hidden"
        )}
      >
        <div
          className={cn(
            "rounded-[inherit]",
            'after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))] after:rounded-[inherit] after:content-[""]',
            "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
            "after:[background-attachment:fixed] after:[background:var(--gradient)]",
            "after:opacity-[var(--active)] after:transition-opacity after:duration-300",
            "after:[mask-clip:padding-box,border-box]",
            "after:[mask-composite:intersect]",
            "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]"
          )}
        />
      </div>
    );
  },
);

MetalShimmer.displayName = "MetalShimmer";

export { MetalShimmer };