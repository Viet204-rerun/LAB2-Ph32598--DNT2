import React, { useState, useEffect } from "react";
import { View, Animated, StyleSheet, Dimensions, TouchableOpacity, Text } from "react-native";

const Bai31 = () => {
  const [top] = useState(new Animated.Value(0));
  const windowHeight = Dimensions.get("window").height;
  const handleMove =()=>{
  // useEffect(() => {
    startAnimation();
  // }, []);
  }
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
      <TouchableOpacity onPress={handleMove}
       style={{width:50,height:50,backgroundColor:'red',borderRadius:10,position:'absolute',top:0,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'white',fontSize:20}}>Move</Text>
      </TouchableOpacity>
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
    marginTop:60,
    backgroundColor: "red",
    position: "absolute",
  },
});

export default Bai31;
