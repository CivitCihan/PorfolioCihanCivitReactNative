import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  const [githubHover, setGithubHover] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/profile.png')} style={styles.image} />
        <Text style={styles.title}>Cihan Çivit</Text>
      </View>
      <Text style={styles.description}>
        Memleketlerim Gaziantep ve Sinop. 02/Ocak/2001 Gaziantep doğumluyum.
      </Text>
      <Text style={styles.description}>
        Yazılım Mühendisiyim, Yapay Zeka ve Full-Stack ile ilgileniyorum.
      </Text>
      <Text style={styles.description}>
        Bildiğim yazılım dilleri: JavaScript, C, C++, Python, HTML ve CSS.
      </Text>
      <Text style={styles.description}>
        Aynı anda YouTube ve Instagram'da içerik üretiyorum.
      </Text>
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          githubHover && styles.buttonContainerHover,
        ]}
        onPress={() => navigation.navigate('GitHub')}
        onPressIn={() => setGithubHover(true)}
        onPressOut={() => setGithubHover(false)}
      >
        <Text style={[styles.buttonText, githubHover && styles.buttonTextHover]}>
          GitHub
        </Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <SocialButton 
          name="instagram" 
          url="https://www.instagram.com/duzenlicalisiyorum/" 
          label="Content Instagram"
        />
        <SocialButton 
          name="youtube-play" 
          url="https://www.youtube.com/channel/UCxrmapzuhYOUMDpoHqLCuVg" 
          label="YouTube"
        />
        <SocialButton 
          name="linkedin" 
          url="https://www.linkedin.com/in/cihan-civit-56b182246/" 
          label="LinkedIn"
        />
        <SocialButton 
          name="instagram" 
          url="https://www.instagram.com/cihancivit.exe/?igsh=cG1jcTZ6dHJzeGRh" 
          label="Personal Instagram"
        />
      </View>
    </ScrollView>
  );
};

const SocialButton = ({ name, url, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TouchableOpacity
      style={[
        styles.socialMediaContainer,
        isHovered && styles.socialMediaContainerHover,
      ]}
      onPress={() => Linking.openURL(url)}
      onPressIn={() => setIsHovered(true)}
      onPressOut={() => setIsHovered(false)}
    >
      <Icon
        name={name}
        size={30}
        color={isHovered ? '#FF8C42' : '#405D72'}
      />
      <Text style={[styles.socialMediaText, isHovered && styles.socialMediaTextHover]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF8F3',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
    borderColor: '#758694',
    borderWidth: 2,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#405D72',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 8,
    color: '#405D72',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
    backgroundColor: '#7A8FA3',
    borderRadius: 8,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainerHover: {
    backgroundColor: '#000000',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextHover: {
    color: '#FF8C42',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    flexWrap: 'wrap',
  },
  socialMediaContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  socialMediaContainerHover: {
    backgroundColor: '#E8E8E8',
  },
  socialMediaText: {
    marginTop: 4,
    color: '#405D72',
    fontSize: 12,
  },
  socialMediaTextHover: {
    color: '#000000',
    fontWeight: '600',
  },
});

export default HomeScreen;
