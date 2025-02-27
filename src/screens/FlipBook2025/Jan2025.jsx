import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const Jan2025 = () => {
  return (
    <View style={styles.container}>
      <WebView 
            source={{ uri: 'https://www.spincotech.com/epub/2025/january2025/index-h5.html#page=1' }} 
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

export default Jan2025;
