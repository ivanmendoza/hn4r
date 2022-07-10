import { useState, useEffect } from 'react';

// Code by ramyarey (https://github.com/ramyareye)
// https://github.com/vercel/swr/blob/main/examples/infinite-scroll/hooks/useOnScreen.js
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
  }, []);

  return isIntersecting;
}
