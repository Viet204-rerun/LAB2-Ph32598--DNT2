import React, { useState, useEffect } from "react";
import { View, Animated, StyleSheet, Dimensions } from "react-native";

const L31 = () => {
  const [top] = useState(new Animated.Value(0));
  const windowHeight = Dimensions.get("window").height;

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    const randomY = Math.floor(Math.random() * windowHeight);

    Animated.timing(top, {
      toValue: randomY,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => startAnimation());
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { top }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    position: "absolute",
  },
});

export default L31;
