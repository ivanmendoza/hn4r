import { useState, useEffect } from 'react';

/**
 * React hook to "spy" an HTML element and detects when appears on screen.
 * @kind hook
 * @author [ramyarey]{@link https://github.com/ramyareye} at [SWR examples]{@link https://github.com/vercel/swr/blob/main/examples/infinite-scroll/hooks/useOnScreen.js}
 * @licence mit
 * @param {any | null} - HTML Element Ref
 * @returns {object}
 */
export default function useOnScreen(ref: any | null) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      return setIntersecting(entry.isIntersecting);
    });
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line
  }, []);

  return isIntersecting;
}
