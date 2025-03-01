import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Main');
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
          source={require('../../assets/splash-icon.png')}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {width: '100%',height: '100%',},
});


export default SplashScreen;