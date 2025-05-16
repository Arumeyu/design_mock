import React from 'react';
import { View, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../components/Header';
import ImageCarousel from '../components/ImageCarousel';
import OverlayMenu from '../components/OverlayMenu';
import TopBrandsLabel from '../components/TopBrandsLabel';
import BrandCarousel from '../components/BrandCarousel';
import FloatingTabBar from '../components/FloatingTabBar';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}  
      >
        <ImageBackground
        source={require('../../assets/bg_texture.jpg')}
        resizeMode="repeat"
        style={StyleSheet.absoluteFill}
      />
        <OverlayMenu />
        <Header />
        <ImageCarousel />
        
       
        <View style={styles.dimmedSection}>
          <TopBrandsLabel />
          <BrandCarousel />
        </View>
      </ScrollView>

    
      <FloatingTabBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F6',
  },
  content: {
    paddingBottom: 120,
  },
  dimmedSection: {
    opacity: 0.6,
  },
});