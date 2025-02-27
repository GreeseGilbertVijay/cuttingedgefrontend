import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const Oct2023 = () => {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: 'https://spincotech.com/epub/october2023/html5forwebkit.html' }} 
        style={styles.webview} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default Oct2023;
