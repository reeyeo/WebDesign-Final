import React from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions, Linking, Platform } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Image } from 'expo-image';

const { width } = Dimensions.get('window');

const projects = [
  {
    title: 'The HELLDIVERS™ 2 x Killzone',
    category: 'Thu, December 11',
    description: 'Helldivers™ 2 x Killzone is back and this time, it\'s back for good! It seems fitting that a year after their initial launch, we bring back this iconic content but now in a new and improved format and pricing – yes, we totally heard you all!',
    tags: ['Update', 'Warbond'],
    image: { uri: 'https://clan.akamai.steamstatic.com/images//44156989/12d8c1630f66e005e811554143d2cbb756ca56b3.jpg' },
  },
  {
    title: 'Helldivers 2 File Size Reduction Beta',
    category: 'Tue, December 2',
    description: 'We have followed through on our plans and made small reductions in the PC installation size over the last few patches while still adding new content. More...',
    tags: ['Update', 'Optimization'],
    image: { uri: 'https://clan.akamai.steamstatic.com/images//44156989/2d69a415b143a854deefe3a8c03486bdccdf9e73.png' },
  },
  {
    title: 'Python Comandos Premium',
    category: 'Tue, November 25',
    description: 'Helldivers, high-ranking officials in the Ministry of Defense have accused you of being the best. And if you\'re the best, then you\'re going to need to be outfitted with the best, which is why the Ministry has fast-tracked the deployment of the Python Commandos Premium Warbond–arriving to your Super Destroyers on December 2!',
    tags: ['Update', 'Warbond'],
    image: { uri: 'https://clan.akamai.steamstatic.com/images//44156989/e0e399bdb6a3944f013e75a2ddfb3a25f8cf26bd.jpg' },
  },
];

export function Work() {
  const handleViewAll = async () => {
    const url = 'https://store.steampowered.com/news/app/553850';
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
    <View style={styles.container} id="work">
      <View style={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Update</Text>
            <Text style={styles.subtitle}>
              Recent Events & Announcements
            </Text>
          </View>
          <Pressable style={styles.viewAllButton} onPress={handleViewAll}>
            <Text style={styles.viewAllButtonText}>View All</Text>
          </Pressable>
        </View>

        <View style={styles.projectsContainer}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </View>
      </View>
    </View>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(40);

  React.useEffect(() => {
    opacity.value = withTiming(1, { duration: 800, delay: index * 100 });
    translateY.value = withTiming(0, { duration: 800, delay: index * 100 });
  }, [index]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View style={[styles.projectWrapper, animatedStyle]}>
      <View style={styles.projectCard}>
        <View style={styles.projectGrid}>
          <View style={styles.projectInfo}>
            <View style={styles.projectInfoContent}>
              <Text style={styles.projectCategory}>{project.category}</Text>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectDescription}>
                {project.description || 'Redefining the user experience through intuitive design and seamless interactions.'}
              </Text>
              <View style={styles.projectTags}>
                {(project.tags || ['UX/UI', 'Development']).map((tag, tagIndex) => (
                  <View key={tagIndex} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View style={styles.projectImageContainer}>
            <Image
              source={project.image}
              style={styles.projectImage}
              contentFit="cover"
            />
          </View>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 128,
    position: 'relative',
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  content: {
    maxWidth: 1280,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 24,
    position: 'relative',
    zIndex: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 80,
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 24,
  },
  subtitle: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.6)',
    maxWidth: 400,
  },
  viewAllButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  viewAllButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
  projectsContainer: {
    marginBottom: -80,
  },
  projectWrapper: {
    marginBottom: 80,
  },
  projectCard: {
    backgroundColor: 'rgba(30, 30, 30, 0.8)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
  },
  projectGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  projectInfo: {
    flex: 1,
    minWidth: 300,
    padding: 48,
    justifyContent: 'center',
  },
  projectInfoContent: {
    position: 'relative',
  },
  projectCategory: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.5)',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 16,
  },
  projectTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 24,
  },
  projectDescription: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 32,
    maxWidth: 400,
    lineHeight: 24,
  },
  projectTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    marginRight: 12,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
  projectImageContainer: {
    flex: 1,
    minWidth: 300,
    position: 'relative',
    overflow: 'hidden',
    alignSelf: 'stretch',
  },
  projectImage: {
    width: '100%',
    height: '100%',
  },
});

