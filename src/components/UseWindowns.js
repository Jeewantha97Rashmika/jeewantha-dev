import { useEffect, useState } from 'react';

export default function useWindow() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const resize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Initialize dimensions on mount
    resize();

    // Add event listener for window resize
    window.addEventListener('resize', resize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return { dimension };
}
