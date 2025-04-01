import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
import Header from '../components/Header';
import CuttingEdge from '../components/CuttingEdge';
import Slider from '../components/Slider'
import { fetchParagraphData } from '../config/api';

export default function Home({ }: { navigation: NavigationProp<any> }) {
  const ref = useRef(null);
  useScrollToTop(ref);
  const { isDark, toggleTheme } = useTheme();
  const [paragraph, setParagraph] = useState('');

     useEffect(() => {
         const fetchData = async () => {
             const data = await fetchParagraphData();
             if (data?.paragraph) {
              setParagraph(data.paragraph);
             }
         };
         fetchData();
     }, []);

  const themeStyles = {
    backgroundColor: isDark ? '#1a1a1a' : '#fff',
    textColor: isDark ? '#fff' : '#000',
    headerBg: isDark ? '#2d2d2d' : '#f8f8f8',
  };

  return (
    <View style={[styles.container, { backgroundColor: themeStyles.backgroundColor }]}>
      <Header 
        title="Send Mail" 
        isDark={isDark} 
        toggleTheme={toggleTheme}
      />

      <ScrollView ref={ref} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.sliderContainer}>
          <Slider />
        </View>
        <View style={styles.sliderContainer}>
          <CuttingEdge />
        </View>

        {/* Dynamic Paragraph */}
        <View style={styles.textContainer}>
          <Text style={[styles.paragraph, { color: themeStyles.textColor }]}>{paragraph}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { alignItems: 'center' },
  sliderContainer: { width: '100%' },
  textContainer: { marginTop: 20, paddingHorizontal: 20 },
  paragraph: { fontSize: 16, textAlign: 'center' },
});
