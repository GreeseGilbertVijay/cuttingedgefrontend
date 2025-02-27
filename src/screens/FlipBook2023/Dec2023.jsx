import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const Dec2023 = () => {
  return (
    <View style={styles.container}>
      <WebView 
            source={{ uri: 'https://spincotech.com/epub/december2023/index-h5.html#page=1' }} 
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

export default Dec2023;
