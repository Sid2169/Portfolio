"use client"
import { createContext, useCallback, useContext, useEffect, useMemo, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const getElementTop = (element) => {
  const scrollMargin = Number.parseFloat(getComputedStyle(element).scrollMarginTop) || 0;
  return element.getBoundingClientRect().top + window.scrollY - scrollMargin;
};

const SmoothScrollContext = createContext({
  scrollTo: () => {},
  stop: () => {},
  start: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

const getHashTarget = (hash) => {
  try {
    return document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch {
    return null;
  }
};

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);

  const scrollTo = useCallback((target, options = {}) => {
    const lenis = lenisRef.current;

    if (lenis) {
      lenis.scrollTo(target, options);
      return;
    }

    let top;

    if (typeof target === "number") {
      top = target;
    } else if (typeof target === "string") {
      const element = document.getElementById(target.replace(/^#/, ""));
      if (!element) return;
      top = getElementTop(element);
    } else if (target instanceof Element) {
      top = getElementTop(target);
    } else {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, []);

  const stop = useCallback(() => {
    lenisRef.current?.stop();
  }, []);

  const start = useCallback(() => {
    lenisRef.current?.start();
  }, []);

  const value = useMemo(() => ({ scrollTo, stop, start }), [scrollTo, stop, start]);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 1,
      smoothWheel: true,
      syncTouch: false,
      autoRaf: false,
      stopInertiaOnNavigate: true,
      respectReducedMotion: true,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const handleAnchorClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!anchor) return;

      const url = new URL(anchor.href, window.location.href);
      if (
        url.origin !== window.location.origin ||
        url.pathname !== window.location.pathname ||
        !url.hash ||
        url.hash === "#"
      ) {
        return;
      }

      const target = getHashTarget(url.hash);
      if (!target) return;

      event.preventDefault();
      scrollTo(target, { force: true });

      if (window.location.hash !== url.hash) {
        window.history.pushState(null, "", url.hash);
      }
    };

    const handlePopState = () => {
      if (window.location.hash) {
        const target = getHashTarget(window.location.hash);
        if (target) {
          scrollTo(target, { force: true });
          return;
        }
      }

      scrollTo(0, { force: true });
    };

    document.addEventListener("click", handleAnchorClick);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("popstate", handlePopState);
      gsap.ticker.remove(tick);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
      lenisRef.current = null;
      ScrollTrigger.refresh();
    };
  }, [scrollTo]);

  return (
    <SmoothScrollContext.Provider value={value}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export default SmoothScroll;
