import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const Nov2024 = () => {
  return (
    <View style={styles.container}>
      <WebView 
            source={{ uri: 'https://www.spincotech.com/epub/2024/november2024/index-h5.html#page=1' }} 
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

export default Nov2024;
