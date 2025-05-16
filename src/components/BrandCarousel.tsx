import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';

const logos = [
  { id: '1', source: require('../../assets/filament.png'), width: 70, height: 15 },
  { id: '2', source: require('../../assets/asus.png'), width: 93, height: 18 },
  { id: '3', source: require('../../assets/mihoyo.png'), width: 67, height: 15 },
  { id: '4', source: require('../../assets/qnap.png'), width: 79, height: 24 },
  { id: '5', source: require('../../assets/paytm.png'), width: 70, height: 15 },
  { id: '6', source: require('../../assets/airbus.png'), width: 93, height: 18 },
];

export default function BrandCarousel() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <FlatList
          data={logos}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          renderItem={({ item }) => (
            <View style={styles.logoContainer}>
              <Image
                source={item.source}
                style={{
                  width: item.width * 1.3,
                  height: item.height * 1.3,
                  resizeMode: 'contain',
                }}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    opacity: 0.6,
  },
  container: {
    marginTop: 16,
    height: 50,
    justifyContent: 'center',
  },
  logoContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 6,
    marginRight: 14,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
});
