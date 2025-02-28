import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const CuttingEdge: React.FC = () => {
    const { isDark } = useTheme();
  return (
     <View style={styles.container}>
        <Image source={{ uri: 'https://spincotech.com/wp-content/uploads/2023/10/banner.jpg' }} style={styles.image} />
     <Text style={styles.title}>
        <Text style={{ color: 'red' }}>C</Text>
        <Text style={{ color: isDark ? '#fff' : '#000' }}>utting</Text><Text style={{ color: 'red' }}>E</Text><Text style={{ color: isDark ? '#fff' : '#000' }}>dge</Text>
      </Text>
     <Text style={[styles.description, { color: isDark ? '#fff' : '#000' }]}>
     CuttingEdge will be an interface between Spinco and the scientific community across the country. It is one more initiative in our pursuit of ‘Bringing Technology and Enabling Science’ and will endeavor to provide an update every month on the various innovations in science and technology related to analytical and life science instrumentation. CuttingEdge will provide a platform for closer and continuous interaction with our esteemed customers.
     </Text>
</View>

  );
};

const styles = StyleSheet.create({
  container: {flex: 1,justifyContent: 'center',alignItems: 'center',padding: 10,},
  image: {width: '90%',height:100,marginBottom:16,borderRadius: 5,},
  title: {fontSize: 24,fontWeight: 'bold',marginBottom:16,fontFamily: 'Times New Roman',},
  description: {fontSize: 14,textAlign: 'center',paddingHorizontal: 16,},        
});

export default CuttingEdge;


