import React, { useState } from "react";
import { View, Dimensions, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");


const images = [
    { url: 'https://spincotech.com/wp-content/uploads/2025/03/Mar2025.jpg', screen: 'Mar2025' },
    { url: 'https://spincotech.com/wp-content/uploads/2025/02/Feb2025.jpg', screen: 'Feb2025' },
    { url: 'https://spincotech.com/wp-content/uploads/2025/02/Jan2025.jpg', screen: 'Jan2025' },
    { url: 'https://spincotech.com/wp-content/uploads/2025/02/Dec2024.jpg', screen: 'Dec2024' },
    { url: 'https://spincotech.com/wp-content/uploads/2025/02/Nov2024.jpg', screen: 'Nov2024' },
    { url: 'https://spincotech.com/wp-content/uploads/2025/02/Oct2024.jpg', screen: 'Oct2024' },
    { url: 'https://spincotech.com/wp-content/uploads/2025/02/Sep2024.jpg', screen: 'Sep2024' },
    { url: 'https://spincotech.com/wp-content/uploads/2025/02/Aug2024.jpg', screen: 'Aug2024' },
    { url: 'https://spincotech.com/wp-content/uploads/2025/02/Jul2024.jpg', screen: 'Jul2024' },
    { url: 'https://spincotech.com/wp-content/uploads/2025/02/Jun2024.jpg', screen: 'Jun2024' },
    { url: 'https://spincotech.com/wp-content/uploads/2025/02/May2024.jpg', screen: 'May2024' },
    { url: 'https://spincotech.com/wp-content/uploads/2025/02/Apr2024.jpg', screen: 'Apr2024' },
    { url: 'https://spincotech.com/wp-content/uploads/2025/02/Mar2024.jpg', screen: 'Mar2024' },
    { url: 'https://spincotech.com/wp-content/uploads/2025/02/Feb2024.jpg', screen: 'Feb2024' },
    { url: 'https://spincotech.com/wp-content/uploads/2025/02/Jan2024.jpg', screen: 'Jan2024' },
    { url: 'https://spincotech.com/wp-content/uploads/2025/02/Dec2023.jpg', screen: 'Dec2023' },
    { url: 'https://spincotech.com/wp-content/uploads/2025/02/Nov2023.jpg', screen: 'Nov2023' },
    { url: 'https://spincotech.com/wp-content/uploads/2025/02/Oct2023.jpg', screen: 'Oct2023' },
  ];
  
  

const BookImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();

  const handleImagePress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.bookSliderContainer}>
      <Carousel
        loop
        width={width * 0.7}
        height={350} // Match the image height
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
        onSnapToItem={(index) => setActiveIndex(index)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleImagePress(item.screen)}>
            <View style={styles.bookCardWrapper}>
              <Image source={{ uri: item.url }} style={styles.bookCardImage} resizeMode="cover" />
            </View>
          </TouchableOpacity>
        )}
      />
      {/* <View style={styles.bookPaginationWrapper}>
        {images.map((_, index) => (
          <View 
            key={index} 
            style={[
              styles.bookPaginationDot,
              activeIndex === index && styles.bookPaginationActive,
            ]} 
          />
        ))}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  bookSliderContainer: {
    justifyContent: "center",alignItems: "center",marginTop: 100,},
    bookCardWrapper: {width: 250,height: 350,justifyContent: "center",alignItems: "center",borderRadius: 10,overflow: "hidden",backgroundColor: "#f0f0f0",shadowColor: "#000",shadowOpacity: 0.2,shadowOffset: { width: 0, height: 2 },shadowRadius: 4,elevation: 5,},
    bookCardImage: {width: 250,height: 350,},bookPaginationWrapper:{flexDirection: "row",justifyContent: "center",alignItems: "center",},
    bookPaginationDot: {width: 8,height: 8,borderRadius: 4,backgroundColor: "rgba(0, 0, 0, 0.3)",},
    bookPaginationActive: {backgroundColor: "#000",width: 10,height: 10,borderRadius: 5,},
});

export default BookImageSlider;
