import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

export function AnimatedBackground() {
  // Animated values for gradient blobs - more blobs for better coverage
  const blob1X = useSharedValue(width * 0.2);
  const blob1Y = useSharedValue(height * 0.15);
  const blob2X = useSharedValue(width * 0.75);
  const blob2Y = useSharedValue(height * 0.25);
  const blob3X = useSharedValue(width * 0.5);
  const blob3Y = useSharedValue(height * 0.7);
  const blob4X = useSharedValue(width * 0.15);
  const blob4Y = useSharedValue(height * 0.5);
  const blob5X = useSharedValue(width * 0.85);
  const blob5Y = useSharedValue(height * 0.4);
  const blob6X = useSharedValue(width * 0.9);
  const blob6Y = useSharedValue(height * 0.65);
  const blob7X = useSharedValue(width * 0.7);
  const blob7Y = useSharedValue(height * 0.8);
  const blob8X = useSharedValue(width * 0.6);
  const blob8Y = useSharedValue(height * 0.3);
  const blob9X = useSharedValue(width * 0.95);
  const blob9Y = useSharedValue(height * 0.5);

  useEffect(() => {
    // Animate blobs with smooth, continuous movement
    blob1X.value = withRepeat(
      withSequence(
        withTiming(width * 0.7, { duration: 20000, easing: Easing.inOut(Easing.ease) }),
        withTiming(width * 0.3, { duration: 20000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );
    blob1Y.value = withRepeat(
      withSequence(
        withTiming(height * 0.6, { duration: 18000, easing: Easing.inOut(Easing.ease) }),
        withTiming(height * 0.2, { duration: 18000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );

    blob2X.value = withRepeat(
      withSequence(
        withTiming(width * 0.3, { duration: 22000, easing: Easing.inOut(Easing.ease) }),
        withTiming(width * 0.7, { duration: 22000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );
    blob2Y.value = withRepeat(
      withSequence(
        withTiming(height * 0.3, { duration: 19000, easing: Easing.inOut(Easing.ease) }),
        withTiming(height * 0.6, { duration: 19000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );

    blob3X.value = withRepeat(
      withSequence(
        withTiming(width * 0.2, { duration: 24000, easing: Easing.inOut(Easing.ease) }),
        withTiming(width * 0.8, { duration: 24000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );
    blob3Y.value = withRepeat(
      withSequence(
        withTiming(height * 0.2, { duration: 21000, easing: Easing.inOut(Easing.ease) }),
        withTiming(height * 0.8, { duration: 21000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );

    blob4X.value = withRepeat(
      withSequence(
        withTiming(width * 0.8, { duration: 26000, easing: Easing.inOut(Easing.ease) }),
        withTiming(width * 0.2, { duration: 26000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );
    blob4Y.value = withRepeat(
      withSequence(
        withTiming(height * 0.7, { duration: 23000, easing: Easing.inOut(Easing.ease) }),
        withTiming(height * 0.3, { duration: 23000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );

    blob5X.value = withRepeat(
      withSequence(
        withTiming(width * 0.4, { duration: 28000, easing: Easing.inOut(Easing.ease) }),
        withTiming(width * 0.6, { duration: 28000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );
    blob5Y.value = withRepeat(
      withSequence(
        withTiming(height * 0.2, { duration: 25000, easing: Easing.inOut(Easing.ease) }),
        withTiming(height * 0.6, { duration: 25000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );

    blob6X.value = withRepeat(
      withSequence(
        withTiming(width * 0.7, { duration: 30000, easing: Easing.inOut(Easing.ease) }),
        withTiming(width * 0.95, { duration: 30000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );
    blob6Y.value = withRepeat(
      withSequence(
        withTiming(height * 0.4, { duration: 27000, easing: Easing.inOut(Easing.ease) }),
        withTiming(height * 0.85, { duration: 27000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );

    blob7X.value = withRepeat(
      withSequence(
        withTiming(width * 0.5, { duration: 32000, easing: Easing.inOut(Easing.ease) }),
        withTiming(width * 0.85, { duration: 32000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );
    blob7Y.value = withRepeat(
      withSequence(
        withTiming(height * 0.6, { duration: 29000, easing: Easing.inOut(Easing.ease) }),
        withTiming(height * 0.9, { duration: 29000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );

    blob8X.value = withRepeat(
      withSequence(
        withTiming(width * 0.4, { duration: 34000, easing: Easing.inOut(Easing.ease) }),
        withTiming(width * 0.75, { duration: 34000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );
    blob8Y.value = withRepeat(
      withSequence(
        withTiming(height * 0.1, { duration: 31000, easing: Easing.inOut(Easing.ease) }),
        withTiming(height * 0.5, { duration: 31000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );

    blob9X.value = withRepeat(
      withSequence(
        withTiming(width * 0.8, { duration: 36000, easing: Easing.inOut(Easing.ease) }),
        withTiming(width * 0.98, { duration: 36000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );
    blob9Y.value = withRepeat(
      withSequence(
        withTiming(height * 0.3, { duration: 33000, easing: Easing.inOut(Easing.ease) }),
        withTiming(height * 0.7, { duration: 33000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );
  }, []);

  // Animated styles for blobs
  const blob1Style = useAnimatedStyle(() => ({
    transform: [
      { translateX: blob1X.value - 200 },
      { translateY: blob1Y.value - 200 },
    ],
  }));

  const blob2Style = useAnimatedStyle(() => ({
    transform: [
      { translateX: blob2X.value - 175 },
      { translateY: blob2Y.value - 175 },
    ],
  }));

  const blob3Style = useAnimatedStyle(() => ({
    transform: [
      { translateX: blob3X.value - 190 },
      { translateY: blob3Y.value - 190 },
    ],
  }));

  const blob4Style = useAnimatedStyle(() => ({
    transform: [
      { translateX: blob4X.value - 160 },
      { translateY: blob4Y.value - 160 },
    ],
  }));

  const blob5Style = useAnimatedStyle(() => ({
    transform: [
      { translateX: blob5X.value - 180 },
      { translateY: blob5Y.value - 180 },
    ],
  }));

  const blob6Style = useAnimatedStyle(() => ({
    transform: [
      { translateX: blob6X.value - 150 },
      { translateY: blob6Y.value - 150 },
    ],
  }));

  const blob7Style = useAnimatedStyle(() => ({
    transform: [
      { translateX: blob7X.value - 170 },
      { translateY: blob7Y.value - 170 },
    ],
  }));

  const blob8Style = useAnimatedStyle(() => ({
    transform: [
      { translateX: blob8X.value - 140 },
      { translateY: blob8Y.value - 140 },
    ],
  }));

  const blob9Style = useAnimatedStyle(() => ({
    transform: [
      { translateX: blob9X.value - 130 },
      { translateY: blob9Y.value - 130 },
    ],
  }));

  return (
    <View style={styles.backgroundContainer} pointerEvents="none">
      <Animated.View style={[styles.gradientBlob, styles.blob1, blob1Style]} />
      <Animated.View style={[styles.gradientBlob, styles.blob2, blob2Style]} />
      <Animated.View style={[styles.gradientBlob, styles.blob3, blob3Style]} />
      <Animated.View style={[styles.gradientBlob, styles.blob4, blob4Style]} />
      <Animated.View style={[styles.gradientBlob, styles.blob5, blob5Style]} />
      <Animated.View style={[styles.gradientBlob, styles.blob6, blob6Style]} />
      <Animated.View style={[styles.gradientBlob, styles.blob7, blob7Style]} />
      <Animated.View style={[styles.gradientBlob, styles.blob8, blob8Style]} />
      <Animated.View style={[styles.gradientBlob, styles.blob9, blob9Style]} />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height * 3, // Extend 3x viewport height to cover all sections
    overflow: 'hidden',
    zIndex: 0,
  },
  gradientBlob: {
    position: 'absolute',
    borderRadius: 999,
  },
  blob1: {
    width: 400,
    height: 400,
    backgroundColor: 'rgba(255, 220, 0, 0.4)',
    shadowColor: 'rgba(255, 220, 0, 0.6)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 120,
  },
  blob2: {
    width: 350,
    height: 350,
    backgroundColor: 'rgba(255, 200, 0, 0.3)',
    shadowColor: 'rgba(255, 200, 0, 0.5)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 100,
  },
  blob3: {
    width: 380,
    height: 380,
    backgroundColor: 'rgba(255, 180, 0, 0.35)',
    shadowColor: 'rgba(255, 180, 0, 0.55)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 110,
  },
  blob4: {
    width: 320,
    height: 320,
    backgroundColor: 'rgba(200, 150, 0, 0.25)',
    shadowColor: 'rgba(200, 150, 0, 0.4)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 90,
  },
  blob5: {
    width: 360,
    height: 360,
    backgroundColor: 'rgba(255, 220, 0, 0.3)',
    shadowColor: 'rgba(255, 220, 0, 0.5)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 105,
  },
  blob6: {
    width: 300,
    height: 300,
    backgroundColor: 'rgba(255, 210, 0, 0.28)',
    shadowColor: 'rgba(255, 210, 0, 0.48)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 95,
  },
  blob7: {
    width: 340,
    height: 340,
    backgroundColor: 'rgba(255, 190, 0, 0.32)',
    shadowColor: 'rgba(255, 190, 0, 0.52)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 100,
  },
  blob8: {
    width: 280,
    height: 280,
    backgroundColor: 'rgba(255, 230, 0, 0.26)',
    shadowColor: 'rgba(255, 230, 0, 0.46)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 85,
  },
  blob9: {
    width: 260,
    height: 260,
    backgroundColor: 'rgba(255, 200, 0, 0.24)',
    shadowColor: 'rgba(255, 200, 0, 0.44)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 80,
  },
});

