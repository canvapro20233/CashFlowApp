import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import productImg from "../assets/Illustration.png"

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={productImg}/>
        <Text style={styles.head}>Planning ahead</Text>
        <Text style={styles.text}>Setup Your budget for each category</Text>
        <Text style={styles.text1}>so you're in control</Text>
        <TouchableOpacity style={styles.signup} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signuptext}> Sign Up </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('LoginPage')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 250, 
    height: 250, 
    marginBottom: 40,
  },
    head: {
      textAlign: 'center',
      color: '#212325',
      fontSize: 30,
      fontWeight: '900',
      marginBottom: 10,
    },
    text: {
      color: '#91919F',
      fontSize: 16,
      textAlign: 'center',
      paddingHorizontal: 20,
    },
    text1: {
    color: '#91919F',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
    signup:{
      width: "80%",
      backgroundColor: "#7F3DFF",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 50,
      marginBottom: 10,
      },
      signuptext:{
        fontWeight: '700',
        color:"white"
      },
      loginBtn:{
        width: "80%",
        backgroundColor: "#EEE5FF",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
      },
      loginText:{
        color:"#7F3DFF",
    fontWeight: '700',
      }
});
