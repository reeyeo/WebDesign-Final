import React from 'react';
import { ScrollView, StyleSheet, View, Text, Dimensions, Platform } from 'react-native';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { AnimatedBackground } from '@/components/animated-background';

const { width } = Dimensions.get('window');

const contentSections = [
  {
    title: 'About This Game',
    header: 'The Galaxy\'s Last Line of Offence.',
    description: 'Enlist in the Helldivers and join the fight for freedom across a hostile galaxy in a fast, frantic, and ferocious third-person shooter.',
    video: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/extras/fb8876ccfdce9b8ec3b4e594c903b1fa.webm?t=1763568660',
  },
  {
    header: 'URGENT BROADCAST – SUPER EARTH ARMED FORCES',
    description: 'Freedom. Peace. Democracy.\n\nYour Super Earth-born rights. The key pillars of our civilization.\n\nOf our very existence.\n\nBut the war rages on. And everything is once again under threat.\n\nJoin the greatest military force the galaxy has ever seen and make this a safe and free place to live.',
    video: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/extras/4fb677a524eaf9318620399defcc00b4.webm?t=1763568660',
  },
  {
    header: 'BECOME A LEGEND',
    description: 'You will be assembled into squads of up to four Helldivers and assigned strategic missions.\n\nWatch each other\'s back – friendly fire is an unfortunate certainty of war, but victory without teamwork is impossible.',
    video: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/extras/35ca28196240c0a23e7b3f1e9f21104f.webm?t=1763568660',
  },
  {
    header: 'LOADOUTS',
    description: 'Rain down freedom from above, sneak through enemy territory, or grit your teeth and charge head-first into the jaws of combat.\n\nHow you deliver liberty is your choice; you\'ll have access to a wide array of explosive firepower, life-saving armor and battle-changing stratagems… the jewel in every Helldiver\'s arsenal.',
    video: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/extras/ed035f1ca25e13a4b37838ad0a93c7ad.webm?t=1763568660',
  },
  {
    header: 'REQUISITION',
    description: 'Super Earth recognises your hard work with valuable Requisition. Use it to access different rewards that benefit you, your squad, your destroyer ship and our overall war effort.',
    video: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/extras/073978e84f89d3c2cb173bf4e92facaa.webm?t=1763568660',
  },
  {
    header: 'THREATS',
    description: 'Everything on every planet wants you dead. That\'s what we\'re dealing with.\n\nEach enemy has distinct and unpredictable characteristics, tactics, and behavior – but they all fight ferociously and without fear or morality.',
    video: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/extras/6d14a34ac01cedb5822b1786c3a00b61.webm?t=1763568660',
  },
  {
    header: 'THE GALACTIC WAR',
    description: 'Capturing enemy planets, defending against invasions, and completing missions will contribute to our overall effort.\n\nThis war will be won or lost depending on the actions of everyone involved.\n\nWe stand together, or we fall apart.',
    video: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/extras/2f228b6f119f7d9207d351d5393cabea.webm?t=1763568660',
  },
];

export default function LearnScreen() {
  return (
    <View style={styles.container}>
      <Navbar />
      <AnimatedBackground />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.section}>
            {contentSections.map((section, index) => (
              <React.Fragment key={index}>
                {section.title && (
                  <Text style={[styles.sectionTitle, index > 0 && styles.sectionTitleWithMargin]}>
                    {section.title}
                  </Text>
                )}
                {section.header && (
                  <Text style={[styles.sectionHeader, index > 0 && styles.sectionHeaderWithMargin]}>
                    {section.header}
                  </Text>
                )}
                <Text style={styles.sectionDescription}>{section.description}</Text>
                {section.video && (
                  Platform.OS === 'web' ? (
                    // @ts-ignore - video element for web
                    <video
                      src={section.video}
                      style={styles.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <View style={styles.videoPlaceholder}>
                      <Text style={styles.videoPlaceholderText}>Video: {section.video}</Text>
                    </View>
                  )
                )}
              </React.Fragment>
            ))}
          </View>
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
  content: {
    maxWidth: 1280,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingVertical: 128,
    position: 'relative',
    zIndex: 10,
  },
  section: {
    marginBottom: 80,
    backgroundColor: 'rgba(30, 30, 30, 0.8)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    padding: 48,
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
    lineHeight: 48,
  },
  sectionTitleWithMargin: {
    marginTop: 48,
  },
  sectionHeader: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 24,
    lineHeight: 40,
  },
  sectionHeaderWithMargin: {
    marginTop: 48,
  },
  sectionDescription: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 24,
    maxWidth: 800,
    marginBottom: 32,
  },
  video: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#000',
    marginBottom: 32,
    display: 'block',
    objectFit: 'contain',
  },
  videoPlaceholder: {
    width: '100%',
    height: width > 768 ? 600 : 400,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  videoPlaceholderText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 14,
  },
});

