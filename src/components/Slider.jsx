import React, { useState, useEffect } from "react";
import { View, Dimensions, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");


const Slider = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetch("https://spincobackend.vercel.app/slider")  // Update this to your backend URL if needed
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching slider data:", error);
        setLoading(false);
      });
  }, []);

  const handleImagePress = (link) => {
    navigation.navigate("SingleBook", { link });
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.sliderContainer}>
      <Carousel
        loop
        width={width * 0.7}
        height={350}
        autoPlay={true}
        autoPlayInterval={2000}
        data={images}
        scrollAnimationDuration={1000}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.85,
          parallaxScrollingOffset: 40,
          parallaxAdjacentItemScale: 0.75,
        }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleImagePress(item.link)}>
            <View style={styles.cardWrapper}>
              <Image source={{ uri: item.url }} style={styles.cardImage} resizeMode="cover" />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: { justifyContent: "center", alignItems: "center", marginTop: 100,},
  loaderContainer: { flex: 1,justifyContent: "center", alignItems: "center", },
  cardWrapper: {width: 250, height: 350, justifyContent: "center", alignItems: "center", borderRadius: 10, overflow: "hidden", backgroundColor: "#f0f0f0", shadowColor: "#000", shadowOpacity: 0.2, shadowOffset: { width: 0, height: 2 }, shadowRadius: 4, elevation: 5,},
  cardImage: { width: 250, height: 350,},
});

export default Slider;
