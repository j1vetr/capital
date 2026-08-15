/**
 * Lightweight drop-in replacement for framer-motion.
 *
 * Supported HTML elements:
 *   motion.div / .section / .article / .aside / .header / .footer
 *   motion.main / .nav / .span / .ul / .li / .p
 *
 * Supported props:
 *   initial, animate, whileInView  — opacity / x / y / scale / scaleX / scaleY / translateY
 *   whileHover                     — same value set; implemented via mouseenter/mouseleave
 *   exit                           — accepted but NOT animated (unmount is instant).
 *                                    Callers that need enter/exit animation should use CSS
 *                                    transitions controlled by a boolean prop instead.
 *   transition                     — duration, delay, ease (string or cubic-bezier array)
 *   viewport                       — once (default true), margin
 *
 * AnimatePresence: renders children as-is; exit animations are instant.
 *
 * SSR / hydration strategy
 * ────────────────────────
 * Both the SSR render and the first client render produce the `initial` styles,
 * so React hydration never sees a mismatch. Animations begin after mount:
 *  • animate mode  → requestAnimationFrame advances to the target state
 *  • whileInView   → IntersectionObserver advances to the target state
 */

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
} from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface MotionValues {
  opacity?: number;
  y?: number;
  x?: number;
  scale?: number;
  scaleX?: number;
  scaleY?: number;
  /** Alias for y — matches framer-motion's whileHover={{ translateY: N }} usage. */
  translateY?: number;
}

export interface MotionTransition {
  duration?: number;
  delay?: number;
  /** String keyword ("ease", "linear", …) or a 4-element cubic-bezier array. */
  ease?: string | number[];
}

export interface MotionViewport {
  once?: boolean;
  margin?: string;
}

export type MotionProps<E extends HTMLElement = HTMLElement> =
  HTMLAttributes<E> & {
    initial?: MotionValues;
    animate?: MotionValues;
    whileInView?: MotionValues;
    whileHover?: MotionValues;
    /** Accepted for API compatibility; exit transition is instant. */
    exit?: MotionValues;
    transition?: MotionTransition;
    viewport?: MotionViewport;
    children?: React.ReactNode;
  };

// ─── Helpers ─────────────────────────────────────────────────────────────────

function toStyle(v: MotionValues): CSSProperties {
  const style: CSSProperties = {};
  if (v.opacity !== undefined) style.opacity = v.opacity;

  const parts: string[] = [];
  const yVal = v.translateY ?? v.y;
  if (yVal !== undefined) parts.push(`translateY(${yVal}px)`);
  if (v.x !== undefined) parts.push(`translateX(${v.x}px)`);
  if (v.scale !== undefined) parts.push(`scale(${v.scale})`);
  if (v.scaleX !== undefined) parts.push(`scaleX(${v.scaleX})`);
  if (v.scaleY !== undefined) parts.push(`scaleY(${v.scaleY})`);
  if (parts.length) style.transform = parts.join(" ");

  return style;
}

function easeToCSS(ease: string | number[] | undefined): string {
  if (!ease) return "ease";
  if (typeof ease === "string") return ease;
  if (Array.isArray(ease) && ease.length === 4) {
    return `cubic-bezier(${ease[0]}, ${ease[1]}, ${ease[2]}, ${ease[3]})`;
  }
  return "ease";
}

// ─── Element factory ──────────────────────────────────────────────────────────

function createMotionComponent<E extends HTMLElement>(tag: string) {
  const Component = forwardRef<E, MotionProps<E>>(function MotionComponent(
    {
      initial,
      animate,
      whileInView,
      whileHover: whileHoverValues,
      exit: _exit,
      transition,
      viewport,
      style,
      children,
      onMouseEnter,
      onMouseLeave,
      ...rest
    },
    outerRef
  ) {
    const innerRef = useRef<E>(null);
    const ref = (outerRef ?? innerRef) as React.RefObject<E>;

    const isViewMode = !!whileInView;
    const target = isViewMode ? whileInView! : animate;

    /**
     * Start in the initial state on both SSR and the first client render.
     * This guarantees hydration agreement — no style mismatch warning.
     * useEffect advances the state after mount.
     */
    const [triggered, setTriggered] = useState(false);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
      if (!isViewMode) {
        const id = requestAnimationFrame(() => setTriggered(true));
        return () => cancelAnimationFrame(id);
      }

      const el = ref.current;
      if (!el) return;

      if (!("IntersectionObserver" in window)) {
        setTriggered(true);
        return;
      }

      const once = viewport?.once !== false;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTriggered(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setTriggered(false);
          }
        },
        { rootMargin: viewport?.margin ?? "0px" }
      );

      observer.observe(el);
      return () => observer.disconnect();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isViewMode, viewport?.once, viewport?.margin]);

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<E>) => {
        if (whileHoverValues) setHovered(true);
        onMouseEnter?.(e);
      },
      [whileHoverValues, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<E>) => {
        if (whileHoverValues) setHovered(false);
        onMouseLeave?.(e);
      },
      [whileHoverValues, onMouseLeave]
    );

    const dur = transition?.duration ?? 0.6;
    const del = transition?.delay ?? 0;
    const easing = easeToCSS(transition?.ease);

    const baseValues: MotionValues | undefined = triggered ? target : initial;
    const computedStyle: CSSProperties = {
      ...style,
      ...(baseValues ? toStyle(baseValues) : {}),
      ...(hovered && whileHoverValues ? toStyle(whileHoverValues) : {}),
      transition: `opacity ${dur}s ${del}s ${easing}, transform ${dur}s ${del}s ${easing}`,
    };

    return React.createElement(
      tag,
      {
        ref,
        style: computedStyle,
        onMouseEnter: whileHoverValues ? handleMouseEnter : onMouseEnter,
        onMouseLeave: whileHoverValues ? handleMouseLeave : onMouseLeave,
        ...rest,
      },
      children
    );
  });

  Component.displayName = `motion.${tag}`;
  return Component;
}

// ─── AnimatePresence ──────────────────────────────────────────────────────────

/**
 * Renders children as-is. Exit animations are instant (trade-off for bundle size).
 * For enter+exit animations use a CSS transition controlled by a boolean state prop.
 */
export function AnimatePresence({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}

// ─── motion namespace ─────────────────────────────────────────────────────────

export const motion = {
  div: createMotionComponent<HTMLDivElement>("div"),
  section: createMotionComponent<HTMLElement>("section"),
  article: createMotionComponent<HTMLElement>("article"),
  aside: createMotionComponent<HTMLElement>("aside"),
  header: createMotionComponent<HTMLElement>("header"),
  footer: createMotionComponent<HTMLElement>("footer"),
  main: createMotionComponent<HTMLElement>("main"),
  nav: createMotionComponent<HTMLElement>("nav"),
  span: createMotionComponent<HTMLSpanElement>("span"),
  ul: createMotionComponent<HTMLUListElement>("ul"),
  li: createMotionComponent<HTMLLIElement>("li"),
  p: createMotionComponent<HTMLParagraphElement>("p"),
};

export default motion;
