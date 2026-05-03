import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  const [githubHover, setGithubHover] = useState(false);

  const projects = [
    {
      icon: 'car',
      title: 'Autonomous Vehicle Vision',
      desc: 'Image processing and YOLO-based object detection pipeline for real-time autonomous driving perception.',
    },
    {
      icon: 'star',
      title: 'ML Recommendation Engine',
      desc: 'Machine learning powered recommendation app that personalizes suggestions based on user behavior.',
    },
    {
      icon: 'commenting',
      title: 'LLM Prompt Engineering',
      desc: 'Designing and optimizing prompts for large language models to maximize output quality and reliability.',
    },
    {
      icon: 'cogs',
      title: 'Automation Optimization',
      desc: 'Work efficiency optimization within automation systems, reducing overhead and improving throughput.',
    },
    {
      icon: 'database',
      title: 'RAG Pipeline',
      desc: 'Retrieval-augmented generation project combining vector search with LLM inference for knowledge-grounded responses.',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/profile.png')} style={styles.avatar} />
        <View style={styles.headerText}>
          <Text style={styles.name}>Cihan Çivit</Text>
          <Text style={styles.role}>AI Software Engineer</Text>
          <View style={styles.locationRow}>
            <Icon name="map-marker" size={13} color="#FF9B51" style={{ marginRight: 5 }} />
            <Text style={styles.location}>Gaziantep · Sinop</Text>
          </View>
        </View>
      </View>

      {/* About */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.body}>
          Born on January 2, 2001 in Gaziantep. Software engineer with a passion for
          artificial intelligence and its real-world applications. Collaborative by nature
          and committed to continuous learning.
        </Text>
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects & Expertise</Text>
        {projects.map((p) => (
          <View key={p.title} style={styles.projectCard}>
            <View style={styles.projectIcon}>
              <Icon name={p.icon} size={18} color="#FF9B51" />
            </View>
            <View style={styles.projectText}>
              <Text style={styles.projectTitle}>{p.title}</Text>
              <Text style={styles.projectDesc}>{p.desc}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Tech Stack */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tech Stack</Text>
        <View style={styles.tagRow}>
          {['Python', 'JavaScript', 'C', 'C++', 'HTML', 'CSS'].map((lang) => (
            <View key={lang} style={styles.tag}>
              <Text style={styles.tagText}>{lang}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* GitHub Button */}
      <TouchableOpacity
        style={[styles.button, githubHover && styles.buttonHover]}
        onPress={() => navigation.navigate('GitHub')}
        onPressIn={() => setGithubHover(true)}
        onPressOut={() => setGithubHover(false)}
        activeOpacity={1}
      >
        <Icon
          name="github"
          size={20}
          color="#25343F"
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonText}>View GitHub</Text>
      </TouchableOpacity>

      {/* Social Links */}
      <View style={styles.footer}>
        <SocialButton
          name="linkedin"
          url="https://www.linkedin.com/in/cihan-civit-56b182246/"
          label="LinkedIn"
        />
        <SocialButton
          name="instagram"
          url="https://www.instagram.com/cihancivit.exe/?igsh=cG1jcTZ6dHJzeGRh"
          label="Instagram"
        />
      </View>

    </ScrollView>
  );
};

const SocialButton = ({ name, url, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.socialContainer, isHovered && styles.socialContainerHover]}
      onPress={() => Linking.openURL(url)}
      onPressIn={() => setIsHovered(true)}
      onPressOut={() => setIsHovered(false)}
      activeOpacity={1}
    >
      <Icon name={name} size={32} color={isHovered ? '#FF9B51' : '#BFC9D1'} />
      <Text style={[styles.socialLabel, isHovered && styles.socialLabelHover]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 48,
    backgroundColor: '#25343F',
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 40,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 2.5,
    borderColor: '#FF9B51',
  },
  headerText: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    color: '#EAEFEF',
    letterSpacing: 0.3,
  },
  role: {
    fontSize: 15,
    color: '#FF9B51',
    marginTop: 4,
    fontWeight: '500',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  location: {
    fontSize: 13,
    color: '#BFC9D1',
  },

  // Sections
  section: {
    width: '100%',
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: '#FF9B51',
    marginBottom: 14,
  },
  body: {
    fontSize: 16,
    lineHeight: 26,
    color: '#BFC9D1',
  },

  // Project Cards
  projectCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#1A262F',
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#2E4050',
  },
  projectIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#25343F',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    borderWidth: 1,
    borderColor: '#3a4f60',
  },
  projectText: {
    flex: 1,
  },
  projectTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#EAEFEF',
    marginBottom: 4,
  },
  projectDesc: {
    fontSize: 13,
    lineHeight: 20,
    color: '#8A9BAA',
  },

  // Tags
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  tag: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    backgroundColor: '#1A262F',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2E4050',
  },
  tagText: {
    fontSize: 14,
    color: '#BFC9D1',
    fontWeight: '500',
  },

  // Divider
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#2E4050',
    marginVertical: 28,
  },

  // GitHub Button
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#FF9B51',
    borderRadius: 14,
    paddingVertical: 16,
    marginBottom: 32,
  },
  buttonHover: {
    backgroundColor: '#e0843a',
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#25343F',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },

  // Social
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  socialContainer: {
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#2E4050',
  },
  socialContainerHover: {
    backgroundColor: '#1A262F',
    borderColor: '#3a4f60',
  },
  socialLabel: {
    marginTop: 8,
    color: '#BFC9D1',
    fontSize: 13,
    fontWeight: '500',
  },
  socialLabelHover: {
    color: '#FF9B51',
    fontWeight: '600',
  },
});

export default HomeScreen;