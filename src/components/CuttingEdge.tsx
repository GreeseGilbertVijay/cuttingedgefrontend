import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const CuttingEdge: React.FC = () => {
    const { isDark } = useTheme();
  return (
     <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={{ color: 'red' }}>C</Text>
        <Text style={{ color: isDark ? '#fff' : '#000' }}>utting</Text><Text style={{ color: 'red' }}>E</Text><Text style={{ color: isDark ? '#fff' : '#000' }}>dge</Text>
     </Text>
        <Image source={{ uri: 'https://spincotech.com/wp-content/uploads/2023/10/banner.jpg' }} style={styles.image} />
</View>

  );
};

const styles = StyleSheet.create({
  container: {flex: 1,justifyContent: 'center',alignItems: 'center',padding: 10,},
  image: {width: '90%',height:100,marginBottom:16,borderRadius: 5,},
  title: {fontSize: 24,fontWeight: 'bold',marginBottom:16,fontFamily: 'Times New Roman',},
});

export default CuttingEdge;


