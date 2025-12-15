import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Linking, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useIsMobile } from '@/hooks/use-mobile';

const navLinks: Array<{ name: string; href: string; isRoute?: boolean; isExternal?: boolean }> = [
  { name: 'Home', href: '#home' },
  { name: 'Learn', href: '/learn', isRoute: true },
  { name: 'Community', href: 'https://steamcommunity.com/app/553850', isExternal: true },
  { name: 'Chat', href: '/chat', isRoute: true },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(() => Dimensions.get('window').width);
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useIsMobile();

  React.useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setWindowWidth(window.width);
    });
    return () => subscription?.remove();
  }, []);

  const animatedNavStyle = useAnimatedStyle(() => ({
    paddingVertical: 16,
  }));

  const animatedContainerStyle = useAnimatedStyle(() => ({
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  }));

  const handleHomePress = () => {
    if (pathname !== '/') {
      router.push('/');
      // Scroll to home section after navigation
      setTimeout(() => {
        if (Platform.OS === 'web' && typeof document !== 'undefined') {
          const element = document.getElementById('home');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 300);
    } else {
      // Already on homepage, just scroll to home section
      if (Platform.OS === 'web' && typeof document !== 'undefined') {
        const element = document.getElementById('home');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  // Animated Nav Link Component
  const AnimatedNavLink = ({ link }: { link: typeof navLinks[0] }) => {
    const fontWeight = useSharedValue(500);

    const animatedTextStyle = useAnimatedStyle(() => ({
      fontWeight: fontWeight.value as any,
    }));

    const handleHoverIn = () => {
      fontWeight.value = withTiming(700, { duration: 200 });
    };

    const handleHoverOut = () => {
      fontWeight.value = withTiming(500, { duration: 200 });
    };

    const handlePress = async () => {
      if (link.name === 'Home') {
        handleHomePress();
      } else if (link.isExternal) {
        try {
          const canOpen = await Linking.canOpenURL(link.href);
          if (canOpen) {
            await Linking.openURL(link.href);
          }
        } catch (error) {
          console.error('Error opening URL:', error);
        }
      } else if (link.isRoute) {
        router.push(link.href as any);
      }
    };

    return (
      <Pressable
        style={styles.navLink}
        onPress={handlePress}
        onHoverIn={handleHoverIn}
        onHoverOut={handleHoverOut}
      >
        <Animated.Text style={[styles.navLinkText, animatedTextStyle]}>
          {link.name}
        </Animated.Text>
      </Pressable>
    );
  };

  const dynamicStyles = {
    navbar: {
      paddingHorizontal: windowWidth < 768 ? 16 : 24,
    },
    navContainer: {
      paddingHorizontal: windowWidth < 768 ? 16 : 24,
      paddingVertical: windowWidth < 768 ? 10 : 12,
    },
    logo: {
      fontSize: windowWidth < 768 ? 20 : 24,
    },
    desktopMenu: {
      gap: windowWidth < 1024 ? 24 : 32,
    },
    mobileNavLinkText: {
      fontSize: windowWidth < 400 ? 24 : 32,
    },
    mobileChatButtonText: {
      fontSize: windowWidth < 400 ? 18 : 24,
    },
  };

  return (
    <Animated.View
      style={[
        styles.navbar,
        dynamicStyles.navbar,
        { paddingTop: insets.top + 8 },
        animatedNavStyle,
      ]}
    >
      <Animated.View style={[styles.navContainer, dynamicStyles.navContainer, animatedContainerStyle]}>
        <Text style={[styles.logo, dynamicStyles.logo]}>
          superdivers<Text style={styles.logoDot}>.</Text>
        </Text>

        {/* Desktop Menu */}
        {!isMobile && (
          <View style={[styles.desktopMenu, dynamicStyles.desktopMenu]}>
            {navLinks.map((link) => {
              if (link.name === 'Chat') {
                return (
                  <Pressable
                    key={link.name}
                    style={styles.chatButtonContainer}
                    onPress={() => {
                      if (link.isRoute) {
                        router.push(link.href as any);
                      }
                    }}
                  >
                    <View style={styles.chatButtonInner}>
                      <Text style={styles.chatButtonText}>Chat</Text>
                    </View>
                  </Pressable>
                );
              }
              return (
                <AnimatedNavLink key={link.name} link={link} />
              );
            })}
          </View>
        )}

        {/* Mobile Menu Toggle */}
        {isMobile && (
          <Pressable
            style={styles.mobileMenuButton}
            onPress={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Ionicons
              name={isMobileMenuOpen ? 'close' : 'menu'}
              size={24}
              color="#fff"
            />
          </Pressable>
        )}
      </Animated.View>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <View style={[styles.mobileMenuOverlay, { paddingTop: insets.top }]}>
          <ScrollView contentContainerStyle={styles.mobileMenuContent}>
            {navLinks.map((link) => {
              if (link.name === 'Chat') {
                return (
                  <Pressable
                    key={link.name}
                    style={styles.mobileChatButtonContainer}
                    onPress={() => {
                      setIsMobileMenuOpen(false);
                      if (link.isRoute) {
                        router.push(link.href as any);
                      }
                    }}
                  >
                    <View style={styles.mobileChatButtonInner}>
                      <Text style={[styles.mobileChatButtonText, dynamicStyles.mobileChatButtonText]}>Chat</Text>
                    </View>
                  </Pressable>
                );
              }
              return (
                <Pressable
                  key={link.name}
                  style={styles.mobileNavLink}
                  onPress={async () => {
                    setIsMobileMenuOpen(false);
                    if (link.name === 'Home') {
                      handleHomePress();
                    } else if (link.isExternal) {
                      try {
                        const canOpen = await Linking.canOpenURL(link.href);
                        if (canOpen) {
                          await Linking.openURL(link.href);
                        }
                      } catch (error) {
                        console.error('Error opening URL:', error);
                      }
                    } else if (link.isRoute) {
                      router.push(link.href as any);
                    }
                  }}
                >
                  <Text style={[styles.mobileNavLinkText, dynamicStyles.mobileNavLinkText]}>{link.name}</Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
  },
  navContainer: {
    maxWidth: 1280,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
  },
  logo: {
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: -0.5,
  },
  logoDot: {
    color: '#FCD34D',
  },
  desktopMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navLink: {
    paddingVertical: 8,
  },
  navLinkText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  chatButtonContainer: {
    backgroundColor: '#000',
    borderRadius: 999,
    padding: 4,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  chatButtonInner: {
    backgroundColor: '#fff',
    borderRadius: 999,
    paddingHorizontal: 24,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
  ctaButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 999,
  },
  ctaButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
  mobileMenuButton: {
    padding: 8,
  },
  mobileMenuOverlay: {
    ...(Platform.OS === 'web' ? { position: 'fixed' as any } : { position: 'absolute' }),
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    zIndex: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileMenuContent: {
    alignItems: 'center',
    gap: 32,
    paddingVertical: 40,
  },
  mobileNavLink: {
    paddingVertical: 12,
  },
  mobileNavLinkText: {
    fontWeight: '300',
    color: '#fff',
  },
  mobileChatButtonContainer: {
    backgroundColor: '#000',
    borderRadius: 999,
    padding: 4,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    marginTop: 8,
  },
  mobileChatButtonInner: {
    backgroundColor: '#fff',
    borderRadius: 999,
    paddingHorizontal: 40,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mobileChatButtonText: {
    color: '#000',
    fontWeight: '600',
  },
  mobileCtaButton: {
    marginTop: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 999,
  },
  mobileCtaButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
});

