import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const data = [
  {
    id: '1',
    title: 'Harvest',
    description: 'Bold design meets timeless beauty',
    image: require('../../assets/bathroom1.jpg'), 
  },
  {
    id: '2',
    title: 'Stoneworks',
    description: 'Bold design meets timeless beauty',
    image: require('../../assets/bathroom2.jpg'),
  },
  {
    id: '3',
    title: 'Alabaster',
    description: 'Bold design meets timeless beauty',
    image: require('../../assets/bathroom3.jpg'),
  },
];

export default function ImageCarousel() {
  return (
    <FlatList
      data={data}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ImageBackground source={item.image} style={styles.cardImage} imageStyle={styles.imageStyle}>
          <View style={styles.overlay} />
          <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.primaryButton}>
                <Text style={styles.primaryButtonText}>Apply to my room</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      )}
    />
  );
}

const styles = StyleSheet.create({
  cardImage: {
    width: width,
    height: 500,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  content: {
    padding: 24,
    paddingBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '300',
    color: '#FFFFFF',
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 16,
  },
  primaryButton: {
    backgroundColor: '#F1F0ED',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 40,
    marginRight: 10,
  },
  primaryButtonText: {
    color: '#31312B',
    fontSize: 13,
    fontWeight: '400',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.32)',
    paddingHorizontal: 14,
    justifyContent: 'center',
    borderRadius: 68,
    height: 36,
  },
  secondaryButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '400',
  },
});
