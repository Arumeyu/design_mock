import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function OverlayMenu() {
  return (
    <View style={styles.container}>
      {[0, -6, 6].map((offset, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            { left: 9 + offset } 
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 86,
    right: 24,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '-90deg' }],
  },
  dot: {
    position: 'absolute',
    width: 3,
    height: 3,
    backgroundColor: '#31312B',
    borderRadius: 11,
  },
});
