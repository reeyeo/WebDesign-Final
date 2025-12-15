import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export function Hero() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  // Calculate navbar height: safe area top + paddingTop (8) + animated padding (16) + container padding (12) + content height (~24)
  const navbarHeight = insets.top + 8 + 16 + 12 + 24;
  // Calculate available height for centering (viewport height minus navbar)
  const availableHeight = height - navbarHeight;

  return (
    <View style={[styles.container, { 
      paddingTop: navbarHeight,
      minHeight: availableHeight,
    }]} nativeID="home">
      <View style={styles.content}>
        {/* Status Badge */}
        <View style={styles.statusBadge}>
          <View style={styles.pulseContainer}>
            <View style={styles.pulse} />
            <View style={styles.pulseDot} />
          </View>
          <Text style={styles.statusText}>Major Order Ongoing</Text>
        </View>

        {/* Main Heading */}
        <Text style={styles.heading}>
          Welcome Diver!
        </Text>

        {/* Description */}
        <Text style={styles.description}>
        You may have won countless battles, but how many thought crimes have you reported? Remember, REAL heroes fight on every front—including the front within. 
        </Text>

        {/* CTA Buttons */}
        <View style={styles.buttonContainer}>
          <Pressable style={styles.primaryButton} onPress={() => router.push('/chat')}>
            <Text style={styles.primaryButtonText}>
              Call Reinforcement{' '}
              <Ionicons name="arrow-forward" size={16} color="#000" />
            </Text>
          </Pressable>
          <Pressable style={styles.secondaryButton} onPress={() => router.push('/learn')}>
            <Text style={styles.secondaryButtonText}>Learn</Text>
          </Pressable>
        </View>
      </View>

      {/* Scroll Indicator */}
      <View style={styles.scrollIndicator}>
        <Text style={styles.scrollText}>Scroll</Text>
        <View style={styles.scrollLine} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    position: 'relative',
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  content: {
    alignItems: 'center',
    zIndex: 10,
    maxWidth: 800,
    width: '100%',
    position: 'relative',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: 32,
  },
  pulseContainer: {
    width: 8,
    height: 8,
    position: 'relative',
  },
  pulse: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FCD34D',
    opacity: 0.75,
  },
  pulseDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FBBF24',
    position: 'absolute',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.8)',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  heading: {
    fontSize: width > 768 ? 64 : 48,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 32,
    letterSpacing: -2,
    lineHeight: width > 768 ? 80 : 60,
    // Text gradient effect using opacity
    textShadowColor: 'rgba(255, 255, 255, 0.8)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  description: {
    fontSize: width > 768 ? 18 : 16,
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
    marginBottom: 48,
    lineHeight: width > 768 ? 28 : 24,
    maxWidth: 900,
    paddingHorizontal: 16,
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 999,
  },
  primaryButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 999,
  },
  secondaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
    gap: 8,
  },
  scrollText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.4)',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  scrollLine: {
    width: 1,
    height: 48,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
});

