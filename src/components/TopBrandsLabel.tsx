import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TopBrandsLabel() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Featuring the Industry’s Top Brands</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    color: '#848280',
    fontWeight: '300',
    letterSpacing: 0.2,
  },
});
