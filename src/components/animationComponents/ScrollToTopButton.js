import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Track scroll position and button visibility
  useEffect(() => {
    const handleScroll = () => {
      // Get total scrollable height of the page
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      // Calculate how far down the user has scrolled (as a percentage)
      const currentProgress = (window.scrollY / totalHeight) * 100;
      
      // Set scroll progress value
      setScrollProgress(currentProgress);
      
      // Show button when user has scrolled down
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Monitor when auto-scrolling is active
  useEffect(() => {
    if (isScrolling) {
      const checkIfScrollingComplete = () => {
        if (window.scrollY === 0) {
          setIsScrolling(false);
        } else {
          requestAnimationFrame(checkIfScrollingComplete);
        }
      };
      
      requestAnimationFrame(checkIfScrollingComplete);
    }
  }, [isScrolling]);

  const scrollToTop = () => {
    setIsScrolling(true);
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Calculate the loading progress (inverse of scroll progress)
  const loadingProgress = isScrolling ? 100 - (scrollProgress || 0) : 0;

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none transition-all duration-300 z-50 flex items-center justify-center"
          aria-label="Scroll to top"
          style={{ width: '48px', height: '48px' }}
        >
          {isScrolling ? (
            <div className="relative w-6 h-6">
              {/* Background circle */}
              <div className="absolute inset-0 border-2 border-white/30 rounded-full"></div>
              {/* Progress circle */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 32 32">
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeDasharray={`${loadingProgress * 0.88}, 100`}
                  transform="rotate(-90 16 16)"
                />
              </svg>
              {/* Percentage text - optional */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold">
                  {Math.round(loadingProgress)}%
                </span>
              </div>
            </div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          )}
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;