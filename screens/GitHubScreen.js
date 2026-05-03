import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const GitHubScreen = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.github.com/users/CivitCihan/repos')
      .then(response => {
        setRepos(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#FF9B51" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Icon name="exclamation-circle" size={32} color="#FF9B51" />
        <Text style={styles.errorText}>Something went wrong</Text>
        <Text style={styles.errorSub}>{error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="github" size={22} color="#FF9B51" style={styles.headerIcon} />
        <View>
          <Text style={styles.title}>GitHub Repos</Text>
          <Text style={styles.subtitle}>{repos.length} public repositories</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <FlatList
        data={repos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <RepoCard item={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const RepoCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <View style={styles.card}>
      {/* Repo name + language */}
      <View style={styles.cardHeader}>
        <Icon name="code-fork" size={13} color="#FF9B51" style={{ marginRight: 7, marginTop: 1 }} />
        <Text style={styles.repoName}>{item.name}</Text>
        {item.language && (
          <View style={styles.langBadge}>
            <Text style={styles.langText}>{item.language}</Text>
          </View>
        )}
      </View>

      {/* Description */}
      <Text style={styles.repoDesc} numberOfLines={2}>
        {item.description || 'No description provided.'}
      </Text>

      {/* Stats row */}
      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Icon name="star" size={12} color="#BFC9D1" />
          <Text style={styles.statText}>{item.stargazers_count}</Text>
        </View>
        <View style={styles.stat}>
          <Icon name="eye" size={12} color="#BFC9D1" />
          <Text style={styles.statText}>{item.watchers_count}</Text>
        </View>
        {item.fork && (
          <View style={styles.stat}>
            <Icon name="code-fork" size={12} color="#BFC9D1" />
            <Text style={styles.statText}>Fork</Text>
          </View>
        )}
      </View>

      {/* Button */}
      <TouchableOpacity
        style={[styles.button, isHovered && styles.buttonHover]}
        onPress={() => Linking.openURL(item.html_url)}
        onPressIn={() => setIsHovered(true)}
        onPressOut={() => setIsHovered(false)}
        activeOpacity={1}
      >
        <Icon
          name="github"
          size={15}
          color={isHovered ? '#FF9B51' : '#25343F'}
          style={{ marginRight: 8 }}
        />
        <Text style={[styles.buttonText, isHovered && styles.buttonTextHover]}>
          View on GitHub
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25343F',
    paddingHorizontal: 24,
    paddingTop: 48,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerIcon: {
    marginRight: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#EAEFEF',
    letterSpacing: 0.3,
  },
  subtitle: {
    fontSize: 13,
    color: '#BFC9D1',
    marginTop: 3,
  },

  // Divider
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#2E4050',
    marginBottom: 20,
  },

  list: {
    paddingBottom: 40,
  },

  // Cards
  card: {
    backgroundColor: '#1A262F',
    borderRadius: 14,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2E4050',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  repoName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#EAEFEF',
    flex: 1,
  },
  langBadge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#25343F',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#3a4f60',
    marginLeft: 8,
  },
  langText: {
    fontSize: 11,
    color: '#FF9B51',
    fontWeight: '600',
  },
  repoDesc: {
    fontSize: 13,
    color: '#8A9BAA',
    lineHeight: 20,
    marginBottom: 14,
  },

  // Stats
  statsRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 14,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  statText: {
    fontSize: 12,
    color: '#BFC9D1',
  },

  // Button
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF9B51',
    borderRadius: 10,
    paddingVertical: 11,
  },
  buttonHover: {
    backgroundColor: '#e0843a',
  },
  buttonText: {
    color: '#25343F',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  buttonTextHover: {
    color: '#25343F',
  },

  // States
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25343F',
    gap: 12,
  },
  errorText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#EAEFEF',
    marginTop: 4,
  },
  errorSub: {
    fontSize: 13,
    color: '#8A9BAA',
  },
});

export default GitHubScreen;