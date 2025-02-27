import React, { useState } from "react";
import { View, Dimensions, StyleSheet, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const images = [
  'https://spincotech.com/wp-content/uploads/2025/01/jan.png',
  'https://spincotech.com/wp-content/uploads/2025/01/dec.png',
  'https://spincotech.com/wp-content/uploads/2025/01/nov.png',
  'https://spincotech.com/wp-content/uploads/2025/01/oct.png',
  'https://spincotech.com/wp-content/uploads/2024/06/june2024.png',
  'https://spincotech.com/wp-content/uploads/2024/07/july2024.jpg',
];

const data = images.map((image, index) => ({ id: index, image }));

const Cards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width * 0.8}
        height={200}
        autoPlay={true}
        autoPlayInterval={2000}
        data={data}
        scrollAnimationDuration={1000}
        mode="horizontal-stack"
        modeConfig={{
          snapDirection: "left",
          stackInterval: 20,
          showLength: 2,
          scaleInterval: 0.9,
          opacityInterval: 0.7,
        }}
        onSnapToItem={(index) => setActiveIndex(index)}
        renderItem={({ item }) => (
          <View style={styles.box}> 
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1,justifyContent: "center",alignItems: "center",},
  box: {width: "100%",height: 200,justifyContent: "center",alignItems: "center",borderRadius: 10,shadowColor: "#000",shadowOpacity: 0.2,shadowOffset: { width: 0, height: 2 },shadowRadius: 4,elevation: 5,},
  image: {width: "100%",height: "100%",borderRadius: 10,},
});

export default Cards;