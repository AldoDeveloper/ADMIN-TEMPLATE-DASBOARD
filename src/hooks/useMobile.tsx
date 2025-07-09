import { useEffect, useState } from 'react';

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= breakpoint);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

    const handleChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    // Set initial value
    handleChange();

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [breakpoint]);

  return isMobile;
}

export default useIsMobile;
