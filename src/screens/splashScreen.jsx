import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Main');
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/splash-icon.png')}
        style={styles.image}
        resizeMode="cover" // or "contain" based on your design
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1,justifyContent: 'center',alignItems: 'center',},
  image: {width: '100%',height: '100%',},
});

export default SplashScreen;
