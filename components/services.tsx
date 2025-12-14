import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const services = [
  {
    icon: 'flag' as const,
    title: 'Spread Democracy',
    description: 'Spreading \'Managed Democracy\' is more than participating in our democratic elections. At times you need to load a magazine of Liberty and cast your votes in the battlefield around you. But like voting for the 2nd party, a wasted bullet wastes our precious Managed Democracy.',
    iconColor: '#60A5FA',
  },
  {
    icon: 'arrow-down' as const,
    title: 'Extract',
    description: 'Helldivers only move forward to victory, we will not retreat even against overwhelming firepower, superior numbers, or unfavourable weather conditions. As such, extraction only becomes available once victory is secured.',
    iconColor: '#A78BFA',
  },
  {
    icon: 'close' as const,
    title: 'Eliminate Threads',
    description: 'fight against three primary enemy factions: the Terminids (bugs) and the Automatons (robots). Specific mission goals involve varied tasks such as: Retrieving data or black boxes,  Activating and defending research probes, Launching ICBMs at enemy targets, Eliminating high-value targets like Brood Commanders or Factory Striders',
    iconColor: '#818CF8',
  },
  {
    icon: 'cafe' as const,
    title: 'Libertea',
    description: 'Thing that we need every morning, every afternoon, every evening, wevery night',
    iconColor: '#F472B6',
  },
];

export function Services() {
  return (
    <View style={styles.container} id="services">
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Our SuperGoals</Text>
          <View style={styles.underlineContainer}>
            <LinearGradient
              colors={['#3B82F6', '#A78BFA']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.underline}
            />
          </View>
        </View>

        <View style={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </View>
      </View>
    </View>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);

  React.useEffect(() => {
    opacity.value = withTiming(1, { duration: 800, delay: index * 100 });
    translateY.value = withTiming(0, { duration: 800, delay: index * 100 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View style={[animatedStyle, styles.cardWrapper]}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.iconContainer}>
            <Ionicons name={service.icon} size={32} color={service.iconColor} />
          </View>
          <Text style={styles.cardTitle}>{service.title}</Text>
          <Text style={styles.cardDescription}>{service.description}</Text>
        </View>
        <View style={styles.cardFooter}>
          <Text style={styles.learnMore}>Learn more</Text>
          <View style={styles.learnMoreLine} />
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 128,
    position: 'relative',
    zIndex: 1,
  },
  content: {
    maxWidth: 1280,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 24,
  },
  header: {
    marginBottom: 80,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 24,
  },
  underlineContainer: {
    width: 100,
    height: 2,
    borderRadius: 1,
    overflow: 'hidden',
  },
  underline: {
    width: '100%',
    height: '100%',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -12,
    alignItems: 'stretch',
  },
  cardWrapper: {
    flex: 1,
    minWidth: 280,
    maxWidth: '48%',
    marginHorizontal: 12,
    marginBottom: 24,
  },
  card: {
    backgroundColor: 'rgba(30, 30, 30, 0.8)',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    flex: 1,
    justifyContent: 'space-between',
    height: '100%',
  },
  cardContent: {
    flex: 1,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 16,
  },
  cardDescription: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.6)',
    lineHeight: 24,
    marginBottom: 32,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  learnMore: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.4)',
    marginRight: 8,
  },
  learnMoreLine: {
    width: 16,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
});

