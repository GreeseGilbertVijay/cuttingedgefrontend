import { StyleSheet, View, ScrollView } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import { useRef } from 'react';
import BookImageSlider from '../components/BookImageSlider';
import { NavigationProp } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
import Header from '../components/Header';
import Counter from '../components/Counter';
import CuttingEdge from '../components/CuttingEdge';

export default function Home({ navigation }: { navigation: NavigationProp<any> }) {
  const ref = useRef(null);
  useScrollToTop(ref);
  const { isDark, toggleTheme } = useTheme();

  // Create theme-dependent styles
  const themeStyles = {
    backgroundColor: isDark ? '#1a1a1a' : '#fff',
    textColor: isDark ? '#fff' : '#000',
    headerBg: isDark ? '#2d2d2d' : '#f8f8f8',
  };

  return (
    <View style={[styles.container, { backgroundColor: themeStyles.backgroundColor }]}>
      {/* Header */}
      <Header 
        title="Send Mail" 
        isDark={isDark} 
        toggleTheme={toggleTheme}
      />

      {/* Scrollable Content */}
      <ScrollView ref={ref} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.sliderContainer}>
          <BookImageSlider />
        </View>
        <View style={styles.sliderContainer}>
          <CuttingEdge />
        </View>
        <View style={styles.sliderContainer}>
          <Counter />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1,},
  scrollContent: {alignItems: 'center',},
  sliderContainer: {width: '100%',},
});
