import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
        style={styles.avatar}
      />
      <View>
        <Text style={styles.name}>Georgia</Text>
        <Text style={styles.subtitle}>Let’s start designing</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 10,
    marginRight: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: '300',
    color: '#848280',
  },
  subtitle: {
    fontSize: 16,
    color: '#1D1C19',
    fontWeight: '300',
  },
});
