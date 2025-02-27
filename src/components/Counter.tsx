import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const data = [
  { label: 'Partners', end: 40 },
  { label: 'HPLCs in India', end: 30000, suffix: '+' }, // Separate counter for this
  { label: 'Spincoites', end: 1000, suffix: '+' },
  { label: 'Mass Spectrometers', end: 950, suffix: '+' },
  { label: 'Years of Partnership with Shimadzu', end: 42 },
  { label: 'Support Centres', end: 55, suffix: '+' },
];

const duration = 2000; // 2 seconds for each counter
const delay = 1000; // 1 second delay before starting

const Counter: React.FC = () => {
  const [counts, setCounts] = useState(data.map(() => 0));
  const [hplcCount, setHplcCount] = useState(0);
  const [started, setStarted] = useState(false);
   const { isDark } = useTheme();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStarted(true);

      // Other counters
      const intervals = data.map(({ end }, index) => {
        if (data[index].label === 'HPLCs in India') return null; // Skip HPLC (Separate logic)

        let start = 0;
        const step = Math.ceil(end / (duration / 16)); // Ensures it reaches end in 2s

        return setInterval(() => {
          start = Math.min(start + step, end);
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = start;
            return newCounts;
          });

          if (start >= end) clearInterval(intervals[index]!);
        }, 16);
      }).filter(Boolean) as NodeJS.Timeout[];

      // Separate logic for "HPLCs in India"
      let hplcStart = 0;
      const hplcStep = Math.ceil(30000 / (duration / 16)); // Smooth counting in 2s

      const hplcInterval = setInterval(() => {
        hplcStart = Math.min(hplcStart + hplcStep, 30000);
        setHplcCount(hplcStart);

        if (hplcStart >= 30000) clearInterval(hplcInterval);
      }, 16);

      return () => {
        intervals.forEach(clearInterval);
        clearInterval(hplcInterval);
      };
    }, delay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      {!started ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        data.map((item, index) => (
          <View key={index} style={styles.counterBox}>
            <Text style={[styles.number, { color: isDark ? '#fff' : '#000' }]}>
              {item.label === 'HPLCs in India'
                ? hplcCount.toLocaleString() // Use separate state for HPLC
                : counts[index].toLocaleString()}
              {item.suffix || ''}
            </Text>
            <Text style={[styles.label]}>{item.label}</Text>
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',flexWrap: 'wrap',justifyContent: 'center',padding: 20,},
    counterBox: {width: '30%',alignItems: 'center',marginVertical: 10,},
    number: {fontSize: 18,fontWeight: 500,},
    label: {fontSize: 14,textAlign: 'center',marginTop: 5,fontWeight: 600,color: '#f2a45a',},
    loadingText: {fontSize: 20,fontWeight: 'bold',textAlign: 'center',},
});

export default Counter;
