import React from "react";
import { View, StyleSheet } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { WebView } from 'react-native-webview';

type RouteParams = {
  link?: string;
};

const SingleBook = () => {
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const link = route.params?.link ?? "This Page Currently Unavailable"; 

  return (
    <View style={styles.container}>
      <WebView 
            source={{ uri:link }} 
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

export default SingleBook;
