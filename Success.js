import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import successImg from "./assets/success.png"


const Success = () => {
  return (
    <View style={styles.container}>
           <Image source={successImg}/>
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
    text:{
      fontSize: 25,
      color: "black",
      fontWeight: '900',
      marginTop: 20
    }
});
