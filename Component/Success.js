import React, { useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Animated } from 'react-native';
import successImg from "../assets/success.png";

const Success = ({ navigation }) => {

  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        navigation.navigate('Setup');
      }, 3000);
    });
  }, 0);
  
  return (
    <View style={styles.container}>
      <Animated.Image
        source={successImg}
        style={[styles.image, { transform: [{ scale: scaleValue }] }]}
      />
      <Text style={styles.text}>You are set!</Text>
    </View>
  );
}

export default Success;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center', 
    width: "100%",
    height: "100%"
  },
  image: {
    width: 100, 
    height: 100,
  },
  text:{
    fontSize: 25,
    color: "black",
    fontWeight: '900',
    marginTop: 20
  }
});
