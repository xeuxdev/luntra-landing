import { useState, useEffect } from "react";

/**
 * Custom hook for media query matching
 * @param query - The media query string to match against
 * @returns boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    // Set initial value
    setMatches(mediaQueryList.matches);

    // Create event listener
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add listener
    mediaQueryList.addEventListener("change", listener);

    // Cleanup
    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}

// Usage example:
// const isMobile = useMediaQuery('(max-width: 768px)');
// const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
// const isDesktop = useMediaQuery('(min-width: 1025px)');
// const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
//
// function MyComponent() {
//   const isMobile = useMediaQuery('(max-width: 768px)');
//
//   return (
//     <div>
//       {isMobile ? <MobileLayout /> : <DesktopLayout />}
//     </div>
//   );
// }
