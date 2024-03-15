import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CashFlow</Text>
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#7F3DFF",
      justifyContent: 'center',
      alignItems: 'center', 
      width: "100%",
      height: "100%"
    },
    text:{
      fontSize: 40,
      color: "white",
      fontWeight: '900',
    }
});
