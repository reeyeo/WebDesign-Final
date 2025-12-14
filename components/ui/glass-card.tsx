import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

interface GlassCardProps {
  children: ReactNode;
  style?: ViewStyle;
  hoverEffect?: boolean;
}

export function GlassCard({ children, style, hoverEffect = true }: GlassCardProps) {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  const handlePressIn = () => {
    if (hoverEffect) {
      opacity.value = withTiming(1, { duration: 500 });
      translateY.value = withTiming(-4, { duration: 300 });
    }
  };

  const handlePressOut = () => {
    if (hoverEffect) {
      opacity.value = withTiming(0, { duration: 500 });
      translateY.value = withTiming(0, { duration: 300 });
    }
  };

  return (
    <Animated.View
      style={[
        styles.glassCard,
        style,
        hoverEffect && animatedStyle,
      ]}
      onTouchStart={handlePressIn}
      onTouchEnd={handlePressOut}
    >
      <View style={styles.gradientOverlay} />
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  glassCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 24,
    padding: 32,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.36,
    shadowRadius: 32,
    elevation: 8,
    overflow: 'hidden',
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    opacity: 0,
  },
});

