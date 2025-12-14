import React from 'react';
import { ScrollView, StyleSheet, View, Text, Pressable, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Work } from '@/components/work';
import { Footer } from '@/components/footer';
import { AnimatedBackground } from '@/components/animated-background';

export default function HomeScreen() {
  const handleBecomeHelldiver = async () => {
    const url = 'https://store.steampowered.com/app/553850/HELLDIVERS_2/';
    try {
      const canOpen = await Linking.canOpenURL(url);
      if (canOpen) {
        await Linking.openURL(url);
      }
    } catch (error) {
      console.error('Error opening URL:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <AnimatedBackground />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Hero />
        <Services />
        <Work />
        
        {/* Call to Action Section */}
        <View style={styles.ctaSection} id="contact">
          <View style={styles.ctaContent}>
            <View style={styles.ctaTextContainer}>
              <View style={styles.ctaHeadingContainer}>
                <Text style={styles.ctaHeading}>
                  Super Earth needs you !
                </Text>
              </View>
              <Text style={styles.ctaDescription}>
                Haven't part of the super helldiver yet?
              </Text>
              <Pressable style={styles.ctaButton} onPress={handleBecomeHelldiver}>
                <Text style={styles.ctaButtonText}>Become a Helldiver</Text>
              </Pressable>
            </View>
          </View>
          <LinearGradient
            colors={['transparent', 'rgba(252, 211, 77, 0.2)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.ctaBackground}
          />
        </View>
        
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    position: 'relative',
  },
  scrollView: {
    flex: 1,
    zIndex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
    position: 'relative',
    zIndex: 1,
  },
  ctaSection: {
    paddingVertical: 128,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 600,
  },
  ctaContent: {
    maxWidth: 1280,
    width: '100%',
    paddingHorizontal: 24,
    alignItems: 'center',
    zIndex: 10,
  },
  ctaTextContainer: {
    alignItems: 'center',
    maxWidth: 800,
  },
  ctaHeadingContainer: {
    marginBottom: 32,
  },
  ctaHeading: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    letterSpacing: -1,
    lineHeight: 64,
    marginBottom: 32,
  },
  ctaHeadingGradient: {
    color: '#fff',
    opacity: 0.8,
  },
  ctaDescription: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
    marginBottom: 48,
    maxWidth: 600,
    lineHeight: 30,
  },
  ctaButton: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 999,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 40,
    elevation: 8,
  },
  ctaButtonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ctaBackground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: 500,
  },
});
