import React from 'react';
import { View, Text, StyleSheet, Pressable, Linking, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const socialLinks = [
  { name: 'Instagram', icon: 'logo-instagram' as const },
  { name: 'Twitter', icon: 'logo-twitter' as const },
  { name: 'LinkedIn', icon: 'logo-linkedin' as const },
  { name: 'Dribbble', icon: 'logo-dribbble' as const },
];

const sitemapLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Learn', href: '#learn' },
  { name: 'Community', href: '#community' },
];

export function Footer() {
  return (
    <View style={styles.container} id="contact">
      <View style={styles.divider} />
      <View style={styles.content}>
        <View style={styles.grid}>
          <View style={styles.column}>
            <Text style={styles.logo}>
              superdivers<Text style={styles.logoDot}>.</Text>
            </Text>
            <Text style={styles.description}>
              Helldivers 2 Fan Page / Uni. Final Project
            </Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.columnTitle}>Sitemap</Text>
            <View style={styles.linksContainer}>
              {sitemapLinks.map((link) => (
                <Pressable key={link.name} style={styles.link}>
                  <Text style={styles.linkText}>{link.name}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View style={styles.column}>
            <Text style={styles.columnTitle}>Socials</Text>
            <View style={styles.linksContainer}>
              {socialLinks.map((link) => (
                <Pressable key={link.name} style={styles.link}>
                  <Text style={styles.linkText}>{link.name}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View style={styles.column}>
            <Text style={styles.columnTitle}>Let's Chat</Text>
            <Text style={styles.chatDescription}>Have a project in mind?</Text>
            <Pressable
              onPress={() => Linking.openURL('mailto:hello@lumina.agency')}
            >
              <Text style={styles.email}>hello@lumina.agency</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.footerBottom}>
          <Text style={styles.copyright}>
            &copy; 2025 superdivers. All rights reserved.
          </Text>
          <Text style={styles.thanks}>
            Thanks, Rio Wijaya (RIO) | 黄幸运
          </Text>
          <View style={styles.footerLinks}>
            <Pressable>
              <Text style={styles.footerLinkText}>Privacy Policy</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.footerLinkText}>Terms of Service</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 128,
    paddingBottom: 48,
    position: 'relative',
    overflow: 'hidden',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: 80,
  },
  content: {
    maxWidth: 1280,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 48,
    marginBottom: 80,
  },
  column: {
    flex: 1,
    minWidth: 200,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: -0.5,
    marginBottom: 24,
  },
  logoDot: {
    color: '#FCD34D',
  },
  description: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.5)',
    lineHeight: 22,
  },
  columnTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 24,
  },
  linksContainer: {
    gap: 16,
  },
  link: {
    paddingVertical: 4,
  },
  linkText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  chatDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: 16,
  },
  email: {
    fontSize: 20,
    fontWeight: '500',
    color: '#FCD34D',
  },
  footerBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 32,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
    flexWrap: 'wrap',
    gap: 16,
  },
  copyright: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.4)',
  },
  thanks: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.4)',
  },
  footerLinks: {
    flexDirection: 'row',
    gap: 24,
  },
  footerLinkText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.4)',
  },
});

