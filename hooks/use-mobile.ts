import { useState, useEffect } from 'react';
import { Dimensions, Platform } from 'react-native';

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (Platform.OS === 'web') {
      if (typeof window !== 'undefined') {
        return window.innerWidth < MOBILE_BREAKPOINT;
      }
    }
    // For native platforms, consider them mobile
    return Platform.OS !== 'web';
  });

  useEffect(() => {
    if (Platform.OS !== 'web') {
      return;
    }

    const updateIsMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      }
    };

    // Use Dimensions for React Native Web
    const subscription = Dimensions.addEventListener('change', ({ window: dims }) => {
      setIsMobile(dims.width < MOBILE_BREAKPOINT);
    });

    // Initial check
    updateIsMobile();

    return () => {
      subscription?.remove();
    };
  }, []);

  return isMobile;
}

