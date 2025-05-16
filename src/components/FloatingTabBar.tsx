import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function FloatingTabBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.activeButton}>
        <Ionicons name="home" size={18} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.inactiveButton}>
        <Ionicons name="star" size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    left: '50%',
    transform: [{ translateX: -66 }],
    width: 132,
    height: 52,
    backgroundColor: '#1D1C19',
    borderRadius: 60,
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.26,
    shadowRadius: 32,
    elevation: 10,
  },
  activeButton: {
    backgroundColor: '#31312B',
    borderRadius: 38,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  inactiveButton: {
    opacity: 0.4,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
